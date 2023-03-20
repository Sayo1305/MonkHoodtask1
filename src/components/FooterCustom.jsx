import React, { useState } from "react";

const FooterCustom = () => {
  const [clickedHome, setclickedHome] = useState(true);
  const [clickedsave, setclickedsave] = useState(false);
  const [clickedinbox, setclickedinbox] = useState(false);
  const [clickedprofile, setclickedprofile] = useState(false);
  return (
    <div className="bg-white p-4 shadow-lg flex fixed bottom-0 w-full justify-between items-center">
      <div>
        {/* hehdoidjoidjoidhoidjoijdhudhocjcodcojdc */}
        {/* dcjdcojdcoijdcojdc */}
        <div
          className="flex flex-col items-center justify-center"
          onClick={() => {
            setclickedHome(true);
            setclickedinbox(false);
            setclickedprofile(false);
            setclickedsave(false);
          }}
        >
          {/* kjdskj  */}
          {clickedHome === true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#F69F17"
              className="bi bi-house-door-fill"
              viewBox="0 0 16 16"
            >
              <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#F69F17"
              className="bi bi-house-door"
              viewBox="0 0 16 16"
            >
              <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146ZM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5Z" />
            </svg>
          )}
        </div>
        <div className={`text-ss ${clickedHome === true ? 'text-[#F68F17]' : 'text-slate-500'}`}>Home</div>
      </div>
      <div>
        <div
          className="flex flex-col items-center justify-center"
          onClick={() => {
            setclickedHome(false);
            setclickedinbox(false);
            setclickedprofile(false);
            setclickedsave(true);
          }}
        >
          {clickedsave === true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#F69F17"
              className="bi bi-heart-fill"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#F69F17"
              className="bi bi-heart"
              viewBox="0 0 16 16"
            >
              <path d="m8 2.748-.717-.737C5.6.281 2.514.878 1.4 3.053c-.523 1.023-.641 2.5.314 4.385.92 1.815 2.834 3.989 6.286 6.357 3.452-2.368 5.365-4.542 6.286-6.357.955-1.886.838-3.362.314-4.385C13.486.878 10.4.28 8.717 2.01L8 2.748zM8 15C-7.333 4.868 3.279-3.04 7.824 1.143c.06.055.119.112.176.171a3.12 3.12 0 0 1 .176-.17C12.72-3.042 23.333 4.867 8 15z" />
            </svg>
          )}
        </div>
        <div className={`text-ss ${clickedsave === true ? 'text-[#F68F17]' : 'text-slate-500'}`}>Saved</div>
      </div>
      <div>
        <div
          className="flex flex-col items-center justify-center"
          onClick={() => {
            setclickedHome(false);
            setclickedinbox(true);
            setclickedprofile(false);
            setclickedsave(false);
          }}
        >
          {clickedinbox === true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#F69F17"
              className="bi bi-chat-square-dots-fill"
              viewBox="0 0 16 16"
            >
              <path d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2h-2.5a1 1 0 0 0-.8.4l-1.9 2.533a1 1 0 0 1-1.6 0L5.3 12.4a1 1 0 0 0-.8-.4H2a2 2 0 0 1-2-2V2zm5 4a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm4 0a1 1 0 1 0-2 0 1 1 0 0 0 2 0zm3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#F69F17"
              className="bi bi-chat-square-dots"
              viewBox="0 0 16 16"
            >
              <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1h-2.5a2 2 0 0 0-1.6.8L8 14.333 6.1 11.8a2 2 0 0 0-1.6-.8H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h2.5a1 1 0 0 1 .8.4l1.9 2.533a1 1 0 0 0 1.6 0l1.9-2.533a1 1 0 0 1 .8-.4H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z" />
              <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          )}
        </div>
        <div className={`text-ss ${clickedinbox === true ? 'text-[#F68F17]' : 'text-slate-500'}`}>Inbox</div>
      </div>
      <div>
        <div
          className="flex flex-col items-center justify-center"
          onClick={() => {
            setclickedHome(false);
            setclickedinbox(false);
            setclickedprofile(true);
            setclickedsave(false);
          }}
        >
          {clickedprofile === true ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#F69F17"
              className="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="25"
              height="25"
              fill="#F69F17"
              className="bi bi-person"
              viewBox="0 0 16 16"
            >
              <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z" />
            </svg>
          )}
        </div>
        <div className={`text-ss ${clickedprofile === true ? 'text-[#F68F17]' : 'text-slate-500'}`}>Profile</div>
      </div>
    </div>
  );
};

export default FooterCustom;
