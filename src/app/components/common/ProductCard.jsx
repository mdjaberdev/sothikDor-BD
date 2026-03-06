import React from 'react'

const ProductCard = ({ productTitle, price1,price2 }) => {
  return (
    <div className="bg-gray-500 px-6 py-3 w-70 text-center rounded-2xl">
      <h3 className="text-lg font-semibold text-white ">
        {/* রূপচাঁদা সয়াবিন তেল */} {productTitle}
      </h3>
      <h4 className="text-white text-base font-medium">
        ১ লিটার 
        <span className="text-green-500">{price1}</span> টাকা
      </h4>
      <h4 className="text-white text-base font-medium">
        ৫ লিটার <span className="text-green-500">{price2}</span> টাকা
      </h4>
    </div>
  );
};

export default ProductCard
