import React from 'react'
import PropTypes from 'prop-types'

export default function SquareCard (props) {
  return (
    <div>
      <div className="shadow-white-400 bg-white shadow-md rounded-s flex flex-col items-start w-30 pb-16  border-t-blue-700 border-t-8  ">
        <div className="flex justify-center items-center w-full relative">
          <img
            src={props.imgc}
            className="mx-5 h-44 mb-10 z-10 mt-24 rounded-md"
          />
        </div>
        <h2 className="font-bold text-2xl my-7 flex justify-start px-7">
          {props.namec}
        </h2>
        <p className="w-96 px-7 text-gray-400 font-semibold">{props.desc}</p>
        <div className="flex justify-center items-center w-full pt-10">
          <hr className="border-1 w-5/6 rounded-full opacity-80"/>
        </div>
        <div className='txt flex justify-center items-center w-full'>
          <a className='pt-10 font-semibold text-blue-500 text-xl cursor-pointer' href={props.repo} target="_blank" rel="noreferrer"> Ver Mas</a>
        </div>
      </div>
    </div>
  )
}

SquareCard.propTypes = {
  namec: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
  imgc: PropTypes.string.isRequired,
  repo: PropTypes.string.isRequired
}
