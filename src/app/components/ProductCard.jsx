// app/components/ProductCard.js
export default function ProductCard({ item }) {
  return (
    <div
      className="bg-gray-800 rounded-xl shadow-lg p-5 flex flex-col items-center text-center 
                    transition transform hover:scale-105 hover:shadow-2xl"
    >
      {/* Product Image */}
      <img
        src={item.image}
        alt={item.name}
        className="w-32 h-32 object-contain mb-4"
      />

      {/* Product Name */}
      <h2 className="text-lg md:text-xl font-semibold text-white mb-2">
        {item.name}
      </h2>

      {/* Product Price */}
      <p className="text-green-400 font-bold text-lg md:text-xl">
        ৳ {item.price}
      </p>
    </div>
  );
}
