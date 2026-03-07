"use client";

import { useState, useEffect } from "react";

const initialProducts = [
  { id: 1, name: "চাল (মিনিকেট)", nameEn: "Miniket Rice", category: "শস্য", unit: "কেজি", price: 72, prevPrice: 68, icon: "🌾" },
  { id: 2, name: "চাল (নাজিরশাইল)", nameEn: "Nazirshail Rice", category: "শস্য", unit: "কেজি", price: 80, prevPrice: 78, icon: "🌾" },
  { id: 3, name: "চাল (পোলাও)", nameEn: "Polao Rice", category: "শস্য", unit: "কেজি", price: 110, prevPrice: 105, icon: "🌾" },
  { id: 4, name: "আটা", nameEn: "Wheat Flour", category: "শস্য", unit: "কেজি", price: 55, prevPrice: 58, icon: "🌾" },
  { id: 5, name: "গম", nameEn: "Wheat", category: "শস্য", unit: "কেজি", price: 50, prevPrice: 48, icon: "🌾" },
  { id: 6, name: "ভুট্টা", nameEn: "Corn", category: "শস্য", unit: "কেজি", price: 40, prevPrice: 38, icon: "🌽" },

  { id: 7, name: "ডাল (মসুর)", nameEn: "Lentils", category: "ডাল", unit: "কেজি", price: 130, prevPrice: 125, icon: "🫘" },
  { id: 8, name: "মুগ ডাল", nameEn: "Mung Lentils", category: "ডাল", unit: "কেজি", price: 150, prevPrice: 145, icon: "🫘" },
  { id: 9, name: "ছোলা", nameEn: "Chickpeas", category: "ডাল", unit: "কেজি", price: 110, prevPrice: 105, icon: "🫘" },
  { id: 10, name: "বুটের ডাল", nameEn: "Split Chickpeas", category: "ডাল", unit: "কেজি", price: 120, prevPrice: 115, icon: "🫘" },
  { id: 11, name: "খেসারি ডাল", nameEn: "Khesari Lentils", category: "ডাল", unit: "কেজি", price: 95, prevPrice: 90, icon: "🫘" },

  { id: 12, name: "সয়াবিন তেল", nameEn: "Soybean Oil", category: "তেল", unit: "লিটার", price: 168, prevPrice: 175, icon: "🫙" },
  { id: 13, name: "সরিষার তেল", nameEn: "Mustard Oil", category: "তেল", unit: "লিটার", price: 220, prevPrice: 210, icon: "🫙" },
  { id: 14, name: "পাম তেল", nameEn: "Palm Oil", category: "তেল", unit: "লিটার", price: 150, prevPrice: 145, icon: "🫙" },

  { id: 15, name: "পেঁয়াজ", nameEn: "Onion", category: "সবজি", unit: "কেজি", price: 90, prevPrice: 80, icon: "🧅" },
  { id: 16, name: "রসুন", nameEn: "Garlic", category: "সবজি", unit: "কেজি", price: 220, prevPrice: 240, icon: "🧄" },
  { id: 17, name: "আলু", nameEn: "Potato", category: "সবজি", unit: "কেজি", price: 45, prevPrice: 42, icon: "🥔" },
  { id: 18, name: "টমেটো", nameEn: "Tomato", category: "সবজি", unit: "কেজি", price: 60, prevPrice: 75, icon: "🍅" },
  { id: 19, name: "বেগুন", nameEn: "Eggplant", category: "সবজি", unit: "কেজি", price: 70, prevPrice: 65, icon: "🍆" },
  { id: 20, name: "কাঁচা মরিচ", nameEn: "Green Chili", category: "সবজি", unit: "কেজি", price: 120, prevPrice: 100, icon: "🌶️" },
  { id: 21, name: "লাউ", nameEn: "Bottle Gourd", category: "সবজি", unit: "পিস", price: 60, prevPrice: 55, icon: "🥒" },
  { id: 22, name: "করলা", nameEn: "Bitter Gourd", category: "সবজি", unit: "কেজি", price: 80, prevPrice: 75, icon: "🥒" },
  { id: 23, name: "পটল", nameEn: "Pointed Gourd", category: "সবজি", unit: "কেজি", price: 65, prevPrice: 60, icon: "🥒" },
  { id: 24, name: "বাঁধাকপি", nameEn: "Cabbage", category: "সবজি", unit: "পিস", price: 50, prevPrice: 45, icon: "🥬" },
  { id: 25, name: "ফুলকপি", nameEn: "Cauliflower", category: "সবজি", unit: "পিস", price: 60, prevPrice: 55, icon: "🥦" },
  { id: 26, name: "গাজর", nameEn: "Carrot", category: "সবজি", unit: "কেজি", price: 55, prevPrice: 50, icon: "🥕" },
  { id: 27, name: "শসা", nameEn: "Cucumber", category: "সবজি", unit: "কেজি", price: 50, prevPrice: 45, icon: "🥒" },

  { id: 28, name: "মুরগি (ব্রয়লার)", nameEn: "Broiler Chicken", category: "মাংস", unit: "কেজি", price: 195, prevPrice: 185, icon: "🍗" },
  { id: 29, name: "দেশি মুরগি", nameEn: "Desi Chicken", category: "মাংস", unit: "কেজি", price: 450, prevPrice: 430, icon: "🍗" },
  { id: 30, name: "গরুর মাংস", nameEn: "Beef", category: "মাংস", unit: "কেজি", price: 750, prevPrice: 720, icon: "🥩" },
  { id: 31, name: "খাসির মাংস", nameEn: "Mutton", category: "মাংস", unit: "কেজি", price: 1000, prevPrice: 950, icon: "🥩" },

  { id: 32, name: "রুই মাছ", nameEn: "Rohu Fish", category: "মাছ", unit: "কেজি", price: 280, prevPrice: 260, icon: "🐟" },
  { id: 33, name: "কাতলা মাছ", nameEn: "Katla Fish", category: "মাছ", unit: "কেজি", price: 300, prevPrice: 280, icon: "🐟" },
  { id: 34, name: "পাঙ্গাস মাছ", nameEn: "Pangas Fish", category: "মাছ", unit: "কেজি", price: 180, prevPrice: 170, icon: "🐟" },
  { id: 35, name: "তেলাপিয়া", nameEn: "Tilapia Fish", category: "মাছ", unit: "কেজি", price: 200, prevPrice: 190, icon: "🐟" },
  { id: 36, name: "চিংড়ি", nameEn: "Shrimp", category: "মাছ", unit: "কেজি", price: 650, prevPrice: 620, icon: "🦐" },
  { id: 37, name: "ইলিশ মাছ", nameEn: "Hilsa Fish", category: "মাছ", unit: "কেজি", price: 1400, prevPrice: 1500, icon: "🐠" },

  { id: 38, name: "ডিম", nameEn: "Egg", category: "দুগ্ধ", unit: "হালি", price: 48, prevPrice: 52, icon: "🥚" },
  { id: 39, name: "দুধ (তরল)", nameEn: "Fresh Milk", category: "দুগ্ধ", unit: "লিটার", price: 85, prevPrice: 80, icon: "🥛" },
  { id: 40, name: "দই", nameEn: "Yogurt", category: "দুগ্ধ", unit: "কেজি", price: 120, prevPrice: 115, icon: "🥛" },
  { id: 41, name: "ঘি", nameEn: "Ghee", category: "দুগ্ধ", unit: "কেজি", price: 900, prevPrice: 850, icon: "🧈" },

  { id: 42, name: "চিনি", nameEn: "Sugar", category: "মশলা", unit: "কেজি", price: 140, prevPrice: 135, icon: "🍬" },
  { id: 43, name: "লবণ", nameEn: "Salt", category: "মশলা", unit: "কেজি", price: 38, prevPrice: 38, icon: "🧂" },
  { id: 44, name: "হলুদ", nameEn: "Turmeric", category: "মশলা", unit: "কেজি", price: 300, prevPrice: 290, icon: "🧂" },
  { id: 45, name: "মরিচ গুঁড়া", nameEn: "Chili Powder", category: "মশলা", unit: "কেজি", price: 400, prevPrice: 380, icon: "🌶️" },
  { id: 46, name: "জিরা", nameEn: "Cumin", category: "মশলা", unit: "কেজি", price: 700, prevPrice: 680, icon: "🧂" },
  { id: 47, name: "ধনে", nameEn: "Coriander", category: "মশলা", unit: "কেজি", price: 350, prevPrice: 330, icon: "🧂" }
];

