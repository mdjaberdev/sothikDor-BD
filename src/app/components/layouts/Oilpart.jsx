"use client";
import { useRef, useState } from "react";
import { IoIosArrowDropdownCircle } from "react-icons/io";
import oils from "../api/oils";
import ProductCard from "../common/ProductCard";
console.log(oils);

const Oilpart = () => {
  let [show, setShow] = useState(false);
  let showRef = useRef(null);
  const handleClick = () => {
    showRef.current.classList.toggle("max-h-[600px]");
    setShow(!show);
  };

  return (
    <div className="text-center w-70">
      <button
        onClick={handleClick}
        className={`text-white text-2xl bg-green-400 px-3 py-2 rounded-md cursor-pointer flex gap-x-2 items-center mx-auto `}
      >
        ভোজ্য তেল
        <IoIosArrowDropdownCircle className={`${show ? "rotate-180" : ""}`} />
      </button>

      <div
        ref={showRef}
        className="overflow-hidden duration-500 w-70  max-h-0 space-y-5 pt-5"
      >
        {oils.map((item) => {
          return (
            <ProductCard
              key={item.id}
              productTitle={item.name}
              price1={item.prices1}
              price2={item.prices2}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Oilpart;
