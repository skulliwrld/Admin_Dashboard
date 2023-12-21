"use client"
import { ProductItems } from '@/components/Data'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
// import useFetch from '@/components/useFetch'


function ProductTable({Datas, query}) {
  const [submitting ,setSubmitting] = useState(false)

  const searchFilter = (array) => {
    return array.filter(
      ((el) =>( 
        el.title.toLowerCase().includes(query)
        )
    ))
    }

    const filtered = searchFilter(Datas)
    console.log(query)


    let Details;
    let isOn;

    if(query === undefined){
      isOn = true
    }else{
      isOn = false
    }


    if(isOn){
      Details = Datas
    }else{
      Details = filtered
    }
    
  
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
                {Details.map((data,index) =>(
                  <tr className="items-center text-sm" key={index}>
                  <td className="px-3 flex gap-2 py-3 items-center"><Image src={data.image} width={35} height={20} alt="product" className="rounded-full"/>{data.title}</td>
                  <td className='py-3 md:px-0 px-8'>{data.description}</td>
                  <td className='py-3'>{data.price}</td>
                  <td className='py-3  md:px-0 px-8'>{data.createdAt}</td>
                  <td className='py-3 px-3 md:px-0'>{data.stock}</td>
                  <td className='py-3'>
                  <div className="flex space-x-2 items-center">
                      <Link href={`/dashboard/products/${data._id}`} className="bg-teal-600 px-2 rounded-sm font-">view</Link>
                      <Link href="/" className="bg-red-600 px-2 rounded-sm font-">delete</Link>
                    </div>
                </td>
                  </tr>))}
  
          </tbody>
        </table>
    </div>
  )
}

export default ProductTable