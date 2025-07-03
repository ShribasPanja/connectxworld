'use client';

import { CheckCircle, Award, Users, TrendingUp } from 'lucide-react';

export default function About() {
  const stats = [
    { number: "500+", label: "Projects Completed", icon: CheckCircle },
    { number: "15+", label: "Years Experience", icon: Award },
    { number: "200+", label: "Happy Clients", icon: Users },
    { number: "95%", label: "Success Rate", icon: TrendingUp }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className="animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Your mind multiplied.
              <br />
              Your impact amplified.
            </h2>
            
            <p className="text-lg text-gray-600 mb-8 leading-relaxed">
              At ConsultxWeb, we believe that every business has untapped potential. 
              Our mission is to unlock that potential through strategic consulting, 
              innovative solutions, and deep industry expertise.
            </p>
            
            <div className="space-y-4">
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Proven Methodology</h4>
                  <p className="text-gray-600">Battle-tested frameworks that deliver results across industries.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Expert Team</h4>
                  <p className="text-gray-600">Seasoned professionals with deep domain expertise.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <CheckCircle className="w-6 h-6 text-green-500 mr-3 mt-0.5" />
                <div>
                  <h4 className="font-semibold text-gray-900">Tailored Solutions</h4>
                  <p className="text-gray-600">Customized strategies that fit your unique challenges.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="animate-scale-in">
            <div className="bg-gradient-to-br from-red-600 to-red-800 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8 text-center">Our Track Record</h3>
              
              <div className="grid grid-cols-2 gap-6">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="bg-white/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6" />
                    </div>
                    <div className="text-3xl font-bold mb-1">{stat.number}</div>
                    <div className="text-sm opacity-90">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="mt-8 bg-gray-50 rounded-xl p-6">
              <blockquote className="text-lg text-gray-700 italic mb-4">
                "ConsultxWeb transformed our approach to business strategy. Their insights 
                and expertise helped us achieve a 40% increase in operational efficiency."
              </blockquote>
              <cite className="text-sm text-gray-500">— Sarah Chen, CEO of TechCorp</cite>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}