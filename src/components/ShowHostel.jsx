import React from 'react'
import  data_house  from '../data/Data'
import Card1compo from './Card1compo'
import Card2compo from './Card2compo'
const ShowHostel = () => {
  return (
    <div>
      <div className='w-full text-center font-semibold'>Discover nearby properties</div>
      <div className='flex md:w-1/2 w-full mx-auto my-0 p-7 justify-between gap-3'>
      {
            data_house[0].showcase.map((val , idx) =>(
              <div  key={idx}>
                <Card1compo data={val}/>
              </div>
                  
            ))
      }
      </div>
      <div className='w-full text-center font-semibold'>Top searches</div>
      <div className='flex flex-col gap-3 p-7'>
        {
          data_house[1].top_search.map((val , idx) => (
            <div key={idx} > <Card2compo data={val} /></div>
           
          ))
        }
      </div>
      <div className="w-full flex p-2 justify-center">
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
  )
}

export default ShowHostel