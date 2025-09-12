// HeroPage.jsx
import React from 'react'
import Dog from '../assets/dog-1.jpg'
import { MoveRight } from 'lucide-react'

const HeroPage = () => {
  return (
   <section className="hero-section bg-gray-900">
    <div className="container max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 py-16 lg:py-24">
        <div className="hero-content flex flex-col-reverse lg:flex-row items-center gap-10">
          
          {/* Text Content */}
          <div className="hero-text text-center lg:text-left flex-1">
            <h1 className="hero-title font-bold text-3xl sm:text-4xl lg:text-5xl text-white">
              Health & Happiness for Your Pet
            </h1>
            <p className="hero-description leading-relaxed text-base sm:text-lg max-w-2xl mt-6 text-gray-300 mb-8 px-2 sm:px-0 mx-auto lg:mx-0">
              Book grooming, vaccination, and more, or shop pet essentials with ease. 
              We bring professional pet care right to your doorstep.
            </p>

            <div className="hero-buttons flex flex-col sm:flex-row gap-4 sm:gap-6 w-full sm:w-auto justify-center lg:justify-start px-2 sm:px-0">
              <button className="primary-btn bg-green-400 py-4 px-6 rounded-3xl text-gray-900 font-medium hover:bg-green-500 transition">
                Book Now <MoveRight className="inline-block ms-1" size={22}/>
              </button>

              <button className="secondary-btn border-green-400 border-2 py-4 px-6 rounded-3xl text-white font-medium hover:bg-green-400 hover:border-green-400 hover:text-gray-900 transition">
                Shop Now
              </button>
            </div>
          </div>

          {/* Image */}
          <div className="hero-image flex-1 flex justify-center lg:justify-end">
            <img 
              src={Dog} 
              alt="Happy Dog" 
              width={550} 
              height={460} 
              className="rounded-2xl object-cover max-w-full h-auto shadow-lg shadow-green-400/20"
            />
          </div>
        </div>
    </div>
   </section>
  )
}

export default HeroPage