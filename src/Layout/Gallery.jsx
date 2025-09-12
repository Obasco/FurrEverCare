import React, { useState } from "react";

const PetGallery = () => {
  const allImages = [
    { src: "https://images.unsplash.com/photo-1450778869180-41d0601e046e?w=600&auto=format&fit=crop&q=60", alt: "Cute dog playing in the grass" },
    { src: "https://images.unsplash.com/photo-1504595403659-9088ce801e29?w=600&auto=format&fit=crop&q=60", alt: "Happy cat resting" },
    { src: "https://images.unsplash.com/photo-1548767797-d8c844163c4c?w=600&auto=format&fit=crop&q=60", alt: "Puppy looking curious" },
    { src: "https://images.unsplash.com/photo-1563460716037-460a3ad24ba9?w=600&auto=format&fit=crop&q=60", alt: "Dog with beautiful eyes" },
    { src: "https://plus.unsplash.com/premium_photo-1728545290865-cecc097be765?w=600&auto=format&fit=crop&q=60", alt: "Playful kitten" },
    { src: "https://images.unsplash.com/photo-1518887499460-71d222eed89d?w=600&auto=format&fit=crop&q=60", alt: "Dog enjoying outdoors" },
    { src: "https://images.unsplash.com/photo-1526526431900-88eb525f1e4a?w=600&auto=format&fit=crop&q=60", alt: "Cat in thoughtful pose" },
    { src: "https://images.unsplash.com/photo-1583511655826-05700d52f4d9?w=600&auto=format&fit=crop&q=60", alt: "Puppy with toy" },
    { src: "https://plus.unsplash.com/premium_photo-1707353402061-c31b6ba8562e?w=600&auto=format&fit=crop&q=60", alt: "Beautiful dog portrait" },
    { src: "https://images.unsplash.com/photo-1658834102198-2cef309e18b4?w=600&auto=format&fit=crop&q=60", alt: "Happy dog running" },
    { src: "https://images.unsplash.com/photo-1534243510675-3c687393caff?w=600&auto=format&fit=crop&q=60", alt: "Cat being playful" },
    { src: "https://images.unsplash.com/photo-1552053831-71594a27632d?w=600&auto=format&fit=crop&q=60", alt: "Dog with happy expression" },
    { src: "https://images.unsplash.com/photo-1592194996308-7b43878e84a6?w=600&auto=format&fit=crop&q=60", alt: "Golden retriever smiling" },
    { src: "https://images.unsplash.com/photo-1583337130417-2b53efebc3c1?w=600&auto=format&fit=crop&q=60", alt: "Kitten peeking" },
    { src: "https://images.unsplash.com/photo-1558788353-f76d92427f16?w=600&auto=format&fit=crop&q=60", alt: "Dog running outdoors" },
    { src: "https://images.unsplash.com/photo-1583687534963-565854a3d6d8?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHZldCUyMGFuZCUyMHBldHxlbnwwfHwwfHx8MA%3D%3D", alt: "Curious puppy" },
    { src: "https://images.unsplash.com/photo-1659147922557-8aad091ac121?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHZldCUyMGFuZCUyMGRvZ3N8ZW58MHx8MHx8fDA%3D", alt: "Cat lying on couch" },
  ];

  const INITIAL_COUNT = 8;
  const [visibleCount, setVisibleCount] = useState(INITIAL_COUNT);

  const toggleView = () => {
    setVisibleCount(visibleCount === allImages.length ? INITIAL_COUNT : allImages.length);
  };

  return (
    <section className="bg-gray-900 py-16 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Pet Gallery</h2>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto">
            Browse through our adorable pets and their happy moments. Each photo tells a story of love and care.
          </p>
        </div>

        {/* Pinterest-style masonry */}
        <div className="columns-2 sm:columns-3 md:columns-4 gap-4 space-y-4">
          {allImages.slice(0, visibleCount).map((img, idx) => (
            <div
              key={idx}
              className="break-inside-avoid overflow-hidden rounded-xl shadow-lg border border-green-400/20 bg-gray-800 mb-4
                         transform perspective-1000 transition-transform duration-500 hover:scale-105 hover:rotate-y-3 hover:rotate-x-3 hover:shadow-2xl"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full object-cover rounded-xl"
              />
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            className="bg-green-400 text-gray-900 px-8 py-3 rounded-lg font-semibold hover:bg-green-500 transition-colors shadow-lg"
            onClick={toggleView}
          >
            {visibleCount === allImages.length ? "See Less" : "View More"}
          </button>
        </div>
      </div>
    </section>
  );
};

export default PetGallery;
