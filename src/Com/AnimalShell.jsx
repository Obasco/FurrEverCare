import React, { useState } from "react";
import { Heart, Calendar, MapPin, Tag, CheckCircle, Search } from "lucide-react";
import { pets } from "../constants/adopt.js";
import Navbar from "../Layout/Navbar"
import Footer from "../Layout/Footer.jsx"
import PetGallery from "../Layout/Gallery.jsx";

const AnimalShell = () => {
  const [adoptedPet, setAdoptedPet] = useState(null);
  const [expandedPet, setExpandedPet] = useState(null); 
  const [likedPets, setLikedPets] = useState([]); 
  const [searchTerm, setSearchTerm] = useState(""); 

  const handleAdopt = (petName) => {
    setAdoptedPet(petName);
    setTimeout(() => setAdoptedPet(null), 4000);
  };

  const toggleInfo = (petId) => {
    setExpandedPet((prev) => (prev === petId ? null : petId));
  };

  const toggleLike = (petId) => {
    setLikedPets((prev) =>
      prev.includes(petId)
        ? prev.filter((id) => id !== petId)
        : [...prev, petId]
    );
  };

  // Filter pets based on search term (case-insensitive)
  const filteredPets = pets.filter(pet => 
    pet.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <Navbar />
      <section className="bg-gray-900  px-6 lg:px-20 py-34">
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-12 space-y-4">
          <h1 className="text-4xl md:text-5xl font-extrabold text-white">
            Pet Adoption & Sales
          </h1>
          <p className="text-lg text-gray-300">
            Find your perfect companion! Browse our loving pets looking for
            their forever homes or discover quality pets from trusted breeders.
          </p>
          
          {/* Search Bar */}
          <div className="relative mt-8 max-w-md mx-auto">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search className="h-5 w-5 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search by breed..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="block w-full pl-10 pr-3 py-3 border border-green-400/30 rounded-lg bg-gray-800 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-400 focus:border-transparent"
            />
          </div>
        </div>

        {/* Results Count */}
        {searchTerm && (
          <div className="text-center mb-6">
            <p className="text-green-400">
              {filteredPets.length} {filteredPets.length === 1 ? 'pet' : 'pets'} found for "{searchTerm}"
            </p>
          </div>
        )}

        {/* Cards Grid */}
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredPets.map((pet) => (
            <div
              key={pet.id}
              className="bg-gray-800 rounded-2xl shadow-lg hover:shadow-xl transition-transform transform hover:-translate-y-2 overflow-hidden border border-green-400/20"
            >
              {/* Image Section */}
              <div className="relative">
                <img
                  src={pet.image}
                  alt={pet.name}
                  className="w-full h-80 object-contain bg-gray-700"
                />
                <span className="absolute top-3 left-3 bg-green-400 text-gray-900 px-4 py-1 text-sm font-medium rounded-full shadow">
                  Adopt
                </span>
                <button
                  onClick={() => toggleLike(pet.id)}
                  className="absolute top-3 right-3 bg-gray-700/90 p-2 rounded-full shadow hover:scale-110 transition"
                >
                  <Heart
                    className={`transition ${
                      likedPets.includes(pet.id)
                        ? "text-red-400 fill-red-400"
                        : "text-gray-400"
                    }`}
                    size={20}
                  />
                </button>
              </div>

              {/* Content Section */}
              <div className="p-6">
                <div className="flex justify-between items-center">
                  <h2 className="text-2xl font-bold text-white">
                    {pet.name}
                  </h2>
                  <span className="text-green-400 font-semibold text-lg">
                    {pet.price}
                  </span>
                </div>
                <p className="text-gray-400">{pet.breed}</p>

                {/* Info */}
                <div className="flex items-center gap-6 text-gray-400 text-sm mt-4">
                  <div className="flex items-center gap-2">
                    <Calendar size={16} className="text-green-400" />
                    {pet.age}
                  </div>
                  <div className="flex items-center gap-2">
                    <Tag size={16} className="text-green-400" />
                    {pet.size}
                  </div>
                </div>
                <div className="flex items-center gap-2 text-gray-400 text-sm mt-2">
                  <MapPin size={16} className="text-green-400" />
                  {pet.location}
                </div>

                {/* Description */}
                <p className="text-gray-300 text-sm mt-4 leading-relaxed">
                  {pet.description}
                </p>

                {/* Buttons */}
                <div className="flex gap-4 mt-6">
                  <button
                    onClick={() => handleAdopt(pet.name)}
                    className="flex-1 bg-gradient-to-r from-green-400 to-green-600 text-gray-900 py-2.5 rounded-lg font-semibold shadow-md hover:shadow-lg transition hover:from-green-500 hover:to-green-700"
                  >
                    Adopt Me
                  </button>
                  <button
                    onClick={() => toggleInfo(pet.id)}
                    className="flex-1 border border-green-400 text-green-400 py-2.5 rounded-lg font-semibold hover:bg-green-400/10 transition"
                  >
                    {expandedPet === pet.id ? "Hide Info" : "More Info"}
                  </button>
                </div>

                {/* Extra Personality Info (toggle) */}
                {expandedPet === pet.id && (
                  <div className="mt-4 p-4 bg-gray-700 border border-green-400/30 rounded-xl">
                    <h4 className="font-semibold text-white text-sm mb-2">
                      Personality Traits
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {pet.personality.map((trait, index) => (
                        <span
                          key={index}
                          className="bg-gray-600 text-green-400 text-xs px-3 py-1 rounded-full font-medium border border-green-400/30"
                        >
                          {trait}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* No Results Message */}
        {searchTerm && filteredPets.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">
              No pets found for "{searchTerm}". Try another breed.
            </p>
          </div>
        )}

        {/* Success Popup */}
        {adoptedPet && (
          <div className="fixed bottom-6 right-6 bg-gray-800 border border-green-400/30 shadow-2xl rounded-xl p-5 w-80 animate-fade-in">
            <div className="flex items-center gap-3">
              <CheckCircle className="text-green-400" size={28} />
              <h3 className="text-lg font-bold text-white">
                Adoption Successful!
              </h3>
            </div>
            <p className="mt-2 text-gray-300 text-sm">
              You successfully adopted{" "}
              <span className="font-semibold text-green-400">{adoptedPet}</span> 🎉
              <br />
              Our agency will send you an email soon with the next steps.
            </p>
          </div>
        )}
      </section>

      <PetGallery />
      <Footer />
    </>
  );
};

export default AnimalShell;