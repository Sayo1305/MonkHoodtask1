import React from "react";
import BG from '../images/Vector.png';
const Navbar = () => {
  return (
    <div className="top-0 w-full text-white absolute z-20 flex p-3 justify-between">
      <div><img src={BG} alt="pic" /></div>
      <div className="font-semibold text-[10px] top-0 left-20 backdrop-blur-sm  bg-gray-300 shadow-lg bg-opacity-20 px-2 py-1 rounded-2xl">
        List Property
      </div>
    </div>
  );
};

export default Navbar;
