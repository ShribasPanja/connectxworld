"use client";

import { useState, useEffect } from "react";
import { Menu, X, User, Search } from "lucide-react";

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigation = [
    { name: "Home", href: "#home" },
    { name: "Find Professionals", href: "#professionals" },
    { name: "How It Works", href: "#how-it-works" },
    { name: "Categories", href: "#categories" },
    { name: "About", href: "#about" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="w-full px-4 sm:px-6 lg:px-12">
        <div className="flex justify-between items-center py-4">
          <div className="flex items-center">
            <div className="text-2xl md:text-4xl font-bold text-blue-600">
              ConnectXWorld
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            {navigation.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-gray-700 text-base md:text-2xl hover:text-blue-600 transition-colors duration-200 font-medium"
              >
                {item.name}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center space-x-4">
            {/* <button className="flex text-base md:text-2xl items-center gap-2 text-gray-700 hover:text-blue-600 transition-colors duration-200">
              <Search size={25} />
              <span>Search</span>
            </button> */}
            <button className="flex text-base md:text-2xl items-center gap-2 border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-colors duration-200">
              <User size={20} />
              <span>Sign In</span>
            </button>
            <button className="bg-blue-600 text-base md:text-2xl text-white px-6 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
              Join as Professional
            </button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-700 hover:text-blue-600 transition-colors duration-200"
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden animate-fade-in">
            <div className="px-2 pt-2 pb-3 space-y-1 bg-white rounded-lg shadow-lg mt-2">
              {navigation.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-gray-700 hover:text-blue-600 transition-colors duration-200"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.name}
                </a>
              ))}
              <div className="px-3 py-2 space-y-2">
                <button className="w-full border border-blue-600 text-blue-600 px-4 py-2 rounded-full hover:bg-blue-50 transition-colors duration-200">
                  Sign In
                </button>
                <button className="w-full bg-blue-600 text-white px-4 py-2 rounded-full hover:bg-blue-700 transition-colors duration-200">
                  Join as Professional
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
