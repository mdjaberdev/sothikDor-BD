// app/page.js
import ProductCard from "./components/ProductCard";
import products from "./components/Product";
import oil from "./components/Oil";

export default function Home() {
  return (
    <div className="flex gap-x-6 bg-gray-950 p-10">
      <div className=" ">
        <div className="w-[500px] text-center">
          <h3 className="text-2xl text-white pb-5">তেল</h3>
          <div className="w-125 space-y-5">
            {oil.map((item) => (
              <ProductCard key={item.id} item={item} />
            ))}
          </div>
        </div>
      </div>
      {/* ====  */}
      <div className="min-h-screen">
        <h3 className="text-2xl text-white pb-5">তেল</h3>

        <div className="w-125 space-y-5">
          {products.map((item) => (
            <ProductCard key={item.id} item={item} />
          ))}
        </div>
      </div>
    </div>
  );
}
