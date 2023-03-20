import React from "react";
import BG from "../images/image 36.png";
import BG1 from "../images/image 15.png";
import BG2 from "../images/image 30.png";
import BG3 from "../images/image 33.png";
import BG4 from "../images/image 34.png";
import BG5 from '../images/image 19.png';
import BG6 from '../images/image 20.png';

const Section3 = ({flatspage}) => {
  return (
    <div>
      <div>
        <div className="text-center font-semibold p-2">
          {flatspage === true ? "Handpicked collection of Rental Flats" : "Handpicked collection of PG Homes"}
          
        </div>
        <div className="flex w-full justify-center p-4 gap-5">
          <div className="w-1/3 relative shadow-lg">
            <div className="absolute top-0 h-full w-full flex text-[12px] justify-center items-center text-white z-20">
              {flatspage === true ? "Furnished" : "For Boys"}
            </div>
            <img
              src={flatspage === true ? BG : BG5}
              className="w-full h-full object-cover"
              alt="pictury"
            />
            <div className="absolute top-0 bg-gradient-to-t from-[#0000007f] shadow-lg to-[#00000077] w-full h-full rounded-lg"></div>
          </div>
          <div className="w-1/3 relative shadow-lg">
            <div className="absolute top-0 text-center h-full w-full flex justify-center items-center text-white z-20 text-[12px]">
              {flatspage === true ? "Readily Available" : "For Girls"}
            </div>
            <img
              src={flatspage === true ? BG : BG6}
              className="w-full h-full object-cover"
              alt="pictury"
            />
            <div className="absolute top-0 bg-gradient-to-t from-[#0000007f] shadow-lg to-[#00000077] w-full h-full rounded-lg"></div>
          </div>
        </div>
      </div>
      <div className="flex p-5 gap-5">
        <div className="w-2/6 flex flex-col gap-3">
          <div className="p-1 text-lg font-semibold">What they say</div>
          <div className="text-ss p-1 text-slate-500">
            Whether you're looking for a new home or just want to make a little
            renovations to your existing place, we'll make sure you find what
            you're looking for.
          </div>
          <div className="w-full flex">
            <img src={BG1} alt="pic" />
            <img className="-mx-1" src={BG1} alt="pic" />
            <img className="-mx-1" src={BG1} alt="pic" />
            <img className="-mx-1" src={BG1} alt="pic" />
            <div className="text-ss -mx-2 bg-[#222222] rounded-full text-white p-2">
              50+
            </div>
          </div>
          <div className="w-full flex justify-center">
            <button
              type="button"
              className="flex active:bg-violet-700 w-5/6 text-ss items-center border-2 px-2 py-1 text-[#F69F17] rounded-md border-[#F69F17] "
            >
              Read More
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="#F69F17"
                className="bi bi-arrow-right-short"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="w-4/6 flex flex-col gap-2 relative">
          <div className="absolute top-0 w-full h-full bg-gradient-to-t from-[#ffffffc8] to-[#00000000]"></div>
          <div className="w-full p-1 shadow-xl drop-shadow-md border-2 border-[#D8D8D8] rounded-xl">
            <div className="flex justify-between p-2">
              <div className="flex flex-col">
                <div className="font-bold text-xs">Urvi Suhane</div>
                <div className="text-ss flex justify-center items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="#F69F17"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="#F69F17"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="#F69F17"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="#F69F17"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="#F69F17"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  <span className="text-slate-500">4.8</span>
                </div>
              </div>
              <img className="w-[30px] h-[30px]" src={BG1} alt="pic" />
            </div>
            <div className="p-1 text-ss text-justify text-slate-500">
              Monkhood living has been helpful in finding me the house I wanted.
              The owner is sweet. I got pretty much all the facilities under my
              budget. I will suggest to every student.
            </div>
          </div>
          <div className="w-full p-1   border-2 border-[#D8D8D8] rounded-xl ">
            <div className="flex justify-between p-2">
              <div className="flex flex-col">
                <div className="font-bold text-xs">Urvi Suhane</div>
                <div className="text-ss flex justify-center items-center gap-1">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="#F69F17"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="#F69F17"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="#F69F17"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="#F69F17"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="10"
                    height="10"
                    fill="#F69F17"
                    className="bi bi-star-fill"
                    viewBox="0 0 16 16"
                  >
                    <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z" />
                  </svg>{" "}
                  <span className="text-slate-500">4.5</span>
                </div>
              </div>
              <img className="w-[30px] h-[30px]" src={BG1} alt="pic" />
            </div>
            <div className="p-1 text-ss text-justify text-slate-500">
              Monkhood living has been helpful in finding me the house I wanted.
              The owner is sweet. I got pretty much all the facilities under my
              budget. I will suggest to every student.
            </div>
          </div>
        </div>
      </div>
      <div className="py-10 px-5 relative">
        <div className="bg-[#1A1A1A] relative p-2 flex justify-end gap-2 mx-auto my-0 rounded-xl w-full h-[110px]">
          <div className="w-1/2">
            <div className="flex gap-2 absolute -top-5 left-0 items-center">
              <div className="grid grid-rows-2 justify-items-end gap-2">
                <img src={BG4} alt="picy" />
                <img src={BG3} alt="picy" />
              </div>
              <div>
                <img src={BG2} alt="picy" />
              </div>
            </div>
          </div>
          <div className="flex w-1/2 flex-col gap-2">
            <div className="flex flex-col">
              <div className="text-white text-sm">Looking to sell or rent</div>
              <div className="text-white text-sm">your property?</div>
            </div>
            <div className="w-full flex justify-center">
              <button
                type="button"
                className="flex w-full text-ss items-center border-2 px-1 py-1 text-[#F69F17] rounded-md border-[#F69F17] "
              >
                Post Property for FREE
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#F69F17"
                  className="bi bi-arrow-right-short"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M4 8a.5.5 0 0 1 .5-.5h5.793L8.146 5.354a.5.5 0 1 1 .708-.708l3 3a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708-.708L10.293 8.5H4.5A.5.5 0 0 1 4 8z"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section3;
