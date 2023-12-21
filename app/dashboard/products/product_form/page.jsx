"use client"
import Productform from '@/components/ui/Productform'
import React from 'react'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

function ProductForm() {
  const Router = useRouter()

  const[submitting, setSubmmiting] = useState(false)

  const [title, setTitle] = useState();
  const [price, setPrice] = useState()
  const [color, setColor] = useState();
  const [stock, setStock] = useState();
  const [desc, setDesc] = useState();
  const [category,setCategory] = useState();
  const [size,setSize] = useState();
  const [file, setFile] = useState()

  const handleSubmit = async (e) =>{
    e.preventDefault()
        
    setSubmmiting(true)

    try{
      const response = await fetch("/api/product/new",{
        method:"POST",
        body:JSON.stringify({
          title:title,
          price:price,
          stok:stock,
          size:size,
          file:file,
          color:color,
          desc:desc,
          category:category
        })
      })

      
      if(response.ok){
        Router.push("/dashboard/products")
      }

    }catch(error){
      console.log(error)
    }
  }
  return (
    <main>
      <Productform
       title={title}
       price={price}
       color={color}
       stock={stock}
       desc={desc}
       category={category}
       size={size}
       file={file}
       setFile={setFile}
       setTitle={setTitle}
       setPrice={setPrice}
       setColor={setColor}
       setStock={setStock}
       setCategory={setCategory}
       setDesc={setDesc}
       setSize={setSize}
       handleSubmit={handleSubmit}/>
    </main>
  )
}

export default ProductForm