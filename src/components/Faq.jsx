import React, { useEffect, useState } from "react";
import BG1 from "../images/iPhone14.png";
import BG2 from "../images/Rectangle.png";
import BG3 from "../images/Rectangle2.png";
import BG4 from "../images/Rectangle 120.png";

const Faq = () => {
  const [anskey, setanskey] = useState(-1);
  const [class_state, setclass_state] = useState(false);
  useEffect(() => {}, []);
  const handle_faq = (e) => {
    if (class_state === true && anskey !== e) {
      setanskey(e);
      return;
    }
    setanskey(e);
    setclass_state(!class_state);
  };
  var data = [
    {
      number: "01.",
      question: "Do you list houses in other cities?",
      answer:
        "What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum ge...",
      open: false,
    },
    {
      number: "02.",
      question: "Do you list houses in other cities?",
      answer:
        "What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum ge...",
      open: false,
    },
    {
      number: "03.",
      question: "Do you list houses in other cities?",
      answer:
        "What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum ge...",
      open: false,
    },
    {
      number: "04.",
      question: "Do you list houses in other cities?",
      answer:
        "What is Lorem Ipsum? Simply put, loremipsum is dummy text that occupies the space where the real content should be. If you are designing an online business such as a blog and you do not have content already, you use a lorem ipsum ge...",
      open: false,
    },
  ];
  return (
    <div>
      <div className="relative p-2 flex flex-col items-center text-center">
        <div className="font-semibold">FAQs</div>
        <div className="text-center text-ss text-slate-500">
          Do you have questions? It's probably been answered
        </div>
      </div>
      <div className="p-5 flex flex-col gap-3">
        {data.map((val, idx) => (
          <>
            <div
              onClick={() => {
                handle_faq(idx);
              }}
              key={idx}
              className="w-full text-sm rounded-lg items-center border-[1px] border-[#D8D8D8] flex justify-between p-3"
            >
              <div>{val.number}</div>
              <div>{val.question}</div>
              <div>
                {anskey === idx && class_state === true ? (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-up"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M7.646 4.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1-.708.708L8 5.707l-5.646 5.647a.5.5 0 0 1-.708-.708l6-6z"
                    />
                  </svg>
                ) : (
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    className="bi bi-chevron-down"
                    viewBox="0 0 16 16"
                  >
                    <path
                      fillRule="evenodd"
                      d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"
                    />
                  </svg>
                )}
              </div>
            </div>
            {anskey === idx && class_state === true && (
              <div className="w-full text-justify text-sm rounded-lg items-center border-[1px] border-[#D8D8D8] flex justify-between p-3">
                {val.answer}
              </div>
            )}
          </>
        ))}
      </div>
      <div className="w-full flex flex-col relative py-20 items-center justify-center">
        <div className="w-1/3 relative">
          <img
            className="w-full border-[3px]  border-black rounded-2xl"
            src={BG1}
            alt="pic"
          />
          <div className="absolute flex flex-col bottom-20 left-20 w-[120px] shadow-lg bg-white rounded-lg p-2 h-[120px]">
            <div className="relative">
              <img src={BG4} className="w-[100px] object-cover" alt="picy" />
              <div className="absolute top-0 right-1  backdrop-blur-sm p-1 rounded-full bg-gray-300 shadow-lg bg-opacity-20 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="5"
                  height="5"
                  fill="#F69F17"
                  className="bi bi-heart-fill"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
              </div>
              <div className="absolute bottom-3 left-1 text-[8px] text-white backdrop-blur-sm p-1 rounded-md bg-gray-300 shadow-lg bg-opacity-20">
                $5000/months
              </div>
            </div>
            <div>
              <div>
                <div className="text-ss font-semibold">Devta Homes</div>
                <div className="text-ss flex w-full justify-between">
                  <div className="flex gap-1 items-center">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="10"
                      height="10"
                      fill="#F69F17"
                      className="bi bi-geo-alt-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                    </svg>{" "}
                    Rohini
                  </div>
                  <div className="flex items-center gap-1">
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
                    4
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="relative w-2/3 mx-auto my-0 p-2 gap-2 flex flex-col items-center text-center">
          <div className="font-semibold">Download our mobile app</div>
          <div className="text-center text-ss text-slate-500">
            Visit your google play store and download our mobile app to keep
            searching for your perfect home.
          </div>
          <div className="flex gap-3">
            <img src={BG2} alt="picy" />
            <img src={BG3} alt="picy" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Faq;
