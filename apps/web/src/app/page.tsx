"use client";

import { useState } from "react";
import {
  Search,
  Star,
  Clock,
  DollarSign,
  Users,
  Shield,
  Zap,
  Globe,
  ArrowRight,
  Sparkles,
  TrendingUp,
} from "lucide-react";
import { Button } from "@repo/ui/components/base/button";
import { Input } from "@repo/ui/components/base/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/base/card";
import { Badge } from "@repo/ui/components/base/badge";

const professionals = [
  {
    id: 1,
    name: "Dr. Sarah Johnson",
    title: "Business Strategy Consultant",
    rating: 4.9,
    reviews: 127,
    hourlyRate: 150,
    image:
      "https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400",
    expertise: ["Business Strategy", "Market Analysis", "Growth Planning"],
    availability: "Available today",
    gradient: "from-emerald-400 to-cyan-400",
  },
  {
    id: 2,
    name: "Michael Chen",
    title: "Tech Innovation Expert",
    rating: 4.8,
    reviews: 89,
    hourlyRate: 200,
    image:
      "https://images.pexels.com/photos/3785074/pexels-photo-3785074.jpeg?auto=compress&cs=tinysrgb&w=400",
    expertise: ["AI/ML", "Product Development", "Digital Transformation"],
    availability: "Available tomorrow",
    gradient: "from-purple-400 to-pink-400",
  },
  {
    id: 3,
    name: "Elena Rodriguez",
    title: "Marketing & Branding Strategist",
    rating: 4.9,
    reviews: 156,
    hourlyRate: 120,
    image:
      "https://images.pexels.com/photos/3756679/pexels-photo-3756679.jpeg?auto=compress&cs=tinysrgb&w=400",
    expertise: ["Digital Marketing", "Brand Strategy", "Content Marketing"],
    availability: "Available today",
    gradient: "from-orange-400 to-red-400",
  },
];

