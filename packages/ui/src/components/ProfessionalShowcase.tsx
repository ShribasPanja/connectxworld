"use client";

import { Star, MapPin, Clock, CheckCircle } from "lucide-react";

export default function ProfessionalShowcase() {
  const professionals = [
    {
      name: "Dr. Michael Chen",
      title: "Technology Consultant",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      rating: 4.9,
      reviews: 156,
      rate: 120,
      location: "San Francisco, CA",
      expertise: ["Digital Transformation", "AI Strategy", "Tech Leadership"],
      availability: "Available Today",
      verified: true,
    },
    {
      name: "Sarah Rodriguez",
      title: "Marketing Strategist",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      rating: 4.8,
      reviews: 203,
      rate: 95,
      location: "New York, NY",
      expertise: ["Brand Strategy", "Digital Marketing", "Growth Hacking"],
      availability: "Available Tomorrow",
      verified: true,
    },
    {
      name: "James Wilson",
      title: "Financial Advisor",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      rating: 5.0,
      reviews: 89,
      rate: 180,
      location: "Chicago, IL",
      expertise: ["Investment Planning", "Risk Management", "Wealth Building"],
      availability: "Available in 2 hours",
      verified: true,
    },
    {
      name: "Dr. Emily Watson",
      title: "Healthcare Consultant",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      rating: 4.9,
      reviews: 134,
      rate: 200,
      location: "Boston, MA",
      expertise: [
        "Healthcare Strategy",
        "Medical Innovation",
        "Policy Analysis",
      ],
      availability: "Available Today",
      verified: true,
    },
  ];

  return (
    <section id="professionals" className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Meet Our Top-Rated Professionals
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with verified experts across industries. All professionals
            are thoroughly vetted and rated by our community.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {professionals.map((professional, index) => (
            <div
              key={index}
              className="professional-card bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="relative">
                <img
                  src={professional.image}
                  alt={professional.name}
                  className="w-full h-64 object-cover"
                />
                <div className="absolute top-4 left-4">
                  <div className="bg-green-500 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                    <Clock size={12} />
                    {professional.availability}
                  </div>
                </div>
                {professional.verified && (
                  <div className="absolute top-4 right-4">
                    <div className="bg-blue-600 text-white p-2 rounded-full">
                      <CheckCircle size={16} />
                    </div>
                  </div>
                )}
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="font-semibold text-lg text-gray-900">
                    {professional.name}
                  </h3>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm font-medium">
                      {professional.rating}
                    </span>
                  </div>
                </div>

                <p className="text-blue-600 font-medium mb-2">
                  {professional.title}
                </p>

                <div className="flex items-center text-gray-500 text-sm mb-3">
                  <MapPin size={14} className="mr-1" />
                  {professional.location}
                </div>

                <div className="flex flex-wrap gap-1 mb-4">
                  {professional.expertise
                    .slice(0, 2)
                    .map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs"
                      >
                        {skill}
                      </span>
                    ))}
                  {professional.expertise.length > 2 && (
                    <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-full text-xs">
                      +{professional.expertise.length - 2} more
                    </span>
                  )}
                </div>

                <div className="flex items-center justify-between mb-4">
                  <div>
                    <span className="text-2xl font-bold text-gray-900">
                      ${professional.rate}
                    </span>
                    <span className="text-gray-500 text-sm">/hour</span>
                  </div>
                  <div className="text-right">
                    <div className="text-sm text-gray-500">
                      {professional.reviews} reviews
                    </div>
                  </div>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium">
                  Book Consultation
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button className="bg-gray-100 text-gray-700 px-8 py-3 rounded-full hover:bg-gray-200 transition-colors font-medium">
            View All Professionals
          </button>
        </div>
      </div>
    </section>
  );
}
