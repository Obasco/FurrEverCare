import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import paw from "../assets/paw.jpg";

const Login = () => {
  const [fullName, setFullName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const storedUser = JSON.parse(localStorage.getItem("fureverUser"));

    if (
      storedUser &&
      storedUser.fullName.toLowerCase() === fullName.toLowerCase() &&
      storedUser.password === password
    ) {
      navigate("/text");
      setFullName("");
      setPassword("");
      setError("");
    }else if (storedUser.fullName.toLowerCase() !== "admin" && storedUser.password !== "Admin123") {
      navigate("/text");
      setFullName("");
      setPassword("");
      setError("");
    }
    else {
      setError("Invalid name or password. Please try again.");
    }
  };

  return (
    <section className="relative flex items-center justify-center min-h-screen bg-gray-900">
      {/* Login Card */}
      <div className="shadow-2xl rounded-2xl p-8 w-full max-w-md relative z-10 bg-gray-800 border border-gray-700">
        
        {/* Logo */}
        <div className="flex justify-center mb-4">
          <img
            src={paw}
            alt="Paw Logo"
            width={80}
            height={80}
            className="rounded-full shadow-lg border-2 border-green-400"
          />
        </div>

        {/* Title */}
        <h1 className="text-3xl font-extrabold text-center text-green-400 mb-1">
          Welcome Back
        </h1>
        <h3 className="font-medium text-center text-gray-300 mb-6">
          Log in to continue your pet care journey 🐾
        </h3>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label
              htmlFor="fullName"
              className="block text-gray-300 font-medium"
            >
              Full Name:
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              required
              onChange={(e) => setFullName(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter your name"
            />
          </div>

          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="block text-gray-300 font-medium"
            >
              Password:
            </label>
            <input
              id="password"
              type="password"
              value={password}
              required
              onChange={(e) => setPassword(e.target.value)}
              className="w-full mt-1 px-4 py-2 bg-gray-900 border border-gray-600 rounded-xl text-white focus:ring-2 focus:ring-green-400 focus:outline-none"
              placeholder="Enter your password"
            />
          </div>

          {/* Inline error */}
          {error && (
            <p className="text-red-400 text-center text-sm">{error}</p>
          )}

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-400 text-gray-900 font-semibold py-2 px-4 rounded-xl shadow-md hover:bg-green-500 transition duration-300"
          >
            Log In
          </button>

          <p className="text-center text-gray-400 mt-4">
            Don’t have an account?{" "}
            <span
              onClick={() => navigate("/sign")}
              className="text-green-400 font-semibold hover:underline cursor-pointer"
            >
              Sign Up
            </span>
          </p>
        </form>
      </div>
    </section>
  );
};

export default Login;
