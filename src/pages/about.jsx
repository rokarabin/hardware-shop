import React from "react";

const About = () => {
  return (
    <>
      <div className="con px-2 bg-[#F5EDE1] ">
        <div className="relative h-[200px] md:h-[200px] w-full bg-gray-300">
          {" "}
          {/* Fallback color */}
          {/* Background Image Container */}
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `url('/images/background.png'), linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3))`,
              backgroundBlendMode: "overlay",
            }}
          >
            {/* Text Content */}
            <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
              <h1 className="text-4xl md:text-5xl font-bold text-white mb-3">
                About Us
              </h1>
              <p className="text-white text-sm md:text-base max-w-xl">
                श्री माता अम्बिकेश्वरी मार्बल एन्ड टाइल चिप्स पसललाई सेवा गर्ने
                मौका दिनु होला।
              </p>
            </div>
          </div>
        </div>
        <section class="flex flex-col lg:flex-row items-center gap-8 p-8 bg-[#F5EDE1] ">
          <div class="lg:w-1/2 space-y-6">
            <h2 class="text-3xl font-bold text-[#21463D]">Who We Are</h2>
            <p class="text-[#3b8a76]">
              We are a premier destination for exquisite tiles, elegant marble,
              and stylish bathroom accessories, renowned for our commitment to
              quality, affordability, and exceptional craftsmanship. With years
              of expertise in the industry, we take pride in transforming spaces
              into stunning, functional works of art— whether for homes,
              offices, or commercial projects.
            </p>

            <h3 class="text-2xl font-semibold text-[#21463D]">Our Mission</h3>
            <p class="text-[#3b8a76]">
              At our core, we believe that beautiful, durable designs should be
              accessible to everyone. That&apos;s why we meticulously source and
              offer a wide range of premium materials at competitive prices,
              ensuring that every customer finds the perfect fit for their
              vision. From timeless marble finishes to modern, innovative tiles
              and sleek bathroom fixtures, we provide solutions that combine
              aesthetics with long-lasting performance.
            </p>
          </div>

          <div class="lg:w-1/2">
            <img
              src="/images/6.png"
              alt="About us"
              class="w-full rounded-xl shadow-lg"
            />
          </div>
        </section>

        <section class="relative w-full h-[500px] text-[#21463D] font-bold ">
          <div
            class="absolute inset-1 bg-cover bg-center bg-no-repeat"
            style={{
              backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url("/images/9.jpg")`,
              backgroundBlendMode: "multiply",
            }}
          ></div>

          <div class="absolute bg-opacity-10  inset-0 "></div>

          <div class="relative z-10 h-full flex flex-col items-center justify-center text-center text-white  px-4">
            <h2 class="text-3xl font-bold mb-8">Why Choose Us?</h2>
            <ul class="space-y-4 text-lg max-w-2xl">
              <li>
                <span class="font-semibold">Best Price Guarantee:</span> We
                offer the most competitive prices without compromising quality
              </li>
              <li>
                <span class="font-semibold">Large Variety & Samples:</span>
                Extensive collection with design samples available
              </li>
              <li>
                <span class="font-semibold">Local Delivery Support:</span>
                Reliable and fast delivery in your area
              </li>
              <li>
                <span class="font-semibold">Trusted By 1000+ Customers:</span>{" "}
                Proven track record of satisfied clients
              </li>
            </ul>
          </div>
        </section>
        <section className="py-12 ">
          <div class="max-w-6xl mx-auto px-4 text-center text-[#21463D]">
            <h2 class="text-3xl font-bold mb-8">We Deal With Premium Brands</h2>
            <div class="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <img
                src="/images/brand1.png"
                alt="Premium Brand 1"
                class="h-16 object-contain mx-auto grayscale hover:grayscale-0 transition-all"
              />
              <img
                src="/images/brand2.png"
                alt="Premium Brand 2"
                class="h-16 object-contain mx-auto grayscale hover:grayscale-0 transition-all"
              />
              <img
                src="/images/brand3.png"
                alt="Premium Brand 3"
                class="h-16 object-contain mx-auto grayscale hover:grayscale-0 transition-all"
              />
              <img
                src="/images/brand4.png"
                alt="Premium Brand 4"
                class="h-16 object-contain mx-auto grayscale hover:grayscale-0 transition-all"
              />
              <img
                src="/images/brand5.png"
                alt="Premium Brand 5"
                class="h-16 object-contain mx-auto grayscale hover:grayscale-0 transition-all"
              />
            </div>
          </div>
        </section>
        <section className="px-4 py-10">
          <h2 className="text-2xl md:text-3xl font-bold text-center text-[#21463D] mb-8">
            Our Team & Site Work
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                name: "Akraj Neupane",
                img: "/images/person1.png",
                position: "Proprietor",
              },
              {
                name: "Uday Neupane",
                img: "/images/person2.png",
                position: "Managing Director",
              },
              { name: "Ramesh", img: "/images/person3.png", position: "" },
              { name: "Dipendra", img: "/images/person4.png", position: "" },
              { name: "Tara", img: "/images/person5.png", position: "" },
              { name: "Salim", img: "/images/person6.png", position: "" },
            ].map((person, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow hover:shadow-lg transition duration-300 overflow-hidden text-center"
              >
                <img
                  src={person.img}
                  alt={person.name}
                  className="w-full h-72 object-cover"
                />
                <div className="p-4 font-semibold text-lg text-[#21463D]">
                  {person.name}
                </div>
                <div className="p-4 font-semibold text-lg text-[#21463D]">
                  {person.position}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </>
  );
};

export default About;
