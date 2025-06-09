import React from "react";

const Location = () => {
  return (
    <>
      <div className="containerr px-1.5  ">
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
                Location
              </h1>
              <p className="text-white text-sm md:text-base max-w-xl">
                श्री माता अम्बिकेश्वरी मार्बल एन्ड टाइल चिप्स पसललाई सेवा गर्ने
                मौका दिनु होला।
              </p>
            </div>
          </div>
        </div>
        <div class="flex flex-col md:flex-row items-center justify-center gap-8 p-6 font-sans bg-[#F5EDE1]">
          <div class="w-full md:w-1/2 max-w-md space-y-4 text-center">
            <h2 class="text-2xl font-semibold text-[#21463D]">
              Shree Mata Ambikeswori Marble and Tile Chips Pasal
            </h2>
            <p class="text-[#3b8a76]">
              Shahid Rd, Ghorahi 22400
              <br />
              Near 3 star hotel
            </p>
            <p class="text-[#3b8a76]">
              <span class="font-medium">Email:</span> udayneupane662@gmail.com
            </p>
            <p class="text-[#3b8a76]">
              <span class="font-medium">Phone:</span>
              +977-9857834264
            </p>
            <p class="italic text-[#3b8a76]">
              Open every day 10:00 am to 6:00 pm
            </p>
          </div>

          <div class="w-full md:w-1/2 ">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d28172.088786664946!2d82.485311!3d28.039415!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399795007237f1b1%3A0x1952c1abf67b902e!2sShree%20mata%20ambikeswari%20marble%20tile%20chips%20pasal!5e0!3m2!1sen!2snp!4v1749364610039!5m2!1sen!2snp"
              width="100%"
              height="450"
              class="rounded-xl w-full"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        <div className="third bg-[#F5EDE1] text-[#3b8a76] text-2xl font-bold text-center pt-3">
          <p>
            हाम्रो पसल थ्री स्टार होटलदेखि अलिकति तल बायाँतर्फ छ, त्यसैले यो
            फोटोहरू हेरेर आउनु होला।
          </p>
          <div class="pt-6 px-2 pb-2">
            <div class="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <img
                src="/images/1.png"
                alt="images"
                class="w-full h-auto rounded-xl shadow-md"
              />
              <img
                src="/images/2.png"
                alt="images"
                class="w-full h-auto rounded-xl shadow-md"
              />
              <img
                src="/images/3.png"
                alt="images"
                class="w-full h-auto rounded-xl shadow-md"
              />
              <img
                src="/images/4.png"
                alt="images"
                class="w-full h-auto rounded-xl shadow-md"
              />
              <img
                src="/images/5.png"
                alt="images"
                class="w-full h-auto rounded-xl shadow-md"
              />
              <img
                src="/images/6.png"
                alt="images"
                class="w-full h-auto rounded-xl shadow-md"
              />
              <img
                src="/images/7.png"
                alt="images"
                class="w-full h-auto rounded-xl shadow-md"
              />
              <img
                src="/images/8.png"
                alt="images"
                class="w-full h-auto rounded-xl shadow-md"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Location;
