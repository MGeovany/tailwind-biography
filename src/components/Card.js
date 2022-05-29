import React from "react";

export default function Card (props){
  return (
    <div className="shadow-gray-300 shadow-md rounded-xl flex flex-col items-center w-30">
      <div className="h-10 bg-blue-400 w-full text-cyan-50 font-bold text-center p-2 rounded-t-xl ">
        {props.namec}
        
      </div>
      <a href={props.urlc} target="_blank">
        <img className="py-2" src={props.imgc} />
      </a>
    </div>
  );
};

D