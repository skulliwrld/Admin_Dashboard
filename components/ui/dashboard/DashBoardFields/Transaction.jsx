import React from 'react'
import Image from 'next/image'

function Transaction() {
  return (
    <section className='w-full px-2 py-2 bg-[#182237] mx-1'>
      <h2 className="font-bold text-xl text-white">Latest Transactions</h2>
      <table className="w-full items-center">
        <thead className="text-lg font-bold">
          <tr className="">
            <td>Name</td>
            <td>Status</td>
            <td>Date</td>
            <td>Amount</td>
          </tr>
        </thead>
        <tbody className=''>
          <tr className="items-center">
            <td className="flex space-x-2 p-2 ">
              <Image src="/images/avater.png" width={25} height={25} className="rounded-full"/>
              <span className='text-sm p-1'>Ikechi Joseph</span>
            </td>
            <td className="p-2">
              <span className="bg-gray-400 text-sm p-1 rounded-lg">pending</span>
            </td>
            <td className="p-2 text-sm">
              12.02.2023
            </td>
            <td className="p-2 text-sm">#3500</td>
          </tr>

          <tr>
            <td className='flex gap-2 p-2'>
              <Image src="/images/avater.png" width={25} height={25}className="rounded-full"/>
              <span className='text-sm p-1'>Ikechi Joseph</span>
            </td>
            <td className="p-2">
              <span className="bg-green-400 text-sm p-1 rounded-lg">done</span>
            </td>
            <td className="p-2 text-sm">
              12.02.2023
            </td>
            <td className="p-2 text-sm">#3500</td>
          </tr>

          <tr>
            <td className='flex gap-2 p-2'>
              <Image src="/images/avater.png"width={25} height={25}className="rounded-full"/>
              <span className='text-sm p-1'>Ikechi Joseph</span>
            </td>
            <td className="p-2">
              <span className='bg-red-400 text-sm p-1 rounded-lg'>cancel</span>
            </td>
            <td className="p-2 text-sm">
              12.02.2023
            </td>
            <td className="p-2 text-sm">#3500</td>
          </tr>

          <tr>
            <td className='flex gap-2 p-2'>
              <Image src="/images/avater.png" width={25} height={25}className="rounded-full"/>
              <span className='text-sm p-1'>Ikechi Joseph</span>
            </td>
            <td className="p-2">
              <span className='bg-green-400 text-sm p-1 rounded-lg'>done</span>
            </td>
            <td className="p-2 text-sm">
              12.02.2023
            </td>
            <td className="p-2 text-sm" >#3500</td>
          </tr>
        </tbody>
      </table>

    </section>
  )
}

export default Transaction