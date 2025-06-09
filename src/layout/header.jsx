import Link from "next/link";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaFacebookF,
  FaLinkedinIn,
  FaBars,
  FaTimes,
  FaLocationArrow,
  FaWhatsapp,
} from "react-icons/fa";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About Us", href: "/about" },
    { label: "Gallery", href: "/product" },
    { label: "Location", href: "/location" },
    { label: "Contact Us", href: "/contact" },
  ];

  return (
    <header className="shadow">
      <div className="flex flex-row-reverse px-2 bg-[#8A9A8A] text-gray-700 py-1.5 pr-6"></div>
      <div className="flex flex-col md:flex-row justify-between items-center px-6 py-4 bg-white">
        <Link className="flex items-center space-x-4" href="/">
          <img src="/images/logo.png" alt="Logo" className="h-16 w-auto" />
        </Link>
        <div className="hidden md:flex items-center space-x-8 mt-4 md:mt-0">
          <div className="flex items-center space-x-2 text-sm">
            <FaPhoneAlt className="text-red-600 text-lg" />
            <div>
              <p className="font-extrabold text-gray-700 text-base text-center">
                Call Us
              </p>
              <p className="text-gray-600">+977- 9704597578</p>
            </div>
          </div>
          <div className="flex px-1 items-center space-x-2 text-sm">
            <FaWhatsapp className="text-red-600 text-lg" />
            <div>
              <p className="font-extrabold text-gray-700 text-base text-center">
                Whatsapp
              </p>
              <p className="text-gray-600">+977-9857834264</p>
            </div>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <FaLocationArrow className="text-red-600 text-lg" />
            <div>
              <p className="font-extrabold text-gray-700 text-base text-center">
                Address
              </p>
              <p className="text-gray-600">Shahid Rd, Ghorahi 22400</p>
            </div>
          </div>
        </div>
      </div>
      <nav className="bg-[#8A9A8A] text-white py-2">
        <div className="md:hidden flex justify-between items-center px-6 py-4">
          <p className="font-bold">Menu</p>
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
        <ul
          className={`flex flex-col md:flex-row md:justify-center space-y-1 md:space-y-0 md:space-x-8 px-6 md:px-0 md:py-0 pb-4 md:pb-0 transition-all duration-300 ease-in-out overflow-hidden ${
            menuOpen ? "max-h-screen" : "max-h-0 md:max-h-full"
          }`}
        >
          {navLinks.map((link, i) => (
            <li
              key={i}
              className="hover:text-green-950  cursor-pointer text-base font-semibold"
            >
              <Link href={link.href}>{link.label}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
