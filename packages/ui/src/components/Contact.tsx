"use client";

import { useState } from "react";
import {
  Mail,
  Phone,
  MapPin,
  Send,
  MessageCircle,
  Calendar,
  Users,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    category: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactMethods = [
    {
      icon: MessageCircle,
      title: "Live Chat",
      description: "Get instant help from our support team",
      action: "Start Chat",
      color: "bg-blue-100 text-blue-600",
    },
    {
      icon: Calendar,
      title: "Schedule a Demo",
      description: "See how ConnectXWorld can help your business",
      action: "Book Demo",
      color: "bg-green-100 text-green-600",
    },
    {
      icon: Users,
      title: "Join as Professional",
      description: "Start earning by sharing your expertise",
      action: "Apply Now",
      color: "bg-purple-100 text-purple-600",
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="w-full px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 animate-slide-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Get in Touch
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about ConnectXWorld? Want to join as a professional?
            We're here to help you succeed.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-gray-50 p-8 rounded-2xl text-center card-hover animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div
                className={`w-16 h-16 ${method.color} rounded-2xl flex items-center justify-center mx-auto mb-6`}
              >
                <method.icon size={28} />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">
                {method.title}
              </h3>
              <p className="text-gray-600 mb-6">{method.description}</p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
                {method.action}
              </button>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="animate-slide-up">
            <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-3xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-8">Contact Information</h3>

              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Email</h4>
                    <p className="opacity-90">hello@connectxworld.com</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Phone</h4>
                    <p className="opacity-90">+1 (555) 123-4567</p>
                  </div>
                </div>

                <div className="flex items-center">
                  <div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center mr-4">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <h4 className="font-semibold">Headquarters</h4>
                    <p className="opacity-90">San Francisco, CA</p>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-white/20">
                <h4 className="font-semibold mb-4">Follow Us</h4>
                <div className="flex space-x-4">
                  <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">Li</span>
                  </div>
                  <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">Tw</span>
                  </div>
                  <div className="bg-white/10 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer">
                    <span className="text-sm font-bold">Fb</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 bg-white/10 rounded-2xl p-6">
                <h4 className="font-semibold mb-2">Quick Stats</h4>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div>
                    <div className="text-2xl font-bold">24/7</div>
                    <div className="opacity-75">Support Available</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold">&lt;2h</div>
                    <div className="opacity-75">Response Time</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="animate-scale-in">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your full name"
                    required
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="your@email.com"
                    required
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Inquiry Type
                  </label>
                  <select
                    name="category"
                    value={formData.category}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors"
                  >
                    <option value="">Select category</option>
                    <option value="general">General Inquiry</option>
                    <option value="professional">Join as Professional</option>
                    <option value="enterprise">Enterprise Solutions</option>
                    <option value="support">Technical Support</option>
                    <option value="partnership">Partnership</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Message *
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={6}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors resize-none"
                  placeholder="Tell us about your needs or questions..."
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 flex items-center justify-center gap-2 group font-medium"
              >
                Send Message
                <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>

              <p className="text-sm text-gray-500 text-center">
                We'll get back to you within 24 hours. For urgent matters,
                please call us directly.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
