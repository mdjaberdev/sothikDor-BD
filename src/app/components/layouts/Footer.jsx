"use client";
import React from "react";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaEnvelope,
  FaPhoneAlt,
} from "react-icons/fa";
import Container from "../common/Container";

const Footer = () => {
  // ক্যাটাগরি সিলেক্ট করার ফাংশন
  const handleCategoryClick = (catName) => {
    // একটি কাস্টম ইভেন্ট পাঠানো হচ্ছে যা PriceTracker শুনবে
    const event = new CustomEvent("filterCategory", { detail: catName });
    window.dispatchEvent(event);

    // উপরে স্ক্রল করার জন্য
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const categoriesLinks = ["সবজি", "মাছ", "মাংস", "তেল", "মশলা", "দুগ্ধ"];

  return (
    <footer className="bg-white border-t border-gray-100 pt-16 pb-8">
      <Container>
        <div className="max-w-7xl mx-auto px-6 md:px-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
            {/* Brand Section */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <span className="text-3xl">💹</span>
                <h2 className="text-2xl font-black text-green-700 tracking-tight">
                  আজকের বাজার দর
                </h2>
              </div>
              <p className="text-gray-500 text-sm leading-relaxed">
                নিত্যপ্রয়োজনীয় পণ্যের সঠিক এবং আপডেট দাম জানতে আমাদের সাথেই
                থাকুন।
              </p>
              <div className="flex gap-4 pt-2">
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all"
                >
                  <FaFacebook size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all"
                >
                  <FaTwitter size={18} />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 hover:bg-green-600 hover:text-white transition-all"
                >
                  <FaInstagram size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-gray-800 font-bold mb-6 text-lg">
                দ্রুত লিঙ্ক
              </h3>
              <ul className="space-y-4 text-sm text-gray-500">
                <li>
                  <button
                    onClick={() => handleCategoryClick("সব")}
                    className="hover:text-green-600 transition-colors"
                  >
                    হোম পেজ
                  </button>
                </li>
                <li>
                  <button
                    onClick={() => handleCategoryClick("সব")}
                    className="hover:text-green-600 transition-colors"
                  >
                    আজকের বাজার দর
                  </button>
                </li>
                <li>
                  <a
                    href="#"
                    className="hover:text-green-600 transition-colors"
                  >
                    আমাদের সম্পর্কে
                  </a>
                </li>
              </ul>
            </div>

            {/* Interactive Categories Snippet */}
            <div>
              <h3 className="text-gray-800 font-bold mb-6 text-lg">
                জনপ্রিয় ক্যাটাগরি
              </h3>
              <ul className="space-y-4 text-sm text-gray-500">
                {categoriesLinks.map((cat) => (
                  <li key={cat}>
                    <button
                      onClick={() => handleCategoryClick(cat)}
                      className="hover:text-green-600 transition-colors flex items-center gap-2 group"
                    >
                      <span className="w-1 h-1 bg-green-300 rounded-full group-hover:w-2 transition-all"></span>
                      {cat}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h3 className="text-gray-800 font-bold mb-6 text-lg">যোগাযোগ</h3>
              <ul className="space-y-4 text-sm text-gray-500">
                <li className="flex items-center gap-3">
                  <FaPhoneAlt className="text-green-600" />
                  <span>+৮৮০ ১২৩৪-৫৬৭৮৯০</span>
                </li>
                <li className="flex items-center gap-3">
                  <FaEnvelope className="text-green-600" />
                  <span>info@bazardor.com</span>
                </li>
                <li className="mt-4 p-4 bg-amber-50 rounded-xl border border-amber-100">
                  <p className="text-xs text-amber-700 font-medium italic">
                    * বাজার দর এলাকাভেদে সামান্য কম-বেশি হতে পারে।
                  </p>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-gray-400">
            <p>© ২০২৪ বাজার দর Tracker | সর্বস্বত্ব সংরক্ষিত।</p>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
