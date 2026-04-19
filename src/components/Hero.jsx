import React from "react";
import heros from "../assets/heros.png";
import Navbar from "./Navbar";

export default function () {
  return (
    <div className="relative h-screen">
      <img src={heros} alt="" className="w-full h-full object-cover object-top"/>

      <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-black/50 to-black/50"></div>

      <div className="absolute top-0 left-0 w-full z-50">
        <Navbar />
      </div>

      <div className="absolute inset-0 flex flex-col justify-center px-6 md:px-20 text-white animate-fadeIn">
        <div className="flex items-center gap-3 mb-4">
          <div className="w-10 h-[2px] bg-yellow-400"></div>
          <p className="tracking-widest text-sm">EST. 2016</p>
        </div>

        <h1 className="text-3xl md:text-5xl lg:text-6xl font-bold leading-tight">
          We Don't Just Cut Hair,<br />
          We Create Experiences
        </h1>

        <p className="mt-4 max-w-xl text-gray-300">
          Professional barbershop experience with modern style.
        </p>

        <button className="mt-6 bg-red-500 px-6 py-3 w-fit hover:bg-yellow-400 hover:text-gray-800 transform hover:scale-105 active:scale-95 transition duration-300 shadow-lg hover:shadow-yellow-500/50">
          See Our Services
        </button>
      </div>
    </div>
  );
}
