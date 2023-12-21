import React from 'react'
import Image from 'next/image'

function UserPage() {
  return (
    <section className="w-full grid grid-cols-12 bg-[#0c162c]">
        <div className="col-span-4 mx-5 my-3  bg-[#182237] px-5 pt-5 pb-8 h-1/2 rounded-md">
            <Image src="/images/avater.png"  width={250} height={40} className="rounded-md"></Image>
            <h2 className="mt-1">Hello {}</h2>
        </div>

        <div className="col-span-8 bg-[#182237] text-sm">
            <form className="flex flex-col py-4 px-5">
                <label className="font-bold my-1">Username</label>
                <input className ="bg-[#0c162c] w-full px-3 border border-slate-400 py-4" type="text" placeholder="hello" />

                <label className="font-bold my-1">Email</label>
                <input className ="bg-[#0c162c] border border-slate-400 w-full px-3 py-4" type="text" placeholder="hello" />

                <label className="font-bold my-1">Password</label>
                <input className ="bg-[#0c162c] border border-slate-400 w-full px-3  py-4" type="text" placeholder="hello" />

                <label className="font-bold my-1">Phone</label>
                <input className ="bg-[#0c162c] border border-slate-400 w-full px-3  py-4" type="text" placeholder="hello" />

                <label className="font-bold my-1">Address</label>
                <textarea col={20} row={10} className ="bg-[#0c162c] border border-slate-400 w-full px-3 py-4" placeholder="" />
                
                <label className="font-bold my-1">Is Admin</label>
                <select className="bg-[#0c162c] border border-slate-400 px-3 py-4 w-full" name="isActive" id="isActive">
                    <option value={true}>Yes</option>
                    <option value={false}>No</option>
                </select>

                <label className="font-bold my-1">Is Active</label>
                <select className="bg-[#0c162c] border border-slate-400 py-4  px-3 w-full">
                    <option value={true}>Yes </option>
                    <option value={false}>No</option>
                </select>
                <button className="w-full font-bold bg-teal-600 py-3 mt-2">
                    submit
                </button>
            </form>
        </div>
    </section>
  )
}

export default UserPage