import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import paw from "../assets/paw.jpg";

const Signup = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [password, setPassword] = useState("");
  const [category, setCategory] = useState("");
  const [profile, setProfile] = useState(null);
  const [success, setSuccess] = useState("");
  const navigate = useNavigate();

  const validateEmail = (value) => {
    const regex = /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i;
    setEmailError(
      regex.test(value)
        ? ""
        : "⚠️ Please enter a valid email address (e.g. name@example.com)"
    );
  };

  const validatePhone = (value) => {
    const regex = /^[0-9]{10,11}$/;
    setPhoneError(regex.test(value) ? "" : "⚠️ Phone number must be 10–11 digits");
  };

  const passwordValid =
    password.length >= 6 && /[A-Z]/.test(password) && /[0-9]/.test(password);

  const isFormValid =
    fullName &&
    email &&
    !emailError &&
    phone &&
    !phoneError &&
    passwordValid &&
    category &&
    profile;

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isFormValid) {
      setSuccess("⚠️ Please complete all requirements before submitting.");
      return;
    }

    const user = { fullName, email, phone, password, category, profile };
    localStorage.setItem("fureverUser", JSON.stringify(user));

    setSuccess("Signup Successful! 🎉 You can now log in.");
    setFullName("");
    setEmail("");
    setPhone("");
    setPassword("");
    setCategory("");
    setProfile(null);

    setTimeout(() => navigate("/login"), 1200);
  };

  const handleProfileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setProfile(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-900">
      <div className="shadow-2xl rounded-2xl p-8 w-full max-w-md relative z-10 bg-gray-800 border border-gray-700">
        {/* Logo + Profile */}
        <div className="flex justify-center items-center gap-4 mb-4">
          <img
            src={paw}
            alt="Paw Logo"
            width={80}
            height={80}
            className="rounded-full shadow-lg border-2 border-green-400"
          />
          {profile && (
            <img
              src={profile}
              alt="Profile Preview"
              className="w-20 h-20 rounded-full border-2 border-green-400 shadow-md object-cover"
            />
          )}
        </div>

        <h1 className="text-3xl font-extrabold text-center text-green-400 mb-1">
          Create Account
        </h1>
        <h3 className="font-medium text-center text-gray-300 mb-6">
          Start your pet care journey with us 🐶🐱
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="fullName" className="block text-gray-300 font-medium">
              Full Name:
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter your full name"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-gray-300 font-medium">
              Email:
            </label>
            <input
              id="email"
              type="email"
              value={email}
              required
              onChange={(e) => {
                setEmail(e.target.value);
                validateEmail(e.target.value);
              }}
              className={`w-full mt-1 px-4 py-2 bg-gray-900 border rounded-xl text-white focus:ring-2 focus:outline-none ${
                emailError
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-600 focus:ring-green-400"
              }`}
              placeholder="Enter your email"
            />
            {emailError && (
              <p className="text-red-400 text-sm mt-1">{emailError}</p>
            )}
          </div>

          {/* Phone */}
          <div>
            <label htmlFor="phone" className="block text-gray-300 font-medium">
              Phone Number:
            </label>
            <input
              id="phone"
              type="tel"
              value={phone}
              required
              onChange={(e) => {
                setPhone(e.target.value);
                validatePhone(e.target.value);
              }}
              className={`w-full mt-1 px-4 py-2 bg-gray-900 border rounded-xl text-white focus:ring-2 focus:outline-none ${
                phoneError
                  ? "border-red-500 focus:ring-red-400"
                  : "border-gray-600 focus:ring-green-400"
              }`}
              placeholder="Enter your phone number"
            />
            {phoneError && (
              <p className="text-red-400 text-sm mt-1">{phoneError}</p>
            )}
          </div>

          {/* Password with requirements */}
          <div className="flex flex-col">
            <label htmlFor="password" className="block text-gray-300 font-medium">
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              required
              minLength={6}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Create a password"
            />

            <ul className="mt-2 space-y-1 text-xs sm:text-sm text-gray-400">
              <li
                className={
                  password.length >= 6 ? "text-green-400" : "text-red-400"
                }
              >
                • At least 6 characters
              </li>
              <li
                className={/[A-Z]/.test(password) ? "text-green-400" : "text-red-400"}
              >
                • One uppercase letter
              </li>
              <li
                className={/[0-9]/.test(password) ? "text-green-400" : "text-red-400"}
              >
                • One number
              </li>
            </ul>
          </div>

       
          <div>
            <label className="block text-gray-300 font-medium">
              Profile Picture:
            </label>
            <input
              type="file"
              accept="image/*"
              id="profileUpload"
              onChange={handleProfileChange}
              className="hidden"
            />
            <button
              type="button"
              onClick={() => document.getElementById("profileUpload").click()}
              className="mt-2 px-6 py-2 bg-green-400 text-gray-900 font-semibold rounded-lg hover:bg-green-500 transition"
            >
              {profile ? "Change Profile Picture" : "Upload Profile Picture"}
            </button>
          </div>

          <div>
            <p className="block text-gray-300 font-medium mb-2">Category:</p>
            <div className="flex flex-col gap-3">
              {["Vet", "Animal Shelter", "Pet Owner"].map((option) => (
                <label
                  key={option}
                  className={`flex items-center gap-3 px-4 py-2 border rounded-xl cursor-pointer transition ${
                    category === option
                      ? "border-green-400 bg-gray-700"
                      : "border-gray-600 hover:border-green-300"
                  }`}
                >
                  <input
                    type="radio"
                    name="category"
                    value={option}
                    checked={category === option}
                    onChange={(e) => setCategory(e.target.value)}
                    className="hidden"
                  />
                  <span
                    className={`w-4 h-4 flex items-center justify-center rounded-full border-2 transition ${
                      category === option
                        ? "border-green-400 bg-green-400"
                        : "border-gray-500"
                    }`}
                  >
                    {category === option && (
                      <span className="w-2 h-2 bg-gray-900 rounded-full"></span>
                    )}
                  </span>
                  <span className="text-gray-300 font-medium">{option}</span>
                </label>
              ))}
            </div>
          </div>

        
          {success && (
            <p
              className={`text-center text-sm font-medium ${
                success.includes("⚠️") ? "text-red-400" : "text-green-400"
              }`}
            >
              {success}
            </p>
          )}

         
          <button
            type="submit"
            disabled={!isFormValid}
            className={`w-full font-semibold py-2 px-4 rounded-xl shadow-md transition duration-300 ${
              isFormValid
                ? "bg-green-400 text-gray-900 hover:bg-green-500"
                : "bg-gray-600 text-gray-400 cursor-not-allowed"
            }`}
          >
            Sign Up
          </button>

          <p className="text-center text-gray-400 mt-4">
            Already have an account?{" "}
            <span
              onClick={() => navigate("/login")}
              className="text-green-400 font-semibold hover:underline cursor-pointer"
            >
              Log In
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Signup;
