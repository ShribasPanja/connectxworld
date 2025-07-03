"use client";

import { Star, Quote, ArrowLeft, ArrowRight } from "lucide-react";
import { useState } from "react";

export default function Testimonials() {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  const testimonials = [
    {
      name: "Alex Thompson",
      role: "CEO, TechStart Inc.",
      content:
        "ConnectXWorld connected me with a business strategist who helped us secure $2M in Series A funding. The platform made finding the right expert incredibly easy.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      company: "TechStart Inc.",
      result: "$2M Funding Secured",
    },
    {
      name: "Maria Rodriguez",
      role: "Marketing Director, GrowthCo",
      content:
        "The marketing consultant I found through ConnectXWorld helped us increase our conversion rate by 340% in just 3 months. Absolutely game-changing advice!",
      rating: 5,
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      company: "GrowthCo",
      result: "340% Conversion Increase",
    },
    {
      name: "James Wilson",
      role: "Founder, InnovateLab",
      content:
        "I was struggling with product-market fit until I connected with an expert through this platform. Their insights helped us pivot successfully and find our niche.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      company: "InnovateLab",
      result: "Successful Pivot",
    },
    {
      name: "Sarah Chen",
      role: "Operations Manager, ScaleCorp",
      content:
        "The operations consultant helped us streamline our processes and reduce costs by 25% while improving efficiency. The ROI was immediate and substantial.",
      rating: 5,
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      company: "ScaleCorp",
      result: "25% Cost Reduction",
    },
  ];

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Success Stories from Our Community
          </h2>
          <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
            Real results from real businesses. See how ConnectXWorld has helped
            entrepreneurs and companies achieve their goals.
          </p>
        </div>

        <div className="relative">
          <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 animate-scale-in">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center mb-6">
                  <Quote className="w-12 h-12 text-blue-600 mr-4" />
                  <div className="flex">
                    {[
                      ...Array(testimonials[currentTestimonial]?.rating ?? 0),
                    ].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 text-yellow-400 fill-current"
                      />
                    ))}
                  </div>
                </div>

                <blockquote className="text-xl md:text-2xl text-gray-700 leading-relaxed mb-8">
                  "{testimonials[currentTestimonial]?.content}"
                </blockquote>

                <div className="flex items-center">
                  <img
                    src={testimonials[currentTestimonial]?.image}
                    alt={testimonials[currentTestimonial]?.name}
                    className="w-16 h-16 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-lg md:text-3xl text-gray-900">
                      {testimonials[currentTestimonial]?.name}
                    </h4>
                    <p className="text-gray-600 md:text-xl">
                      {testimonials[currentTestimonial]?.role}
                    </p>
                    <p className="text-blue-600 font-medium md:text-lg">
                      {testimonials[currentTestimonial]?.company}
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-center">
                <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 text-white mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold mb-4">
                    Result Achieved
                  </h3>
                  <div className="text-4xl md:text-6xl font-bold mb-2">
                    {testimonials[currentTestimonial]?.result}
                  </div>
                  <p className="text-blue-100 md:text-lg">
                    Through expert consultation
                  </p>
                </div>

                <div className="flex justify-center space-x-4">
                  <button
                    onClick={prevTestimonial}
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full transition-colors"
                  >
                    <ArrowLeft size={20} />
                  </button>
                  <button
                    onClick={nextTestimonial}
                    className="bg-blue-600 hover:bg-blue-700 text-white p-3 rounded-full transition-colors"
                  >
                    <ArrowRight size={20} />
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-8 space-x-2">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-2xl shadow-lg card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-3"
                />
                <div>
                  <h4 className="font-semibold text-gray-900 md:text-2xl">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm md:text-lg text-gray-600">
                    {testimonial.company}
                  </p>
                </div>
              </div>

              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-4 h-4 text-yellow-400 fill-current"
                  />
                ))}
              </div>

              <p className="text-gray-700 text-sm md:text-xl leading-relaxed">
                "{testimonial.content.substring(0, 120)}..."
              </p>

              <div className="mt-4 pt-4 border-t border-gray-100">
                <span className="text-green-600 font-medium text-sm md:text-lg">
                  {testimonial.result}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
