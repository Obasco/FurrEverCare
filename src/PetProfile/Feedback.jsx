// FeedbackForm.jsx
import React, { useState } from 'react';

const FeedbackForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    feedback: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Thank you for your feedback!');
    setFormData({ name: '', email: '', feedback: '' });
  };

  return (
    <div className="feedback-form bg-gray-800 rounded-xl p-8 border border-green-400/20 mt-16">
      <h2 className="section-title text-2xl font-bold text-white mb-6">Feedback</h2>
      <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div>
            <label className="block text-white mb-2">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleInputChange}
              className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:border-green-400"
              required
            />
          </div>
          <div>
            <label className="block text-white mb-2">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
              className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:border-green-400"
              required
            />
          </div>
        </div>
        <div className="mb-6">
          <label className="block text-white mb-2">Feedback</label>
          <textarea
            name="feedback"
            value={formData.feedback}
            onChange={handleInputChange}
            rows="5"
            className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:border-green-400"
            required
          />
        </div>
        <button
          type="submit"
          className="submit-button bg-green-400 text-gray-900 px-8 py-3 rounded-lg hover:bg-green-500 transition-colors"
        >
          Submit Feedback
        </button>
      </form>
    </div>
  );
};

export default FeedbackForm;