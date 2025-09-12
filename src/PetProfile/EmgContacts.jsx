// EmergencyContacts.jsx
import React from 'react';

const EmergencyContacts = () => (
  <div className="emergency-contacts bg-gray-800 rounded-xl p-8 border border-green-400/20 mt-16">
    <h2 className="section-title text-2xl font-bold text-white mb-6">Emergency Contacts</h2>
    <div className="overflow-x-auto">
      <table className="w-full text-white">
        <thead>
          <tr className="bg-gray-700">
            <th className="px-6 py-3 text-left">Service</th>
            <th className="px-6 py-3 text-left">Phone Number</th>
            <th className="px-6 py-3 text-left">Availability</th>
          </tr>
        </thead>
        <tbody>
          {[
            { service: "24/7 Emergency Vet", phone: "1-800-555-1234", availability: "24/7" },
            { service: "Poison Control", phone: "1-800-222-1222", availability: "24/7" },
            { service: "Animal Control", phone: "1-800-555-5678", availability: "24/7" },
            { service: "Pet Ambulance", phone: "1-800-555-9012", availability: "24/7" },
            { service: "Animal Poison Hotline", phone: "1-888-426-4435", availability: "24/7" },
            { service: "Lost Pet Recovery", phone: "1-800-555-3456", availability: "8AM-8PM" },
            { service: "Behavior Hotline", phone: "1-800-555-7890", availability: "9AM-6PM" }
          ].map((contact, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-gray-750' : 'bg-gray-700'}>
              <td className="px-6 py-4">{contact.service}</td>
              <td className="px-6 py-4 text-green-400">{contact.phone}</td>
              <td className="px-6 py-4">{contact.availability}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
);

export default EmergencyContacts;