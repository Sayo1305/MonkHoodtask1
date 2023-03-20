import React, { useState , useEffect } from "react";
import BG1 from "../images/image 35.png";
import BG2 from "../images/image 28.png";
const HeroPage = ({setflatpage , setOpenHostel}) => {
  const [flatclicked, setflatclicked] = useState(true);
  const [pghomeclicked, setpghomeclicked] = useState(false);
  const [OpenLocationModal , setOpenLocationModal] = useState(false);
  const [LocationLive, setLocationLive] = useState("Delhi");
  const [GetLive , setGetLive] = useState(false);
  useEffect(()=>{
    const GetLocation = async () => {
      navigator.geolocation.getCurrentPosition(function (position , err) {
        console.log(position.coords.latitude);
        console.log(position.coords.longitude);
        console.log(err);
      });
    }
    if(GetLive === true)
    {
      GetLocation();
    }
  },[GetLive]);
  
  return (
    <div>
      <div className="relative">
        <img
          className="w-full object-contain h-full z-10"
          src={`${flatclicked === true ? BG1 : BG2}`}
          alt="BG"
        />
        <div className="w-full top-0 absolute h-full bg-gradient-to-t z-20 from-[#0000009c] to-[#0000]">
          <div className="flex w-full gap-4 flex-col h-full justify-center items-center">
            <div className="flex flex-col justify-center items-center">
              <div className="text-white sm:text-lg md:text-5xl text-center font-semibold">
                Find Your next student home
              </div>
              <div className="text-white text-ss">
                A broker free student living solution
              </div>
            </div>
            <div className="flex gap-2 w-full justify-center">
              <button
                onClick={() => {
                  setflatclicked(true);
                  setpghomeclicked(false);
                  setflatpage(true);
                }}
                type="button"
                className={`${
                  flatclicked === true
                    ? "px-6 bg-[#F69F17] text-[12px] border-2 border-transparent rounded-sm flex justify-center items-center font-semibold text-center text-white"
                    : "px-6 backdrop-blur-sm  bg-gray-300 shadow-lg bg-opacity-20 bg-transparent text-[12px] rounded-sm flex justify-center items-center font-semibold text-center border-2 border-[#F69F17] text-[#F69F17]"
                }`}
              >
                Flats
              </button>
              <button
                type="button"
                onClick={() => {
                  setflatclicked(false);
                  setpghomeclicked(true);
                  setflatpage(false);
                }}
                className={`${
                  pghomeclicked === true
                    ? "px-4 bg-[#F69F17] text-[12px] rounded-sm flex justify-center items-center font-semibold text-center text-white"
                    : "backdrop-blur-sm  bg-gray-300 shadow-lg bg-opacity-20 px-4 bg-transparent border-[2px] border-[#F69F17] text-[#F69F17] text-[12px] rounded-sm flex justify-center items-center font-semibold text-center"
                }`}
              >
                PG Homes
              </button>
            </div>
            <div className="w-5/6 rounded-md relative gap-2 flex p-2 items-center backdrop-blur-sm  bg-gray-300 shadow-lg bg-opacity-20 ">
              <div className="justify-center  flex gap-2 items-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="10"
                  height="10"
                  fill="#F69F17"
                  className="bi bi-geo-alt-fill"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                <div onClick={()=>{setOpenLocationModal(!OpenLocationModal)}} className="text-white text-[13px]">{LocationLive}</div>
              </div>
              
              <div className="text-white w-[1px] h-full text-center bg-white">
                {""}
              </div>
              <div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="#F69F17"
                  className="bi bi-search"
                  viewBox="0 0 16 16"
                >
                  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" />
                </svg>
              </div>
              <input
                type="text"
                placeholder="Search By College"
                className="w-1/2 text-white rounded-sm bg-transparent outline-none"
              />
            </div>
          </div>
        </div>
        {
          OpenLocationModal === true &&
          <div className="absolute top-[80%] shadow-xl left-2 flex-col p-1 flex !z-50 bg-white w-1/3 rounded-lg">
                  <div onClick={()=>{setOpenLocationModal(!OpenLocationModal) ; setLocationLive("Delhi"); setOpenHostel(true);}} className="text-xs">Delhi</div>
                  <div onClick={()=>{setOpenLocationModal(!OpenLocationModal) ; setLocationLive("Mumbai"); setOpenHostel(true);}} className="text-xs">Mumbai</div>
                  <div onClick={()=>{setOpenLocationModal(!OpenLocationModal) ; setLocationLive("Kolkata"); setOpenHostel(true);}} className="text-xs">Kolkata</div>
                  <div onClick={()=>{setOpenLocationModal(!OpenLocationModal) ; setLocationLive("Chennai"); setOpenHostel(true);}} className="text-xs">Chennai</div>
                  <div onClick={()=>{setOpenLocationModal(!OpenLocationModal) ; setLocationLive("Delhi"); setGetLive(!GetLive); setOpenHostel(true);}} className="text-xs">Use your location</div>
                </div>
        }
        
      </div>
    </div>
  );
};

export default HeroPage;
