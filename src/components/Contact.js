import React from "react";
import { Github, Instagram, Linkedin } from "./Home";

export const Contact = () => {
  return (
    <div className="text-white bg-gray-900 opacity-90 pb-20 flex flex-col justify-center items-center mt-52">
      <div className="flex items-center flex-col justify-center ">
        <h1 className="font-bold text-3xl mt-24 my-10" id="contact">
          Get In Touch 👨‍💻
        </h1>
        <h2 className="text-3xl my-7 flex justify-start pt-5 pb-7 font-medium">
          Let's talk about bussiness
        </h2>
      </div>

      <div className="grid grid-rows-4 justify-center items-center space-y-4 text-center">
        <div>
          <p className="text-2xl">Phone</p>
          <p className="text-gray-400 text-lg">+504 9483 6857</p>
        </div>
        <div>
          <p className="text-2xl">Email</p>
          <p className="text-gray-400 text-lg">marlongeo1999@gmail.com</p>
        </div>
        <div className="text-xl">
          <span className=""> Sps, </span>
          <span className="font-bold text-cyan-500">Honduras</span>
          <p>2022</p>
        </div>
        <div className="flex flex-row justify-center space-x-4">
          <a
            href="https://www.linkedin.com/in/m-geovany-web-developer/"
            target="_blank"
          >
            <Linkedin
              width={24}
              height={24}
              className="cursor-pointer"
              fill="white"
            />
          </a>
          <a href="https://github.com/MGeovany" target="_blank">
            <Github
              width={24}
              height={24}
              className="cursor-pointer"
              fill="white"
            />
          </a>
          <a href="https://www.instagram.com/m_geovany_/" target="_blank">
            <Instagram
              width={24}
              height={24}
              className="cursor-pointer"
              fill="white"
            />
          </a>
        </div>
      </div>
      <div className="grid grid-rows-1 justify-center items-center"></div>
    </div>
  );
};
