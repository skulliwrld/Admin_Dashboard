import React from 'react'
import SearchAddComponent from '@/components/ui/dashboard/Remaining_Fields/SearchAdd'
import Pagination from '@/components/ui/dashboard/Remaining_Fields/Pagination'
import Table from '@/components/ui/dashboard/Remaining_Fields/Table'

function UserPage() {
  return (
    <section className=" bg-[#0c162c]">
        <SearchAddComponent title="User" url="/dashboard/users/user_form" />
        <Table />
        <Pagination />
    </section>
  )
}

export default UserPage