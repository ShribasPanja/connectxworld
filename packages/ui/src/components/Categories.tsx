"use client";

import {
  Briefcase,
  TrendingUp,
  Code,
  Palette,
  Heart,
  Scale,
  DollarSign,
  Users,
  Lightbulb,
  Globe,
  BookOpen,
  Zap,
} from "lucide-react";

export default function Categories() {
  const categories = [
    {
      icon: Briefcase,
      name: "Business Strategy",
      professionals: 1250,
      avgRate: 125,
      color: "bg-blue-100 text-blue-600 hover:bg-blue-600 hover:text-white",
    },
    {
      icon: TrendingUp,
      name: "Marketing & Sales",
      professionals: 980,
      avgRate: 95,
      color: "bg-green-100 text-green-600 hover:bg-green-600 hover:text-white",
    },
    {
      icon: Code,
      name: "Technology & IT",
      professionals: 1450,
      avgRate: 110,
      color:
        "bg-purple-100 text-purple-600 hover:bg-purple-600 hover:text-white",
    },
    {
      icon: Palette,
      name: "Design & Creative",
      professionals: 750,
      avgRate: 85,
      color: "bg-pink-100 text-pink-600 hover:bg-pink-600 hover:text-white",
    },
    {
      icon: Heart,
      name: "Health & Wellness",
      professionals: 650,
      avgRate: 140,
      color: "bg-red-100 text-red-600 hover:bg-red-600 hover:text-white",
    },
    {
      icon: Scale,
      name: "Legal & Compliance",
      professionals: 420,
      avgRate: 200,
      color: "bg-gray-100 text-gray-600 hover:bg-gray-600 hover:text-white",
    },
    {
      icon: DollarSign,
      name: "Finance & Investment",
      professionals: 580,
      avgRate: 175,
      color:
        "bg-yellow-100 text-yellow-600 hover:bg-yellow-600 hover:text-white",
    },
    {
      icon: Users,
      name: "HR & Management",
      professionals: 390,
      avgRate: 120,
      color:
        "bg-indigo-100 text-indigo-600 hover:bg-indigo-600 hover:text-white",
    },
    {
      icon: Lightbulb,
      name: "Innovation & R&D",
      professionals: 280,
      avgRate: 160,
      color:
        "bg-orange-100 text-orange-600 hover:bg-orange-600 hover:text-white",
    },
    {
      icon: Globe,
      name: "International Business",
      professionals: 320,
      avgRate: 145,
      color: "bg-teal-100 text-teal-600 hover:bg-teal-600 hover:text-white",
    },
    {
      icon: BookOpen,
      name: "Education & Training",
      professionals: 450,
      avgRate: 90,
      color: "bg-cyan-100 text-cyan-600 hover:bg-cyan-600 hover:text-white",
    },
    {
      icon: Zap,
      name: "Startup & Entrepreneurship",
      professionals: 680,
      avgRate: 130,
      color: "bg-lime-100 text-lime-600 hover:bg-lime-600 hover:text-white",
    },
  ];

  return (
    <section id="categories" className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Explore Professional Categories
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Find experts across diverse industries and specializations. From
            business strategy to creative design, we have professionals for
            every need.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {categories.map((category, index) => (
            <div
              key={index}
              className="group cursor-pointer animate-scale-in"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                <div
                  className={`w-14 h-14 ${category.color} rounded-xl flex items-center justify-center mb-4 transition-all duration-300`}
                >
                  <category.icon size={24} />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
                  {category.name}
                </h3>

                <div className="space-y-1 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Professionals:</span>
                    <span className="font-medium">
                      {category.professionals.toLocaleString()}
                    </span>
                  </div>
                  <div className="flex justify-between">
                    <span>Avg. Rate:</span>
                    <span className="font-medium">${category.avgRate}/hr</span>
                  </div>
                </div>

                <button className="w-full mt-4 bg-gray-100 text-gray-700 py-2 rounded-lg hover:bg-blue-600 hover:text-white transition-all duration-300 text-sm font-medium">
                  Browse Professionals
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-gray-600 mb-6">
            Can't find your category? We're constantly adding new
            specializations.
          </p>
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
            Request New Category
          </button>
        </div>
      </div>
    </section>
  );
}
