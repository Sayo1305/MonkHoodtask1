import React from 'react'

const Card1compo = ({data}) => {
  return (
    <div className='w-full shadow-xl rounded-xl p-2 flex flex-col'>
      <div className='w-full object-contain relative'>
            <img className='w-full object-contain' src={data.image} alt="dj" />
            <div className='absolute bottom-2 left-2 text-[9px] text-white backdrop-blur-sm p-1 rounded-md bg-gray-300 shadow-lg bg-opacity-20'>₹{data.rent_}/Months</div>
            <div className='absolute top-2 right-3 backdrop-blur-sm p-1 rounded-full bg-gray-300 shadow-lg bg-opacity-20 '>
            <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="7"
                  height="7"
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
      </div>
      <div className='flex flex-col w-full p-1'>
            <div className='text-[13px] font-semibold'>{data.name}</div>
            <div className='flex w-full justify-between'>
                  <div className='flex items-center gap-1'>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" fill="#000" className="bi bi-geo-alt-fill" viewBox="0 0 16 16">
                          <path d="M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10zm0-7a3 3 0 1 1 0-6 3 3 0 0 1 0 6z"/>
                        </svg>
                        <div className='text-ss text-slate-500'>{data.location_}</div>
                  </div>
                  <div className='flex items-center gap-1'>
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
                    <div className='text-ss text-[#F69F17]'>{data.rating_}</div></div>
            </div>
      </div>
    </div>
  )
}

export default Card1compo