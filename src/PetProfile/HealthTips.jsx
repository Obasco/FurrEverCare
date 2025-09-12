// HealthTips.jsx
import React from 'react';

const HealthTips = () => (
  <div className="health-tips bg-gray-800 rounded-xl p-8 border border-green-400/20 mt-16">
    <h2 className="section-title text-2xl font-bold text-white mb-6">Health Tips</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { title: "Regular Exercise", tip: "Daily walks and playtime maintain physical and mental health" },
        { title: "Proper Nutrition", tip: "High-quality food appropriate for age and breed" },
        { title: "Vaccination Schedule", tip: "Keep vaccinations up to date as recommended by your vet" },
        { title: "Dental Care", tip: "Regular brushing and dental check-ups prevent oral diseases" },
        { title: "Parasite Prevention", tip: "Monthly preventatives for fleas, ticks, and heartworms" },
        { title: "Regular Check-ups", tip: "Annual vet visits for early detection of health issues" }
      ].map((item, index) => (
        <div key={index} className="health-tip bg-gray-700 p-4 rounded-lg">
          <h3 className="tip-title text-green-400 font-semibold mb-2">{item.title}</h3>
          <p className="tip-content text-gray-300">{item.tip}</p>
        </div>
      ))}
    </div>
  </div>
);

export default HealthTips;