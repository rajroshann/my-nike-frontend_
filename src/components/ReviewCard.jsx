import React from 'react'
import { star } from '../assets/icons'

function ReviewCard({customerName,imgURL,rating,feedback}) {
  return (
    <div className='flex flex-col justify-center items-center'>
      <img src={imgURL} 
      alt='customer'
      className='rounded-full object-cover w-[120px] h-[120px] '
      />
      <p className='mt-4 text-center max-w-sm '>{feedback}</p>
      <div className=" mt-2 flex justify-center items-center gap-2">
        <img src={star}
        width={24}
        height={24}
        className='m-0 object-contain'/>
        <p className='text-slate-400 mt-2'>{rating}</p>
      </div>
      <h2 className='text-2xl text-center font-palanquin font-semibold mt-3'>{customerName}</h2>
    </div>
  )
}

export default ReviewCard
