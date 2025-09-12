// FeedingGuide.jsx
import React from 'react';

const FeedingGuide = () => (
  <div className="feeding-guide bg-gray-800 rounded-xl p-8 border border-green-400/20 mt-16">
    <h2 className="section-title text-2xl font-bold text-white mb-6">Feeding Guide</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      <div className="dog-feeding">
        <h3 className="text-xl font-semibold text-green-400 mb-4">🐕 Dog Feeding Guide</h3>
        <div className="space-y-4 text-gray-300">
          <div className="guide-item">
            <h4 className="font-semibold text-white mb-2">Puppies (2-6 months)</h4>
            <p>3-4 meals per day, high-quality puppy food</p>
          </div>
          <div className="guide-item">
            <h4 className="font-semibold text-white mb-2">Adults (1-7 years)</h4>
            <p>2 meals per day, maintain healthy weight</p>
          </div>
          <div className="guide-item">
            <h4 className="font-semibold text-white mb-2">Seniors (7+ years)</h4>
            <p>2-3 smaller meals, senior-specific formula</p>
          </div>
        </div>
      </div>
      
      <div className="cat-feeding">
        <h3 className="text-xl font-semibold text-green-400 mb-4">🐱 Cat Feeding Guide</h3>
        <div className="space-y-4 text-gray-300">
          <div className="guide-item">
            <h4 className="font-semibold text-white mb-2">Kittens (2-6 months)</h4>
            <p>4 meals per day, kitten growth formula</p>
          </div>
          <div className="guide-item">
            <h4 className="font-semibold text-white mb-2">Adults (1-10 years)</h4>
            <p>2 meals per day, measured portions</p>
          </div>
          <div className="guide-item">
            <h4 className="font-semibold text-white mb-2">Seniors (10+ years)</h4>
            <p>2-3 small meals, easy-to-digest food</p>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default FeedingGuide;