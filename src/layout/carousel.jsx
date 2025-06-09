import React, { useState, useEffect } from "react";

function Carousel() {
  const images = [
    {
      src: "/images/shop/a.jpg",
      alt: "Carousel1",
      title: "Shree Mata Ambikeswori Marble and Tile Chips Pasal",
      description: "",
    },
    {
      src: "/images/shop/b.jpg",
      alt: "Carousel2",
      title: "Premium Designs",
      description: "Quality products at reasonable price",
    },
    {
      src: "/images/shop/c.jpg",
      alt: "Carousel3",
      title: "For more",
      description: "Contact Us at +977-9857834264 .",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const totalSlides = images.length;
  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === totalSlides - 1 ? 0 : prevSlide + 1
    );
  };

  const goToPrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? totalSlides - 1 : prevSlide - 1
    );
  };

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  useEffect(() => {
    const interval = setInterval(goToNextSlide, 8000);
    return () => clearInterval(interval);
  }, [currentSlide]);

  return (
    <div className=" bg-[#F5EDE1] flex items-center justify-center p-4 font-inter">
      <div className="relative w-full max-w-7xl bg-white shadow-xl rounded-xl overflow-hidden border border-gray-200">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {images.map((image, index) => (
            <div
              key={index}
              className="w-full flex-shrink-0 relative h-80 md:h-96 lg:h-[calc(100vh-200px)] flex items-center justify-center text-center p-6"
              style={{
                backgroundImage: `url('${image.src}')`,
                backgroundSize: "cover",
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
              }}
            >
              <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center p-6 text-white z-10">
                <h3 className="text-3xl md:text-4xl font-extrabold mb-3 text-shadow-lg leading-tight">
                  {image.title}
                </h3>
                <p className="text-lg md:text-xl leading-relaxed max-w-prose text-shadow-md">
                  {image.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        <button
          onClick={goToPrevSlide}
          aria-label="Previous slide"
          className="absolute top-1/2 left-4 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-200 ease-in-out z-20"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M15 19l-7-7 7-7"
            ></path>
          </svg>
        </button>

        <button
          onClick={goToNextSlide}
          aria-label="Next slide"
          className="absolute top-1/2 right-4 -translate-y-1/2 bg-gray-800 text-white p-3 rounded-full shadow-md hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-300 transition-all duration-200 ease-in-out z-20"
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M9 5l7 7-7 7"
            ></path>
          </svg>
        </button>

        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-2 z-20">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-gray-800" : "bg-gray-400"
              } hover:bg-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-75 transition-colors duration-200`}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
