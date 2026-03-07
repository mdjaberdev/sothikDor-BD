"use client";

const Header = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8 gap-4">
      <h1 className="text-4xl font-bold text-green-700">
        {" "}
        আজকের বাজার দর 💹🛒
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
  );
};

export default Header;
