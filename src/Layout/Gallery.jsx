import React from "react";

const PetGallery = () => {
  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="container mx-auto">
  
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Pet Gallery
          </h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse through our adorable pets and their happy moments. Each photo tells a story of love and care.
          </p>
        </div>

   
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
 
          <div className="grid gap-4 md:gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg border border-green-400/20 bg-gray-800 aspect-square">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:rotate-1"
                src="https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&auto=format&fit=crop&q=60"
                alt="Cute dog playing in the grass"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg border border-green-400/20 bg-gray-800 aspect-square">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:-rotate-1"
                src="https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=600&auto=format&fit=crop&q=60"
                alt="Happy cat resting"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg border border-green-400/20 bg-gray-800 aspect-square">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:rotate-2"
                src="https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&auto=format&fit=crop&q=60"
                alt="Puppy looking curious"
              />
            </div>
          </div>


          <div className="grid gap-4 md:gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg border border-green-400/20 bg-gray-800 aspect-square">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:-rotate-2"
                src="https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?w=600&auto=format&fit=crop&q=60"
                alt="Dog with beautiful eyes"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg border border-green-400/20 bg-gray-800 aspect-square">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:rotate-2"
                src="https://plus.unsplash.com/premium_photo-1728545290865-cecc097be765?w=600&auto=format&fit=crop&q=60"
                alt="Playful kitten"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg border border-green-400/20 bg-gray-800 aspect-square">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:-rotate-1"
                src="https://images.unsplash.com/photo-1518887499460-71d222eed89d?w=600&auto=format&fit=crop&q=60"
                alt="Dog enjoying outdoors"
              />
            </div>
          </div>


          <div className="grid gap-4 md:gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg border border-green-400/20 bg-gray-800 aspect-square">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:rotate-1"
                src="https://images.unsplash.com/photo-1526526431900-88eb525f1e4a?w=600&auto=format&fit=crop&q=60"
                alt="Cat in thoughtful pose"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg border border-green-400/20 bg-gray-800 aspect-square">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:-rotate-2"
                src="https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&auto=format&fit=crop&q=60"
                alt="Puppy with toy"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg border border-green-400/20 bg-gray-800 aspect-square">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:rotate-2"
                src="https://plus.unsplash.com/premium_photo-1707353402061-c31b6ba8562e?w=600&auto=format&fit=crop&q=60"
                alt="Beautiful dog portrait"
              />
            </div>
          </div>


          <div className="grid gap-4 md:gap-6">
            <div className="overflow-hidden rounded-lg shadow-lg border border-green-400/20 bg-gray-800 aspect-square">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:-rotate-1"
                src="https://images.unsplash.com/photo-1658834102198-2cef309e18b4?w=600&auto=format&fit=crop&q=60"
                alt="Happy dog running"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg border border-green-400/20 bg-gray-800 aspect-square">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:rotate-1"
                src="https://images.unsplash.com/photo-1534243510675-3c687393caff?w=600&auto=format&fit=crop&q=60"
                alt="Cat being playful"
              />
            </div>
            <div className="overflow-hidden rounded-lg shadow-lg border border-green-400/20 bg-gray-800 aspect-square">
              <img
                className="w-full h-full object-cover transition-transform duration-500 hover:scale-105 hover:-rotate-2"
                src="https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop&q=60"
                alt="Dog with happy expression"
              />
            </div>
          </div>
        </div>

   
        <div className="text-center mt-12">
          <button className="bg-green-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors shadow-lg">
            View More Photos
          </button>
        </div>
      </div>
    </section>
  );
};

export default PetGallery;