import React from 'react'

function ProductForm() {
  return (
    <section className="bg-[#182237] mx-4">
      <form className="w-full mx-3 my-3 bg-[#182237] outline-none">
        <section className="w-full">
          <div className="flex md:justify-between md:space-x-5 my-3 mx-3 flex-col md:flex-row gap-2 items-center md:items-start text-sm">
            <input type="text" placeholder='title' className="bg-[#0c162c] py-4 rounded-md px-3 w-96 mt-2 md:mt-0" />

          <select className="bg-[#0c162c] w-96 px-3 rounded-md py-4">
            <option value="general">Choose a Category</option>
            <option value="Electronic">Electronic</option>
            <option value="Phone">Phone</option>
            <option value="Laptop">Laptop</option>
            <option value="Montor">Montor</option>
          </select>
          </div>
          
          <div className="flex md:justify-between md:space-x-5 md:my-3 md:mx-3 flex-col md:flex-row items-center gap-2 text-sm">
            <input type="number" placeholder='price'className="bg-[#0c162c]  py-4 rounded-md px-3 w-96"/>

          <input type="number" placeholder='stock' className="bg-[#0c162c] py-4 rounded-md px-3 w-96" />
          </div>
          

          <div className="flex md:justify-between md:space-x-5 md:my-3 md:mx-3 flex-col mt-2 md:mt-0 items-center gap-2 md:flex-row text-sm">
            <input type="text"  placeholder='color'  className="bg-[#0c162c]  py-4 rounded-md px-3 w-96"/>

            <select className="bg-[#0c162c] py-4 rounded-md px-3 w-96">
              <option value="general">Choose Your Size </option>
              <option value="SM">SM </option>
              <option value="MD">MD</option>
              <option value="LG">LG </option>
              <option value="XL">XL </option>
              <option value="SM">XXL </option>
            </select>
          </div>
        </section>
        <div className="flex flex-col items-center justify-center">
          <textarea name="" id="" rows="10" placeholder='desc' className="py-3 bg-[#0c162c] md:w-full px-3 md:mx-3 rounded-md mt-3 md:mt-0 w-96"/>

          <button type="submit" className="md:w-full bg-teal-500 py-2 md:mx-3 rounded-md font-bold hover:bg-slate-400 hover:text-black w-96 mt-3">Submit</button>
        </div>
        
      </form>
    </section>
  )
}

export default ProductForm