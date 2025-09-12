import React, { useState, useEffect } from "react";
import {
  Calendar,
  Clock,
  MapPin,
  Phone,
  Mail,
  Award,
  Star,
  User,
} from "lucide-react";
import Navbar from "../Layout/Navbar";

const Vet = () => {
  const [vet, setVet] = useState(null);

  useEffect(() => {
    const saved = localStorage.getItem("veterinarianData");
    if (saved) {
      setVet(JSON.parse(saved));
    }
  }, []);

  // fallback if no data saved
  const defaultVet = {
    name: "Dr. Sarah Johnson",
    specialization: "Surgery & Internal Medicine",
    phone: "+1 (555) 123-4567",
    email: "dr.sarah@furevercare.com",
    address: "123 Pet Care Blvd, Anytown, ST 12345",
    imagePreview:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=60",
    rating: 4.8,
    reviews: 200,
    experience: "12 yrs",
    education: "DVM, Univ. of Vet Medicine",
  };

  const vetData = vet || defaultVet;

  const slots = {
    booked: [
      { date: "2023-10-15", time: "9:00 AM", patient: "Max (Golden Retriever)" },
      { date: "2023-10-15", time: "2:30 PM", patient: "Whiskers (Siamese Cat)" },
      { date: "2023-10-16", time: "10:00 AM", patient: "Buddy (Labrador)" },
    ],
    free: ["9:30 AM", "10:30 AM", "11:00 AM", "11:30 AM", "2:00 PM", "3:00 PM"],
  };

  const cases = [
    {
      id: 1,
      title: "Hip Dysplasia Surgery",
      patient: "Golden Retriever, 5y",
      desc: "Total hip replacement on a dog with severe hip dysplasia. Recovery after 12 weeks.",
      outcome: "Full recovery",
      date: "2023-08-15",
    },
    {
      id: 2,
      title: "Feline Diabetes",
      patient: "Shorthair, 8y",
      desc: "Insulin + diet management for diabetic cat. Levels stable in 4 weeks.",
      outcome: "Stabilized",
      date: "2023-07-22",
    },
  ];

  if (!vetData) {
    return (
      <div className="min-h-screen bg-gray-900 flex items-center justify-center text-white">
        Loading...
      </div>
    );
  }

  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gray-900 text-white py-20">
        {/* header */}
        <header className="bg-gray-800 py-4 px-6">
          <div className="container mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              {vetData.imagePreview ? (
                <img
                  src={vetData.imagePreview}
                  alt={vetData.name}
                  className="w-10 h-10 rounded-full object-cover"
                />
              ) : (
                <div className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center">
                  <User size={20} className="text-gray-400" />
                </div>
              )}
              <h1 className="text-lg font-bold text-green-400">{vetData.name}</h1>
            </div>
            <span className="text-sm text-gray-400">Vet Profile</span>
          </div>
        </header>

        {/* main */}
        <main className="container mx-auto px-4 py-8 grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-8">
            {/* profile card */}
            <div className="bg-gray-800 rounded-xl p-6 shadow">
              <div className="flex flex-col md:flex-row gap-6">
                <div>
                  {vetData.imagePreview ? (
                    <img
                      src={vetData.imagePreview}
                      alt={vetData.name}
                      className="w-40 h-40 object-cover rounded-lg"
                    />
                  ) : (
                    <div className="w-40 h-40 bg-gray-700 flex items-center justify-center rounded-lg">
                      <User size={40} className="text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="flex-1">
                  <h2 className="text-2xl font-bold text-green-400">
                    {vetData.name}
                  </h2>
                  <p className="text-gray-300">{vetData.specialization}</p>

                  <div className="flex items-center mt-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={i < Math.floor(vetData.rating) ? "fill-current" : ""}
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-400">
                      {vetData.rating} ({vetData.reviews})
                    </span>
                  </div>

                  <div className="mt-4 space-y-1 text-sm">
                    <p className="flex items-center">
                      <Award size={16} className="text-green-400 mr-2" />
                      {vetData.experience}
                    </p>
                    <p className="flex items-center">
                      <Award size={16} className="text-green-400 mr-2" />
                      {vetData.education}
                    </p>
                  </div>

                  <div className="mt-5 space-y-1 text-sm">
                    <p className="flex items-center">
                      <Phone size={16} className="text-green-400 mr-2" />
                      {vetData.phone}
                    </p>
                    <p className="flex items-center">
                      <Mail size={16} className="text-green-400 mr-2" />
                      {vetData.email}
                    </p>
                    <p className="flex items-center">
                      <MapPin size={16} className="text-green-400 mr-2" />
                      {vetData.address}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* schedule */}
            <div className="bg-gray-800 rounded-xl p-6 shadow">
              <h2 className="text-xl font-bold text-green-400 mb-4">Schedule</h2>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h3 className="flex items-center mb-2 font-semibold">
                    <Clock size={18} className="text-green-400 mr-2" /> Booked
                  </h3>
                  {slots.booked.map((apt, i) => (
                    <div key={i} className="bg-gray-700 p-3 rounded mb-2">
                      <p className="text-green-400">{apt.patient}</p>
                      <p className="text-gray-300 text-sm">
                        {apt.date} - {apt.time}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <h3 className="flex items-center mb-2 font-semibold">
                    <Calendar size={18} className="text-green-400 mr-2" /> Free
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {slots.free.map((t, i) => (
                      <span
                        key={i}
                        className="bg-gray-700 text-green-400 px-3 py-1 rounded text-sm"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* case studies */}
            <div className="bg-gray-800 rounded-xl p-6 shadow">
              <h2 className="text-xl font-bold text-green-400 mb-4">Case Studies</h2>
              {cases.map((c) => (
                <div key={c.id} className="bg-gray-700 p-4 rounded mb-3">
                  <div className="flex justify-between items-center mb-2">
                    <h3 className="font-semibold">{c.title}</h3>
                    <span className="text-xs text-gray-400">{c.date}</span>
                  </div>
                  <p className="text-green-400 text-sm">{c.patient}</p>
                  <p className="text-gray-300 text-sm mt-1">{c.desc}</p>
                  <p className="text-sm mt-2">
                    <span className="font-semibold text-green-400">Outcome: </span>
                    {c.outcome}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* sidebar */}
          <aside className="bg-gray-800 rounded-xl p-6 shadow h-fit">
            <h2 className="text-lg font-bold text-green-400 mb-4">Actions</h2>
            <div className="space-y-3">
              <button className="w-full bg-green-400 text-gray-900 py-2 rounded hover:bg-green-500">
                Full Schedule
              </button>
              <button className="w-full border border-green-400 text-green-400 py-2 rounded hover:bg-green-400/10">
                New Case Study
              </button>
              <button className="w-full border border-gray-600 text-gray-300 py-2 rounded hover:bg-gray-700">
                Edit Profile
              </button>
            </div>

            <div className="mt-6 pt-4 border-t border-gray-700 text-sm">
              <h3 className="font-semibold text-green-400 mb-2">This Month</h3>
              <div className="space-y-1">
                <p className="flex justify-between">
                  <span className="text-gray-400">Appointments</span>
                  <span>48</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-400">Surgeries</span>
                  <span>12</span>
                </p>
                <p className="flex justify-between">
                  <span className="text-gray-400">New Patients</span>
                  <span>23</span>
                </p>
              </div>
            </div>
          </aside>
        </main>
      </div>
    </>
  );
};

export default Vet;
