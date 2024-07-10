import React from 'react'

function Button({label,iconUrl, backgroundColor, borderColor,textColor,fullwidth}) {
  return (
    <button className={`flex justify-center items-center  gap-2 px-5 py-2 rounded-full font-semibold text-xl 
    ${
      backgroundColor?
      `${backgroundColor} ${textColor} ${borderColor}`
      : 
      'bg-orange-600 text-white border border-gray-500'}
        ${fullwidth&& 'w-full'} `}>
      {label}

     { iconUrl && <img src={iconUrl} 
      alt="arrow right icon"
      className='ml-1  w-5   rounded-full ' />}
    </button>
      
    
  )
}

export default Button
