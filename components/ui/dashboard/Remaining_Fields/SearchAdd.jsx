"use client"
import React from 'react'
import {MdSearch} from "react-icons/md"
import Link from 'next/link'


function SearchAddComponent({title,url,query,setQuery}) {
  return (
    <section className="flex justify-between items-center px-3 py-2">
      <div className=" bg-slate-500 rounded-lg flex items-center gap-2 px-3 py-2">
        <MdSearch className="font-bold text-white"/>
      <input type="text" placeholder={`search for a ${title}`} value={query} className="bg-slate-500 w-full h-full text-sm outline-none"onChange={(e) =>{
        setQuery(e.target.value)
      }}/>
      </div>
      <Link href={url} className="px-2 py-2 text-white bg-purple-800 hover:bg-black text-sm font-bold rounded-md">
        Add {title}
      </Link>
        
    </section>
  )
}

export default SearchAddComponent


