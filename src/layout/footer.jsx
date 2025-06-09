import Link from "next/link";
import React from "react";
import {
  FaTwitter,
  FaInstagram,
  FaLinkedin,
  FaHome,
  FaServicestack,
  FaEnvelope,
  FaPen,
  FaSearchLocation,
  FaPhotoVideo,
} from "react-icons/fa";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#8A9A8A] text-black p-6 md:p-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between">
        <a className="mb-6 md:mb-0 max-w-md" href={"/contact"}>
          <button className="bg-black text-white px-4 py-2 font-semibold rounded-md mb-4 flex items-center gap-2">
            CONTACT US 😊
          </button>
          <h2 className="text-4xl font-extrabold mb-2 text-white">
            GET IN TOUCH.
          </h2>
          <p className="text-sm leading-relaxed"></p>
        </a>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm text-white">
          <div>
            <p>
              <span className="font-bold"></span>Shahid Rd, Ghorahi 22400
            </p>
            <p>
              <span className="font-bold">PHONE NO.</span> +977-9857834264
            </p>
            <p>
              <span className="font-bold">Email</span> udayneupane662@gmail.com
            </p>
          </div>
          <div className="space-y-2">
            <a className="flex items-center gap-2" href="/">
              <FaHome /> HOME
            </a>
            <a className="flex items-center gap-2" href="/about">
              <FaServicestack /> ABOUT US
            </a>
            <a className="flex items-center gap-2" href="/contact">
              <FaEnvelope /> CONTACT
            </a>
            <a className="flex items-center gap-2" href="/product">
              <FaPhotoVideo /> GALLERY
            </a>
            <a className="flex items-center gap-2" href="/location">
              <FaSearchLocation /> LOCATION
            </a>
          </div>
        </div>
      </div>

      <div className="mt-8 border-t border-white pt-4 flex justify-between items-center text-white text-xs">
        <p>©श्री माता अम्बिकेश्वरी मार्बल 2025 . ALL RIGHTS RESERVED.</p>
        <button onClick={scrollToTop} className="hover:underline font-semibold">
          GO BACK TO TOP
        </button>
      </div>
    </footer>
  );
};

export default Footer;
