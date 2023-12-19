import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserProfile } from '@/components/Data'

function Table() {
  return (
    <div className="w-full h-full overflow-auto ">
        <table className=' md:px-2 md:mt-3 overflow-scroll w-full h-32'>
          <thead className="">
            <tr className="font-bold text-sm md:text-md md:w-full w-1/2">
              <td className='pl-4'>Name</td>
              <td className="md:px-0 px-8">Email</td>
              <td>Created_At</td>
              <td>Role</td>
              <td>Status</td>
              <td>Action</td>
            </tr>
          </thead>
          <tbody>
              {UserProfile.map((data,index) =>(
                <tr className="items-center text-sm" key={index}>
                <td className="px-3 flex gap-2 py-3 items-center"><Image src={data.image} width={35} height={20} alt="product" className="rounded-full"/>{data.name}</td>
                <td className='py-3 md:px-0 px-8'>{data.email}</td>
                <td className='py-3'>{data.created_at}</td>
                <td className='py-3'>{data.role}</td>
                <td className='py-3'>{data.status}</td>
                <td className='py-3'>{data.action.map((item) =>(
                  <div key={item} className="flex space-x-2 items-center">
                    <Link href="/" className="bg-teal-600 px-2 rounded-sm font-">{item.view}</Link>
                    <Link href="/" className="bg-red-600 px-2 rounded-sm font-">{item.delete}</Link>
                  </div>
                ))}</td>
                </tr>

        
              ))}
  
          </tbody>
        </table>
    </div>
  )
}

export default Table