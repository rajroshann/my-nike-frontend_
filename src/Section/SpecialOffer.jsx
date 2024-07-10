import React from 'react'
import { offer } from '../assets/images'
import Button from '../components/Button'
import { arrowRight } from '../assets/icons'

function SpecialOffer() {
  return (
    <section className=' flex  justify-center items-center max-xl:flex-col-reverse gap-10 '>
      <div className="flex-1 hover:scale-110 cursor-pointer">
        <img src={offer}
          width={773}
          height={687}
          className='object-contain w-full' />
      </div>
      <div className="flex flex-col shadow-x   flex-1 justify-center items-center mt-2 ">

        <h2 className="  text-4xl  font-bold shadow-3xl bg-slate-200 rounded-lg  capitalize lg:max-w-lg  font-palanquin p-2">

          <span className='text-orange-600   inline-block'>
          Special 
          </span>

          <span className=' text-gray-600   inline-block'>
              offer 
          </span>

        </h2>
        <p className=" mt-9 shadow-3xl  p-2 mb-3 bg-slate-50 text-lg font-thin text-pink-500 lg:max-w-lg 
    ">Discover stylish NIKE Arrivals,Quality comfort,and innovation for your active life  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa similique reiciendis consequatur ut voluptatum fugit, accusantium nisi voluptatibus at incidunt sapiente sequi tempore obcaecati numquam voluptatem iusto distinctio blanditiis corporis!</p>
        <p className='lg:max-w-lg mt-4 mb-6 font-palanquin font-semibold text-xl shadow-3xl p-2 rounded-xl leading-normal '>
          our dedication to detail and excellence ensures your
          satisfaction Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae culpa tempore autem reprehenderit, suscipit hic molestiae, quidem nobis deleniti fugit eaque dolore a modi sunt animi ducimus quo, dolorem quit</p>

        <div className=" font-palanquin flex flex-wrap mt-5  gap-3">
          <Button label="ShopNow" 
          iconUrl={arrowRight}
          />
          <Button 
          
          label="Learn More"
          backgroundColor='bg-white '
          borderColor='border border-slate-gray'
          textColor='text-slate-gray'
          //shadow='shadow-3xl'
          
          />
        </div>
      </div>





    </section>
  )
}

export default SpecialOffer
