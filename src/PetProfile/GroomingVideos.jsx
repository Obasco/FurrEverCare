// GroomingVideos.jsx
import React from 'react';

const GroomingVideos = () => (
  <div className="grooming-videos bg-gray-800 rounded-xl p-8 border border-green-400/20 mt-16">
    <h2 className="section-title text-2xl font-bold text-white mb-6">Grooming Videos</h2>
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {[
        { title: "Basic Dog Grooming", duration: "15:30", views: "12K" },
        { title: "Cat Nail Trimming", duration: "8:45", views: "8.5K" },
        { title: "Bathing Your Pet", duration: "12:15", views: "15K" },
        { title: "Brushing Techniques", duration: "10:20", views: "9.2K" },
        { title: "Ear Cleaning Guide", duration: "7:30", views: "6.8K" },
        { title: "Dental Care Routine", duration: "14:10", views: "11K" }
      ].map((video, index) => (
        <div key={index} className="video-card bg-gray-700 p-4 rounded-lg">
          <div className="video-placeholder w-full h-40 bg-green-400/20 rounded-lg mb-3 flex items-center justify-center">
            <span className="text-green-400 text-4xl">▶</span>
          </div>
          <h3 className="video-title text-white font-semibold mb-2">{video.title}</h3>
          <div className="video-info flex justify-between text-gray-300 text-sm">
            <span>{video.duration}</span>
            <span>{video.views} views</span>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default GroomingVideos;