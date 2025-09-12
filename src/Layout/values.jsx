// values.jsx
import { Heart, Award, ShieldCheck } from "lucide-react";

const Value = () => {
  const coreValues = [
    {
      icon: <Heart className="w-12 h-12 text-green-400" />,
      title: "Love for Animals",
      description: "Every decision we make is driven by our genuine love and care for animals and their wellbeing.",
    },
    {
      icon: <Award className="w-12 h-12 text-green-400" />,
      title: "Years of Experience",
      description: "8 years of providing top-notch care and service.",
    },
    {
      icon: <ShieldCheck className="w-12 h-12 text-green-400" />,
      title: "Satisfaction Rate",
      description: "100% customer satisfaction guaranteed.",
    },
  ];

  return (
    <section className="values-section bg-gray-900 py-20">
      {/* Section Header */}
      <div className="values-header flex flex-col items-center justify-center text-center max-w-3xl mx-auto mb-16 px-4">
        <h1 className="values-title text-4xl md:text-5xl font-extrabold text-white mb-4 leading-tight">
          Our Values
        </h1>
        {/* Decorative underline */}
        <div className="underline w-20 h-1 bg-green-400 rounded-full mb-4"></div>
        <p className="values-subtitle text-gray-300 text-base md:text-lg max-w-xl">
          The principles that guide everything we do and shape our commitment to care.
        </p>
      </div>

      {/* Values Cards */}
      <div className="values-container max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 px-6">
        {coreValues.map((value, index) => (
          <div
            key={index}
            className="value-card bg-gray-800 rounded-3xl shadow-xl p-8 flex flex-col items-center text-center transition-all duration-300 hover:scale-105 hover:shadow-green-400/20"
          >
            <div className="value-icon mb-6">
              {value.icon}
            </div>
            <h3 className="value-title text-2xl font-semibold text-white mt-5">
              {value.title}
            </h3>
            <p className="value-description text-gray-300 mt-3 text-sm md:text-base">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Value;