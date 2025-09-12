import React from "react";
import { PersonStanding } from "lucide-react";
import Navbar from "../Layout/Navbar";
import Value from "../Layout/values";
import Footer from "../Layout/Footer";

const About = () => {
  return (
    <>
      <Navbar />
      
      <section className="about-section bg-gray-900 py-36 px-6 md:px-20 flex items-center justify-center min-h-screen">
        <div className="about-container max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center justify-center">

          {/* Text Content */}
          <div className="about-content flex flex-col items-center text-center space-y-6">
            <h2 className="about-title text-4xl md:text-5xl font-extrabold text-green-400">
              About FurEverCare+
            </h2>
            
            <p className="about-intro text-lg text-gray-300 leading-relaxed mb-12">
              Your trusted partner in <span className="text-green-400 font-semibold">pet care</span> since 2017. 
              We're passionate about keeping your furry friends happy, healthy, and well-cared for.
            </p>

            <div className="about-story space-y-5">
              <h3 className="story-title text-4xl font-bold text-green-400">Our Story</h3>
              
              <p className="story-text text-gray-300 leading-relaxed">
                Founded in 2017 by <span className="text-green-400 font-medium">Dr. Sarah Johnson</span>, FurEverCare+
                began with a simple mission: to make quality pet care accessible and convenient for every pet owner. 
                As a practicing veterinarian, Dr. Johnson noticed how stressful vet visits and grooming appointments 
                could be for both pets and their families.
              </p>
              
              <p className="story-text text-gray-300 leading-relaxed">
                That's when she had an idea – what if professional pet care could come directly to your home? 
                This vision became the foundation of <span className="text-green-400 font-semibold">FurEverCare+</span>, 
                where we bring veterinary services, grooming, and pet care directly to your doorstep.
              </p>
              
              <p className="story-text text-gray-300 leading-relaxed">
                Today, we're proud to serve over <span className="text-green-400 font-bold">5,000 families</span> 
                across the region, providing everything from routine grooming to emergency care, all while 
                maintaining the personal touch and genuine care that sets us apart.
              </p>
            </div>
          </div>

          {/* Image Section */}
          <div className="about-image flex justify-center">
            <img
              src="https://images.unsplash.com/photo-1644675443401-ea4c14bad0e6?q=80&w=435&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Happy dog playing outside"
              className="rounded-2xl shadow-xl w-full max-w-md object-cover transition-transform duration-300 hover:scale-105"
            />
          </div>

        </div>
      </section>
      {/* <Stats /> */}
      <Value />
      <Footer /> 
{/*       
      */}
    </>
  );
};

export default About;