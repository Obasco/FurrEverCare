// ContactUs.jsx
import React from 'react';

const ContactUs = () => (
  <div className="contact-us bg-gray-800 rounded-xl p-8 border border-green-400/20 mt-16">
    <h2 className="section-title text-2xl font-bold text-white mb-6">Contact Us</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="contact-info">
        <h3 className="text-xl font-semibold text-green-400 mb-4">Get in Touch</h3>
        <div className="space-y-4 text-gray-300">
          <div className="contact-item">
            <h4 className="font-semibold text-white mb-1">📍 Address</h4>
            <p>2 Akowonjo Rd, Shasha Rd, opposite Dopemu <br /> Under Bridge, Alimosho, Ikeja 102213, Lagos</p>
          </div>
          <div className="contact-item">
            <h4 className="font-semibold text-white mb-1">📞 Phone</h4>
            <p>+234 (814) 313-3880</p>
          </div>
          <div className="contact-item">
            <h4 className="font-semibold text-white mb-1">✉️ Email</h4>
            <p>info@furevercare.com</p>
          </div>
          <div className="contact-item">
            <h4 className="font-semibold text-white mb-1">🕒 Hours</h4>
            <p>Monday-Friday: 8AM-8PM<br />Saturday: 9AM-6PM<br />Sunday: 10AM-4PM</p>
          </div>
        </div>
      </div>
      
      <div className="quick-contact">
        <h3 className="text-xl font-semibold text-green-400 mb-4">Send a Message</h3>
        <div className="space-y-4">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:border-green-400"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:border-green-400"
          />
          <textarea
            placeholder="Your Message"
            rows="4"
            className="w-full bg-gray-700 border border-gray-600 text-white p-3 rounded-lg focus:outline-none focus:border-green-400"
          />
          <button className="send-button bg-green-400 text-gray-900 px-6 py-2 rounded-lg hover:bg-green-500 transition-colors">
            Send Message
          </button>
        </div>
      </div>
    </div>
  </div>
);

export default ContactUs;