"use client";

import { Search, Calendar, CreditCard, MessageCircle } from "lucide-react";

export default function HowItWorks() {
  const steps = [
    {
      icon: Search,
      title: "Find Your Expert",
      description:
        "Browse through our verified professionals or use our smart matching system to find the perfect consultant for your needs.",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Calendar,
      title: "Book a Session",
      description:
        "Choose from available time slots that work for your schedule. Instant booking confirmation with calendar integration.",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: CreditCard,
      title: "Secure Payment",
      description:
        "Pay securely through our platform. Money is held in escrow until your consultation is completed successfully.",
      color: "bg-purple-100 text-purple-600",
    },
    {
      icon: MessageCircle,
      title: "Get Expert Advice",
      description:
        "Connect via video call, phone, or chat. Receive actionable insights and follow-up resources from your consultant.",
      color: "bg-orange-100 text-orange-600",
    },
  ];

  return (
    <section id="how-it-works" className="py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            How ConnectXWorld Works
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Getting expert advice has never been easier. Follow these simple
            steps to connect with professionals and transform your business.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {steps.map((step, index) => (
            <div
              key={index}
              className="booking-step relative animate-scale-in"
              style={{ animationDelay: `${index * 0.2}s` }}
            >
              <div className="bg-white p-8 rounded-2xl shadow-lg card-hover text-center">
                <div
                  className={`w-16 h-16 ${step.color} rounded-2xl flex items-center justify-center mx-auto mb-6 feature-icon`}
                >
                  <step.icon size={32} />
                </div>

                <div className="bg-blue-600 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold mx-auto mb-4">
                  {index + 1}
                </div>

                <h3 className="text-xl font-semibold text-gray-900 mb-4">
                  {step.title}
                </h3>

                <p className="text-gray-600 leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-8 text-white animate-fade-in">
            <h3 className="text-2xl font-bold mb-4">Ready to Get Started?</h3>
            <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
              Join thousands of satisfied clients who have transformed their
              businesses with expert guidance from ConnectXWorld professionals.
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-full hover:bg-gray-100 transition-colors font-semibold">
              Start Your Journey Today
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
