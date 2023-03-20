import React from "react";
import BG1 from "../images/Group 285.png";
const Section2 = () => {
  return (
    <div>
      <div className="relative p-2 flex flex-col items-center text-center">
        <div className="font-semibold">Book your perfect home</div>
        <div className="text-center text-ss text-slate-500">
          Say goodbye to brokerage fees and endless searching
        </div>
      </div>
      <div className="p-5 grid grid-cols-2 gap-2">
        <div className="flex flex-col gap-2 justify-center items-center">
          <div>
            <img src={BG1} alt="pic" />
          </div>
          <div className="text-[13px] font-semibold">Freedom and flexibility</div>
          <div className="text-ss   text-slate-500 text-center">
            Live independently and make your own choices with no stress about
            owner's rules or restrictions
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div>
            <img src={BG1} alt="pic" />
          </div>
          <div className="text-[13px] font-semibold">No brokerage fees</div>
          <div className="text-ss   text-slate-500 text-center">
            Save time and money without the interference of middleman and transparent pricing
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div>
            <img src={BG1} alt="pic" />
          </div>
          <div className="text-[13px] font-semibold">Freedom and flexibility</div>
          <div className="text-ss   text-slate-500 text-center">
            Live independently and make your own choices with no stress about
            owner's rules or restrictions
          </div>
        </div>
        <div className="flex flex-col gap-2 justify-center items-center">
          <div>
            <img src={BG1} alt="pic" />
          </div>
          <div className="text-[13px] font-semibold">Freedom and flexibility</div>
          <div className="text-ss   text-slate-500 text-center">
            Live independently and make your own choices with no stress about
            owner's rules or restrictions
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section2;
