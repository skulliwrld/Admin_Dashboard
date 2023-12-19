const Pagination = () =>{
    return (
      <div className="flex justify-between items-center px-4 py-3">
          <button className="bg-gray-300 text-black px-3 py-1 rounded-sm font-bold" disabled >Prev</button>
          <button className="bg-gray-300 text-black px-3 py-1 rounded-sm font-bold">Next</button>
      </div>
    )
  }

export default Pagination