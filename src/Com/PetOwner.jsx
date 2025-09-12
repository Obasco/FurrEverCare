// PetOwner.jsx
import React, { useState, useEffect } from 'react';
import Navbar from '../Layout/Navbar';
import PetProfile from '../PetProfile/petprofile';
import PetShop from '../PetProfile/petshop';
import EmergencyVetHelp from '../PetProfile/EmgVetHelp';
import TeamInfo from '../PetProfile/TeamInfo';
import FeedingGuide from '../PetProfile/FeedingGuide';
import GroomingVideos from '../PetProfile/GroomingVideos';
import HealthTips from '../PetProfile/HealthTips';
import EmergencyContacts from '../PetProfile/EmgContacts';
import FeedbackForm from '../PetProfile/Feedback';
import ContactUs from '../PetProfile/ContatctUs';
import Footer from '../Layout/Footer';

const PetOwner = () => {
  


  const [currentTime, setCurrentTime] = useState(new Date());
  const [location, setLocation] = useState({ city: '', country: ' ' });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    setLocation({ city: 'Lagos', country: 'Nigeria' });
  }, []);

  

  return (
    <>
      <Navbar />
      <section className="pet-owner-section bg-gray-900 min-h-screen py-24 px-4">
        <div className="container max-w-7xl mx-auto">
          <div className="page-header text-center mb-8">
            <h1 className="page-title text-4xl font-bold text-white mb-4">
              Pet Owner Dashboard
            </h1>
            
            <div className="time-location-info flex justify-center items-center gap-6 mb-6">
              <div className="current-time text-green-400 font-mono text-lg">
                {currentTime.toLocaleTimeString()}
              </div>
              <div className="location text-gray-300">
                {location.city}, {location.country}
              </div>
            </div>
          </div>
        </div>

        <PetProfile />
        <PetShop className="mt-16" />
        <EmergencyVetHelp />
        <TeamInfo />
        <FeedingGuide />
        <HealthTips />
        <FeedbackForm />
        <ContactUs />
        <Footer />
      </section>
    </>
  );
};

export default PetOwner;