import React from 'react'
import SearchAddComponent from '@/components/ui/dashboard/Remaining_Fields/SearchAdd'
import Pagination from '@/components/ui/dashboard/Remaining_Fields/Pagination'
import ProductTable from '@/components/ui/dashboard/Remaining_Fields/ProductTable'

function Product() {
  return (
    <section className=" bg-[#0c162c] w-full">
        <SearchAddComponent title="Product" url="/dashboard/products/product_form" />
        <ProductTable />
        <Pagination />
    </section>
  )
}

export default Product