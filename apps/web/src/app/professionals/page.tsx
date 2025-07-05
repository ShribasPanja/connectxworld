"use client";

import { useState, useMemo, useEffect } from "react";
import {
  Search,
  Filter,
  SortAsc,
  MapPin,
  Star,
  Clock,
  CheckCircle,
  Grid,
  List,
} from "lucide-react";
import Header from "@repo/ui/components/Header";
import Footer from "@repo/ui/components/Footer";

interface Professional {
  id: number;
  name: string;
  title: string;
  image: string;
  rating: number;
  reviews: number;
  rate: number;
  location: string;
  expertise: string[];
  availability: string;
  verified: boolean;
  category: string;
  experience: number;
  languages: string[];
  responseTime: string;
}

export default function ProfessionalsPage() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [sortBy, setSortBy] = useState("rating");
  const [priceRange, setPriceRange] = useState([0, 500]);
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const professionals: Professional[] = [
    {
      id: 1,
      name: "Dr. Michael Chen",
      title: "Technology Consultant",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      rating: 4.9,
      reviews: 156,
      rate: 120,
      location: "San Francisco, CA",
      expertise: [
        "Digital Transformation",
        "AI Strategy",
        "Tech Leadership",
        "Cloud Computing",
      ],
      availability: "Available Today",
      verified: true,
      category: "Technology",
      experience: 8,
      languages: ["English", "Mandarin"],
      responseTime: "< 1 hour",
    },
    {
      id: 2,
      name: "Sarah Rodriguez",
      title: "Marketing Strategist",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      rating: 4.8,
      reviews: 203,
      rate: 95,
      location: "New York, NY",
      expertise: [
        "Brand Strategy",
        "Digital Marketing",
        "Growth Hacking",
        "Social Media",
      ],
      availability: "Available Tomorrow",
      verified: true,
      category: "Marketing",
      experience: 6,
      languages: ["English", "Spanish"],
      responseTime: "< 2 hours",
    },
    {
      id: 3,
      name: "James Wilson",
      title: "Financial Advisor",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      rating: 5.0,
      reviews: 89,
      rate: 180,
      location: "Chicago, IL",
      expertise: [
        "Investment Planning",
        "Risk Management",
        "Wealth Building",
        "Tax Strategy",
      ],
      availability: "Available in 2 hours",
      verified: true,
      category: "Finance",
      experience: 12,
      languages: ["English"],
      responseTime: "< 30 minutes",
    },
    {
      id: 4,
      name: "Dr. Emily Watson",
      title: "Healthcare Consultant",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      rating: 4.9,
      reviews: 134,
      rate: 200,
      location: "Boston, MA",
      expertise: [
        "Healthcare Strategy",
        "Medical Innovation",
        "Policy Analysis",
        "Digital Health",
      ],
      availability: "Available Today",
      verified: true,
      category: "Healthcare",
      experience: 15,
      languages: ["English", "French"],
      responseTime: "< 1 hour",
    },
    {
      id: 5,
      name: "Alex Thompson",
      title: "Business Strategy Consultant",
      image:
        "https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      rating: 4.7,
      reviews: 178,
      rate: 150,
      location: "Austin, TX",
      expertise: [
        "Strategic Planning",
        "Market Analysis",
        "Operations",
        "Leadership",
      ],
      availability: "Available Tomorrow",
      verified: true,
      category: "Business",
      experience: 10,
      languages: ["English"],
      responseTime: "< 3 hours",
    },
    {
      id: 6,
      name: "Maria Garcia",
      title: "UX/UI Design Expert",
      image:
        "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      rating: 4.8,
      reviews: 92,
      rate: 110,
      location: "Los Angeles, CA",
      expertise: [
        "User Experience",
        "Interface Design",
        "Design Systems",
        "Prototyping",
      ],
      availability: "Available Today",
      verified: true,
      category: "Design",
      experience: 7,
      languages: ["English", "Spanish"],
      responseTime: "< 2 hours",
    },
    {
      id: 7,
      name: "David Kim",
      title: "Legal Consultant",
      image:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      rating: 4.9,
      reviews: 67,
      rate: 250,
      location: "Seattle, WA",
      expertise: [
        "Corporate Law",
        "Intellectual Property",
        "Contract Review",
        "Compliance",
      ],
      availability: "Available in 4 hours",
      verified: true,
      category: "Legal",
      experience: 14,
      languages: ["English", "Korean"],
      responseTime: "< 1 hour",
    },
    {
      id: 8,
      name: "Lisa Anderson",
      title: "HR & Management Consultant",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=400&h=600&fit=crop",
      rating: 4.6,
      reviews: 145,
      rate: 130,
      location: "Denver, CO",
      expertise: [
        "Talent Management",
        "Organizational Development",
        "Performance Management",
        "Culture",
      ],
      availability: "Available Tomorrow",
      verified: true,
      category: "HR",
      experience: 9,
      languages: ["English"],
      responseTime: "< 4 hours",
    },
  ];

  const categories = [
    "all",
    "Technology",
    "Marketing",
    "Finance",
    "Healthcare",
    "Business",
    "Design",
    "Legal",
    "HR",
  ];

  const sortOptions = [
    { value: "rating", label: "Highest Rated" },
    { value: "price-low", label: "Price: Low to High" },
    { value: "price-high", label: "Price: High to Low" },
    { value: "reviews", label: "Most Reviews" },
    { value: "experience", label: "Most Experienced" },
  ];

  const filteredAndSortedProfessionals = useMemo(() => {
    let filtered = professionals.filter((professional) => {
      const matchesSearch =
        professional.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        professional.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        professional.expertise.some((skill) =>
          skill.toLowerCase().includes(searchTerm.toLowerCase())
        );

      const matchesCategory =
        selectedCategory === "all" ||
        professional.category === selectedCategory;
      const matchesPrice =
        professional.rate >= (priceRange?.[0] ?? 0) &&
        professional.rate <= (priceRange?.[1] ?? 500);
      return matchesSearch && matchesCategory && matchesPrice;
    });

    // Sort the filtered results
    filtered.sort((a, b) => {
      switch (sortBy) {
        case "rating":
          return b.rating - a.rating;
        case "price-low":
          return a.rate - b.rate;
        case "price-high":
          return b.rate - a.rate;
        case "reviews":
          return b.reviews - a.reviews;
        case "experience":
          return b.experience - a.experience;
        default:
          return 0;
      }
    });

    return filtered;
  }, [searchTerm, selectedCategory, sortBy, priceRange]);

  const ProfessionalCard = ({
    professional,
  }: {
    professional: Professional;
  }) => (
    <div className="professional-card bg-white rounded-3xl shadow-lg overflow-hidden border border-gray-100 animate-scale-in group">
      <div className="relative overflow-hidden">
        <img
          src={professional.image}
          alt={professional.name}
          className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

        <div className="absolute top-4 left-4">
          <div className="bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
            <Clock size={14} />
            {professional.availability}
          </div>
        </div>

        {professional.verified && (
          <div className="absolute top-4 right-4">
            <div className="bg-blue-600 text-white p-2 rounded-full shadow-lg">
              <CheckCircle size={18} />
            </div>
          </div>
        )}
      </div>

      <div className="p-8">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-semibold text-xl md:text-2xl text-gray-900">
            {professional.name}
          </h3>
          <div className="flex items-center gap-1 bg-yellow-50 px-2 py-1 rounded-full">
            <Star className="w-4 h-4 text-yellow-500 fill-current" />
            <span className="text-sm font-bold text-yellow-700">
              {professional.rating}
            </span>
          </div>
        </div>

        <p className="text-blue-600 font-semibold mb-3 text-lg md:text-xl">
          {professional.title}
        </p>

        <div className="flex items-center text-gray-500 text-sm mb-4">
          <MapPin size={16} className="mr-2" />
          <span className="font-medium">{professional.location}</span>
        </div>

        <div className="flex flex-wrap gap-2 mb-6">
          {professional.expertise.slice(0, 2).map((skill, skillIndex) => (
            <span
              key={skillIndex}
              className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs font-medium border border-blue-200"
            >
              {skill}
            </span>
          ))}
          {professional.expertise.length > 2 && (
            <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded-full text-xs font-medium">
              +{professional.expertise.length - 2} more
            </span>
          )}
        </div>

        <div className="flex items-center justify-between mb-6 p-4 bg-gray-50 rounded-2xl">
          <div>
            <span className="text-3xl md:text-4xl font-bold text-gray-900">
              ${professional.rate}
            </span>
            <span className="text-gray-500 text-sm md:text-xl font-medium">
              /hour
            </span>
          </div>
          <div className="text-right">
            <div className="text-sm md:text-lg text-gray-500 font-medium">
              {professional.reviews} reviews
            </div>
            <div className="text-xs md:text-base text-gray-400">
              {professional.experience} years exp.
            </div>
          </div>
        </div>

        <button className="w-full bg-blue-600 text-white px-8 py-4 rounded-xl hover:bg-blue-700 transition-colors duration-200 font-semibold text-lg md:text-xl">
          Book Consultation
        </button>
      </div>
    </div>
  );

  const ProfessionalListItem = ({
    professional,
  }: {
    professional: Professional;
  }) => (
    <div className="bg-white rounded-2xl shadow-lg p-6 border border-gray-100 hover:shadow-xl transition-all duration-300">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="relative">
          <img
            src={professional.image}
            alt={professional.name}
            className="w-32 h-32 rounded-2xl object-cover"
          />
          {professional.verified && (
            <div className="absolute -top-2 -right-2 bg-blue-600 text-white p-1 rounded-full">
              <CheckCircle size={16} />
            </div>
          )}
        </div>

        <div className="flex-1">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
            <div>
              <h3 className="font-semibold text-xl md:text-2xl text-gray-900 mb-1">
                {professional.name}
              </h3>
              <p className="text-blue-600 font-semibold text-lg md:text-xl mb-2">
                {professional.title}
              </p>
              <div className="flex items-center text-gray-500 text-sm mb-3">
                <MapPin size={14} className="mr-1" />
                {professional.location}
              </div>
            </div>

            <div className="text-right">
              <div className="flex items-center gap-1 mb-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="font-bold md:text-xl">
                  {professional.rating}
                </span>
                <span className="text-gray-500 text-sm md:text-lg">
                  ({professional.reviews})
                </span>
              </div>
              <div className="text-2xl md:text-4xl font-bold text-gray-900">
                ${professional.rate}
                <span className="text-sm md:text-xl font-normal text-gray-500">
                  /hr
                </span>
              </div>
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-4">
            {professional.expertise.slice(0, 4).map((skill, index) => (
              <span
                key={index}
                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-sm font-medium"
              >
                {skill}
              </span>
            ))}
          </div>

          <div className="flex flex-col md:flex-row md:items-center md:justify-between">
            <div className="flex items-center gap-4 text-sm text-gray-600 mb-4 md:mb-0">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full font-medium md:text-lg">
                {professional.availability}
              </span>
              <span className="md:text-lg">
                {professional.responseTime} response
              </span>
              <span className="md:text-lg">
                {professional.experience} years exp.
              </span>
            </div>

            <button className="bg-blue-600 text-white px-6 py-3 rounded-xl hover:bg-blue-700 transition-colors font-semibold md:text-xl">
              Book Consultation
            </button>
          </div>
        </div>
      </div>
    </div>
  );

  // Add this effect to force grid view on mobile
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setViewMode("grid");
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="w-full px-2 sm:px-4 lg:px-8">
          <div className="text-center mb-8 sm:mb-12 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-gray-900 mb-4 sm:mb-6">
              Find Your Perfect
              <br />
              <span className="gradient-text">Professional Match</span>
            </h1>
            <p className="text-base sm:text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
              Browse through our curated network of verified professionals.
              Filter by expertise, location, price, and availability to find
              exactly what you need.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filter Section */}
      <section className="py-8 bg-white border-b border-gray-200">
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:gap-6 items-stretch lg:items-center">
            {/* Search Bar */}
            <div className="flex-1 relative mb-4 lg:mb-0">
              <Search
                className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400"
                size={20}
              />
              <input
                type="text"
                placeholder="Search by name, title, or expertise..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-lg"
              />
            </div>

            {/* Category Filter, Sort, View Toggle, Filter Toggle */}
            <div className="flex flex-col sm:flex-row gap-2 sm:gap-4 items-stretch sm:items-center w-full sm:w-auto">
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-lg font-medium w-full sm:w-auto"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>

              <select
                value={sortBy}
                onChange={(e) => setSortBy(e.target.value)}
                className="px-4 py-3 border border-gray-300 rounded-2xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-lg font-medium w-full sm:w-auto"
              >
                {sortOptions.map((option) => (
                  <option key={option.value} value={option.value}>
                    {option.label}
                  </option>
                ))}
              </select>

              {/* View Toggle: only show on sm and up */}
              <div className="hidden sm:flex bg-gray-100 rounded-2xl p-1 w-full sm:w-auto justify-center sm:justify-start">
                <button
                  onClick={() => setViewMode("grid")}
                  className={`p-2 md:p-3 rounded-xl transition-colors w-1/2 sm:w-auto ${
                    viewMode === "grid"
                      ? "bg-white shadow-md text-blue-600"
                      : "text-gray-600"
                  }`}
                  aria-label="Grid view"
                >
                  <Grid size={20} />
                </button>
                <button
                  onClick={() => setViewMode("list")}
                  className={`p-2 md:p-3 rounded-xl transition-colors w-1/2 sm:w-auto ${
                    viewMode === "list"
                      ? "bg-white shadow-md text-blue-600"
                      : "text-gray-600"
                  }`}
                  aria-label="List view"
                >
                  <List size={20} />
                </button>
              </div>

              <button
                onClick={() => setShowFilters(!showFilters)}
                className="flex items-center gap-2 px-4 py-3 border border-gray-300 rounded-2xl hover:bg-gray-50 transition-colors font-medium w-full sm:w-auto justify-center"
              >
                <Filter size={20} />
                Filters
              </button>
            </div>
          </div>

          {/* Advanced Filters */}
          {showFilters && (
            <div className="mt-6 p-4 md:p-6 bg-gray-50 rounded-2xl animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Price Range ($/hour)
                  </label>
                  <div className="flex items-center gap-2 md:gap-4">
                    <input
                      type="number"
                      value={priceRange[0]}
                      onChange={(e) =>
                        setPriceRange([
                          parseInt(e.target.value),
                          priceRange[1] as number,
                        ])
                      }
                      className="w-20 md:w-24 px-2 md:px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Min"
                    />
                    <span>to</span>
                    <input
                      type="number"
                      value={priceRange[1]}
                      onChange={(e) =>
                        setPriceRange([
                          priceRange[0] as number,
                          parseInt(e.target.value),
                        ])
                      }
                      className="w-20 md:w-24 px-2 md:px-3 py-2 border border-gray-300 rounded-lg"
                      placeholder="Max"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Availability
                  </label>
                  <select className="w-full px-2 md:px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Any time</option>
                    <option>Available today</option>
                    <option>Available this week</option>
                    <option>Available next week</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Experience Level
                  </label>
                  <select className="w-full px-2 md:px-3 py-2 border border-gray-300 rounded-lg">
                    <option>Any experience</option>
                    <option>5+ years</option>
                    <option>10+ years</option>
                    <option>15+ years</option>
                  </select>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Results Section */}
      <section className="py-8 md:py-12">
        <div className="w-full px-2 sm:px-4 md:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6 md:mb-8 gap-2 md:gap-0">
            <div>
              <h2 className="text-xl sm:text-2xl md:text-4xl font-bold text-gray-900">
                {filteredAndSortedProfessionals.length} Professionals Found
              </h2>
              <p className="text-gray-600 text-base md:text-xl">
                Showing results for{" "}
                {selectedCategory === "all"
                  ? "all categories"
                  : selectedCategory}
              </p>
            </div>
          </div>

          {/* Only grid view on mobile */}
          {viewMode === "grid" || window.innerWidth < 640 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 md:gap-8">
              {filteredAndSortedProfessionals.map((professional, index) => (
                <div
                  key={professional.id}
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <ProfessionalCard professional={professional} />
                </div>
              ))}
            </div>
          ) : (
            <div className="space-y-4 md:space-y-6">
              {filteredAndSortedProfessionals.map((professional, index) => (
                <div
                  key={professional.id}
                  className="animate-fade-in"
                  style={{ animationDelay: `${index * 0.05}s` }}
                >
                  <ProfessionalListItem professional={professional} />
                </div>
              ))}
            </div>
          )}

          {filteredAndSortedProfessionals.length === 0 && (
            <div className="text-center py-12 md:py-16">
              <div className="text-gray-400 mb-4">
                <Search size={48} className="mx-auto" />
              </div>
              <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-2">
                No professionals found
              </h3>
              <p className="text-gray-600 mb-6 text-base md:text-xl">
                Try adjusting your search criteria or filters to find more
                results.
              </p>
              <button
                onClick={() => {
                  setSearchTerm("");
                  setSelectedCategory("all");
                  setPriceRange([0, 500]);
                }}
                className="bg-blue-600 text-white px-4 py-3 md:px-6 md:py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium text-base md:text-xl"
              >
                Clear All Filters
              </button>
            </div>
          )}
        </div>
      </section>

      <Footer />
    </div>
  );
}
