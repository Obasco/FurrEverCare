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
  const [veterinarian, setVeterinarian] = useState(null);

  

  useEffect(() => {
    // Retrieve stored data (in a real app, this would come from a backend)
    const storedData = localStorage.getItem("veterinarianData");
    if (storedData) {
      setVeterinarian(JSON.parse(storedData));
    }
  }, []);

  // Sample data in case nothing is stored
  const sampleVeterinarian = {
    name: "Dr. Sarah Johnson",
    specialization: "Veterinary Surgery & Internal Medicine",
    phone: "+1 (555) 123-4567",
    email: "dr.sarah@furevercare.com",
    address: "123 Pet Care Blvd, Anytown, ST 12345",
    imagePreview:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop&q=60",
    rating: 4.9,
    reviews: 247,
    experience: "12 years",
    education: "DVM, University of Veterinary Medicine",
  };

  const vetData = veterinarian || sampleVeterinarian;

  // Time slots data
  const timeSlots = {
    booked: [
      {
        date: "2023-10-15",
        time: "9:00 AM",
        patient: "Max (Golden Retriever)",
      },
      {
        date: "2023-10-15",
        time: "2:30 PM",
        patient: "Whiskers (Siamese Cat)",
      },
      { date: "2023-10-16", time: "10:00 AM", patient: "Buddy (Labrador)" },
    ],
    available: [
      "9:30 AM",
      "10:30 AM",
      "11:00 AM",
      "11:30 AM",
      "2:00 PM",
      "3:00 PM",
      "3:30 PM",
      "4:00 PM",
      "4:30 PM",
    ],
  };

  // Case studies data
  const caseStudies = [
    {
      id: 1,
      title: "Complex Hip Dysplasia Surgery",
      patient: "Golden Retriever, 5 years old",
      description:
        "Successfully performed a total hip replacement on a dog with severe hip dysplasia, resulting in restored mobility and pain-free movement.",
      outcome: "Full recovery after 12 weeks of physical therapy",
      date: "2023-08-15",
    },
    {
      id: 2,
      title: "Feline Diabetes Management",
      patient: "Domestic Shorthair, 8 years old",
      description:
        "Developed a comprehensive treatment plan for a diabetic cat, including insulin therapy and dietary changes.",
      outcome: "Blood glucose levels stabilized within 4 weeks",
      date: "2023-07-22",
    },
    {
      id: 3,
      title: "Emergency Foreign Body Removal",
      patient: "Labrador Puppy, 6 months old",
      description:
        "Performed emergency surgery to remove a swallowed toy that was causing intestinal obstruction.",
      outcome: "Complete recovery with no complications",
      date: "2023-09-05",
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
    <div className="min-h-screen bg-gray-900 text-white py-24">
      <header className="bg-gray-800 py-4 px-6   z-10">
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
            <h1 className="text-xl font-bold text-green-400">{vetData.name}</h1>
          </div>
          <span className="text-sm text-gray-400">Veterinarian Profile</span>
        </div>
      </header>

      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
         
          <div className="lg:col-span-2">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex flex-col md:flex-row gap-6">
                <div className="flex-shrink-0">
                  {vetData.imagePreview ? (
                    <img
                      src={vetData.imagePreview}
                      alt={vetData.name}
                      className="w-48 h-48 object-cover rounded-xl shadow-md"
                    />
                  ) : (
                    <div className="w-48 h-48 bg-gray-700 rounded-xl flex items-center justify-center">
                      <User size={48} className="text-gray-400" />
                    </div>
                  )}
                </div>
                <div className="flex-grow">
                  <h2 className="text-2xl font-bold text-green-400">
                    {vetData.name}
                  </h2>
                  <p className="text-lg text-gray-300 mt-1">
                    {vetData.specialization}
                  </p>

                  <div className="flex items-center mt-3">
                    <div className="flex text-yellow-400">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          size={18}
                          className={
                            i < Math.floor(vetData.rating) ? "fill-current" : ""
                          }
                        />
                      ))}
                    </div>
                    <span className="ml-2 text-gray-400">
                      {vetData.rating} ({vetData.reviews} reviews)
                    </span>
                  </div>

                  <div className="mt-4 space-y-2">
                    <div className="flex items-center">
                      <Award size={18} className="text-green-400 mr-2" />
                      <span>{vetData.experience} of experience</span>
                    </div>
                    <div className="flex items-center">
                      <Award size={18} className="text-green-400 mr-2" />
                      <span>{vetData.education}</span>
                    </div>
                  </div>

                  <div className="mt-6 space-y-2">
                    <h3 className="font-semibold text-lg text-green-400">
                      Contact Information
                    </h3>
                    <div className="flex items-center">
                      <Phone size={16} className="text-green-400 mr-2" />
                      <span>{vetData.phone}</span>
                    </div>
                    <div className="flex items-center">
                      <Mail size={16} className="text-green-400 mr-2" />
                      <span>{vetData.email}</span>
                    </div>
                    <div className="flex items-center">
                      <MapPin size={16} className="text-green-400 mr-2" />
                      <span>{vetData.address}</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Time Slots Section */}
            <div className="bg-gray-800 rounded-xl p-6 mt-8 shadow-lg">
              <h2 className="text-2xl font-bold text-green-400 mb-6">
                Appointment Schedule
              </h2>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Booked Appointments */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Clock size={20} className="text-green-400 mr-2" />
                    Booked Appointments
                  </h3>
                  <div className="space-y-4">
                    {timeSlots.booked.map((appointment, index) => (
                      <div
                        key={index}
                        className="bg-gray-700 p-4 rounded-lg"
                      >
                        <div className="flex justify-between items-start">
                          <div>
                            <p className="font-semibold text-green-400">
                              {appointment.patient}
                            </p>
                            <p className="text-sm text-gray-300 mt-1">
                              {new Date(
                                appointment.date
                              ).toLocaleDateString()}{" "}
                              at {appointment.time}
                            </p>
                          </div>
                          <span className="bg-green-400 text-gray-900 text-xs px-2 py-1 rounded-full font-medium">
                            Confirmed
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Available Time Slots */}
                <div>
                  <h3 className="text-xl font-semibold text-white mb-4 flex items-center">
                    <Calendar size={20} className="text-green-400 mr-2" />
                    Available Time Slots
                  </h3>
                  <div className="grid grid-cols-2 gap-2">
                    {timeSlots.available.map((time, index) => (
                      <div
                        key={index}
                        className="bg-gray-700 text-center p-3 rounded-lg text-green-400 font-medium"
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Case Studies Section */}
            <div className="bg-gray-800 rounded-xl p-6 mt-8 shadow-lg">
              <h2 className="text-2xl font-bold text-green-400 mb-6">
                Case Studies
              </h2>
              <div className="space-y-6">
                {caseStudies.map((caseStudy) => (
                  <div
                    key={caseStudy.id}
                    className="bg-gray-700 p-4 rounded-lg"
                  >
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-xl font-semibold text-white">
                        {caseStudy.title}
                      </h3>
                      <span className="text-sm text-gray-400">
                        {new Date(caseStudy.date).toLocaleDateString()}
                      </span>
                    </div>
                    <p className="text-green-400 mt-1">{caseStudy.patient}</p>
                    <p className="text-gray-300 mt-2">{caseStudy.description}</p>
                    <div className="mt-3 p-3 bg-gray-600 rounded">
                      <span className="font-semibold text-green-400">
                        Outcome:{" "}
                      </span>
                      <span className="text-gray-300">
                        {caseStudy.outcome}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quick Actions Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-xl p-6 shadow-lg sticky top-24">
              <h2 className="text-xl font-bold text-green-400 mb-6">
                Quick Actions
              </h2>

              <div className="space-y-4">
                <button className="w-full bg-green-400 text-gray-900 py-3 rounded-lg font-semibold hover:bg-green-500 transition">
                  View Full Schedule
                </button>
                <button className="w-full border border-green-400 text-green-400 py-3 rounded-lg font-semibold hover:bg-green-400/10 transition">
                  Add New Case Study
                </button>
                <button className="w-full border border-gray-600 text-gray-300 py-3 rounded-lg font-semibold hover:bg-gray-700 transition">
                  Edit Profile
                </button>
              </div>

              {/* Stats */}
              <div className="mt-8 pt-6 border-t border-gray-700">
                <h3 className="font-semibold text-green-400 mb-4">
                  This Month
                </h3>
                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Appointments</span>
                    <span className="text-white font-semibold">48</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Surgeries</span>
                    <span className="text-white font-semibold">12</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">New Patients</span>
                    <span className="text-white font-semibold">23</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
    </>
  );
};

export default Vet;
