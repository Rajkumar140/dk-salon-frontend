import React, { useState } from "react";

export default function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="flex justify-between items-center px-8 py-4 text-white">

      <div>
        <h1 className="text-2xl font-bold text-yellow-400 cursor-pointer">
          DK SALON
        </h1>
        <p className="text-white text-[13px] cursor-pointer font-semibold">
          Haircut | Styling
        </p>
      </div>

      <ul className="hidden md:flex gap-6">
        <li className="hover:text-yellow-400 transition duration-300 cursor-pointer font-semibold">HOME</li>
        <li className="hover:text-yellow-400 transition duration-300 cursor-pointer font-semibold">ABOUT</li>
        <li className="hover:text-yellow-400 transition duration-300 cursor-pointer font-semibold">SERVICES</li>
        <li className="hover:text-yellow-400 transition duration-300 cursor-pointer font-semibold">GALLERY</li>
        <li className="hover:text-yellow-400 transition duration-300 cursor-pointer font-semibold">CONTACT</li>
      </ul>

      <div className="md:hidden text-2xl cursor-pointer" onClick={() => setMenuOpen(!menuOpen)}>☰</div>

      {menuOpen && (
        <ul className="absolute top-full w-64 left-0 bg-black  text-center py-6 space-y-4 md:hidden">
          <li className="hover:text-yellow-400 cursor-pointer">HOME</li>
          <li className="hover:text-yellow-400 cursor-pointer">ABOUT</li>
          <li className="hover:text-yellow-400 cursor-pointer">SERVICES</li>
          <li className="hover:text-yellow-400 cursor-pointer">GALLERY</li>
          <li className="hover:text-yellow-400 cursor-pointer">CONTACT</li>
        </ul>
      )}

    </nav>
  );
}
