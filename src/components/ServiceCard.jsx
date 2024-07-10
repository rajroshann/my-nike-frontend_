import React from 'react'

function ServiceCard({ imgURL, label, subtext }) {
  return (
    <div className='sm:w-[350px] sm:min-w-[350] flex-1 w-full px-10 py-16 rounded-xl shadow-3xl bg-slate-200'>
      <div className=" bg-red-500 w-10 h-10 flex justify-center items-center rounded-full">
        <img src={imgURL} alt={label}
          width={24} height={24} 
          className='hover:scale-110 cursor-pointer' />
      </div>
      <h2 className='mt-4 text-2xl font-palanquin font-semibold leading-normal '>{label}</h2>
      <p className='mt-5 font-mono leading-normal text-slate-gray
      text-lg break-words'> {subtext} </p>

    </div>
  )
}

export default ServiceCard
