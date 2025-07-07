"use client";

import { useState } from "react";
import {
  ArrowLeft,
  Star,
  MapPin,
  Clock,
  CheckCircle,
  Calendar,
  MessageCircle,
  Video,
  Phone,
  Award,
  Users,
  TrendingUp,
  Shield,
  Globe,
  Briefcase,
  GraduationCap,
  Heart,
  Share2,
  BookOpen,
  ChevronRight,
  Play,
} from "lucide-react";
import Header from "@repo/ui/components/Header";
import Footer from "@repo/ui/components/Footer";

interface TimeSlot {
  time: string;
  available: boolean;
}

interface Review {
  id: number;
  name: string;
  rating: number;
  comment: string;
  date: string;
  avatar: string;
  verified: boolean;
}

export default function ProfessionalProfile() {
  const [selectedDate, setSelectedDate] = useState("2024-01-15");
  const [selectedTime, setSelectedTime] = useState("");
  const [consultationType, setConsultationType] = useState("video");
  const [activeTab, setActiveTab] = useState("overview");

  // Mock data - in real app, this would come from API based on [id]
  const professional = {
    id: 1,
    name: "Dr. Michael Chen",
    title: "Senior Technology Consultant & Digital Transformation Expert",
    image:
      "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=600&h=800&fit=crop",
    rating: 4.9,
    reviews: 156,
    rate: 120,
    location: "San Francisco, CA",
    timezone: "PST (UTC-8)",
    languages: ["English", "Mandarin", "Spanish"],
    responseTime: "< 1 hour",
    verified: true,
    experience: 8,
    consultations: 1250,
    successRate: 98,
    expertise: [
      "Digital Transformation",
      "AI Strategy",
      "Tech Leadership",
      "Cloud Computing",
      "Agile Methodology",
      "Product Management",
      "Data Analytics",
      "Cybersecurity",
    ],
    bio: "Dr. Michael Chen is a seasoned technology consultant with over 8 years of experience helping Fortune 500 companies navigate digital transformation. He specializes in AI strategy implementation, cloud migration, and building high-performing tech teams. Michael has successfully led digital initiatives that resulted in over $50M in cost savings and revenue growth for his clients.",
    education: [
      {
        degree: "Ph.D. in Computer Science",
        school: "Stanford University",
        year: "2016",
      },
      {
        degree: "M.S. in Business Administration",
        school: "Harvard Business School",
        year: "2014",
      },
    ],
    certifications: [
      "AWS Solutions Architect Professional",
      "Google Cloud Professional",
      "Certified Scrum Master",
      "PMP Certification",
    ],
    achievements: [
      "Led digital transformation for 50+ companies",
      "Saved clients over $50M in operational costs",
      "Published 25+ research papers on AI",
      "Speaker at 100+ tech conferences",
    ],
    availability: "Available Today",
    nextAvailable: "Today 3:00 PM",
  };

  const timeSlots: TimeSlot[] = [
    { time: "09:00 AM", available: true },
    { time: "10:00 AM", available: false },
    { time: "11:00 AM", available: true },
    { time: "01:00 PM", available: true },
    { time: "02:00 PM", available: false },
    { time: "03:00 PM", available: true },
    { time: "04:00 PM", available: true },
    { time: "05:00 PM", available: false },
  ];

  const reviews: Review[] = [
    {
      id: 1,
      name: "Sarah Johnson",
      rating: 5,
      comment:
        "Michael's expertise in digital transformation was exactly what our company needed. His strategic insights helped us modernize our entire tech stack and improve efficiency by 40%.",
      date: "2 weeks ago",
      avatar:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      verified: true,
    },
    {
      id: 2,
      name: "David Rodriguez",
      rating: 5,
      comment:
        "Outstanding consultation! Michael provided clear, actionable advice for our AI implementation strategy. The ROI was immediate and substantial.",
      date: "1 month ago",
      avatar:
        "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      verified: true,
    },
    {
      id: 3,
      name: "Emily Watson",
      rating: 5,
      comment:
        "Professional, knowledgeable, and incredibly helpful. Michael's guidance on cloud migration saved us months of trial and error.",
      date: "1 month ago",
      avatar:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=100&h=100&fit=crop",
      verified: true,
    },
  ];

  const consultationTypes = [
    {
      type: "video",
      icon: Video,
      name: "Video Call",
      description: "Face-to-face consultation via video",
      duration: "60 minutes",
      price: professional.rate,
    },
    {
      type: "phone",
      icon: Phone,
      name: "Phone Call",
      description: "Voice consultation via phone",
      duration: "60 minutes",
      price: professional.rate - 20,
    },
    {
      type: "chat",
      icon: MessageCircle,
      name: "Text Consultation",
      description: "Written consultation via chat",
      duration: "24 hours",
      price: professional.rate - 40,
    },
  ];

  const tabs = [
    { id: "overview", name: "Overview" },
    { id: "experience", name: "Experience" },
    { id: "reviews", name: "Reviews" },
    { id: "availability", name: "Availability" },
  ];

  return (
    <div className="min-h-screen bg-gray-50 overflow-x-hidden">
      <Header />

      {/* Back Navigation */}
      <div className="w-full min-w-0 px-2 sm:px-4 md:px-6 lg:px-8 pt-24 py-8">
        <div className="w-full max-w-none sm:max-w-[95vw] lg:max-w-[65vw] mx-auto min-w-0">
          {/* Back Button */}
          {/* <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium mb-6 text-base sm:text-lg">
            <ArrowLeft size={20} />
            Back to Professionals
          </button> */}

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:gap-8 w-full">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-6 md:space-y-8 w-full max-w-full">
              {/* Professional Header */}
              <div className="bg-white rounded-2xl md:rounded-3xl shadow-lg overflow-hidden animate-fade-in w-full max-w-full">
                <div className="relative h-40 sm:h-48 bg-gradient-to-br from-blue-600 to-green-600">
                  <div className="absolute inset-0 bg-black/20"></div>
                  <div className="absolute top-4 right-4 flex gap-2 sm:top-6 sm:right-6 sm:gap-3">
                    <button className="bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-colors">
                      <Share2 size={18} className="sm:w-5 sm:h-5" />
                    </button>
                    <button className="bg-white/20 backdrop-blur-md text-white p-2 sm:p-3 rounded-full hover:bg-white/30 transition-colors">
                      <Heart size={18} className="sm:w-5 sm:h-5" />
                    </button>
                  </div>
                </div>

                <div className="relative px-2 sm:px-4 md:px-8 pb-8">
                  <div className="flex flex-col gap-4 sm:gap-6 -mt-14 sm:-mt-16">
                    <div className="relative">
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl sm:rounded-3xl object-cover border-4 border-white shadow-xl"
                      />
                      {professional.verified && (
                        <div className="absolute -bottom-2 -right-2 bg-blue-600 text-white p-1.5 sm:p-2 rounded-full shadow-lg">
                          <CheckCircle size={16} className="sm:w-5 sm:h-5" />
                        </div>
                      )}
                    </div>

                    <div className="flex-1">
                      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3 sm:mb-4">
                        <div>
                          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-1 sm:mb-2">
                            {professional.name}
                          </h1>
                          <p className="text-base sm:text-lg md:text-2xl text-blue-600 font-semibold mb-2 sm:mb-3">
                            {professional.title}
                          </p>
                        </div>

                        <div className="flex items-center gap-2 sm:gap-4 mt-2 md:mt-0">
                          <div className="text-center">
                            <div className="flex items-center gap-1 mb-1">
                              <Star className="w-4 h-4 sm:w-5 sm:h-5 text-yellow-400 fill-current" />
                              <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900">
                                {professional.rating}
                              </span>
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500">
                              {professional.reviews} reviews
                            </div>
                          </div>

                          <div className="text-center">
                            <div className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900">
                              ${professional.rate}
                            </div>
                            <div className="text-xs sm:text-sm text-gray-500">
                              per hour
                            </div>
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-wrap gap-2 sm:gap-4 text-xs sm:text-sm text-gray-600 mb-3 sm:mb-4 max-w-full overflow-hidden">
                        <div className="flex items-center gap-1 min-w-0">
                          <MapPin
                            size={14}
                            className="sm:w-4 sm:h-4 flex-shrink-0"
                          />
                          <span className="truncate text-xs sm:text-sm md:text-lg">
                            {professional.location}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 min-w-0">
                          <Clock
                            size={14}
                            className="sm:w-4 sm:h-4 flex-shrink-0"
                          />
                          <span className="truncate text-xs sm:text-sm md:text-lg">
                            {professional.responseTime} response
                          </span>
                        </div>
                        <div className="flex items-center gap-1 min-w-0">
                          <Globe
                            size={14}
                            className="sm:w-4 sm:h-4 flex-shrink-0"
                          />
                          <span className="truncate text-xs sm:text-sm md:text-lg">
                            {professional.languages.join(", ")}
                          </span>
                        </div>
                      </div>

                      <div className="bg-green-100 text-green-800 px-3 sm:px-4 py-1.5 sm:py-2 rounded-full text-xs sm:text-sm font-medium inline-flex items-center gap-2">
                        <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                        {professional.availability}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Stats Cards */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3 sm:gap-4 animate-scale-in w-full max-w-full">
                {[
                  {
                    icon: Users,
                    label: "Consultations",
                    value: professional.consultations.toLocaleString(),
                  },
                  {
                    icon: Award,
                    label: "Success Rate",
                    value: `${professional.successRate}%`,
                  },
                  {
                    icon: Briefcase,
                    label: "Experience",
                    value: `${professional.experience} years`,
                  },
                  {
                    icon: TrendingUp,
                    label: "Response Time",
                    value: professional.responseTime,
                  },
                ].map((stat, index) => (
                  <div
                    key={index}
                    className="bg-white p-4 sm:p-6 rounded-2xl shadow-lg text-center w-full max-w-full overflow-hidden"
                  >
                    <div className="bg-blue-100 w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-3">
                      <stat.icon className="w-6 h-6 text-blue-600" />
                    </div>
                    <div className="text-lg sm:text-xl md:text-2xl font-bold text-gray-900 mb-1 truncate">
                      {stat.value}
                    </div>
                    <div className="text-xs sm:text-sm text-gray-600 truncate">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>

              {/* Navigation Tabs */}
              <div className="bg-white rounded-2xl shadow-lg p-1.5 sm:p-2 animate-fade-in w-full max-w-full overflow-hidden">
                <div className="flex flex-row overflow-x-auto">
                  {tabs.map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex-1 px-2 sm:px-4 md:px-6 py-2 sm:py-3 rounded-xl font-medium transition-all duration-200 text-sm sm:text-base md:text-lg lg:text-xl whitespace-nowrap ${
                        activeTab === tab.id
                          ? "bg-blue-600 text-white shadow-lg"
                          : "text-gray-600 hover:text-blue-600 hover:bg-blue-50"
                      }`}
                    >
                      {tab.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Tab Content */}
              <div className="animate-fade-in w-full max-w-full overflow-hidden">
                {activeTab === "overview" && (
                  <div className="space-y-8 w-full max-w-full">
                    {/* About */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-full overflow-hidden">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                        About
                      </h3>{" "}
                      <p className="text-base sm:text-lg md:text-xl text-gray-700 leading-relaxed mb-4 sm:mb-6 break-words">
                        {professional.bio}
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full max-w-full">
                        <div className="w-full max-w-full">
                          <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">
                            Expertise
                          </h4>
                          <div className="flex flex-wrap gap-2 w-full max-w-full">
                            {professional.expertise.map((skill, index) => (
                              <span
                                key={index}
                                className="bg-blue-50 text-blue-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-sm font-medium border border-blue-200 break-words"
                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>

                        <div className="w-full max-w-full">
                          <h4 className="font-semibold text-gray-900 mb-2 sm:mb-3 text-base sm:text-lg">
                            Languages
                          </h4>
                          <div className="flex flex-wrap gap-2 w-full max-w-full">
                            {professional.languages.map((language, index) => (
                              <span
                                key={index}
                                className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs sm:text-sm md:text-base font-medium border border-green-200 break-words"
                              >
                                {language}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>{" "}
                    {/* Key Achievements */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 w-full max-w-full overflow-hidden">
                      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-900 mb-4 sm:mb-6">
                        Key Achievements
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 w-full max-w-full">
                        {professional.achievements.map((achievement, index) => (
                          <div
                            key={index}
                            className="flex items-start gap-2 sm:gap-3 w-full max-w-full"
                          >
                            <div className="bg-green-100 p-2 rounded-lg mt-1 flex-shrink-0">
                              <CheckCircle className="w-4 h-4 sm:w-5 sm:h-5 text-green-600" />
                            </div>
                            <span className="text-base sm:text-lg text-gray-700 break-words min-w-0">
                              {achievement}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}{" "}
                {activeTab === "experience" && (
                  <div className="space-y-8 w-full max-w-full">
                    {/* Education */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-full overflow-hidden">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <GraduationCap className="w-6 h-6 text-blue-600" />
                        Education
                      </h3>
                      <div className="space-y-4">
                        {professional.education.map((edu, index) => (
                          <div
                            key={index}
                            className="border-l-4 border-blue-600 pl-6 py-2"
                          >
                            <h4 className="font-semibold text-gray-900">
                              {edu.degree}
                            </h4>
                            <p className="text-blue-600 font-medium">
                              {edu.school}
                            </p>
                            <p className="text-gray-500 text-sm">{edu.year}</p>
                          </div>
                        ))}
                      </div>
                    </div>{" "}
                    {/* Certifications */}
                    <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-full overflow-hidden">
                      <h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
                        <Award className="w-6 h-6 text-blue-600" />
                        Certifications
                      </h3>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-full">
                        {professional.certifications.map((cert, index) => (
                          <div
                            key={index}
                            className="bg-gray-50 p-4 rounded-xl flex items-center gap-3 w-full max-w-full"
                          >
                            <div className="bg-blue-100 p-2 rounded-lg flex-shrink-0">
                              <Shield className="w-5 h-5 text-blue-600" />
                            </div>
                            <span className="font-medium text-gray-900 break-words min-w-0">
                              {cert}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}{" "}
                {activeTab === "reviews" && (
                  <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-full overflow-hidden">
                    <div className="flex items-center justify-between mb-8">
                      <h3 className="text-2xl font-bold text-gray-900">
                        Client Reviews
                      </h3>
                      <div className="text-right">
                        <div className="flex items-center gap-2 mb-1">
                          <Star className="w-5 h-5 text-yellow-400 fill-current" />
                          <span className="text-2xl font-bold text-gray-900">
                            {professional.rating}
                          </span>
                          <span className="text-gray-500">out of 5</span>
                        </div>
                        <div className="text-sm text-gray-500">
                          {professional.reviews} total reviews
                        </div>
                      </div>
                    </div>

                    <div className="space-y-6">
                      {reviews.map((review) => (
                        <div
                          key={review.id}
                          className="border-b border-gray-100 pb-6 last:border-b-0"
                        >
                          <div className="flex items-start gap-4">
                            <img
                              src={review.avatar}
                              alt={review.name}
                              className="w-12 h-12 rounded-full object-cover"
                            />
                            <div className="flex-1">
                              <div className="flex items-center gap-3 mb-2">
                                <h4 className="font-semibold text-gray-900">
                                  {review.name}
                                </h4>
                                {review.verified && (
                                  <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs font-medium flex items-center gap-1">
                                    <CheckCircle size={12} />
                                    Verified
                                  </div>
                                )}
                                <span className="text-gray-500 text-sm">
                                  {review.date}
                                </span>
                              </div>
                              <div className="flex mb-3">
                                {[...Array(review.rating)].map((_, i) => (
                                  <Star
                                    key={i}
                                    className="w-4 h-4 text-yellow-400 fill-current"
                                  />
                                ))}
                              </div>
                              <p className="text-gray-700 leading-relaxed">
                                {review.comment}
                              </p>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>

                    <div className="text-center mt-8">
                      <button className="text-blue-600 hover:text-blue-700 font-medium flex items-center gap-2 mx-auto">
                        View All Reviews
                        <ChevronRight size={16} />
                      </button>
                    </div>
                  </div>
                )}{" "}
                {activeTab === "availability" && (
                  <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 w-full max-w-full overflow-hidden">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                      Available Time Slots
                    </h3>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
                      {["Today", "Tomorrow", "Jan 17", "Jan 18"].map(
                        (date, index) => (
                          <button
                            key={date}
                            onClick={() => setSelectedDate(date)}
                            className={`p-4 rounded-xl border-2 transition-all ${
                              selectedDate === date
                                ? "border-blue-600 bg-blue-50 text-blue-600"
                                : "border-gray-200 hover:border-blue-300"
                            }`}
                          >
                            <div className="font-semibold">{date}</div>
                            <div className="text-sm text-gray-500">
                              Available
                            </div>
                          </button>
                        )
                      )}
                    </div>

                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {timeSlots.map((slot) => (
                        <button
                          key={slot.time}
                          onClick={() =>
                            slot.available && setSelectedTime(slot.time)
                          }
                          disabled={!slot.available}
                          className={`p-3 rounded-xl border transition-all ${
                            slot.available
                              ? selectedTime === slot.time
                                ? "border-blue-600 bg-blue-600 text-white"
                                : "border-gray-200 hover:border-blue-300 hover:bg-blue-50"
                              : "border-gray-100 bg-gray-50 text-gray-400 cursor-not-allowed"
                          }`}
                        >
                          {slot.time}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>

            {/* Booking Sidebar */}
            <div className="lg:col-span-1 w-full max-w-full">
                <div className="sticky top-8 space-y-4 md:space-y-6 w-full max-w-full">
                {/* Booking Card */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 animate-scale-in w-full max-w-full overflow-hidden">
                  <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-6">
                  Book Consultation
                  </h3>

                  {/* Consultation Type */}
                  <div className="mb-6">
                  <label className="block text-sm md:text-xl font-medium text-gray-700 mb-3">
                    Consultation Type
                  </label>
                  <div className="space-y-3">
                    {consultationTypes.map((type) => (
                    <div
                      key={type.type}
                      onClick={() => setConsultationType(type.type)}
                      className={`p-4 rounded-xl border-2 cursor-pointer transition-all ${
                      consultationType === type.type
                        ? "border-blue-600 bg-blue-50"
                        : "border-gray-200 hover:border-blue-300"
                      }`}
                    >
                      <div className="flex items-center gap-3">
                      <type.icon
                        className={`w-5 h-5 md:w-8 md:h-8 ${
                        consultationType === type.type
                          ? "text-blue-600"
                          : "text-gray-600"
                        }`}
                      />
                      <div className="flex-1">
                        <div className="text-base md:text-xl font-medium text-gray-900">
                        {type.name}
                        </div>
                        <div className="text-sm md:text-base text-gray-500">
                        {type.description}
                        </div>
                      </div>
                      <div className="text-right">
                        <div className="text-base md:text-2xl font-bold text-gray-900">
                        ${type.price}
                        </div>
                        <div className="text-xs md:text-base text-gray-500">
                        {type.duration}
                        </div>
                      </div>
                      </div>
                    </div>
                    ))}
                  </div>
                  </div>

                  {/* Quick Booking */}
                  <div className="mb-6">
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-4">
                    <div className="flex items-center gap-2 mb-2">
                    <Clock className="w-4 h-4 md:w-7 md:h-7 text-green-600" />
                    <span className="text-sm md:text-lg font-medium text-green-800">
                      Next Available
                    </span>
                    </div>
                    <div className="text-green-900 font-semibold md:text-xl">
                    {professional.nextAvailable}
                    </div>
                  </div>
                  </div>

                  {/* Total */}
                  <div className="border-t border-gray-200 pt-4 mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 md:text-lg">Consultation Fee</span>
                    <span className="font-semibold md:text-lg">
                    $
                    {
                      consultationTypes.find(
                      (t) => t.type === consultationType
                      )?.price
                    }
                    </span>
                  </div>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-600 md:text-lg">Platform Fee</span>
                    <span className="font-semibold md:text-lg">$5</span>
                  </div>
                  <div className="flex justify-between items-center text-lg md:text-2xl font-bold">
                    <span>Total</span>
                    <span>
                    $
                    {(consultationTypes.find(
                      (t) => t.type === consultationType
                    )?.price || 0) + 5}
                    </span>
                  </div>
                  </div>

                  <button className="w-full bg-blue-600 text-white py-4 rounded-xl hover:bg-blue-700 transition-colors font-semibold text-lg md:text-2xl mb-4">
                  Book Now
                  </button>

                  <button className="w-full border border-gray-300 text-gray-700 py-3 rounded-xl hover:border-blue-600 hover:text-blue-600 transition-colors font-medium md:text-lg">
                  Send Message
                  </button>
                </div>

                {/* Quick Info */}
                <div className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 animate-fade-in">
                  <h4 className="font-semibold text-gray-900 mb-4 md:text-xl">
                  Why Choose {professional.name.split(" ")[1]}?
                  </h4>
                  <div className="space-y-3 text-sm md:text-lg">
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-green-500" />
                    <span>
                    Verified professional with {professional.experience}+
                    years experience
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-green-500" />
                    <span>
                    {professional.successRate}% success rate with clients
                    </span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-green-500" />
                    <span>Responds within {professional.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <CheckCircle className="w-4 h-4 md:w-6 md:h-6 text-green-500" />
                    <span>Money-back guarantee</span>
                  </div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="bg-gradient-to-br from-blue-600 to-green-600 rounded-2xl p-4 sm:p-6 text-white animate-scale-in">
                  <h4 className="font-semibold mb-4 md:text-xl">Need Help?</h4>
                  <p className="text-blue-100 text-sm md:text-lg mb-4">
                  Have questions about this consultation? Our support team is
                  here to help.
                  </p>
                  <button className="bg-white/20 backdrop-blur-md text-white px-4 py-2 rounded-lg hover:bg-white/30 transition-colors text-sm md:text-lg font-medium">
                  Contact Support
                  </button>
                </div>
                </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
