import React from 'react'
import {products} from '../constants'
import PopularProductCard from '../components/PopularProductCard'

function PopularProduct() {
  return (
    <section id="products"
    className=" max-container
    max-sm:mt-12">
      <div className="flex flex-col justify-center gap-5 ">
       <h1 className='font-bold text-4xl bg-slate-300 rounded-full 
        p-3 shadow-3xl text-center font-palanquin'> Our 
        <span className=' bg-slate-200 shadow-3xl m-2 rounded-2xl text-green-600 hover:text-black hover:bg-blue-200'>  Popular   </span> Product</h1>
       <p className='font-montserrat 
        lg:max-w-lg font-semibold mt-4 text-gray-700'>  Experience our top quality products with more style and better quality</p>
        
      </div>

      <div className="mt-16 grid grid-cols-1 lg:grid-cols-4 sm:grid-cols-2 sm:gap-4 gap-14 md:grid-cols-3   ">
        {products.map((product)=> (
          <PopularProductCard key = 
          {product.name} {...product} />
        ))}
        
       
       
      </div>
    

    

    </section>
  )
}

export default PopularProduct
