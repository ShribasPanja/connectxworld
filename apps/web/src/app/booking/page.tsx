"use client";

import { useState } from "react";
import {
  Calendar,
  Clock,
  Video,
  Phone,
  MapPin,
  CreditCard,
  Shield,
  CheckCircle,
  ArrowRight,
  Sparkles,
  Star,
} from "lucide-react";
import { Button } from "@repo/ui/components/base/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@repo/ui/components/base/card";
import { Badge } from "@repo/ui/components/base/badge";
import { Input } from "@repo/ui/components/base/input";
import { Textarea } from "@repo/ui/components/base/textarea";

const professional = {
  name: "Dr. Sarah Johnson",
  title: "Business Strategy Consultant",
  rating: 4.9,
  reviews: 127,
  hourlyRate: 150,
  image:
    "https://images.pexels.com/photos/3727463/pexels-photo-3727463.jpeg?auto=compress&cs=tinysrgb&w=400",
  expertise: ["Business Strategy", "Market Analysis", "Growth Planning"],
  location: "New York, USA",
  gradient: "from-emerald-400 to-cyan-400",
};

const timeSlots = [
  { time: "9:00 AM", available: true },
  { time: "10:00 AM", available: true },
  { time: "11:00 AM", available: false },
  { time: "12:00 PM", available: true },
  { time: "1:00 PM", available: false },
  { time: "2:00 PM", available: true },
  { time: "3:00 PM", available: true },
  { time: "4:00 PM", available: true },
  { time: "5:00 PM", available: false },
];

const consultationTypes = [
  {
    id: "strategy-session",
    name: "Strategy Session",
    duration: "60 minutes",
    price: 150,
    description: "Comprehensive business strategy consultation",
    gradient: "from-blue-500 to-indigo-500",
    popular: true,
  },
  {
    id: "quick-consultation",
    name: "Quick Consultation",
    duration: "30 minutes",
    price: 75,
    description: "Focused advice on specific questions",
    gradient: "from-green-500 to-emerald-500",
    popular: false,
  },
  {
    id: "deep-dive",
    name: "Deep Dive Analysis",
    duration: "90 minutes",
    price: 225,
    description: "In-depth analysis with detailed recommendations",
    gradient: "from-purple-500 to-pink-500",
    popular: false,
  },
];

