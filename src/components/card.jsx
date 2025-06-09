import React from "react";

const tileProducts = [
  {
    title: "Bathroom Tile",
    price: "Price:Npr 600-950",
    sizes: ["Size:12*18", "Size:12*24"],
    image: "/images/tiles/2a.png",
  },
  {
    title: "Kitchen Wall Tile",
    price: "Price:Npr 600-950",
    sizes: ["Size:12*18", "Size:12*24"],
    image: "/images/tiles/2b.png",
  },
  {
    title: "Elevation Tile",
    price: "Price:Npr 750-950",
    sizes: ["Size:12*18", "Size:12*24"],
    image: "/images/gallary/2a.jpg",
  },
  {
    title: "Kitchen Floor Tile",
    price: "Price:Npr 750-950",
    sizes: ["Size:24*24", "Size:24*48"],
    image: "/images/tiles/2c.png",
  },
  {
    title: "Parketing Tile",
    price: "Price:Npr 750-950",
    sizes: ["Size:16*16", "Size:24*24"],
    image: "/images/tiles/2d.png",
  },
  {
    title: "Granite",
    price: "Price:Depends upon quality",
    sizes: "",
    image: "/images/tiles/2e.png",
  },
  {
    title: "Bathroom Accessories 1",
    price: "Combod and Basin",
    sizes: "Price:Depends on design",
    image: "/images/tiles/2f.png",
  },
  {
    title: "Bathroom Accesories 2",
    price: "Wall-Mixture,Hanger,Towel-Rod,Shower",
    sizes: "Price:Based on brands ",
    image: "/images/tiles/2g.png",
  },
  {
    title: "Kitchen Items",
    price: "Sink/Chimney/Sink-Mixture",
    sizes: "Price: Based on materials",
    image: "/images/tiles/2h.png",
  },
  {
    title: "Other Items",
    price: "Cutting/Chipping/DCRP",
    sizes: "",
    image: "/images/tiles/2i.png",
  },
];

const Card = () => {
  return (
    <>
      <div className="connn bg-[#F5EDE1] ">
        <p className="text-[#21463D] text-2xl font-extrabold px-5 py-3 bg-[#F5EDE1] text-center">
          Our Products
        </p>
        <div className="p-4 max-w-7xl mx-auto  bg-[#F5EDE1]">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 bg-[#F5EDE1]">
            {tileProducts.map((tile, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-lg transition duration-300"
              >
                <img
                  src={tile.image}
                  alt={tile.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-4 text-center">
                  <h2 className="text-lg font-semibold text-gray-800">
                    {tile.title}
                  </h2>
                  <p className="text-gray-600 text-sm mt-1">{` ${tile.price}`}</p>
                  <div className="mt-2 text-sm text-gray-700 space-y-1">
                    {(Array.isArray(tile.sizes) ? tile.sizes : [tile.sizes])
                      .filter(Boolean) 
                      .map((size, idx) => (
                        <p key={idx}> {size}</p>
                      ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Card;
