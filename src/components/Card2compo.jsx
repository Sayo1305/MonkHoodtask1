import React from "react";
import BG from '../images/bedroom.png';
const Card2compo = ({ data }) => {
  return (
    <div className="w-full flex shadow-lg p-2 rounded-xl gap-2">
      <div>
        <img className="w-[90px]  object-cover" src={data.image} alt="image_" />
      </div>
      <div className="flex w-full flex-col gap-1">
        <div className="w-full flex justify-between">
          <div className="text-xs font-semibold">{data.name}</div>
          <div className="text-xs font-semibold">
            ₹{data.rent_}
            <span className="text-slate-500">/months</span>
          </div>
        </div>
        <div>
          <div className="flex w-full justify-between">
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="10"
                height="10"
                fill="#000"
                className="bi bi-geo-alt-fill"
                viewBox="0 0 16 16"
              >
                <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
              </svg>
              <div className="text-ss text-slate-500">{data.location_}</div>
            </div>
            <div className="flex items-center gap-1">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="8"
                height="8"
                fill="#F69F17"
                className="bi bi-star-fill"
                viewBox="0 0 16 16"
              >
                <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
              </svg>
              <div className="text-ss text-[#F69F17]">{data.rating_}</div>
            </div>
          </div>
        </div>
        <div className="w-full flex justify-between items-center">
          <div className="flex items-center text-ss text-slate-500 gap-1">
            <img className="w-[15px] h-[15px]" src={BG} alt="alt" />
            {data.bed} bedrooms
          </div>
          <div className="rounded-full w-[15px] h-[15px] text-center bg-[#F2F2F2] shadow-md flex justify-center items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="10"
              height="10"
              fill="#808385"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card2compo;
