import React from "react";

export const Navbar = () => {
  return (
    <div className="flex fixed bg-white w-full shadow-sm shadow-gray-200 ">
      <div className="flex flex-row mx-20 my-6 space-x-14 font-sans text-lg font-bold">
        <div className="hover:text-sky-400 cursor-pointer">
          {" "}
          <a href="#home">Home</a>
        </div>
        <div className="hover:text-sky-400 cursor-pointer">
          <a href="#about">About</a>
        </div>
        <div className="hover:text-sky-400 cursor-pointer">
          <a href="#contact">Contact</a>
        </div>
      </div>
    </div>
  );
};
