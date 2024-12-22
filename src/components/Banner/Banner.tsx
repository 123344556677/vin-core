import React from 'react';

const Banner = ({ text }) => {
  return (
     <div className="flex justify-center items-center h-48 bg-gradient-to-r from-black via-gray-700 to-blue-700 text-white font-semibold text-2xl rounded-lg shadow-lg text-center m-5">
      {text}
    </div>
  );
};

export default Banner;
