import React, { useState } from "react";

const Product = () => {
  const [modalImg, setModalImg] = useState(null);

  const openModal = (src) => {
    setModalImg(src);
  };

  const closeModal = () => {
    setModalImg(null);
  };

  const images = Array.from({ length: 42 }, (_, i) => `${i + 1}a`);

  return (
    <>
      <div className="co px-2 bg-[#F5EDE1]">
        <div className="relative h-[200px] md:h-[200px] w-full bg-gray-300">
          {" "}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/background.png'), linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))`,
              backgroundBlendMode: "overlay",
            }}
          >
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                Gallery
              </h1>
              <p className="text-white text-sm md:text-base max-w-xl">
                श्री माता अम्बिकेश्वरी मार्बल एन्ड टाइल चिप्स पसललाई सेवा गर्ने
                मौका दिनु होला।
              </p>
            </div>
          </div>
        </div>

        <section className="w-full text-[#21463D] font-bold pt-2 text-center">
          <h2 className="text-3xl font-extrabold mb-8 ">
            From Our Store to Your Floor
          </h2>
          <p className="tetx-center font-bold text-lg">
            Click on the image to view full image (पूरा तस्बिर हेर्नको लागि
            तस्बिरमा क्लिक गर्नुहोस् |)
          </p>
        </section>

        <div className="pb-2 pt-2">
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {images.map((img, idx) => (
              <div
                key={idx}
                onClick={() => openModal(`/images/gallary/${img}.jpg`)}
                className="cursor-pointer w-full h-[250px] overflow-hidden rounded-xl shadow-md"
              >
                <img
                  src={`/images/gallary/${img}.jpg`}
                  alt={`image${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {modalImg && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 z-50 flex items-center justify-center"
          onClick={closeModal}
        >
          <div
            className="relative max-w-3xl w-[90%] bg-white rounded-lg overflow-hidden"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={closeModal}
              className="absolute top-2 right-2 text-white bg-red-500 px-2 py-1 rounded"
            >
              ×
            </button>
            <img
              src={modalImg}
              alt="enlarged"
              className="w-full h-auto max-h-[90vh] object-contain"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Product;
