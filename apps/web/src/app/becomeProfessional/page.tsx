"use client";

import { useState } from "react";
import {
  ArrowRight,
  CheckCircle,
  Star,
  DollarSign,
  Clock,
  Users,
  Shield,
  TrendingUp,
  Calendar,
  Award,
  Globe,
  Briefcase,
  GraduationCap,
  Upload,
  Plus,
  X,
  Camera,
  FileText,
  CreditCard,
  MessageCircle,
  Video,
  Phone,
} from "lucide-react";
import Header from "@repo/ui/components/Header";
import Footer from "@repo/ui/components/Footer";

interface FormData {
  personalInfo: {
    firstName: string;
    lastName: string;
    email: string;
    countryCode: string;
    phone: string;
    location: string;
    timezone: string;
    languages: string[];
  };
  professional: {
    title: string;
    category: string;
    experience: string;
    hourlyRate: string;
    bio: string;
    expertise: string[];
    workExperience: Array<{
      company: string;
      position: string;
      startDate: string;
      endDate: string;
      current: boolean;
      description: string;
      achievements: string[];
    }>;
    education: Array<{
      degree: string;
      school: string;
      year: string;
    }>;
    certifications: string[];
  };
  availability: {
    consultationTypes: string[];
    weeklyHours: string;
    responseTime: string;
  };
}

