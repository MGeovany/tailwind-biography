import React from 'react'
import PropTypes from 'prop-types'

export default function Card (props) {
  return (
    <div className="shadow-gray-300 shadow-md rounded-xl flex flex-col items-center w-30">
      <div className="h-10 bg-blue-400 w-full text-cyan-50 font-bold text-center p-2 rounded-t-xl ">
        {props.namec}

      </div>
      <a href={props.urlc} target="_blank" rel="noreferrer">
        <img className="py-2" src={props.imgc} />
      </a>
    </div>
  )
};

Card.propTypes = {
  namec: PropTypes.string.isRequired,
  urlc: PropTypes.string.isRequired,
  imgc: PropTypes.string.isRequired
}
