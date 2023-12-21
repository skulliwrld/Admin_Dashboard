
import React,{useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { UserProfile } from '@/components/Data'
import SearchAddComponent from './SearchAdd'
import {MdSearch} from "react-icons/md"


function Table({Datas}) {

  const[query, setQuery]=useState()

  const searchFilter = (array) => {
    return array.filter(
      (el) => el.username.toLowerCase().includes(query)
    )
    }
    const filtered = searchFilter(Datas)

    let Container;
    let isOn;

    if(query === undefined){
      isOn = true
    }else{
      isOn = false
    }


    if(isOn){
      Container = Datas
    }else{
      Container = filtered
    }

  return (
    <div className="w-full h-full overflow-auto ">
      <section className="flex justify-between items-center px-3 py-2">
      <div className=" bg-slate-500 rounded-lg flex items-center gap-2 px-3 py-2">
        <MdSearch className="font-bold text-white"/>
      <input type="text" placeholder={`search for a`} value={query} className="bg-slate-500 w-full h-full text-sm outline-none"onChange={(e) =>{
        setQuery(e.target.value)
      }}/>
      </div>
      <Link href={"/dashboard/product/new"} className="px-2 py-2 text-white bg-purple-800 hover:bg-black text-sm font-bold rounded-md">
        Add  Product
      </Link>
        
    </section>

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
              {Container.map((data,index) =>(
                <tr className="items-center text-sm" key={index}>
                <td className="px-3 flex gap-2 py-3 items-center"><Image src={data.image} width={35} height={20} alt="product" className="rounded-full"/>{data.username}</td>
                <td className='py-3 md:px-0 px-8'>{data.email}</td>
                <td className='py-3'>{data.createdAt?.toString().slice(4,16)}</td>
                <td className='py-3'>{data.is_admin ?"Admin" : "Client"}</td>
                <td className='py-3'>{data.is_active ? "Active" : "Passive"}</td>
                <td className='py-3'>
                  <div className="flex space-x-2 items-center">
                    <Link href={`/dashboard/users/${data.id}`} className="bg-teal-600 px-2 rounded-sm font-">view</Link>
                    <Link href="/" className="bg-red-600 px-2 rounded-sm font-">delete</Link>
                  </div>
               </td>
                </tr>

        
              ))}
  
          </tbody>
        </table>
    </div>
  )
}

export default Table