export default function BecomeProfessional() {
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    personalInfo: {
      firstName: "",
      lastName: "",
      email: "",
      countryCode: "+1",
      phone: "",
      location: "",
      timezone: "",
      languages: [],
    },
    professional: {
      title: "",
      category: "",
      experience: "",
      hourlyRate: "",
      bio: "",
      expertise: [],
      workExperience: [
        {
          company: "",
          position: "",
          startDate: "",
          endDate: "",
          current: false,
          description: "",
          achievements: [],
        },
      ],
      education: [{ degree: "", school: "", year: "" }],
      certifications: [],
    },
    availability: {
      consultationTypes: [],
      weeklyHours: "",
      responseTime: "",
    },
  });

  const benefits = [
    {
      icon: DollarSign,
      title: "Earn $50-$500+ per hour",
      description:
        "Set your own rates and earn competitive fees for your expertise",
      highlight: "Top earners make $10K+/month",
    },
    {
      icon: Clock,
      title: "Flexible Schedule",
      description:
        "Work when you want, where you want. Complete control over your availability",
      highlight: "Work from anywhere",
    },
    {
      icon: Users,
      title: "Global Client Base",
      description:
        "Connect with clients from around the world seeking your expertise",
      highlight: "50+ countries",
    },
    {
      icon: Shield,
      title: "Secure Platform",
      description:
        "Protected payments, verified clients, and comprehensive support",
      highlight: "100% payment guarantee",
    },
    {
      icon: TrendingUp,
      title: "Grow Your Business",
      description:
        "Build your reputation, expand your network, and scale your consulting practice",
      highlight: "Average 40% growth",
    },
    {
      icon: Award,
      title: "Professional Recognition",
      description:
        "Get verified badges, client reviews, and industry recognition",
      highlight: "Verified expert status",
    },
  ];

  const steps = [
    {
      number: 1,
      title: "Personal Information",
      description: "Tell us about yourself and your background",
    },
    {
      number: 2,
      title: "Professional Details",
      description: "Share your expertise and experience",
    },
    {
      number: 3,
      title: "Availability & Pricing",
      description: "Set your rates and availability",
    },
    {
      number: 4,
      title: "Verification",
      description: "Complete profile verification",
    },
  ];

  const categories = [
    "Business Strategy",
    "Marketing & Sales",
    "Technology & IT",
    "Design & Creative",
    "Finance & Investment",
    "Legal & Compliance",
    "Healthcare",
    "Education & Training",
    "HR & Management",
    "Operations",
    "Consulting",
    "Other",
  ];

  const consultationTypes = [
    {
      id: "video",
      name: "Video Call",
      icon: Video,
      description: "Face-to-face consultations",
    },
    {
      id: "phone",
      name: "Phone Call",
      icon: Phone,
      description: "Voice-only consultations",
    },
    {
      id: "chat",
      name: "Text Chat",
      icon: MessageCircle,
      description: "Written consultations",
    },
  ];

  const countryCodes = [
    { code: "+1", country: "US/CA", flag: "🇺🇸" },
    { code: "+44", country: "UK", flag: "🇬🇧" },
    { code: "+33", country: "FR", flag: "🇫🇷" },
    { code: "+49", country: "DE", flag: "🇩🇪" },
    { code: "+39", country: "IT", flag: "🇮🇹" },
    { code: "+34", country: "ES", flag: "🇪🇸" },
    { code: "+31", country: "NL", flag: "🇳🇱" },
    { code: "+46", country: "SE", flag: "🇸🇪" },
    { code: "+47", country: "NO", flag: "🇳🇴" },
    { code: "+45", country: "DK", flag: "🇩🇰" },
    { code: "+41", country: "CH", flag: "🇨🇭" },
    { code: "+43", country: "AT", flag: "🇦🇹" },
    { code: "+32", country: "BE", flag: "🇧🇪" },
    { code: "+351", country: "PT", flag: "🇵🇹" },
    { code: "+353", country: "IE", flag: "🇮🇪" },
    { code: "+358", country: "FI", flag: "🇫🇮" },
    { code: "+420", country: "CZ", flag: "🇨🇿" },
    { code: "+48", country: "PL", flag: "🇵🇱" },
    { code: "+36", country: "HU", flag: "🇭🇺" },
    { code: "+30", country: "GR", flag: "🇬🇷" },
    { code: "+7", country: "RU", flag: "🇷🇺" },
    { code: "+86", country: "CN", flag: "🇨🇳" },
    { code: "+81", country: "JP", flag: "🇯🇵" },
    { code: "+82", country: "KR", flag: "🇰🇷" },
    { code: "+91", country: "IN", flag: "🇮🇳" },
    { code: "+61", country: "AU", flag: "🇦🇺" },
    { code: "+64", country: "NZ", flag: "🇳🇿" },
    { code: "+55", country: "BR", flag: "🇧🇷" },
    { code: "+52", country: "MX", flag: "🇲🇽" },
    { code: "+54", country: "AR", flag: "🇦🇷" },
    { code: "+56", country: "CL", flag: "🇨🇱" },
    { code: "+57", country: "CO", flag: "🇨🇴" },
    { code: "+51", country: "PE", flag: "🇵🇪" },
    { code: "+27", country: "ZA", flag: "🇿🇦" },
    { code: "+20", country: "EG", flag: "🇪🇬" },
    { code: "+971", country: "AE", flag: "🇦🇪" },
    { code: "+966", country: "SA", flag: "🇸🇦" },
    { code: "+65", country: "SG", flag: "🇸🇬" },
    { code: "+60", country: "MY", flag: "🇲🇾" },
    { code: "+66", country: "TH", flag: "🇹🇭" },
    { code: "+84", country: "VN", flag: "🇻🇳" },
    { code: "+63", country: "PH", flag: "🇵🇭" },
    { code: "+62", country: "ID", flag: "🇮🇩" },
  ];

  const successStories = [
    {
      name: "Dr. Sarah Chen",
      title: "Business Strategy Consultant",
      image:
        "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      earnings: "$15K/month",
      story: "Joined 6 months ago and now has 200+ regular clients",
    },
    {
      name: "Michael Rodriguez",
      title: "Tech Consultant",
      image:
        "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      earnings: "$12K/month",
      story:
        "Built a thriving practice helping startups with digital transformation",
    },
    {
      name: "Emily Watson",
      title: "Marketing Expert",
      image:
        "https://images.pexels.com/photos/1181686/pexels-photo-1181686.jpeg?auto=compress&cs=tinysrgb&w=200&h=200&fit=crop",
      earnings: "$8K/month",
      story: "Helps small businesses grow their online presence",
    },
  ];

  const addExpertise = (expertise: string) => {
    if (
      expertise.trim() &&
      !formData.professional.expertise.includes(expertise.trim())
    ) {
      setFormData((prev) => ({
        ...prev,
        professional: {
          ...prev.professional,
          expertise: [...prev.professional.expertise, expertise.trim()],
        },
      }));
    }
  };

  const removeExpertise = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      professional: {
        ...prev.professional,
        expertise: prev.professional.expertise.filter((_, i) => i !== index),
      },
    }));
  };

  const addEducation = () => {
    setFormData((prev) => ({
      ...prev,
      professional: {
        ...prev.professional,
        education: [
          ...prev.professional.education,
          { degree: "", school: "", year: "" },
        ],
      },
    }));
  };

  const removeEducation = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      professional: {
        ...prev.professional,
        education: prev.professional.education.filter((_, i) => i !== index),
      },
    }));
  };

  const addWorkExperience = () => {
    setFormData((prev) => ({
      ...prev,
      professional: {
        ...prev.professional,
        workExperience: [
          ...prev.professional.workExperience,
          {
            company: "",
            position: "",
            startDate: "",
            endDate: "",
            current: false,
            description: "",
            achievements: [],
          },
        ],
      },
    }));
  };

  const removeWorkExperience = (index: number) => {
    setFormData((prev) => ({
      ...prev,
      professional: {
        ...prev.professional,
        workExperience: prev.professional.workExperience.filter(
          (_, i) => i !== index
        ),
      },
    }));
  };

  const updateWorkExperience = (index: number, field: string, value: any) => {
    setFormData((prev) => ({
      ...prev,
      professional: {
        ...prev.professional,
        workExperience: prev.professional.workExperience.map((exp, i) =>
          i === index ? { ...exp, [field]: value } : exp
        ),
      },
    }));
  };

  const addAchievement = (expIndex: number, achievement: string) => {
    if (achievement.trim()) {
      setFormData((prev) => ({
        ...prev,
        professional: {
          ...prev.professional,
          workExperience: prev.professional.workExperience.map((exp, i) =>
            i === expIndex
              ? {
                  ...exp,
                  achievements: [...exp.achievements, achievement.trim()],
                }
              : exp
          ),
        },
      }));
    }
  };

  const removeAchievement = (expIndex: number, achIndex: number) => {
    setFormData((prev) => ({
      ...prev,
      professional: {
        ...prev.professional,
        workExperience: prev.professional.workExperience.map((exp, i) =>
          i === expIndex
            ? {
                ...exp,
                achievements: exp.achievements.filter(
                  (_, ai) => ai !== achIndex
                ),
              }
            : exp
        ),
      },
    }));
  };

  const nextStep = () => {
    if (currentStep < 4) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 w-full overflow-x-hidden">
      <Header />

      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-blue-50 via-white to-green-50">
        <div className="w-full max-w-none sm:max-w-[95vw] lg:max-w-[65vw] mx-auto">
          <div className="text-center mb-16 animate-fade-in w-full max-w-full">
            <div className="inline-flex items-center bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-base md:text-lg font-medium mb-6">
              <Award className="w-5 h-5 md:w-6 md:h-6 mr-2" />
              Join 10,000+ verified professionals
            </div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-900 mb-6">
              Share Your Expertise,
              <br />
              <span className="gradient-text">Earn Great Income</span>
            </h1>

            <p className="text-xl sm:text-2xl md:text-3xl text-gray-600 max-w-3xl mx-auto mb-8">
              Turn your knowledge into a thriving consulting business. Connect
              with clients worldwide, set your own rates, and build a successful
              practice on our platform.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12 w-full max-w-full">
              <button
                onClick={() => setCurrentStep(1)}
                className="group bg-blue-600 text-white px-8 py-4 md:px-12 md:py-5 rounded-full hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-lg md:text-2xl"
              >
                Start Application
                <ArrowRight
                  size={24}
                  className="group-hover:translate-x-1 transition-transform"
                />
              </button>

              <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 md:px-12 md:py-5 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-lg md:text-2xl">
                Learn More
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-4 gap-6 max-w-4xl mx-auto w-full max-w-full">
              {[
                { icon: Users, number: "10K+", label: "Active Professionals" },
                {
                  icon: DollarSign,
                  number: "$150",
                  label: "Average Hourly Rate",
                },
                { icon: Star, number: "4.9", label: "Average Rating" },
                { icon: Globe, number: "50+", label: "Countries Served" },
              ].map((stat, index) => (
                <div
                  key={index}
                  className="text-center animate-scale-in"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="bg-white w-14 h-14 md:w-20 md:h-20 rounded-xl flex items-center justify-center mx-auto mb-2 shadow-lg">
                    <stat.icon className="w-7 h-7 md:w-10 md:h-10 text-blue-600" />
                  </div>
                  <div className="text-2xl md:text-4xl font-bold text-gray-900">
                    {stat.number}
                  </div>
                  <div className="text-base md:text-xl text-gray-600">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
    <section className="py-20 bg-white">
      <div className="w-full sm:max-w-[95vw] lg:max-w-[65vw] mx-auto min-w-0">
        <div className="text-center mb-16 animate-slide-up">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Why Join ConnectXWorld?
        </h2>
        <p className="text-xl md:text-3xl text-gray-600 max-w-3xl mx-auto">
          Join the world's leading platform for professional consultations
          and unlock your earning potential.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {benefits.map((benefit, index) => (
          <div
            key={index}
            className="bg-white border border-gray-200 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="bg-blue-100 w-14 h-14 md:w-16 md:h-16 rounded-xl flex items-center justify-center mb-6">
            <benefit.icon className="w-7 h-7 md:w-8 md:h-8 text-blue-600" />
            </div>

            <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-xs md:text-sm font-medium mb-4 inline-block">
            {benefit.highlight}
            </div>

            <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-3">
            {benefit.title}
            </h3>

            <p className="text-gray-600 leading-relaxed md:text-lg">
            {benefit.description}
            </p>
          </div>
        ))}
        </div>
      </div>
    </section>

      {/* Success Stories */}
    <section className="py-20 bg-gray-50">
      <div className="w-full sm:max-w-[95vw] lg:max-w-[65vw] mx-auto min-w-0">
        <div className="text-center mb-16 animate-slide-up">
        <h2 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
          Success Stories
        </h2>
        <p className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto">
          See how professionals like you are building successful consulting
          practices on our platform.
        </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {successStories.map((story, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-8 md:p-12 shadow-lg card-hover animate-scale-in"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <div className="flex items-center mb-6">
            <img
              src={story.image}
              alt={story.name}
              className="w-16 h-16 md:w-20 md:h-20 rounded-full object-cover mr-4"
            />
            <div>
              <h3 className="font-semibold text-gray-900 md:text-xl">
                {story.name}
              </h3>
              <p className="text-blue-600 font-medium md:text-lg">{story.title}</p>
            </div>
            </div>

            <div className="bg-green-100 text-green-800 px-4 py-2 md:px-6 md:py-3 rounded-full text-center mb-4">
            <span className="font-bold text-lg md:text-2xl">{story.earnings}</span>
            <span className="text-sm md:text-base"> average monthly</span>
            </div>

            <p className="text-gray-600 text-center md:text-lg">{story.story}</p>
          </div>
        ))}
        </div>
      </div>
    </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="w-full sm:max-w-[95vw] lg:max-w-[65vw] mx-auto min-w-0">
          <div className="text-center mb-12 animate-slide-up">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Start Your Application
            </h2>
            <p className="text-xl md:text-2xl text-gray-600">
              Complete your profile to join our network of verified
              professionals.
            </p>
          </div>

          {/* Progress Steps */}
          <div className="flex justify-center mb-12">
            <div className="flex items-center space-x-4">
              {steps.map((step, index) => (
                <div key={index} className="flex items-center">
                  <div
                    className={`w-12 h-12 md:w-16 md:h-16 rounded-full flex items-center justify-center font-semibold text-lg md:text-2xl transition-all ${
                      currentStep >= step.number
                        ? "bg-blue-600 text-white"
                        : "bg-gray-200 text-gray-600"
                    }`}
                  >
                    {currentStep > step.number ? (
                      <CheckCircle size={32} />
                    ) : (
                      step.number
                    )}
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`w-16 md:w-24 h-1 mx-2 transition-all ${
                        currentStep > step.number
                          ? "bg-blue-600"
                          : "bg-gray-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8 md:p-12 animate-fade-in">
            <div className="mb-8">
              <h3 className="text-2xl md:text-4xl font-bold text-gray-900 mb-2">
                {steps[currentStep - 1]?.title}
              </h3>
              <p className="text-gray-600 md:text-xl">
                {steps[currentStep - 1]?.description}
              </p>
            </div>

            {/* Step 1: Personal Information */}
            {currentStep === 1 && (
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                      First Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                      placeholder="Enter your first name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                      Last Name *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                      placeholder="Enter your last name"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <div className="flex">
                      <select
                        value={formData.personalInfo.countryCode}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            personalInfo: {
                              ...prev.personalInfo,
                              countryCode: e.target.value,
                            },
                          }))
                        }
                        className="px-3 py-3 md:px-6 md:py-4 border border-gray-300 rounded-l-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-gray-50 min-w-[100px]"
                      >
                        {countryCodes.map((country) => (
                          <option key={country.code} value={country.code}>
                            {country.flag} {country.code}
                          </option>
                        ))}
                      </select>
                      <input
                        type="tel"
                        value={formData.personalInfo.phone}
                        onChange={(e) =>
                          setFormData((prev) => ({
                            ...prev,
                            personalInfo: {
                              ...prev.personalInfo,
                              phone: e.target.value,
                            },
                          }))
                        }
                        className="flex-1 px-4 py-3 md:px-6 md:py-4 border border-l-0 border-gray-300 rounded-r-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                        placeholder="(555) 123-4567"
                      />
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                      Location *
                    </label>
                    <input
                      type="text"
                      className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                      placeholder="City, Country"
                    />
                  </div>
                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                      Timezone *
                    </label>
                    <select className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl">
                      <option>Select timezone</option>
                      <option>UTC-8 (PST)</option>
                      <option>UTC-5 (EST)</option>
                      <option>UTC+0 (GMT)</option>
                      <option>UTC+1 (CET)</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                    Languages Spoken *
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {[
                      "English",
                      "Spanish",
                      "French",
                      "German",
                      "Mandarin",
                      "Japanese",
                    ].map((lang) => (
                      <button
                        key={lang}
                        className="px-3 py-1 border border-gray-300 rounded-full text-sm hover:border-blue-600 hover:text-blue-600 transition-colors"
                      >
                        {lang}
                      </button>
                    ))}
                  </div>
                </div>

                <div>
                  <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                    Profile Photo *
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-8 text-center hover:border-blue-600 transition-colors cursor-pointer">
                    <Camera className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                    <p className="text-gray-600 mb-2">
                      Upload your professional photo
                    </p>
                    <p className="text-sm text-gray-500">JPG, PNG up to 5MB</p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 2: Professional Details */}
            {currentStep === 2 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                    Professional Title *
                  </label>
                  <input
                    type="text"
                    className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                    placeholder="e.g., Senior Business Strategy Consultant"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                      Category *
                    </label>
                    <select className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl">
                      <option>Select category</option>
                      {categories.map((category) => (
                        <option key={category} value={category}>
                          {category}
                        </option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                      Years of Experience *
                    </label>
                    <select className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl">
                      <option>Select experience</option>
                      <option>1-2 years</option>
                      <option>3-5 years</option>
                      <option>6-10 years</option>
                      <option>10+ years</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                    Professional Bio *
                  </label>
                  <textarea
                    rows={6}
                    className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-base md:text-xl"
                    placeholder="Tell clients about your background, expertise, and what makes you unique..."
                  />
                  <p className="text-sm text-gray-500 mt-2">
                    Minimum 200 characters
                  </p>
                </div>

                <div>
                  <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                    Areas of Expertise *
                  </label>
                  <div className="flex flex-wrap gap-2 mb-3">
                    {formData.professional.expertise.map((skill, index) => (
                      <span
                        key={index}
                        className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm flex items-center gap-2"
                      >
                        {skill}
                        <button
                          onClick={() => removeExpertise(index)}
                          className="hover:text-blue-600"
                        >
                          <X size={14} />
                        </button>
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2">
                    <input
                      type="text"
                      className="flex-1 px-4 py-2 md:px-6 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                      placeholder="Add expertise area"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          e.preventDefault();
                          addExpertise((e.target as HTMLInputElement).value);
                          (e.target as HTMLInputElement).value = "";
                        }
                      }}
                    />
                    <button
                      type="button"
                      className="bg-blue-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-blue-700 transition-colors text-base md:text-xl"
                    >
                      <Plus size={20} />
                    </button>
                  </div>
                </div>

                <div>
                  <label className="block text-sm md:text-lg font-medium text-gray-700 mb-4">
                    Work Experience *
                  </label>
                  <div className="space-y-6">
                    {formData.professional.workExperience.map((exp, index) => (
                      <div
                        key={index}
                        className="border border-gray-200 rounded-2xl p-6 relative"
                      >
                        {/* Timeline indicator */}
                        <div className="absolute left-0 top-6 w-1 h-full bg-blue-600 rounded-full"></div>
                        <div className="absolute left-0 top-6 w-3 h-3 bg-blue-600 rounded-full transform -translate-x-1"></div>

                        <div className="ml-6">
                          <div className="flex justify-between items-start mb-4">
                            <h4 className="text-lg font-semibold text-gray-900">
                              Experience #{index + 1}
                            </h4>
                            {formData.professional.workExperience.length >
                              1 && (
                              <button
                                type="button"
                                onClick={() => removeWorkExperience(index)}
                                className="text-red-600 hover:text-red-700 transition-colors"
                              >
                                <X size={20} />
                              </button>
                            )}
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
                            <div>
                              <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                                Company *
                              </label>
                              <input
                                type="text"
                                value={exp.company}
                                onChange={(e) =>
                                  updateWorkExperience(
                                    index,
                                    "company",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 md:px-6 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                                placeholder="Company name"
                              />
                            </div>
                            <div>
                              <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                                Position *
                              </label>
                              <input
                                type="text"
                                value={exp.position}
                                onChange={(e) =>
                                  updateWorkExperience(
                                    index,
                                    "position",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 md:px-6 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                                placeholder="Job title"
                              />
                            </div>
                          </div>

                          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
                            <div>
                              <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                                Start Date *
                              </label>
                              <input
                                type="month"
                                value={exp.startDate}
                                onChange={(e) =>
                                  updateWorkExperience(
                                    index,
                                    "startDate",
                                    e.target.value
                                  )
                                }
                                className="w-full px-3 py-2 md:px-6 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                              />
                            </div>
                            <div>
                              <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                                End Date
                              </label>
                              <input
                                type="month"
                                value={exp.endDate}
                                onChange={(e) =>
                                  updateWorkExperience(
                                    index,
                                    "endDate",
                                    e.target.value
                                  )
                                }
                                disabled={exp.current}
                                className="w-full px-3 py-2 md:px-6 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent disabled:bg-gray-100 text-base md:text-xl"
                              />
                            </div>
                            <div className="flex items-end">
                              <label className="flex items-center gap-2 pb-2">
                                <input
                                  type="checkbox"
                                  checked={exp.current}
                                  onChange={(e) => {
                                    updateWorkExperience(
                                      index,
                                      "current",
                                      e.target.checked
                                    );
                                    if (e.target.checked) {
                                      updateWorkExperience(
                                        index,
                                        "endDate",
                                        ""
                                      );
                                    }
                                  }}
                                  className="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                />
                                <span className="text-sm text-gray-700">
                                  Current position
                                </span>
                              </label>
                            </div>
                          </div>

                          <div className="mb-4">
                            <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                              Job Description *
                            </label>
                            <textarea
                              rows={3}
                              value={exp.description}
                              onChange={(e) =>
                                updateWorkExperience(
                                  index,
                                  "description",
                                  e.target.value
                                )
                              }
                              className="w-full px-3 py-2 md:px-6 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent resize-none text-base md:text-xl"
                              placeholder="Describe your role and responsibilities..."
                            />
                          </div>

                          <div>
                            <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                              Key Achievements
                            </label>
                            <div className="space-y-2 mb-3">
                              {exp.achievements.map((achievement, achIndex) => (
                                <div
                                  key={achIndex}
                                  className="flex items-center gap-2 bg-green-50 px-3 py-2 rounded-lg"
                                >
                                  <CheckCircle className="w-4 h-4 text-green-600 flex-shrink-0" />
                                  <span className="flex-1 text-sm text-gray-700">
                                    {achievement}
                                  </span>
                                  <button
                                    type="button"
                                    onClick={() =>
                                      removeAchievement(index, achIndex)
                                    }
                                    className="text-red-600 hover:text-red-700 transition-colors"
                                  >
                                    <X size={14} />
                                  </button>
                                </div>
                              ))}
                            </div>
                            <div className="flex gap-2">
                              <input
                                type="text"
                                className="flex-1 px-3 py-2 md:px-6 md:py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                                placeholder="Add an achievement or accomplishment"
                                onKeyPress={(e) => {
                                  if (e.key === "Enter") {
                                    e.preventDefault();
                                    addAchievement(
                                      index,
                                      (e.target as HTMLInputElement).value
                                    );
                                    (e.target as HTMLInputElement).value = "";
                                  }
                                }}
                              />
                              <button
                                type="button"
                                onClick={(e) => {
                                  const input = e.currentTarget
                                    .previousElementSibling as HTMLInputElement;
                                  addAchievement(index, input.value);
                                  input.value = "";
                                }}
                                className="bg-green-600 text-white px-4 py-2 md:px-6 md:py-3 rounded-lg hover:bg-green-700 transition-colors text-base md:text-xl"
                              >
                                <Plus size={20} />
                              </button>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>

                  <button
                    type="button"
                    onClick={addWorkExperience}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors mt-4"
                  >
                    <Plus size={16} />
                    Add Work Experience
                  </button>
                </div>

                <div>
                  <label className="block text-sm md:text-lg font-medium text-gray-700 mb-4">
                    Education
                  </label>
                  {formData.professional.education.map((edu, index) => (
                    <div
                      key={index}
                      className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4 p-4 border border-gray-200 rounded-xl"
                    >
                      <input
                        type="text"
                        placeholder="Degree"
                        className="px-3 py-2 md:px-6 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                      />
                      <input
                        type="text"
                        placeholder="School/University"
                        className="px-3 py-2 md:px-6 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                      />
                      <input
                        type="text"
                        placeholder="Year"
                        className="px-3 py-2 md:px-6 md:py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                      />
                      <button
                        type="button"
                        onClick={() => removeEducation(index)}
                        className="text-red-600 hover:text-red-700 transition-colors"
                      >
                        <X size={20} />
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={addEducation}
                    className="flex items-center gap-2 text-blue-600 hover:text-blue-700 transition-colors"
                  >
                    <Plus size={16} />
                    Add Education
                  </button>
                </div>

                <div>
                  <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                    Certifications & Documents
                  </label>
                  <div className="border-2 border-dashed border-gray-300 rounded-xl p-6 text-center hover:border-blue-600 transition-colors cursor-pointer">
                    <FileText className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                    <p className="text-gray-600 mb-1">
                      Upload certificates, licenses, or credentials
                    </p>
                    <p className="text-sm text-gray-500">
                      PDF, JPG, PNG up to 10MB each
                    </p>
                  </div>
                </div>
              </div>
            )}

            {/* Step 3: Availability & Pricing */}
            {currentStep === 3 && (
              <div className="space-y-6">
                <div>
                  <label className="block text-sm md:text-lg font-medium text-gray-700 mb-4">
                    Consultation Types *
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    {consultationTypes.map((type) => (
                      <div
                        key={type.id}
                        className="border-2 border-gray-200 rounded-xl p-4 cursor-pointer hover:border-blue-600 transition-colors"
                      >
                        <div className="flex items-center gap-3 mb-2">
                          <type.icon className="w-5 h-5 text-blue-600" />
                          <span className="font-medium">{type.name}</span>
                        </div>
                        <p className="text-sm text-gray-600">
                          {type.description}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                      Hourly Rate (USD) *
                    </label>
                    <div className="relative">
                      <DollarSign
                        className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400"
                        size={20}
                      />
                      <input
                        type="number"
                        className="w-full pl-10 pr-4 py-3 md:pl-12 md:pr-8 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl"
                        placeholder="150"
                      />
                    </div>
                    <p className="text-sm text-gray-500 mt-1">
                      Platform fee: 10% (you keep 90%)
                    </p>
                  </div>
                  <div>
                    <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                      Weekly Availability *
                    </label>
                    <select className="w-full px-4 py-3 md:px-6 md:py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent text-base md:text-xl">
                      <option>Select hours per week</option>
                      <option>1-10 hours</option>
                      <option>11-20 hours</option>
                      <option>21-30 hours</option>
                      <option>30+ hours</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm md:text-lg font-medium text-gray-700 mb-2">
                    Response Time Commitment *
                  </label>
                  <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                    {["< 1 hour", "< 2 hours", "< 4 hours", "< 24 hours"].map(
                      (time) => (
                        <button
                          key={time}
                          className="p-3 border border-gray-300 rounded-xl hover:border-blue-600 hover:bg-blue-50 transition-colors text-center"
                        >
                          {time}
                        </button>
                      )
                    )}
                  </div>
                </div>

                <div className="bg-blue-50 border border-blue-200 rounded-xl p-6">
                  <h4 className="font-semibold text-blue-900 mb-3">
                    Earnings Calculator
                  </h4>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        $1,350
                      </div>
                      <div className="text-sm text-blue-700">10 hours/week</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        $2,700
                      </div>
                      <div className="text-sm text-blue-700">20 hours/week</div>
                    </div>
                    <div>
                      <div className="text-2xl font-bold text-blue-600">
                        $4,050
                      </div>
                      <div className="text-sm text-blue-700">30 hours/week</div>
                    </div>
                  </div>
                  <p className="text-xs text-blue-600 text-center mt-3">
                    *Based on $150/hour rate after platform fees
                  </p>
                </div>
              </div>
            )}

            {/* Step 4: Verification */}
            {currentStep === 4 && (
              <div className="space-y-6 text-center">
                <div className="bg-green-50 border border-green-200 rounded-xl p-8">
                  <CheckCircle className="w-16 h-16 text-green-600 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    Application Submitted!
                  </h3>
                  <p className="text-gray-600 mb-6">
                    Thank you for applying to become a ConnectXWorld
                    professional. Our team will review your application and get
                    back to you within 2-3 business days.
                  </p>

                  <div className="bg-white rounded-xl p-6 mb-6">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      What happens next?
                    </h4>
                    <div className="space-y-3 text-left">
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600">
                            1
                          </span>
                        </div>
                        <span className="text-gray-700">
                          Application review (1-2 days)
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600">
                            2
                          </span>
                        </div>
                        <span className="text-gray-700">
                          Background verification (1-2 days)
                        </span>
                      </div>
                      <div className="flex items-center gap-3">
                        <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center">
                          <span className="text-xs font-bold text-blue-600">
                            3
                          </span>
                        </div>
                        <span className="text-gray-700">
                          Profile activation & onboarding
                        </span>
                      </div>
                    </div>
                  </div>

                  <button className="bg-blue-600 text-white px-8 py-3 rounded-full hover:bg-blue-700 transition-colors font-medium">
                    Track Application Status
                  </button>
                </div>
              </div>
            )}

            {/* Navigation Buttons */}
            <div className="flex justify-between mt-8 pt-8 border-t border-gray-200">
              <button
                onClick={prevStep}
                disabled={currentStep === 1}
                className={`px-6 py-3 rounded-xl font-medium transition-colors ${
                  currentStep === 1
                    ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                    : "bg-gray-100 text-gray-700 hover:bg-gray-200"
                }`}
              >
                Previous
              </button>

              {currentStep < 4 ? (
                <button
                  onClick={nextStep}
                  className="bg-blue-600 text-white px-8 py-3 rounded-xl hover:bg-blue-700 transition-colors font-medium flex items-center gap-2"
                >
                  Continue
                  <ArrowRight size={16} />
                </button>
              ) : (
                <button className="bg-green-600 text-white px-8 py-3 rounded-xl hover:bg-green-700 transition-colors font-medium">
                  Submit Application
                </button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="w-full max-w-none sm:max-w-[95vw] lg:max-w-[65vw] mx-auto min-w-0">
          <div className="text-center mb-16 animate-slide-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Everything you need to know about becoming a professional on our
              platform.
            </p>
          </div>

          <div className="space-y-6">
            {[
              {
                question: "How much can I earn as a professional?",
                answer:
                  "Earnings vary based on your expertise, rates, and availability. Top professionals earn $10K+ per month, with average rates ranging from $50-$500 per hour.",
              },
              {
                question: "What are the requirements to join?",
                answer:
                  "You need relevant professional experience, verifiable credentials, and the ability to provide quality consultations. We review each application individually.",
              },
              {
                question: "How does the payment system work?",
                answer:
                  "Payments are processed securely through our platform. You receive 90% of your consultation fees, with funds released after successful completion of sessions.",
              },
              {
                question: "Can I set my own schedule?",
                answer:
                  "Absolutely! You have complete control over your availability, consultation types, and working hours. Work when and how you want.",
              },
            ].map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-2xl p-6 shadow-lg animate-scale-in"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <h3 className="text-lg md:text-2xl font-semibold text-gray-900 mb-3">
                  {faq.question}
                </h3>
                <p className="text-gray-600 leading-relaxed md:text-lg">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
