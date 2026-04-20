import React, { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const navLinks = ["HOME", "ABOUT", "SERVICES", "GALLERY", "CONTACT"];

  return (
    <nav className="sticky top-0 z-50 bg-black shadow-black/20 shadow-xl flex justify-between items-center px-8 py-4 text-white">
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
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li
            key={link}
            className="hover:text-yellow-400 transition duration-300 cursor-pointer font-semibold text-sm"
          >
            {link}
          </li>
        ))}
      </ul>

      {/* Mobile Menu Button */}
      <button
        type="button"
        className="md:hidden bg-red-500 px-4 py-2 rounded hover:bg-yellow-400 hover:text-gray-800 transform hover:scale-105 active:scale-95 transition duration-300 shadow-lg hover:shadow-yellow-500/50 font-bold text-lg"
        aria-label="Toggle menu"
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        {menuOpen ? "✕" : "☰"}
      </button>

      {/* Mobile Overlay Backdrop - Closes menu when clicked */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/60 md:hidden z-40 transition-opacity duration-300"
          onClick={() => setMenuOpen(false)}
        />
      )}

      {/* Mobile Menu - Full Width Dropdown */}
      <ul
        className={`absolute top-full left-0 right-0 md:hidden bg-black/95 backdrop-blur-sm shadow-2xl transform transition-all duration-300 ease-in-out z-50
          ${
            menuOpen
              ? "opacity-100 translate-y-0 pointer-events-auto"
              : "opacity-0 -translate-y-5 pointer-events-none"
          }`}
      >
        {navLinks.map((link) => (
          <li key={link}>
            <button
              type="button"
              onClick={() => setMenuOpen(false)}
              className="w-full px-8 py-4 text-left text-white hover:bg-yellow-400/20 hover:text-yellow-400 transition duration-200 font-semibold text-lg border-b border-gray-700/50 last:border-b-0"
            >
              {link}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}