// Companion.jsx
import React, { useState } from 'react'
import { Heart } from "lucide-react";

const Companion = () => {
  const [isAdopted, setIsAdopted] = useState(false);

  const handleAdoption = () => {
    setIsAdopted(prevState => !prevState);
  }

  return (
    <section className="companion-section bg-gray-900 px-4 py-12 lg:py-20">
      <div className="companion-container mx-auto max-w-6xl flex flex-col lg:flex-row items-center gap-10">
        
        {/* Text Content */}
        <div className="companion-text flex-1 text-center lg:text-left">
          <h2 className="companion-title text-3xl md:text-5xl font-bold text-white leading-tight">
            Find Your Perfect{" "}
            <span className="companion-highlight bg-gray-800 rounded px-1 text-green-400">Companion</span>
          </h2>

          <p className="companion-description mt-3 text-base md:text-lg text-gray-300 max-w-xl mx-auto lg:mx-0">
            Adopt pets that need a home. Browse through the adoption list and maybe 
            you'll find your new buddy today 🐾
          </p>

          <button 
            onClick={handleAdoption}
            className="adopt-btn mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-green-400 text-gray-900 font-medium hover:bg-green-500 transition"
          >
            <Heart 
              size={18} 
              className={isAdopted ? "text-red-400" : ""} 
              fill={isAdopted ? "currentColor" : "transparent"} 
            />
            {isAdopted ? "Already Adopted ❤️" : "Adopt Me"}
          </button>
        </div>

        {/* Pet Image */}
        <div className="companion-image flex-1 flex justify-center">
          <img 
            src="https://images.unsplash.com/photo-1558788353-f76d92427f16?auto=format&fit=crop&w=500&q=60" 
            alt="Cute dog looking for a home" 
            className="rounded-lg shadow-lg shadow-green-400/20 w-full max-w-sm object-cover"
          />
        </div>
      </div>
    </section>
  )
}

export default Companion