import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const links = ["HOME", "ABOUT", "SERVICES", "GALLERY", "CONTACT"];

  const navItemClass =
    "hover:text-yellow-400 transition duration-300 cursor-pointer font-semibold";

  return (
    <nav className="relative flex justify-between items-center px-8 py-4 text-white">
      {/* Logo Section */}
      <div>
        <h1 className="text-2xl font-bold text-yellow-400 cursor-pointer">
          DK SALON
        </h1>
        <p className="text-[13px] font-semibold cursor-pointer">
          Haircut | Styling
        </p>
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex gap-6">
        <li className={navItemClass}>HOME</li>
        <li className={navItemClass}>ABOUT</li>
        <li className={navItemClass}>SERVICES</li>
        <li className={navItemClass}>GALLERY</li>
        <li className={navItemClass}>CONTACT</li>
      </ul>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="md:hidden bg-red-500 px-4 py-2 hover:bg-yellow-400 hover:text-gray-800 transform hover:scale-105 active:scale-95 transition duration-300 shadow-lg hover:shadow-yellow-500/50"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        ☰
      </button>

      {/* Mobile Menu Animation */}
      <ul className={`absolute top-full right-0 z-50 mt-2 w-full px-8 py-6 bg-black text-center space-y-4 md:hidden transform transition-all duration-300 ease-in-out ${menuOpen ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 -translate-y-5 pointer-events-none"}`}>
        {links.map((link) => (
          <li key={link} className="hover:text-yellow-400 cursor-pointer">
            {link}
          </li>
        ))}
      </ul>
    </nav>
  );
}