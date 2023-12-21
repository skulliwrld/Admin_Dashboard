import React from 'react'

function LoginForm() {
  return (
    <section className="md:px-10  bg-[#182237] md:py-16 rounded-md">
        <h1 className="text-justify pb-6 font-bold text-xl">Login</h1>
        <form className=" flex flex-col items-center justify-center">
            <input type='text' placeholder='username' className="bg-[#0c162c] py-4 rounded-md px-3 w-96 mb-5" />
            <input type='password' placeholder='password' className="bg-[#0c162c] py-4 rounded-md px-3 w-96" />
            <button className="py-3 px-3 mt-3 w-96 bg-teal-600 text-white rounded-sm font-bold ">Login</button>
      </form>
    </section>
  )
}

export default LoginForm