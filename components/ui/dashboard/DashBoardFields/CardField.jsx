import React from 'react'
import { CardDetails } from '@/components/Menu'

export const CardSchema = ({content}) =>{
  return(
    <div className="flex justify-between px-3 py-2 bg-[#182237] rounded-lg hover:bg-[#4269bd] gap-3">
      <i className="text-xl text-white rounded-full ">{content.icons}</i>
      <div className="flex flex-col space-y-4 items-start">
        <h3 className="text-lg text-[#ADB7BE] hover:text-white">
          {content.title}
        </h3>
        <h1 className="text-xl font-bold text-white">
          {content.User_Amount}
        </h1>
        <p className="text-xs"><span className="text-green-600">{content.prev_count}</span> is more than the previous week</p>
      </div>
    </div>
  )
}


function Cards() {
  return (
    <div className="flex justify-between space-x-5 px-3 py-3">
      {CardDetails.map((data,index) =>(
        <div  key={index} className="">
           <CardSchema content={data}/>
        </div>
      ))}
    </div>
  )
}

export default Cards