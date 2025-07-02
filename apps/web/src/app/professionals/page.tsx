"use client";

import { useState } from "react";
import {
  Search,
  Filter,
  Star,
  Clock,
  DollarSign,
  MapPin,
  Calendar,
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
    location: "New York, USA",
    languages: ["English", "Spanish"],
    experience: "12+ years",
    description:
      "Former McKinsey consultant specializing in business transformation and strategic planning for Fortune 500 companies.",
    gradient: "from-emerald-400 to-cyan-400",
    hoverGradient: "from-emerald-500 to-cyan-500",
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
    location: "San Francisco, USA",
    languages: ["English", "Mandarin"],
    experience: "15+ years",
    description:
      "Former Google Principal Engineer with expertise in AI/ML and leading digital transformation initiatives.",
    gradient: "from-purple-400 to-pink-400",
    hoverGradient: "from-purple-500 to-pink-500",
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
    location: "London, UK",
    languages: ["English", "Spanish", "French"],
    experience: "10+ years",
    description:
      "Award-winning marketing strategist who has worked with leading brands like Nike, Apple, and Coca-Cola.",
    gradient: "from-orange-400 to-red-400",
    hoverGradient: "from-orange-500 to-red-500",
  },
  {
    id: 4,
    name: "David Park",
    title: "Financial Planning Advisor",
    rating: 4.7,
    reviews: 94,
    hourlyRate: 180,
    image:
      "https://images.pexels.com/photos/3777943/pexels-photo-3777943.jpeg?auto=compress&cs=tinysrgb&w=400",
    expertise: ["Investment Strategy", "Risk Management", "Financial Planning"],
    availability: "Available this week",
    location: "Toronto, Canada",
    languages: ["English", "Korean"],
    experience: "8+ years",
    description:
      "CFA charterholder specializing in portfolio management and financial planning for high-net-worth individuals.",
    gradient: "from-blue-400 to-indigo-400",
    hoverGradient: "from-blue-500 to-indigo-500",
  },
  {
    id: 5,
    name: "Dr. Priya Patel",
    title: "Healthcare Innovation Consultant",
    rating: 4.8,
    reviews: 73,
    hourlyRate: 220,
    image:
      "https://images.pexels.com/photos/3844581/pexels-photo-3844581.jpeg?auto=compress&cs=tinysrgb&w=400",
    expertise: ["Healthcare Strategy", "Digital Health", "Regulatory Affairs"],
    availability: "Available next week",
    location: "Boston, USA",
    languages: ["English", "Hindi"],
    experience: "14+ years",
    description:
      "Former FDA advisor and healthcare executive with expertise in medical device innovation and digital health.",
    gradient: "from-teal-400 to-green-400",
    hoverGradient: "from-teal-500 to-green-500",
  },
  {
    id: 6,
    name: "James Wilson",
    title: "Legal Technology Specialist",
    rating: 4.6,
    reviews: 62,
    hourlyRate: 190,
    image:
      "https://images.pexels.com/photos/3760790/pexels-photo-3760790.jpeg?auto=compress&cs=tinysrgb&w=400",
    expertise: ["Legal Tech", "Compliance", "Contract Law"],
    availability: "Available today",
    location: "Chicago, USA",
    languages: ["English"],
    experience: "11+ years",
    description:
      "Corporate lawyer turned legal tech innovator, helping companies navigate complex regulatory landscapes.",
    gradient: "from-slate-400 to-gray-400",
    hoverGradient: "from-slate-500 to-gray-500",
  },
];

const categories = [
  "All Categories",
  "Business Strategy",
  "Technology",
  "Marketing",
  "Finance",
  "Healthcare",
  "Legal",
];

const priceRanges = [
  "All Prices",
  "Under $100",
  "$100 - $150",
  "$150 - $200",
  "Over $200",
];

