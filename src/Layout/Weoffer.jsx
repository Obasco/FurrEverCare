// Weoffer.jsx
import React from 'react';
import { Scissors, Shield, Home, ShoppingBag } from "lucide-react";  

const Weoffer = () => {
  const services = [
    {
      icon: <Scissors size={40} className="text-green-400" />,
      title: "At-Home Pet Care",
      description: "Convenient professional grooming services delivered right to your doorstep."
    },
    {
      icon: <Shield size={40} className="text-green-400" />,
      title: "Immunization & Wellness",
      description: "From vaccinations to wellness checks, we make it our priority to keep your pets safe and healthy."
    },
    {
      icon: <Home size={40} className="text-green-400" />,
      title: "Pet Sitting",
      description: "Providing reliable and loving care for your pets while you're away, giving you peace of mind."
    },
    {
      icon: <ShoppingBag size={40} className="text-green-400" />,
      title: "Pet Supplies",
      description: "From grooming to healthcare, we cover all your pet's essential needs under one roof."
    }
  ];

  return (
    <section className="services-section bg-gray-900 py-24 px-6">
      <div className="text-center mb-12">
        <h1 className="section-title text-green-400 text-4xl font-bold mb-4">
          What We Offer
        </h1>
        <p className="section-subtitle text-xl text-gray-300">
          Professional care and services for your beloved pets
        </p>
      </div>

      <div className="services-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 justify-items-center">
        {services.map((service, index) => (
          <div key={index} className="service-card flex flex-col items-center text-center bg-gray-800 border border-green-400/30 rounded-2xl p-6 w-full max-w-sm transition-all duration-300 hover:scale-105 hover:shadow-green-400/20 hover:-translate-y-2">
            <div className="icon-container bg-green-400/10 p-4 rounded-full mb-4">
              {service.icon}
            </div>
            <h3 className="service-title text-xl font-semibold text-green-400">
              {service.title}
            </h3>
            <p className="service-description text-gray-300 mt-2">
              {service.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Weoffer;