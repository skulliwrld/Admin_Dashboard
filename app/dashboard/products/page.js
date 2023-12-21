"use client"

import React,{useState,useEffect} from 'react'
import SearchAddComponent from '@/components/ui/dashboard/Remaining_Fields/SearchAdd'
import Pagination from '@/components/ui/dashboard/Remaining_Fields/Pagination'
import ProductTable from '@/components/ui/dashboard/Remaining_Fields/ProductTable'

function Product() {
  const [container, setContainer] = useState([])
  const [query, setQuery] = useState()

  // const {data, error, isPending} = useFetch("/api/product")
  
  useEffect(() =>{
    const getData = async ()  =>{
      const res = await fetch("/api/product")
      const result = await res.json()
      setContainer(result)
    }
    getData()
  },[])
  return (
    <section className=" bg-[#0c162c] w-full">
        <SearchAddComponent title="Product" url="/dashboard/products/product_form" query={query} setQuery={setQuery}/>
        <ProductTable Datas={container} query={query} />
        <Pagination />
    </section>
  )
}

export default Product