import {star} from '../assets/icons'
function PopularProductCard({ imgURL, name, price }) {
  return (
    <div className=" flex flex-1 flex-col  
              w-full max-sm:w-full 
    ">

      <img src={imgURL}
        alt={name}
        className=" bg-slate-300 shadow-3xl rounded-3xl w-[280px] h-[280px] hover:scale-110 cursor-pointer " />

        <div className=" mt-8 flex justify-start gap-2">
          <img src={star} 
          alt="rating"
          width={24} height={24}
          className='' />
          <p className='text-gray-600 text-xl'>4.5</p> 
        </div>
        <h2 className='font-palanquin font-semibold mt-3 text-gray-600 text-2xl'>{name}</h2>
        <p className='font-semibold text-indigo-700 mt-3'>{price}</p>
    </div>
  )
}

export default PopularProductCard
