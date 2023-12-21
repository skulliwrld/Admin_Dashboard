"use client"
import { useState, useEffect } from 'react'
import SearchAddComponent from '@/components/ui/dashboard/Remaining_Fields/SearchAdd'
import Pagination from '@/components/ui/dashboard/Remaining_Fields/Pagination'
import Table from '@/components/ui/dashboard/Remaining_Fields/Table'
import { fetchUser } from '@/utills/dataFETCH'

function UserPage() {

  const [container, setContainer] = useState([])
  
  useEffect(() =>{
    const getData = async ()  =>{
      const res = await fetch("/api/user")
      const result = await res.json()
      setContainer(result)
    }
    getData()
  },[])

  return (
    <section className=" bg-[#0c162c]">
        <Table Datas={container} />
        <Pagination />
    </section>
  )
}
export default UserPage