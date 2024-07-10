import React from 'react'
import Button from '../components/Button'
import { arrowRight } from "../assets/icons";
import { shoe8 } from '../assets/images';

function SuperQualityproduct() {
  return (
    <section id='about-us'
      className='   flex justify-between items-center
      w-full max-coainter gap-10  max-lg:flex-col
      '
    >
      <div className="flex flex-col shadow-x   flex-1 justify-center items-center mt-2 ">

        <h2 className=" mt-2 text-4xl text-red-800 font-bold shadow-2xl bg-slate-300 rounded-lg  capitalize lg:max-w-lg  font-palanquin 
         p-2">
          we provide you
          <span className='text-orange-600   inline-block'>
            super
          </span>
          <span className=' text-orange-600 mt-2  inline-block'>
            quality
          </span>
          <br />
          <span className=" text-orange-600 mt-1 inline-block">NIKE </span>

          <span className=''> SHOE</span>

        </h2>
        <p className=" mt-9 shadow-3xl  p-2 mb-3 bg-slate-50 text-lg font-thin text-pink-500 lg:max-w-lg 
            ">Discover stylish NIKE Arrivals,Quality comfort,and innovation for your active life  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa similique reiciendis consequatur ut voluptatum fugit, accusantium nisi voluptatibus at incidunt sapiente sequi tempore obcaecati numquam voluptatem iusto distinctio blanditiis corporis!</p>
        <p className='lg:max-w-lg mt-4 mb-6 font-palanquin font-semibold text-2xl shadow-3xl p-2 rounded-xl '>
          our dedication to detail and excellence ensures your
          satisfaction</p>

        <div className="text-orange-700"> <Button label="view detail"/>
        </div>


      </div>
      <div className=" flex flex-1 justify-center items-center ">
        <img src={shoe8}
          alt="shoe8"
          width={570}
          height={522}
          className='object-contain hover:scale-110 cursor-pointer'
        />
      </div>


    </section>
  )
}

export default SuperQualityproduct
