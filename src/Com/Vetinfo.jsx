import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, ArrowRight,ArrowLeftCircleIcon } from "lucide-react";


const VeterinarianForm = () => {
 const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    specialization: "",
    phone: "",
    email: "",
    address: "",
    image: null,
    preview: ""
  });

  // just a quick input handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  // img upload (simple FileReader)
  const handleImage = (e) => {
    const file = e.target.files[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onloadend = () => {
      setData(prev => ({
        ...prev,
        image: file,
        preview: reader.result
      }));
    };
    reader.readAsDataURL(file);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    localStorage.setItem("vetInfo", JSON.stringify(data));
    navigate("/vet");
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-10 px-4">
      {/* back button */}
      <div className="mb-4">
        <button
          onClick={() => navigate("/home")}
          className="flex items-center text-green-400 hover:text-green-300 gap-1"
        >
          <ArrowLeftCircleIcon size={20} />
          <span>Back</span>
        </button>
      </div>

      <div className="max-w-xl mx-auto bg-gray-800 rounded-lg shadow-xl p-6">
        <h1 className="text-2xl font-bold text-green-400 mb-2 text-center">
          Vet Info Form
        </h1>
        <p className="text-gray-400 text-sm text-center mb-6">
          Fill in your details below
        </p>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* upload */}
          <div className="flex flex-col items-center">
            <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-dashed border-green-500 mb-3">
              {data.preview ? (
                <img
                  src={data.preview}
                  alt="preview"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <Upload size={28} className="text-gray-400" />
                </div>
              )}
            </div>
            <label className="cursor-pointer bg-green-400 text-black px-3 py-1.5 rounded-md text-sm font-medium hover:bg-green-500">
              Upload
              <input
                type="file"
                accept="image/*"
                onChange={handleImage}
                className="hidden"
              />
            </label>
          </div>

          {/* name */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Full Name</label>
            <input
              type="text"
              name="name"
              value={data.name}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Dr. Michael Adams"
            />
          </div>

          {/* specialization */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Specialization</label>
            <input
              type="text"
              name="specialization"
              value={data.specialization}
              onChange={handleChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Small animals / Surgery"
            />
          </div>

          {/* phone + email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <div>
              <label className="block text-gray-300 mb-1 text-sm">Phone</label>
              <input
                type="tel"
                name="phone"
                value={data.phone}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="0813-456-7890"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-1 text-sm">Email</label>
              <input
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="mike.vet@lagoonclinic.com"
              />
            </div>
          </div>

          {/* address */}
          <div>
            <label className="block text-gray-300 mb-1 text-sm">Clinic Address</label>
            <textarea
              name="address"
              value={data.address}
              onChange={handleChange}
              rows={3}
              className="w-full bg-gray-700 border border-gray-600 rounded-md px-3 py-2 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Lagoon Vet Clinic, Victoria Island, Lagos"
            />
          </div>

          {/* submit */}
          <button
            type="submit"
            className="w-full bg-green-400 text-gray-900 py-2.5 rounded-md font-semibold hover:bg-green-500 flex items-center justify-center gap-2"
          >
            Continue <ArrowRight size={18} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default VeterinarianForm;