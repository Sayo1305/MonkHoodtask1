import React from "react";
import CountUp from "react-countup";
import BG1 from "../images/image 16.png";
import BG2 from "../images/image 17.png";
const Section1 = () => {
  return (
    <div>
      <div className="flex justify-center relative gap-4 -my-6 z-40">
        <div className="flex bg-white rounded-xl  flex-col justify-center items-center w-[90px] h-[110px] p-2 shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#F69F17"
              className="bi bi-building"
              viewBox="0 0 16 16"
            >
              <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
              <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
            </svg>
          </div>
          <div className="text-lg">
          <CountUp start={0} end={450} delay={0} duration={3}>
              {({ countUpRef }) => (
                <div className="text-lg">
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </div>
          <div className="text-[10px] text-slate-500">Residences</div>
        </div>
        <div className="flex bg-white rounded-xl flex-col justify-center items-center w-[90px] h-[110px] p-2 shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#F69F17"
              className="bi bi-building"
              viewBox="0 0 16 16"
            >
              <path d="M4 2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3 0a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1ZM4 5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM7.5 5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1ZM4.5 8a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Zm2.5.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-1a.5.5 0 0 1-.5-.5v-1Zm3.5-.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1Z" />
              <path d="M2 1a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V1Zm11 0H3v14h3v-2.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 .5.5V15h3V1Z" />
            </svg>
          </div>
          <div className="text-lg">
            <CountUp start={0} end={120} delay={0} duration={3}>
              {({ countUpRef }) => (
                <div className="text-lg">
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </div>
          <div className="text-[10px] text-slate-500">Colleges</div>
        </div>
        <div className="flex bg-white rounded-xl flex-col justify-center items-center w-[90px] h-[110px] p-2 shadow-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="#F69F17"
              className="bi bi-people-fill"
              viewBox="0 0 16 16"
            >
              <path
                d="M7 14s-1 0-1-1 1-4 5-4 5 3 5 4-1 1-1 1H7Zm4-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-5.784 6A
              2.238 2.238 0 0 1 5 13c0-1.355.68-2.75 1.936-3.72A6.325 6.325 0 0 0 5 9c-4 0-5 3-5 4s1 1 1 1h4.216ZM4.5 8a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z"
              />
            </svg>
          </div>
          <div className="text-lg">
          <CountUp start={0} end={200} delay={0} duration={3}>
              {({ countUpRef }) => (
                <div className="text-lg">
                  <span ref={countUpRef} />+
                </div>
              )}
            </CountUp>
          </div>
          <div className="text-[10px] text-slate-500">Happy Clients</div>
        </div>
      </div>
      <div className="relative p-10 flex flex-col items-center text-center">
        <div className="font-semibold">Services For You</div>
        <div className="text-center text-ss text-slate-500">
          One-stop solution to all your home needs
        </div>
      </div>
      <div className="grid grid-cols-3 -my-10 p-8 gap-3 justify-items-center">
        <div className="w-[80px] h-[80px] relative shadow-lg">
          <div className="absolute top-0 bg-gradient-to-t from-[#00000068] shadow-lg to-[#0000] w-full h-full rounded-lg"></div>
          <img className="object-cover  w-full h-full" src={BG1} alt="pic" />
          <div className="absolute p-2 bottom-0 w-full text-center text-[12px] text-white">
            Flats
          </div>
        </div>
        <div className="w-[80px] h-[80px] relative shadow-lg">
          <div className="absolute top-0 bg-gradient-to-t from-[#00000068] shadow-lg to-[#0000] w-full h-full rounded-lg"></div>
          <img className="object-cover  w-full h-full" src={BG2} alt="pic" />
          <div className="absolute p-2 bottom-0 w-full text-center text-[12px] text-white">
            PG Homes
          </div>
        </div>
        <div className="w-[80px] h-[80px] relative shadow-lg">
          <div className="absolute top-0 bg-gradient-to-t from-[#00000068] shadow-lg to-[#0000] w-full h-full rounded-lg"></div>
          <img className="object-cover  w-full h-full" src={BG1} alt="pic" />
          <div className="absolute p-2 bottom-0 w-full text-center text-[12px] text-white">
            Furnishing
          </div>
        </div>
        <div className="w-[80px] h-[80px] relative shadow-lg">
          <div className="absolute top-0 bg-gradient-to-t from-[#00000068] shadow-lg to-[#0000] w-full h-full rounded-lg"></div>
          <img className="object-cover  w-full h-full" src={BG2} alt="pic" />
          <div className="absolute p-2 bottom-0 w-full text-center text-[12px] text-white">
            Cleaning
          </div>
        </div>
        <div className="w-[80px] h-[80px] relative shadow-lg">
          <div className="absolute top-0 bg-gradient-to-t from-[#00000068] shadow-lg to-[#0000] w-full h-full rounded-lg"></div>
          <img className="object-cover  w-full h-full" src={BG1} alt="pic" />
          <div className="absolute p-2 bottom-0 w-full text-center text-[12px] text-white">
            Kitchen Aid
          </div>
        </div>
        <div className="w-[80px] h-[80px] relative shadow-lg">
          <div className="absolute top-0 bg-gradient-to-t from-[#00000068] shadow-lg to-[#0000] w-full h-full rounded-lg"></div>
          <img className="object-cover  w-full h-full" src={BG2} alt="pic" />
          <div className="absolute p-2 bottom-0 w-full text-center text-ss text-white">
            Online Listing
          </div>
        </div>
      </div>
      <div className="w-full flex p-10 justify-center">
        <button
          type="button"
          className="flex text-ss items-center border-2 px-2 py-1 text-[#F69F17] rounded-md border-[#F69F17] "
        >
          View All
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
  );
};

export default Section1;