export default function ProfessionalsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All Prices");
  const [sortBy, setSortBy] = useState("rating");

  const filteredProfessionals = professionals.filter((professional) => {
    const matchesSearch =
      professional.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      professional.expertise.some((skill) =>
        skill.toLowerCase().includes(searchQuery.toLowerCase())
      );

    const matchesCategory =
      selectedCategory === "All Categories" ||
      professional.expertise.some((skill) =>
        skill.toLowerCase().includes(selectedCategory.toLowerCase())
      );

    const matchesPrice =
      selectedPriceRange === "All Prices" ||
      (selectedPriceRange === "Under $100" && professional.hourlyRate < 100) ||
      (selectedPriceRange === "$100 - $150" &&
        professional.hourlyRate >= 100 &&
        professional.hourlyRate <= 150) ||
      (selectedPriceRange === "$150 - $200" &&
        professional.hourlyRate >= 150 &&
        professional.hourlyRate <= 200) ||
      (selectedPriceRange === "Over $200" && professional.hourlyRate > 200);

    return matchesSearch && matchesCategory && matchesPrice;
  });

  const sortedProfessionals = [...filteredProfessionals].sort((a, b) => {
    switch (sortBy) {
      case "rating":
        return b.rating - a.rating;
      case "price-low":
        return a.hourlyRate - b.hourlyRate;
      case "price-high":
        return b.hourlyRate - a.hourlyRate;
      case "reviews":
        return b.reviews - a.reviews;
      default:
        return 0;
    }
  });

  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-white/20 sticky top-0 z-50 shadow-lg shadow-blue-500/5 w-full">
        <div className="w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 sm:h-25">
            <div className="flex items-center space-x-3 group">
              <a href="/" className="flex items-center space-x-3">
                <span className="sm:text-4xl text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-blue-600 transition-all duration-500">
                  ConnectXWorld
                </span>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded opacity-0 group-hover:opacity-10 blur transition-all duration-300"></div>
              </a>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <Button
                variant="outline"
                className="border-2 border-blue-200 text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:-translate-y-0.5"
              >
                Sign In
              </Button>
              <Button className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-purple-500/30 hover:-translate-y-0.5 transition-all duration-300">
                Get Started
              </Button>
            </nav>
          </div>
        </div>
      </header>

      <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Enhanced Page Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-50 to-purple-50 border border-blue-200/50 rounded-full px-6 py-2 mb-6 hover:shadow-lg hover:shadow-blue-500/10 transition-all duration-300 group">
            <Sparkles className="sm:h-6 sm:w-6 h-4 w-4 text-blue-600 group-hover:text-purple-600 transition-colors duration-300" />
            <span className="sm:text-xl text-sm font-medium bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              {professionals.length} verified professionals available
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl font-bold text-slate-900 mb-6">
            Find Your
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent block">
              Perfect Expert
            </span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 max-w-3xl mx-auto">
            Browse our network of world-class professionals ready to help you
            succeed.
          </p>
        </div>

        {/* Enhanced Search and Filters */}
        <div className="bg-white/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/50 mb-12 relative overflow-hidden group hover:shadow-3xl transition-all duration-500">
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative z-10">
            {/* Enhanced Search */}
            <div className="lg:col-span-2">
              <div className="relative group/search">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl blur opacity-0 group-hover/search:opacity-25 transition duration-300"></div>
                <div className="relative">
                  <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5 group-hover/search:text-blue-500 transition-colors duration-300" />
                  <Input
                    type="text"
                    placeholder="Search professionals, skills, or expertise..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="pl-12 border-2 border-slate-200 focus:border-blue-500 hover:border-blue-300 transition-all duration-300 bg-white/90 backdrop-blur-sm"
                  />
                </div>
              </div>
            </div>
            {/* Enhanced Filters */}
            <div className="group/filter">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full h-10 border-2 border-slate-200 hover:border-blue-300 focus:border-blue-500 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-md px-3 py-2 text-sm"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category}
                  </option>
                ))}
              </select>
            </div>
            <div className="group/filter">
              <select
                value={selectedPriceRange}
                onChange={(e) => setSelectedPriceRange(e.target.value)}
                className="w-full h-10 border-2 border-slate-200 hover:border-blue-300 focus:border-blue-500 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-md px-3 py-2 text-sm"
              >
                {priceRanges.map((range) => (
                  <option key={range} value={range}>
                    {range}
                  </option>
                ))}
              </select>
            </div>
            <div className="group/filter">
              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="w-full h-10 border-2 border-slate-200 hover:border-blue-300 focus:border-blue-500 transition-all duration-300 bg-white/90 backdrop-blur-sm rounded-md px-3 py-2 text-sm"
              >
                <option value="rating">Highest Rated</option>
                <option value="reviews">Most Reviews</option>
                <option value="price-low">Price: Low to High</option>
                <option value="price-high">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-slate-200/50 relative z-10">
            <div className="flex items-center space-x-3">
              <TrendingUp className="h-5 w-5 text-blue-600" />
              <p className="text-slate-600 font-medium">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {sortedProfessionals.length}
                </span>{" "}
                professionals found
              </p>
            </div>
            <Button
              variant="outline"
              size="sm"
              className="text-slate-600 border-2 border-slate-200 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 group"
            >
              <Filter className="h-4 w-4 mr-2 group-hover:text-blue-600 transition-colors duration-300" />
              More Filters
            </Button>
          </div>
        </div>

        {/* Enhanced Professionals Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {sortedProfessionals.map((professional, index) => (
            <Card
              key={professional.id}
              className="group hover:shadow-2xl transition-all duration-500 border-0 bg-white/90 backdrop-blur-sm hover:-translate-y-4 relative overflow-hidden"
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${professional.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
              ></div>
              <div
                className={`absolute -inset-1 bg-gradient-to-r ${professional.hoverGradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`}
              ></div>
              <CardHeader className="pb-4 relative z-10">
                <div className="flex items-start space-x-4">
                  <div className="relative group-hover:scale-110 transition-transform duration-300">
                    <img
                      src={professional.image}
                      alt={professional.name}
                      className="w-24 h-24 rounded-2xl object-cover border-4 border-white shadow-xl"
                    />
                    <div
                      className={`absolute -inset-1 bg-gradient-to-r ${professional.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-300`}
                    ></div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <div className="min-w-0 flex-1">
                        <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300 truncate">
                          {professional.name}
                        </CardTitle>
                        <CardDescription className="text-slate-600 text-base font-medium">
                          {professional.title}
                        </CardDescription>
                      </div>
                      <div className="text-right flex-shrink-0 ml-4">
                        <div className="text-3xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent">
                          ${professional.hourlyRate}
                        </div>
                        <div className="text-sm text-slate-500 font-medium">
                          per hour
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4 mt-4">
                      <div className="flex items-center bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-bold text-yellow-700 ml-1">
                          {professional.rating}
                        </span>
                        <span className="text-sm text-yellow-600 ml-1">
                          ({professional.reviews})
                        </span>
                      </div>
                      <div className="flex items-center text-sm text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full">
                        <MapPin className="h-4 w-4 mr-1" />
                        {professional.location}
                      </div>
                    </div>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="pt-0 space-y-6 relative z-10">
                <p className="text-slate-600 leading-relaxed group-hover:text-slate-700 transition-colors duration-300">
                  {professional.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {professional.expertise.map((skill, skillIndex) => (
                    <Badge
                      key={skillIndex}
                      className={`bg-gradient-to-r ${professional.gradient} text-white hover:scale-105 transition-transform duration-200 shadow-lg font-medium px-3 py-1`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
                <div className="grid grid-cols-2 gap-4 text-sm">
                  <div className="flex items-center space-x-2 bg-blue-50 p-3 rounded-xl">
                    <Clock className="h-4 w-4 text-blue-600" />
                    <span className="text-blue-700 font-medium">
                      {professional.experience}
                    </span>
                  </div>
                  <div className="flex items-center space-x-2 bg-green-50 p-3 rounded-xl">
                    <Calendar className="h-4 w-4 text-green-600" />
                    <span className="text-green-700 font-medium">
                      {professional.availability}
                    </span>
                  </div>
                </div>
                <div className="text-sm text-slate-600 bg-slate-50 p-3 rounded-xl">
                  <span className="font-medium">Languages:</span>{" "}
                  {professional.languages.join(", ")}
                </div>
                <div className="flex space-x-3 pt-4 border-t border-slate-200/50">
                  <Button
                    variant="outline"
                    size="sm"
                    className="flex-1 border-2 border-blue-200 text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 group/btn"
                  >
                    View Profile
                    <ArrowRight className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform duration-300" />
                  </Button>
                  <Button
                    className={`flex-1 bg-gradient-to-r ${professional.gradient} hover:shadow-xl hover:-translate-y-1 transition-all duration-300 text-white font-semibold group/btn relative overflow-hidden`}
                  >
                    <span className="relative z-10 flex items-center">
                      Book Now
                      <Sparkles className="ml-2 h-4 w-4 group-hover/btn:rotate-12 transition-transform duration-300" />
                    </span>
                    <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform duration-300 origin-left"></div>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        {/* Enhanced Load More */}
        {sortedProfessionals.length > 0 && (
          <div className="text-center mt-16">
            <Button
              variant="outline"
              size="lg"
              className="border-2 border-blue-200 text-blue-600 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:border-purple-300 hover:text-purple-600 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 px-12 py-4 text-lg font-semibold group"
            >
              Load More Professionals
              <TrendingUp className="ml-3 h-5 w-5 group-hover:translate-y-[-2px] transition-transform duration-300" />
            </Button>
          </div>
        )}
        {/* Enhanced No Results */}
        {sortedProfessionals.length === 0 && (
          <div className="text-center py-20">
            <div className="text-8xl md:text-[12rem] mb-8 animate-bounce">
              🔍
            </div>
            <h3 className="text-3xl md:text-6xl font-bold text-slate-900 mb-6">
              No professionals found
            </h3>
            <p className="text-xl md:text-3xl text-slate-600 mb-8 max-w-2xl mx-auto">
              Try adjusting your search criteria or browse all categories to
              discover amazing experts.
            </p>
            <Button
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("All Categories");
                setSelectedPriceRange("All Prices");
              }}
              className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 hover:from-blue-700 hover:via-purple-700 hover:to-pink-700 text-white px-8 py-4 text-lg md:text-2xl font-semibold shadow-xl hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 group"
            >
              Clear All Filters
              <ArrowRight className="ml-3 h-5 w-5 md:h-10 md:w-10 group-hover:translate-x-1 transition-transform duration-300" />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