const categories = ["সব", "শস্য", "ডাল", "তেল", "সবজি", "মাংস", "মাছ", "দুগ্ধ", "মশলা"];

export default function PriceTracker() {

  const [products, setProducts] = useState(initialProducts);
  const [selectedCategory, setSelectedCategory] = useState("সব");
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = products.filter(
    (p) =>
      (selectedCategory === "সব" || p.category === selectedCategory) &&
      (p.name.includes(searchQuery) ||
        p.nameEn.toLowerCase().includes(searchQuery.toLowerCase()))
  );

return (
  <div className="min-h-screen bg-gradient-to-b from-amber-50 to-white p-6 md:p-10">

    {/* Header */}
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
      <h1 className="text-4xl font-bold text-green-700">
        চাসি বাজারদর 🛒
      </h1>

      <div className="relative w-full md:w-80">
        <input
          type="text"
          placeholder="পণ্য খুঁজুন..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 outline-none p-3 pl-10 rounded-lg w-full"
        />
        <span className="absolute left-3 top-3 text-gray-400">🔍</span>
      </div>
    </div>

    {/* Categories */}
    <div className="flex gap-2 mb-8 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => setSelectedCategory(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition
          ${
            selectedCategory === cat
              ? "bg-green-600 text-white shadow"
              : "bg-white border hover:bg-green-50"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>

    {/* Product Grid */}
    <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {filtered.map((p) => {
        const increased = p.price > p.prevPrice;

        return (
          <div
            key={p.id}
            className="bg-white p-5 rounded-xl shadow-sm hover:shadow-lg transition hover:-translate-y-1 border"
          >
            <div className="text-4xl mb-2">{p.icon}</div>

            <h3 className="font-bold text-lg">{p.name}</h3>
            <p className="text-gray-500 text-sm">{p.nameEn}</p>

            <div className="flex items-center justify-between mt-4">
              <p className="text-2xl font-bold text-green-700">
                ৳{p.price}
                <span className="text-sm text-gray-500">/{p.unit}</span>
              </p>

              {p.price !== p.prevPrice && (
                <span
                  className={`text-sm font-semibold ${
                    increased ? "text-red-500" : "text-green-600"
                  }`}
                >
                  {increased ? "▲" : "▼"}
                </span>
              )}
            </div>

            <p className="text-xs text-gray-400 mt-2">
              আগের দাম: ৳{p.prevPrice}
            </p>
          </div>
        );
      })}
    </div>
  </div>
);
}