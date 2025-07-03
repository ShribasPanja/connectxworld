"use client";

import { ArrowRight, Play, Star, Users, Calendar, Shield } from "lucide-react";

export default function Hero() {
  const stats = [
    { icon: Users, number: "10K+", label: "Verified Professionals" },
    { icon: Calendar, number: "50K+", label: "Consultations Booked" },
    { icon: Star, number: "4.9", label: "Average Rating" },
    { icon: Shield, number: "100%", label: "Secure Payments" },
  ];

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 via-white to-green-50"
    >
      <div className="absolute inset-0 bg-[url('https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=1920&h=1080&fit=crop')] bg-cover bg-center opacity-3"></div>

      <div className="relative z-10 w-full px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="animate-fade-in">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6">
              <span className="w-2 h-2 bg-blue-600 rounded-full mr-2 animate-pulse"></span>
              Trusted by 10,000+ professionals worldwide
            </div>

            <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-tight">
              Connect with
              <br />
              <span className="gradient-text">Expert Professionals</span>
              <br />
              Instantly
            </h1>

            <p className="text-xl text-gray-600 mb-8 leading-relaxed">
              Book consultations with verified professionals across industries.
              Get expert advice, flexible scheduling, and secure payments - all
              in one platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button className="group bg-blue-600 text-white px-8 py-4 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2">
                Find a Professional
                <ArrowRight
                  size={20}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="group flex items-center justify-center gap-3 border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300">
                <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center group-hover:bg-blue-600 transition-colors">
                  <Play
                    size={16}
                    className="text-blue-600 group-hover:text-white ml-1"
                  />
                </div>
                Watch Demo
              </button>
            </div>

            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <stat.icon className="w-6 h-6 text-blue-600" />
                  </div>
                  <div className="text-2xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-sm text-gray-600">{stat.label}</div>
                </div>
              ))}
            </div>
          </div>

          <div className="animate-scale-in lg:animate-float">
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-8 transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <div className="flex items-center mb-6">
                  <img
                    src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop"
                    alt="Professional"
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h3 className="font-semibold text-gray-900">
                      Dr. Sarah Johnson
                    </h3>
                    <p className="text-gray-600">
                      Business Strategy Consultant
                    </p>
                    <div className="flex items-center mt-1">
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className="w-4 h-4 text-yellow-400 fill-current"
                          />
                        ))}
                      </div>
                      <span className="text-sm text-gray-500 ml-2">
                        (127 reviews)
                      </span>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Consultation Rate</span>
                    <span className="font-semibold text-gray-900">
                      $150/hour
                    </span>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-gray-600">Next Available</span>
                    <span className="font-semibold text-green-600">
                      Today 3:00 PM
                    </span>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-3 rounded-xl hover:bg-blue-700 transition-colors">
                    Book Consultation
                  </button>
                </div>
              </div>

              <div className="absolute -top-4 -right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium animate-pulse">
                Available Now
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-blue-600 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-blue-600 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
}
