import React from 'react'
import { ProductItems } from '@/components/Data'
import Image from 'next/image'
import Link from 'next/link'

function ProductTable() {
  return (
    <div  className="w-full overflow-auto">
        <table className='w-full md:px-2 md:mt-3 overflow-scroll'>
          <thead className="">
            <tr className="font-bold">
              <td className='pl-4'>Title</td>
              <td className=" md:px-0 px-8">Description</td>
              <td>Price</td>
              <td className=" md:px-0 px-8">Created_At</td>
              <td className="md:pr-0 pr-5">Stock</td>
              <td className="pl-8 md:pl-0">Action</td>
            </tr>
          </thead>
          <tbody>
              {ProductItems.map((data,index) =>(
                <tr className="items-center text-sm" key={index}>
                <td className="px-3 flex gap-2 py-3 items-center"><Image src={data.image} width={35} height={20} alt="product" className="rounded-full"/>{data.title}</td>
                <td className='py-3 md:px-0 px-8'>{data.desc}</td>
                <td className='py-3'>{data.price}</td>
                <td className='py-3  md:px-0 px-8'>{data.created_at}</td>
                <td className='py-3 px-3 md:px-0'>{data.stock}</td>
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

export default ProductTable