// TeamInfo.jsx
import React from 'react';

const TeamInfo = () => (
  <div className="team-info bg-gray-800 rounded-xl p-8 border border-green-400/20 mt-16">
    <h2 className="section-title text-2xl font-bold text-white mb-8">Our Team</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {[
        { name: "Dr. Obayemi Olumide", role: "Head Veterinarian", email: "olumide@furevercare.com", phone: "+234 (814) 313-3880" },
        { name: "Dr. Babasola Kunmisola", role: "Surgery Specialist", email: "michael@furevercare.com", phone: "+1 (555) 234-5678" },
        { name: "Dr. Ugochukwu Benjamin", role: "Dental Specialist", email: "Benjamin@furevercare.com", phone: "+1 (555) 345-6789" },
        { name: "Shedrack Franklin", role: "Head Groomer", email: "Shedrack@furevercare.com", phone: "+1 (555) 456-7890" },
        { name: "James Wilson", role: "Pet Nutritionist", email: "james@furevercare.com", phone: "+1 (555) 567-8901" },
        { name: "Aderisonal Raqak", role: "Customer Care Manager", email: "Batman@furevercare.com", phone: "+1 (555) 678-9012" }
      ].map((member, index) => (
        <div key={index} className="team-member bg-gray-700 p-6 rounded-lg text-center">
          <div className="member-avatar w-16 h-16 bg-green-400 rounded-full mx-auto mb-4 flex items-center justify-center">
            <span className="text-gray-900 font-bold text-lg">{member.name.split(' ').map(n => n[0]).join('')}</span>
          </div>
          <h3 className="member-name text-white font-semibold mb-2">{member.name}</h3>
          <p className="member-role text-green-400 mb-3">{member.role}</p>
          <p className="member-email text-gray-300 text-sm mb-1">{member.email}</p>
          <p className="member-phone text-gray-300 text-sm">{member.phone}</p>
        </div>
      ))}
    </div>
  </div>
);

export default TeamInfo;