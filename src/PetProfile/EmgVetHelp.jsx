// EmergencyVetHelp.jsx
import React from 'react';

const EmergencyVetHelp = () => (
  <div className="emergency-vet-help bg-gray-800 rounded-xl p-8 border border-green-400/20 mt-16">
    <h2 className="section-title text-2xl font-bold text-white mb-6">Emergency & Vet Help</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="emergency-info">
        <h3 className="text-xl font-semibold text-green-400 mb-4">Emergency Services</h3>
        <ul className="space-y-3 text-gray-300">
          <li>• 24/7 Emergency Veterinary Care</li>
          <li>• Poison Control Hotline: 1-800-222-1222</li>
          <li>• Mobile Vet Services Available</li>
          <li>• Emergency Pet Transportation</li>
          <li>• Critical Care Unit</li>
        </ul>
      </div>
      <div className="vet-services">
        <h3 className="text-xl font-semibold text-green-400 mb-4">Veterinary Services</h3>
        <ul className="space-y-3 text-gray-300">
          <li>• Routine Check-ups & Wellness Exams</li>
          <li>• Vaccinations & Preventative Care</li>
          <li>• Dental Cleaning & Surgery</li>
          <li>• Spay/Neuter Services</li>
          <li>• Specialist Referrals</li>
          <li>• Diagnostic Imaging (X-ray, Ultrasound)</li>
        </ul>
      </div>
    </div>
  </div>
);

export default EmergencyVetHelp;