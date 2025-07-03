'use client';

import { TrendingUp, Users, Cog, Target, BarChart3, Shield } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: TrendingUp,
      title: "Strategic Planning",
      description: "Comprehensive strategic planning services to align your business goals with market opportunities and drive sustainable growth.",
      features: ["Market Analysis", "Competitive Intelligence", "Growth Strategy"]
    },
    {
      icon: Users,
      title: "Digital Transformation",
      description: "Guide your organization through digital transformation with cutting-edge technologies and best practices.",
      features: ["Technology Integration", "Process Automation", "Digital Culture"]
    },
    {
      icon: Cog,
      title: "Process Optimization",
      description: "Streamline operations and eliminate inefficiencies to maximize productivity and reduce costs.",
      features: ["Workflow Analysis", "Automation Solutions", "Performance Metrics"]
    },
    {
      icon: Target,
      title: "Performance Management",
      description: "Develop comprehensive performance management systems to track, measure, and improve business outcomes.",
      features: ["KPI Development", "Performance Tracking", "Improvement Plans"]
    },
    {
      icon: BarChart3,
      title: "Data Analytics",
      description: "Leverage data-driven insights to make informed decisions and identify new opportunities for growth.",
      features: ["Business Intelligence", "Predictive Analytics", "Reporting Systems"]
    },
    {
      icon: Shield,
      title: "Risk Management",
      description: "Identify, assess, and mitigate business risks to protect your organization and ensure continuity.",
      features: ["Risk Assessment", "Mitigation Strategies", "Compliance Management"]
    }
  ];

  return (
    <section id="services" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Our Services
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Comprehensive consulting solutions designed to transform your business 
            and drive measurable results across all areas of operation.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="card-hover bg-white p-8 rounded-xl shadow-lg animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="bg-red-100 w-16 h-16 rounded-xl flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-red-700" />
              </div>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                {service.description}
              </p>
              
              <ul className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center text-sm text-gray-500">
                    <div className="w-2 h-2 bg-red-700 rounded-full mr-3"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}