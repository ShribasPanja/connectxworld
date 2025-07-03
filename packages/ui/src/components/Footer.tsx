"use client";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    Platform: [
      "Find Professionals",
      "How It Works",
      "Pricing",
      "Success Stories",
    ],
    Categories: [
      "Business Strategy",
      "Marketing & Sales",
      "Technology & IT",
      "Design & Creative",
    ],
    "For Professionals": [
      "Join as Expert",
      "Professional Dashboard",
      "Earnings Calculator",
      "Success Tips",
    ],
    Support: ["Help Center", "Contact Us", "Live Chat", "Community Forum"],
    Company: ["About Us", "Careers", "Press Kit", "Blog"],
    Legal: [
      "Privacy Policy",
      "Terms of Service",
      "Cookie Policy",
      "Trust & Safety",
    ],
  };

  return (
    <footer className="bg-gray-900 text-white">
      <div className="w-full px-4 sm:px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          <div className="lg:col-span-2">
            <div className="text-2xl md:text-4xl font-bold text-blue-400 mb-4">
              ConnectXWorld
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed md:text-2xl">
              The world's leading platform for professional consultations.
              Connect with verified experts, get actionable advice, and
              transform your business with confidence.
            </p>
            <div className="flex space-x-4">
              <div className="bg-gray-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Li</span>
              </div>
              <div className="bg-gray-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Tw</span>
              </div>
              <div className="bg-gray-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">Fb</span>
              </div>
              <div className="bg-gray-800 w-10 h-10 rounded-lg flex items-center justify-center hover:bg-gray-700 transition-colors cursor-pointer">
                <span className="text-sm font-bold">In</span>
              </div>
            </div>
          </div>

          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h3 className="text-lg md:text-3xl font-semibold mb-4">
                {title}
              </h3>
              <ul className="space-y-2">
                {links.map((link, index) => (
                  <li key={index}>
                    <a
                      href="#"
                      className="text-gray-300 hover:text-white transition-colors text-sm md:text-xl"
                    >
                      {link}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="text-gray-300 md:text-lg">
              <p>&copy; {currentYear} ConnectXWorld. All rights reserved.</p>
            </div>
            <div className="flex flex-wrap gap-6 md:justify-end">
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-xl"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-xl"
              >
                Terms of Service
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-white transition-colors text-sm md:text-xl"
              >
                Cookie Settings
              </a>
            </div>
          </div>

          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <div className="bg-gradient-to-r from-blue-600 to-green-600 rounded-2xl p-6 text-white">
              <h3 className="text-xl md:text-4xl font-bold mb-2">
                Ready to Get Started?
              </h3>
              <p className="text-blue-100 mb-4 md:text-2xl">
                Join thousands of professionals and businesses transforming
                their success.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <button className="bg-white text-blue-600 px-6 py-3 rounded-full hover:bg-gray-100 transition-colors font-medium text-md md:text-xl">
                  Find a Professional
                </button>
                <button className="border border-white text-white px-6 py-3 rounded-full hover:bg-white hover:text-blue-600 transition-colors font-medium text-md md:text-xl">
                  Become an Expert
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
