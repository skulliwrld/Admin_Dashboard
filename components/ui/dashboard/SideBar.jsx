import React from 'react'
import { MenuData } from '@/components/Menu'
import MenuLinks from './MenuLinks'
import Image from 'next/image'

function SideBar() {
  return (
    <div className=" flex flex-col items-start">
      <div className="flex items-center gap-3 mb-2">
        <Image src="/images/avater.png" width={50} height={50} className='rounded-full'/>
        <div className="flex flex-col p-0 text-sm">
          <span className="text-lg text-slate-100">Ikechi Joseph</span>
          <span className='text-xs '>Adminstrator</span>
        </div>
      </div>
      <ul className="w-full">
        {MenuData.map((cat) =>(
          <li className='text-lg font-semibold'key={cat.title}>{cat.title}
          <span>
            {cat.list.map((data) =>(
              <MenuLinks items={data} key={data.title} />
            ))}
          </span>
          
          </li> 
      ))}
      </ul>
      
    </div>
  )
}

export default SideBar