const categories = [
  {
    name: "Business Strategy",
    count: 45,
    icon: "📊",
    gradient: "from-blue-500 to-indigo-600",
    hoverGradient: "from-blue-600 to-indigo-700",
  },
  {
    name: "Technology",
    count: 67,
    icon: "💻",
    gradient: "from-purple-500 to-pink-600",
    hoverGradient: "from-purple-600 to-pink-700",
  },
  {
    name: "Marketing",
    count: 34,
    icon: "📈",
    gradient: "from-green-500 to-emerald-600",
    hoverGradient: "from-green-600 to-emerald-700",
  },
  {
    name: "Finance",
    count: 28,
    icon: "💰",
    gradient: "from-yellow-500 to-orange-600",
    hoverGradient: "from-yellow-600 to-orange-700",
  },
  {
    name: "Legal",
    count: 19,
    icon: "⚖️",
    gradient: "from-gray-500 to-slate-600",
    hoverGradient: "from-gray-600 to-slate-700",
  },
  {
    name: "Healthcare",
    count: 23,
    icon: "🏥",
    gradient: "from-red-500 to-rose-600",
    hoverGradient: "from-red-600 to-rose-700",
  },
];

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-lg shadow-blue-500/5 w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between sm:h-25 h-16">
            <div className="flex items-center space-x-3 group">
              <div className="relative">
                <Globe className="sm:h-15 sm:w-15 h-8 w-8 text-blue-600 group-hover:text-purple-600 transition-all duration-300 group-hover:rotate-12" />
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
              </div>
              <span className="sm:text-4xl text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-blue-600 transition-all duration-500">
                ConnectXWorld
              </span>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a
                href="#"
                className="text-slate-600 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 font-medium relative group"
              >
                Find Experts
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 font-medium relative group"
              >
                How it Works
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <a
                href="#"
                className="text-slate-600 hover:text-transparent hover:bg-gradient-to-r hover:from-blue-600 hover:to-purple-600 hover:bg-clip-text transition-all duration-300 font-medium relative group"
              >
                Become an Expert
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-600 to-purple-600 group-hover:w-full transition-all duration-300"></span>
              </a>
              <Button
                variant="outline"
                className="border-2 border-blue-200 text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300 relative overflow-hidden group">
                <span className="relative z-10">Get Started</span>
                <div className="absolute inset-0 bg-gradient-to-r from-pink-600 via-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden w-full">
        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-pink-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full px-6 py-2 mb-8 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
            <Sparkles className="h-4 w-4 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
            <span className="text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Trusted by 50,000+ professionals worldwide
            </span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-6 leading-tight">
            Connect with World-Class
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block animate-pulse">
              Professionals
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 mb-12 max-w-4xl mx-auto leading-relaxed">
            Get expert advice from industry leaders. Book consultations, solve
            problems, and accelerate your success with personalized guidance.
          </p>

          {/* Enhanced Search Bar */}
          <div className="max-w-3xl mx-auto mb-16 relative group">
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl blur opacity-25 group-hover:opacity-40 transition duration-300"></div>
            <div className="relative bg-white rounded-2xl p-2 shadow-2xl">
              <div className="flex items-center">
                <div className="flex-1 relative">
                  <Search className="absolute left-6 top-1/2 transform -translate-y-1/2 text-slate-400 h-6 w-6" />
                  <Input
                    type="text"
                    placeholder="Search for expertise (e.g., business strategy, marketing, tech...)"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-14 pr-4 py-6 text-lg border-0 focus:ring-0 bg-transparent placeholder:text-slate-400"
                  />
                </div>
                <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group">
                  Search
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-300" />
                </Button>
              </div>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                number: "1,200+",
                label: "Expert Professionals",
                gradient: "from-blue-500 to-cyan-500",
                icon: Users,
              },
              {
                number: "50,000+",
                label: "Consultations Completed",
                gradient: "from-purple-500 to-pink-500",
                icon: TrendingUp,
              },
              {
                number: "4.9★",
                label: "Average Rating",
                gradient: "from-yellow-500 to-orange-500",
                icon: Star,
              },
            ].map((stat, index) => (
              <div key={index} className="group cursor-pointer">
                <div className="bg-white/80 backdrop-blur-sm rounded-3xl p-8 border border-white/50 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 relative overflow-hidden">
                  <div
                    className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                  ></div>
                  <div className="relative z-10">
                    <div
                      className={`w-16 h-16 bg-gradient-to-br ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                    >
                      <stat.icon className="h-8 w-8 text-white" />
                    </div>
                    <div
                      className={`text-4xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-105 transition-transform duration-300`}
                    >
                      {stat.number}
                    </div>
                    <div className="text-slate-600 font-medium">
                      {stat.label}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Categories */}
      <section className="py-20 bg-white relative w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Explore by Category
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Discover experts across diverse fields and industries
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {categories.map((category, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 cursor-pointer border-0 bg-white hover:-translate-y-3 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-100 transition-all duration-500`}
                ></div>
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${category.hoverGradient} opacity-0 group-hover:opacity-90 transition-all duration-700 delay-100`}
                ></div>
                <CardContent className="p-8 text-center relative z-10">
                  <div className="text-4xl mb-4 group-hover:scale-125 transition-transform duration-300 group-hover:animate-bounce">
                    {category.icon}
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 group-hover:text-white transition-colors duration-300 text-lg">
                    {category.name}
                  </h3>
                  <p className="text-sm text-slate-500 group-hover:text-white/80 transition-colors duration-300">
                    {category.count} experts
                  </p>
                  <div className="mt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 delay-200">
                    <ArrowRight className="h-5 w-5 text-white mx-auto" />
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Featured Professionals */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 relative overflow-hidden w-full">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-gradient-to-br from-pink-400/10 to-orange-600/10 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              Top-Rated Professionals
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Connect with industry leaders who have helped thousands succeed
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {professionals.map((professional, index) => (
              <Card
                key={professional.id}
                className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:-translate-y-4 relative overflow-hidden"
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${professional.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500"></div>

                <CardHeader className="pb-4 relative z-10">
                  <div className="flex items-start space-x-4">
                    <div className="relative group-hover:scale-110 transition-transform duration-300">
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="w-20 h-20 rounded-full object-cover border-4 border-white shadow-lg"
                      />
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${professional.gradient} rounded-full opacity-0 group-hover:opacity-50 blur transition-all duration-300`}
                      ></div>
                    </div>
                    <div className="flex-1">
                      <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {professional.name}
                      </CardTitle>
                      <CardDescription className="text-slate-600 text-base">
                        {professional.title}
                      </CardDescription>
                      <div className="flex items-center space-x-2 mt-3">
                        <div className="flex items-center bg-yellow-50 px-3 py-1 rounded-full">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-bold text-yellow-700 ml-1">
                            {professional.rating}
                          </span>
                        </div>
                        <span className="text-sm text-slate-500">
                          ({professional.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0 relative z-10">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {professional.expertise.map((skill, skillIndex) => (
                        <Badge
                          key={skillIndex}
                          className={`bg-gradient-to-r ${professional.gradient} text-white hover:scale-105 transition-transform duration-200 shadow-lg`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="bg-green-100 p-2 rounded-full">
                          <DollarSign className="h-5 w-5 text-green-600" />
                        </div>
                        <div>
                          <span className="font-bold text-2xl text-slate-900">
                            ${professional.hourlyRate}
                          </span>
                          <span className="text-slate-500">/hour</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1 text-sm bg-green-50 px-3 py-2 rounded-full">
                        <Clock className="h-4 w-4 text-green-600" />
                        <span className="text-green-700 font-medium">
                          {professional.availability}
                        </span>
                      </div>
                    </div>
                    <Button
                      className={`w-full bg-gradient-to-r ${professional.gradient} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-white font-semibold py-3 group relative overflow-hidden`}
                    >
                      <span className="relative z-10 flex items-center justify-center">
                        Book Consultation
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </span>
                      <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-200 text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 px-8 py-4 text-lg font-semibold"
            >
              View All Professionals
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced How It Works */}
      <section className="py-20 bg-white relative overflow-hidden w-full">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-gradient-to-br from-blue-400/5 to-purple-600/5 rounded-full blur-3xl"></div>
        </div>

        <div className="w-full mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
              How ConnectXWorld Works
            </h2>
            <p className="text-xl text-slate-600 max-w-2xl mx-auto">
              Three simple steps to connect with world-class expertise
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: Search,
                title: "1. Find Your Expert",
                description:
                  "Browse our curated network of professionals or search by expertise, industry, or specific skills you need.",
                gradient: "from-blue-500 to-cyan-500",
                delay: "0",
              },
              {
                icon: Users,
                title: "2. Book & Connect",
                description:
                  "Schedule a consultation at your convenience. Choose from video calls, phone calls, or in-person meetings.",
                gradient: "from-purple-500 to-pink-500",
                delay: "200",
              },
              {
                icon: Zap,
                title: "3. Get Results",
                description:
                  "Receive personalized advice, actionable insights, and expert guidance to achieve your goals faster.",
                gradient: "from-green-500 to-emerald-500",
                delay: "400",
              },
            ].map((step, index) => (
              <div
                key={index}
                className={`text-center group hover:-translate-y-4 transition-all duration-500 delay-${step.delay}`}
              >
                <div className="relative mb-8">
                  <div
                    className={`w-24 h-24 bg-gradient-to-br ${step.gradient} rounded-3xl flex items-center justify-center mx-auto shadow-2xl group-hover:shadow-3xl group-hover:scale-110 transition-all duration-500 relative overflow-hidden`}
                  >
                    <step.icon className="h-12 w-12 text-white relative z-10" />
                    <div className="absolute inset-0 bg-white/20 transform scale-0 group-hover:scale-100 transition-transform duration-500 rounded-3xl"></div>
                  </div>
                  <div
                    className={`absolute -inset-2 bg-gradient-to-br ${step.gradient} rounded-3xl opacity-0 group-hover:opacity-20 blur-xl transition-all duration-500`}
                  ></div>
                </div>
                <h3 className="text-2xl font-bold text-slate-900 mb-4 group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                  {step.title}
                </h3>
                <p className="text-slate-600 leading-relaxed text-lg group-hover:text-slate-700 transition-colors duration-300">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Enhanced Trust & Security */}
      <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100 w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-12 md:p-16 shadow-2xl border border-white/50 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
            <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="text-center mb-12 relative z-10">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-3xl mb-6 shadow-2xl group-hover:scale-110 transition-transform duration-300">
                <Shield className="h-10 w-10 text-white" />
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-slate-900 mb-6">
                Secure & Trusted Platform
              </h2>
              <p className="text-xl text-slate-600 max-w-3xl mx-auto leading-relaxed">
                Your privacy and security are our top priorities. All
                consultations and payments are protected with enterprise-grade
                security.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
              {[
                {
                  icon: Shield,
                  title: "Verified Experts",
                  description:
                    "All professionals are thoroughly vetted and verified",
                  gradient: "from-blue-500 to-cyan-500",
                },
                {
                  icon: DollarSign,
                  title: "Secure Payments",
                  description: "Bank-level encryption for all transactions",
                  gradient: "from-green-500 to-emerald-500",
                },
                {
                  icon: Star,
                  title: "Quality Guarantee",
                  description: "Satisfaction guaranteed or your money back",
                  gradient: "from-purple-500 to-pink-500",
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  className="text-center group/item hover:-translate-y-2 transition-all duration-300"
                >
                  <div
                    className={`w-16 h-16 bg-gradient-to-br ${feature.gradient} rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover/item:shadow-xl group-hover/item:scale-110 transition-all duration-300`}
                  >
                    <feature.icon className="h-8 w-8 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3 text-lg group-hover/item:text-blue-600 transition-colors duration-300">
                    {feature.title}
                  </h3>
                  <p className="text-slate-600 group-hover/item:text-slate-700 transition-colors duration-300">
                    {feature.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 relative overflow-hidden w-full">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-blue-600/90 via-purple-600/90 to-pink-600/90"></div>
          <div className="absolute top-20 left-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-20 w-64 h-64 bg-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="w-full mx-auto text-center relative z-10 px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-8">
            Ready to Connect with Experts?
          </h2>
          <p className="text-xl md:text-2xl text-blue-100 mb-12 max-w-3xl mx-auto leading-relaxed">
            Join thousands of successful individuals who've accelerated their
            growth with expert guidance from ConnectXWorld.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Button
              size="lg"
              className="bg-white text-blue-600 hover:bg-blue-50 hover:text-purple-600 text-xl px-12 py-6 font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 group"
            >
              Find an Expert
              <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-blue-600 text-xl px-12 py-6 font-bold shadow-2xl hover:shadow-3xl hover:-translate-y-1 transition-all duration-300 group"
            >
              Become an Expert
              <Sparkles className="ml-3 h-6 w-6 group-hover:rotate-12 transition-transform duration-300" />
            </Button>
          </div>
        </div>
      </section>

      {/* Enhanced Footer */}
      <footer className="bg-slate-900 text-white py-16 relative overflow-hidden w-full">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600"></div>
        </div>

        <div className="w-full mx-auto relative z-10 px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="group">
              <div className="flex items-center space-x-3 mb-6">
                <div className="relative">
                  <Globe className="h-8 w-8 text-blue-400 group-hover:text-purple-400 transition-colors duration-300" />
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-0 group-hover:opacity-20 blur transition-all duration-300"></div>
                </div>
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                  ConnectXWorld
                </span>
              </div>
              <p className="text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors duration-300">
                Connecting you with world-class professionals for personalized
                consultations and expert guidance.
              </p>
            </div>
            {[
              {
                title: "For Clients",
                links: [
                  "Find Experts",
                  "How it Works",
                  "Pricing",
                  "Success Stories",
                ],
              },
              {
                title: "For Experts",
                links: [
                  "Join as Expert",
                  "Expert Resources",
                  "Earning Potential",
                  "Expert Community",
                ],
              },
              {
                title: "Support",
                links: [
                  "Help Center",
                  "Contact Us",
                  "Privacy Policy",
                  "Terms of Service",
                ],
              },
            ].map((section, index) => (
              <div key={index}>
                <h3 className="font-bold mb-6 text-lg">{section.title}</h3>
                <ul className="space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href="#"
                        className="text-slate-400 hover:text-white hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-400 hover:bg-clip-text hover:text-transparent transition-all duration-300 relative group"
                      >
                        {link}
                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-400 to-purple-400 group-hover:w-full transition-all duration-300"></span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="border-t border-slate-800 mt-12 pt-8 text-center">
            <p className="text-slate-400">
              &copy; 2025 ConnectXWorld. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
