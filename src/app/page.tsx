"use client";

import { useState } from "react";
import {
  Mail,
  MessageCircle,
  Globe,
  DollarSign,
  Send,
  Linkedin,
} from "lucide-react";

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const emailBody = `Name: ${formData.name}%0D%0AEmail: ${formData.email}%0D%0AMessage: ${formData.message}`;
    window.open(
      `mailto:shivamjha190@gmail.com?subject=Inquiry about charitr.com&body=${emailBody}`
    );
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <section
        className="min-h-screen flex items-center justify-center px-4"
        role="banner"
        aria-label="Domain for sale hero section"
      >
        <div className="max-w-4xl mx-auto text-center">
          {/* Domain Name Display */}
          <header className="animate-fade-in-up">
            <h1
              className="text-6xl md:text-8xl font-bold text-gray-900 mb-6 tracking-tight font-serif"
              itemProp="name"
            >
              charitr<span className="text-blue-600">.com</span>
            </h1>
            <p
              className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto leading-relaxed"
              itemProp="description"
            >
              This premium domain is available for purchase
            </p>
          </header>

          {/* Value Badge */}
          <div className="inline-flex items-center bg-blue-50 border border-blue-200 rounded-full px-6 py-3 mb-12 animate-fade-in-up animation-delay-300">
            <DollarSign className="w-5 h-5 text-blue-600 mr-2" />
            <span className="text-blue-700 font-semibold">
              Current Value: $1,700 USD on GoDaddy
            </span>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16 animate-fade-in-up animation-delay-600">
            <a
              href="https://wa.me/919810790293"
              className="inline-flex items-center bg-green-600 hover:bg-green-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <MessageCircle className="w-5 h-5 mr-2" />
              Contact via WhatsApp
            </a>
            <a
              href="mailto:shivamjha190@gmail.com"
              className="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Mail className="w-5 h-5 mr-2" />
              Send Email
            </a>
            <a
              href="https://www.linkedin.com/in/shivamjha2710/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-indigo-600 hover:bg-indigo-700 text-white px-8 py-4 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              <Linkedin className="w-5 h-5 mr-2" />
              LinkedIn Profile
            </a>
          </div>

          {/* Domain Uses Section */}
          <div className="bg-white rounded-2xl shadow-xl p-8 mb-16 animate-fade-in-up animation-delay-900">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">
              Perfect For
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="text-center p-6">
                <Globe className="w-12 h-12 text-blue-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  E-commerce
                </h3>
                <p className="text-gray-600">
                  Build your online store with a memorable domain
                </p>
              </div>
              <div className="text-center p-6">
                <Send className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Startups
                </h3>
                <p className="text-gray-600">
                  Launch your business with a brandable domain
                </p>
              </div>
              <div className="text-center p-6">
                <MessageCircle className="w-12 h-12 text-purple-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  Character Brands
                </h3>
                <p className="text-gray-600">
                  Perfect for character-based businesses and apps
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-20 px-4 bg-gray-900">
        <div className="max-w-2xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">
              Make an Offer
            </h2>
            <p className="text-gray-300 text-lg">
              Interested in purchasing charitr.com? Send us your inquiry below.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="bg-white rounded-2xl shadow-xl p-8"
          >
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700 mb-2"
                >
                  Email *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all"
                  placeholder="your@email.com"
                />
              </div>
            </div>
            <div className="mb-6">
              <label
                htmlFor="message"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Message *
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                value={formData.message}
                onChange={handleInputChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all resize-none"
                placeholder="Tell us about your project and your offer..."
              ></textarea>
            </div>
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-4 px-6 rounded-lg font-semibold transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
            >
              Send Inquiry
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-100 py-8 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-gray-600 mb-4">
            © 2025. For inquiries, contact via WhatsApp, email, or LinkedIn.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://wa.me/919810790293"
              className="text-green-600 hover:text-green-700 transition-colors"
            >
              WhatsApp
            </a>
            <a
              href="mailto:shivamjha190@gmail.com"
              className="text-blue-600 hover:text-blue-700 transition-colors"
            >
              Email
            </a>
            <a
              href="https://www.linkedin.com/in/shivamjha2710/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-indigo-600 hover:text-indigo-700 transition-colors"
            >
              LinkedIn
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
