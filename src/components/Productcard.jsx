import React from "react";

const ProductCards = () => {
  const products = [
    {
      id: 1,
      name: "Tiles",
      image: "/images/i1.png",
      options: ["12*18", "12*24", "12*12", "24*24", "18*18", "16*16"],
    },
    {
      id: 2,
      name: "Marble",
      image: "/images/gallary/17a.jpg",
      options: ["Glossy White", "Satin Grey", "Stone Mix"],
    },
    {
      id: 3,
      name: "Granite",
      image: "/images/gallary/3a.jpg",
      options: [
        "Black Granite",
        "White Granite",
        "Pink Granite",
        "Brown Granite",
        "Red Granite",
      ],
    },
  ];

  return (
    <>
      <p className="text-[#21463D] text-2xl font-extrabold px-5 py-3 bg-[#F5EDE1] text-center">
        Our Specialities
      </p>
      <div className=" bg-[#F5EDE1] flex items-center justify-center px-4  py-2 font-sans">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </>
  );
};

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col transition-transform duration-300 hover:scale-105">
      <img
        src={product.image}
        alt={product.name}
        className="w-full h-48 object-cover rounded-t-xl"
        onError={(e) => {
          e.target.onerror = null;
          e.target.src = `https://placehold.co/400x200/CCCCCC/666666?text=Image+Not+Found`;
        }}
      />
      <div className="p-6 flex flex-col justify-between flex-grow">
        <h2 className="text-2xl font-semibold text-gray-800 mb-4">
          {product.name}
        </h2>
        <div className="flex flex-wrap gap-2 mb-4">
          {product.options.map((option, index) => (
            <button
              key={index}
              className="px-4 py-2 bg-blue-500 text-white text-sm font-medium rounded-full hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 transition-colors duration-200"
            >
              {option}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProductCards;
