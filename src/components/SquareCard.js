import React from "react";

export default function SquareCard(props) {
  return (
    <div>
      <div className="shadow-white-400 bg-white shadow-md rounded-s flex flex-col items-start w-30 pb-32  border-t-blue-700 border-t-8  ">
        <div className="flex justify-center items-center w-full relative">
          <img src={props.imgc} className="mx-5 h-44 mb-10 z-10 mt-24 rounded-md" />
        </div>
        <h2 className="font-bold text-2xl my-7 flex justify-start px-7">
          {props.namec}
        </h2>
        <p className="w-96 px-7 text-gray-400 font-semibold">{props.desc}</p>
      </div>
    </div>
  );
}

const SvgComponent = (props) => (
  <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" {...props}>
    <path
      fill="#D0E2FF"
      d="M149.6 56c5.2 11-6.4 31.1-12.2 51-5.8 19.8-5.7 39.4-14.8 46.1-9 6.7-27.2.5-38.1-9.2-10.8-9.7-14.3-23-23-40.9-8.8-18-22.8-40.5-17.2-51.6 5.5-11.1 30.6-10.7 54.2-9.5C122.2 43 144.3 45 149.6 56Z"
    />
  </svg>
);
