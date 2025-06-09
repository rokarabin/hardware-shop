"use client";

import Image from "next/image";
import { useState } from "react";

export default function Contact() {
  const [showDialog, setShowDialog] = useState(false);

  return (
    <div className="conatainer">
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
              Contact Us
            </h1>
            <p className="text-white text-sm md:text-base max-w-xl">
              श्री माता अम्बिकेश्वरी मार्बल एन्ड टाइल चिप्स पसललाई सेवा गर्ने
              मौका दिनु होला।
            </p>
          </div>
        </div>
      </div>
      <section className="bg-[#E9F3EC] px-4 py-12">
        <div className="max-w-7xl mx-auto flex flex-col-reverse lg:flex-row items-center justify-between gap-12">
          <div className="w-full lg:w-1/2 text-center lg:text-center ">
            <h2 className=" text-black text-3xl md:text-4xl font-bold mb-4">
              श्री माता अम्बिकेश्वरी मार्बल एन्ड टाइल चिप्स पसल
            </h2>
            <p className="text-black mb-2 font-semibold"></p>
            <p className="text-black mb-6">
              सुरु गर्न तयार हुनुहुन्छ? हामी पनि तयार छौं! आजै हामीलाई सम्पर्क
              गर्नुहोस्।
            </p>
            <div className="flex items-center justify-center lg:justify-center gap-3">
              <div className="bg-green-700 rounded-full p-3 ">📞</div>
              <span className="font-semibold text-lg text-black">
                977- 9704597578
              </span>
            </div>
          </div>

          <div className="w-full lg:w-1/2 text-center ">
            <div className="bg-white rounded-xl shadow-lg p-6 md:p-8 space-y-4">
              <div className="p text-center  flex flex-col py-2 text-gray-600 font-bold text-lg ">
                <p className="py-1">Proprietor Name: Akraj Neupane </p>
                <p className="py-1">Phone Number: 9704597578</p>
                <p className="py-1">Email Address: udayneupane662@gmail.com</p>
                <p className="py-1">
                  Speciality:Marble,Tile,Wall mixtures ,chips,basin
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowDialog(true)}
                className="w-1/2 bg-green-800 text-white py-2 rounded-xl hover:bg-green-700 transition "
              >
                Learn More
              </button>
            </div>
          </div>
        </div>

        {showDialog && (
          <div className="fixed inset-0 z-50 bg-black bg-opacity-40 flex justify-center items-center px-4">
            <div className="bg-white p-6 rounded-xl max-w-md w-full shadow-lg text-center">
              <h3 className="text-2xl font-semibold mb-4">Visiting Card</h3>
              <div className="text-black-700 mb-6">
                <img
                  src={"/images/card.png"}
                  width={"100%"}
                  height={200}
                  alt="visitingcard"
                  quality={100}
                />
              </div>
              <button
                onClick={() => setShowDialog(false)}
                className="bg-green-700 text-white px-6 py-2 rounded-md hover:bg-green-800 transition"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
