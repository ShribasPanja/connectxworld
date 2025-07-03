"use client";

import {
  Shield,
  Clock,
  CreditCard,
  MessageSquare,
  Star,
  Users,
  CheckCircle,
  Headphones,
} from "lucide-react";

export default function Features() {
  const features = [
    {
      icon: Shield,
      title: "Verified Professionals",
      description:
        "All consultants undergo rigorous background checks and skill verification before joining our platform.",
      highlight: "100% Verified",
    },
    {
      icon: Clock,
      title: "Flexible Scheduling",
      description:
        "Book consultations that fit your schedule with instant confirmation and calendar integration.",
      highlight: "24/7 Booking",
    },
    {
      icon: CreditCard,
      title: "Secure Payments",
      description:
        "Protected transactions with escrow service. Pay only after successful consultation completion.",
      highlight: "Money-Back Guarantee",
    },
    {
      icon: MessageSquare,
      title: "Multiple Communication",
      description:
        "Choose from video calls, phone consultations, or text-based advice based on your preference.",
      highlight: "Your Choice",
    },
    {
      icon: Star,
      title: "Quality Assurance",
      description:
        "Rate and review every consultation. Our quality team ensures consistently high standards.",
      highlight: "4.9/5 Average Rating",
    },
    {
      icon: Users,
      title: "Community Support",
      description:
        "Join our community of entrepreneurs and professionals for networking and knowledge sharing.",
      highlight: "50K+ Members",
    },
    {
      icon: CheckCircle,
      title: "Success Tracking",
      description:
        "Track your progress with follow-up sessions and implementation support from consultants.",
      highlight: "Proven Results",
    },
    {
      icon: Headphones,
      title: "24/7 Support",
      description:
        "Our customer success team is always available to help with any questions or issues.",
      highlight: "Always Here",
    },
  ];

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Why Choose ConnectXWorld?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We've built the most comprehensive platform for professional
            consultations, ensuring quality, security, and success for every
            interaction.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-4 feature-icon">
                <feature.icon className="w-7 h-7 text-blue-600" />
              </div>

              <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs font-medium mb-3 inline-block">
                {feature.highlight}
              </div>

              <h3 className="text-lg font-semibold text-gray-900 mb-3">
                {feature.title}
              </h3>

              <p className="text-gray-600 text-sm leading-relaxed">
                {feature.description}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-3xl p-8 md:p-12 shadow-xl animate-fade-in">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-gray-900 mb-6">
                Ready to Transform Your Business?
              </h3>
              <p className="text-lg text-gray-600 mb-8">
                Join thousands of successful entrepreneurs and business leaders
                who have accelerated their growth with expert guidance from
                ConnectXWorld.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
                  Get Started Today
                </button>
                <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-full hover:border-blue-600 hover:text-blue-600 transition-colors font-medium">
                  Learn More
                </button>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="bg-blue-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-blue-600 mb-2">
                  10K+
                </div>
                <div className="text-sm text-gray-600">
                  Active Professionals
                </div>
              </div>
              <div className="bg-green-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-green-600 mb-2">
                  50K+
                </div>
                <div className="text-sm text-gray-600">
                  Successful Consultations
                </div>
              </div>
              <div className="bg-purple-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-purple-600 mb-2">
                  4.9★
                </div>
                <div className="text-sm text-gray-600">Average Rating</div>
              </div>
              <div className="bg-orange-50 p-6 rounded-2xl text-center">
                <div className="text-3xl font-bold text-orange-600 mb-2">
                  95%
                </div>
                <div className="text-sm text-gray-600">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
