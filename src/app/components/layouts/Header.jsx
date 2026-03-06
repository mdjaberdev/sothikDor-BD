import React from "react";
import Container from "../common/Container";

const Header = () => {
  return (
    <div className="bg-gray-900 text-gray-300">
      <Container>
        <div className="py-10 w-50  mx-auto">
          <input
            type="text"
            className="text-white text-2xl w-100 p-5 rounded-xl outline-0 border border-green-500"
            placeholder="search product"
          />
        </div>
      </Container>
    </div>
  );
};

export default Header;
