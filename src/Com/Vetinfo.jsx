import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Upload, ArrowRight } from "lucide-react";

const VeterinarianForm = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    specialization: "",
    phone: "",
    email: "",
    address: "",
    image: null,
    imagePreview: ""
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        setFormData(prev => ({
          ...prev,
          image: file,
          imagePreview: reader.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Store the data (in a real app, you would send this to a backend)
    localStorage.setItem('veterinarianData', JSON.stringify(formData));
    navigate('/vet');
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white py-12 px-4">
      <div className="max-w-2xl mx-auto bg-gray-800 rounded-xl shadow-2xl p-8">
        <h1 className="text-3xl font-bold text-green-400 mb-2 text-center">
          Veterinarian Information
        </h1>
        <p className="text-gray-400 text-center mb-8">
          Please provide your professional details
        </p>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Image Upload */}
          <div className="flex flex-col items-center">
            <div className="relative w-32 h-32 rounded-full overflow-hidden border-2 border-green-400 border-dashed mb-4">
              {formData.imagePreview ? (
                <img 
                  src={formData.imagePreview} 
                  alt="Preview" 
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-gray-700 flex items-center justify-center">
                  <Upload className="text-gray-400" size={32} />
                </div>
              )}
            </div>
            <label className="cursor-pointer bg-green-400 text-gray-900 px-4 py-2 rounded-lg font-semibold hover:bg-green-500 transition">
              Upload Photo
              <input
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
                className="hidden"
              />
            </label>
          </div>

          {/* Name */}
          <div>
            <label className="block text-gray-300 mb-2">Full Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Dr. Sarah Johnson"
            />
          </div>

          {/* Specialization */}
          <div>
            <label className="block text-gray-300 mb-2">Specialization</label>
            <input
              type="text"
              name="specialization"
              value={formData.specialization}
              onChange={handleInputChange}
              required
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="Veterinary Surgery & Internal Medicine"
            />
          </div>

          {/* Contact Information */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="block text-gray-300 mb-2">Phone Number</label>
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="+1 (555) 123-4567"
              />
            </div>
            <div>
              <label className="block text-gray-300 mb-2">Email Address</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
                placeholder="dr.sarah@furevercare.com"
              />
            </div>
          </div>

          {/* Address */}
          <div>
            <label className="block text-gray-300 mb-2">Clinic Address</label>
            <textarea
              name="address"
              value={formData.address}
              onChange={handleInputChange}
              required
              rows={3}
              className="w-full bg-gray-700 border border-gray-600 rounded-lg px-4 py-3 text-white focus:outline-none focus:ring-2 focus:ring-green-400"
              placeholder="123 Pet Care Blvd, Anytown, ST 12345"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-green-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-green-500 transition flex items-center justify-center gap-2"
          >
            Continue to Profile
            <ArrowRight size={20} />
          </button>
        </form>
      </div>
    </div>
  );
};

export default VeterinarianForm;