export default function BookingPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedType, setSelectedType] = useState("strategy-session");
  const [meetingMethod, setMeetingMethod] = useState("video");
  const [clientInfo, setClientInfo] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const selectedConsultation = consultationTypes.find(
    (type) => type.id === selectedType
  );
  const totalAmount = selectedConsultation?.price || 0;
  const platformFee = Math.round(totalAmount * 0.03);
  const finalTotal = totalAmount + platformFee;

  const handleNext = () => {
    if (step < 4) setStep(step + 1);
  };

  const handleBack = () => {
    if (step > 1) setStep(step - 1);
  };

  const handleBooking = () => {
    alert(
      "Payment integration would be implemented here. Please set up Stripe for secure payments."
    );
  };

  const stepTitles = [
    "Select Service",
    "Choose Date & Time",
    "Your Details",
    "Payment",
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-100">
      {/* Enhanced Header */}
      <header className="bg-white/90 backdrop-blur-xl border-b border-white/20 shadow-lg shadow-blue-500/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center space-x-3 group">
              <a href="/" className="flex items-center space-x-3">
                <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent group-hover:from-purple-600 group-hover:via-pink-600 group-hover:to-blue-600 transition-all duration-500">
                  ConnectXWorld
                </span>
              </a>
            </div>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="max-w-7xl mx-auto">
          {/* Enhanced Progress Bar */}
          <div className="mb-12">
            <div className="flex items-center justify-between mb-6">
              {[1, 2, 3, 4].map((stepNumber) => (
                <div key={stepNumber} className="flex items-center">
                  <div
                    className={`relative w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg transition-all duration-500 ${
                      step >= stepNumber
                        ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg scale-110"
                        : "bg-white border-2 border-slate-200 text-slate-600 hover:border-blue-300"
                    }`}
                  >
                    {step > stepNumber ? (
                      <CheckCircle className="h-6 w-6 animate-pulse" />
                    ) : (
                      stepNumber
                    )}
                    {step >= stepNumber && (
                      <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full opacity-20 blur animate-pulse"></div>
                    )}
                  </div>
                  {stepNumber < 4 && (
                    <div
                      className={`h-2 w-24 mx-4 rounded-full transition-all duration-500 ${
                        step > stepNumber
                          ? "bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg"
                          : "bg-slate-200"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="flex justify-between text-sm font-medium">
              {stepTitles.map((title, index) => (
                <span
                  key={index}
                  className={`transition-colors duration-300 ${
                    step >= index + 1
                      ? "bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent"
                      : "text-slate-600"
                  }`}
                >
                  {title}
                </span>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Enhanced Main Content */}
            <div className="lg:col-span-2">
              <Card className="border-0 shadow-2xl bg-white/90 backdrop-blur-xl relative overflow-hidden group">
                <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <CardHeader className="relative z-10">
                  <CardTitle className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {step === 1 && "Select Consultation Type"}
                    {step === 2 && "Choose Date & Time"}
                    {step === 3 && "Your Information"}
                    {step === 4 && "Review & Payment"}
                  </CardTitle>
                  <CardDescription className="text-lg text-slate-600">
                    {step === 1 &&
                      "Choose the type of consultation that best fits your needs"}
                    {step === 2 && "Select your preferred date and time slot"}
                    {step === 3 && "Provide your details for the consultation"}
                    {step === 4 && "Review your booking and complete payment"}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-8 relative z-10">
                  {/* Step 1: Enhanced Consultation Type Selection */}
                  {step === 1 && (
                    <div className="space-y-6">
                      <div className="space-y-4">
                        {consultationTypes.map((type) => (
                          <div key={type.id} className="relative group">
                            <div
                              className={`flex items-center space-x-4 border-2 rounded-2xl p-6 transition-all duration-300 cursor-pointer ${
                                selectedType === type.id
                                  ? "border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg"
                                  : "border-slate-200 hover:border-blue-300 hover:shadow-md bg-white"
                              }`}
                            >
                              <input
                                type="radio"
                                value={type.id}
                                id={type.id}
                                name="consultationType"
                                checked={selectedType === type.id}
                                onChange={(e) =>
                                  setSelectedType(e.target.value)
                                }
                                className="text-blue-600 w-4 h-4"
                              />
                              <label
                                htmlFor={type.id}
                                className="flex-1 cursor-pointer"
                              >
                                <div className="flex items-center justify-between">
                                  <div className="space-y-2">
                                    <div className="flex items-center space-x-3">
                                      <h3 className="text-xl font-bold text-slate-900">
                                        {type.name}
                                      </h3>
                                      {type.popular && (
                                        <Badge className="bg-gradient-to-r from-orange-500 to-red-500 text-white animate-pulse">
                                          <Sparkles className="h-3 w-3 mr-1" />
                                          Popular
                                        </Badge>
                                      )}
                                    </div>
                                    <p className="text-slate-600">
                                      {type.description}
                                    </p>
                                    <p className="text-sm font-medium text-blue-600">
                                      {type.duration}
                                    </p>
                                  </div>
                                  <div className="text-right">
                                    <div
                                      className={`text-3xl font-bold bg-gradient-to-r ${type.gradient} bg-clip-text text-transparent`}
                                    >
                                      ${type.price}
                                    </div>
                                  </div>
                                </div>
                              </label>
                            </div>
                            {selectedType === type.id && (
                              <div
                                className={`absolute -inset-1 bg-gradient-to-r ${type.gradient} rounded-2xl opacity-20 blur animate-pulse`}
                              ></div>
                            )}
                          </div>
                        ))}
                      </div>

                      <div className="mt-8">
                        <h3 className="text-xl font-bold text-slate-900 mb-6">
                          Meeting Method
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              value: "video",
                              icon: Video,
                              title: "Video Call",
                              description:
                                "Meet via Zoom, Google Meet, or similar",
                              color: "text-blue-600",
                              bg: "bg-blue-50",
                            },
                            {
                              value: "phone",
                              icon: Phone,
                              title: "Phone Call",
                              description: "Traditional phone consultation",
                              color: "text-green-600",
                              bg: "bg-green-50",
                            },
                            {
                              value: "in-person",
                              icon: MapPin,
                              title: "In-Person Meeting",
                              description: "Meet at agreed location",
                              color: "text-purple-600",
                              bg: "bg-purple-50",
                            },
                          ].map((method) => (
                            <div
                              key={method.value}
                              className={`flex items-center space-x-4 border-2 rounded-xl p-4 transition-all duration-300 cursor-pointer ${
                                meetingMethod === method.value
                                  ? "border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg"
                                  : "border-slate-200 hover:border-blue-300 hover:shadow-md bg-white"
                              }`}
                            >
                              <input
                                type="radio"
                                value={method.value}
                                id={method.value}
                                name="meetingMethod"
                                checked={meetingMethod === method.value}
                                onChange={(e) =>
                                  setMeetingMethod(e.target.value)
                                }
                                className="w-4 h-4"
                              />
                              <label
                                htmlFor={method.value}
                                className="flex items-center space-x-4 cursor-pointer flex-1"
                              >
                                <div className={`p-3 rounded-xl ${method.bg}`}>
                                  <method.icon
                                    className={`h-6 w-6 ${method.color}`}
                                  />
                                </div>
                                <div>
                                  <div className="font-semibold text-slate-900">
                                    {method.title}
                                  </div>
                                  <div className="text-sm text-slate-600">
                                    {method.description}
                                  </div>
                                </div>
                              </label>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 2: Enhanced Date & Time Selection */}
                  {step === 2 && (
                    <div className="space-y-8">
                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6">
                          Select Date
                        </h3>
                        <div className="grid grid-cols-7 gap-3">
                          {[
                            "Mon",
                            "Tue",
                            "Wed",
                            "Thu",
                            "Fri",
                            "Sat",
                            "Sun",
                          ].map((day, index) => (
                            <div
                              key={day}
                              className={`text-center p-4 border-2 rounded-xl transition-all duration-300 cursor-pointer group ${
                                index === 1
                                  ? "border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg"
                                  : "border-slate-200 hover:border-blue-300 hover:shadow-md bg-white"
                              }`}
                            >
                              <div
                                className={`text-sm font-medium mb-1 ${index === 1 ? "text-blue-600" : "text-slate-600"}`}
                              >
                                {day}
                              </div>
                              <div
                                className={`text-lg font-bold ${index === 1 ? "text-blue-600" : "text-slate-900"}`}
                              >
                                {15 + index}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div>
                        <h3 className="text-xl font-bold text-slate-900 mb-6">
                          Available Time Slots
                        </h3>
                        <div className="grid grid-cols-3 gap-4">
                          {timeSlots.map((slot, index) => (
                            <Button
                              key={index}
                              variant={
                                selectedTime === slot.time
                                  ? "default"
                                  : "outline"
                              }
                              disabled={!slot.available}
                              onClick={() =>
                                slot.available && setSelectedTime(slot.time)
                              }
                              className={`p-4 h-auto transition-all duration-300 ${
                                selectedTime === slot.time
                                  ? "bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 shadow-lg scale-105"
                                  : slot.available
                                    ? "border-2 border-slate-200 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 hover:shadow-md"
                                    : "opacity-50 cursor-not-allowed bg-slate-100"
                              }`}
                            >
                              <div className="flex items-center space-x-2">
                                <Clock className="h-4 w-4" />
                                <span className="font-semibold">
                                  {slot.time}
                                </span>
                              </div>
                            </Button>
                          ))}
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Step 3: Enhanced Client Information */}
                  {step === 3 && (
                    <div className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-semibold text-slate-700"
                          >
                            Full Name *
                          </label>
                          <Input
                            id="name"
                            value={clientInfo.name}
                            onChange={(e) =>
                              setClientInfo({
                                ...clientInfo,
                                name: e.target.value,
                              })
                            }
                            placeholder="Enter your full name"
                            className="border-2 border-slate-200 focus:border-blue-500 hover:border-blue-300 transition-all duration-300 p-4"
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-semibold text-slate-700"
                          >
                            Email Address *
                          </label>
                          <Input
                            id="email"
                            type="email"
                            value={clientInfo.email}
                            onChange={(e) =>
                              setClientInfo({
                                ...clientInfo,
                                email: e.target.value,
                              })
                            }
                            placeholder="Enter your email"
                            className="border-2 border-slate-200 focus:border-blue-500 hover:border-blue-300 transition-all duration-300 p-4"
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="company"
                          className="text-sm font-semibold text-slate-700"
                        >
                          Company/Organization
                        </label>
                        <Input
                          id="company"
                          value={clientInfo.company}
                          onChange={(e) =>
                            setClientInfo({
                              ...clientInfo,
                              company: e.target.value,
                            })
                          }
                          placeholder="Your company name (optional)"
                          className="border-2 border-slate-200 focus:border-blue-500 hover:border-blue-300 transition-all duration-300 p-4"
                        />
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-semibold text-slate-700"
                        >
                          What would you like to discuss? *
                        </label>
                        <Textarea
                          id="message"
                          value={clientInfo.message}
                          onChange={(e) =>
                            setClientInfo({
                              ...clientInfo,
                              message: e.target.value,
                            })
                          }
                          placeholder="Please describe what you'd like to discuss in the consultation..."
                          rows={5}
                          className="border-2 border-slate-200 focus:border-blue-500 hover:border-blue-300 transition-all duration-300 p-4"
                        />
                      </div>
                    </div>
                  )}

                  {/* Step 4: Enhanced Review & Payment */}
                  {step === 4 && (
                    <div className="space-y-8">
                      <div className="bg-gradient-to-r from-slate-50 to-blue-50 rounded-2xl p-8 border border-slate-200">
                        <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                          <CheckCircle className="h-6 w-6 text-green-600 mr-2" />
                          Booking Summary
                        </h3>
                        <div className="space-y-4">
                          {[
                            {
                              label: "Consultation Type",
                              value: selectedConsultation?.name,
                            },
                            {
                              label: "Duration",
                              value: selectedConsultation?.duration,
                            },
                            {
                              label: "Date & Time",
                              value: `Tue, Jan 16 at ${selectedTime || "10:00 AM"}`,
                            },
                            {
                              label: "Meeting Method",
                              value: meetingMethod
                                .replace("-", " ")
                                .replace(/\b\w/g, (l) => l.toUpperCase()),
                            },
                          ].map((item, index) => (
                            <div
                              key={index}
                              className="flex justify-between items-center py-2"
                            >
                              <span className="text-slate-600 font-medium">
                                {item.label}:
                              </span>
                              <span className="font-semibold text-slate-900">
                                {item.value}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border-2 border-blue-200 relative overflow-hidden">
                        <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-blue-400/10 to-purple-600/10 rounded-full blur-2xl"></div>
                        <div className="flex items-center space-x-3 mb-6 relative z-10">
                          <div className="p-3 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl">
                            <Shield className="h-6 w-6 text-white" />
                          </div>
                          <h3 className="text-xl font-bold text-slate-900">
                            Secure Payment
                          </h3>
                        </div>
                        <p className="text-slate-600 mb-6 relative z-10">
                          Your payment is processed securely. You'll only be
                          charged after your consultation is confirmed.
                        </p>
                        <div className="space-y-3 text-sm relative z-10">
                          <div className="flex justify-between py-2">
                            <span className="text-slate-600">
                              Consultation Fee:
                            </span>
                            <span className="font-semibold">
                              ${totalAmount}
                            </span>
                          </div>
                          <div className="flex justify-between py-2">
                            <span className="text-slate-600">
                              Platform Fee:
                            </span>
                            <span className="font-semibold">
                              ${platformFee}
                            </span>
                          </div>
                          <div className="border-t-2 border-blue-200 pt-3 flex justify-between font-bold text-lg">
                            <span>Total:</span>
                            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                              ${finalTotal}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}

                  {/* Enhanced Navigation Buttons */}
                  <div className="flex justify-between pt-8 border-t-2 border-slate-200">
                    <Button
                      variant="outline"
                      onClick={handleBack}
                      disabled={step === 1}
                      className="border-2 border-slate-200 hover:border-blue-300 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-300 px-8 py-3 font-semibold disabled:opacity-50"
                    >
                      Back
                    </Button>
                    {step < 4 ? (
                      <Button
                        onClick={handleNext}
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                      >
                        Continue
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleBooking}
                        className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 px-8 py-3 font-semibold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group"
                      >
                        <CreditCard className="h-4 w-4 mr-2" />
                        Complete Booking
                        <Sparkles className="ml-2 h-4 w-4 group-hover:rotate-12 transition-transform duration-300" />
                      </Button>
                    )}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Enhanced Sidebar - Professional Info */}
            <div className="lg:col-span-1">
              <Card className="border-0 shadow-2xl sticky top-24 bg-white/90 backdrop-blur-xl relative overflow-hidden group">
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${professional.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}
                ></div>
                <div
                  className={`absolute -inset-1 bg-gradient-to-r ${professional.gradient} rounded-2xl opacity-0 group-hover:opacity-20 blur transition-all duration-500`}
                ></div>

                <CardHeader className="relative z-10">
                  <div className="flex items-center space-x-4">
                    <div className="relative group-hover:scale-105 transition-transform duration-300">
                      <img
                        src={professional.image}
                        alt={professional.name}
                        className="w-20 h-20 rounded-2xl object-cover border-4 border-white shadow-xl"
                      />
                      <div
                        className={`absolute -inset-1 bg-gradient-to-r ${professional.gradient} rounded-2xl opacity-0 group-hover:opacity-50 blur transition-all duration-300`}
                      ></div>
                    </div>
                    <div>
                      <CardTitle className="text-xl group-hover:bg-gradient-to-r group-hover:from-blue-600 group-hover:to-purple-600 group-hover:bg-clip-text group-hover:text-transparent transition-all duration-300">
                        {professional.name}
                      </CardTitle>
                      <CardDescription className="text-base font-medium">
                        {professional.title}
                      </CardDescription>
                      <div className="flex items-center mt-3 bg-yellow-50 px-3 py-1.5 rounded-full border border-yellow-200 w-fit">
                        <Star className="h-4 w-4 text-yellow-500 fill-current" />
                        <span className="text-sm font-bold text-yellow-700 ml-1">
                          {professional.rating}
                        </span>
                        <span className="text-sm text-yellow-600 ml-1">
                          ({professional.reviews} reviews)
                        </span>
                      </div>
                    </div>
                  </div>
                </CardHeader>

                <CardContent className="relative z-10">
                  <div className="space-y-6">
                    <div className="flex flex-wrap gap-2">
                      {professional.expertise.map((skill, index) => (
                        <Badge
                          key={index}
                          className={`bg-gradient-to-r ${professional.gradient} text-white hover:scale-105 transition-transform duration-200 shadow-lg font-medium`}
                        >
                          {skill}
                        </Badge>
                      ))}
                    </div>
                    <div className="flex items-center text-sm text-slate-600 bg-slate-50 p-3 rounded-xl">
                      <MapPin className="h-4 w-4 mr-2 text-blue-600" />
                      {professional.location}
                    </div>
                    <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-2xl p-6 border-2 border-green-200 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-green-400/10 to-emerald-600/10 rounded-full blur-xl"></div>
                      <div className="flex items-center text-green-700 relative z-10">
                        <div className="p-2 bg-green-100 rounded-xl mr-3">
                          <CheckCircle className="h-5 w-5 text-green-600" />
                        </div>
                        <span className="font-bold text-lg">
                          Instant Booking
                        </span>
                      </div>
                      <p className="text-green-600 mt-2 font-medium relative z-10">
                        Your consultation will be confirmed immediately
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
