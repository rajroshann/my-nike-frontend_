import React from "react";
import { useState } from 'react';
import Button from "../components/Button";
import { arrowRight } from "../assets/icons";
import { shoes, statistics } from "../constants"
import { bigShoe1 } from "../assets/images"
import ShoeCard from "../components/ShoeCard";

function Hero() {
  const [bigShoeImg, setbigShoeImg] = useState(bigShoe1)

  return (
    <section
      id="home"
      className=" w-full
   min-h-screen flex flex-col xl:flex-row gap-10  max">

      <div className="   relativ xl:w-2/5 flex flex-col
    justify-center items-start pt-28  max-xl:px-9 ">
        <p className=" font-palanquin text-orange-700 shadow-3xl bg-slate-600 rounded-full p-2  text-3xl font-semibold  ">Our summer Collection</p>
        <h1 className="mt-10 z-10 text-8xl text-red-900 font-bold shadow-2xl bg-slate-400 rounded-lg max-sm:text-[72px] max-sm:leading[82]  font-palanquin">
          <span className=" xl:whitespace-nowrap relative z-10 pr-10 ">The New Arrival</span>
          <br />
          <span className=" text-orange-600 mt-2 inline-block">NIKE </span>

          shoes

        </h1>
        <p className=" mt-6 mb-14 text-lg font-thin text-pink-500 sm:max-w-sm">Discover stylish NIKE Arrivals,Quality comfort,and innovation for your active life</p>
        <Button label="shop now"
          iconUrl={arrowRight}
        />
        <div className=" flex justify-start items-start w-full mt-20 gap-16">
          {statistics.map((stat) => (
            <div key={stat.label} className="">
              <p className="font-palanquin text-6xl leading-7 ">{stat.value} </p>
              <p className="text-2xl font-bold text-gray-800">{stat.label} </p>
            </div>
          ))}

        </div>
      </div>
      <div className="  relative  flex-1 flex  justify-center items-center  
           bg-primary bg-cover bg-center bg-hero xl:min-h-screen
             max-xl:py-40 pr-3">

        <img src={bigShoeImg}
          alt="shoe collection "
          width={610}
          height={500}
          className="z-10  object-contain relative" />


        <div className=" flex  absolute gap-4 sm:gap-6 -bottom-[7%]
            sm:left-[10%] max-sm:px-6
        ">
          {shoes.map((shoe) =>
          (
            <div className=""
              key={shoe}>

              <ShoeCard
                imgURL={shoe}
                changeBigShoeImage={(shoe) => setbigShoeImg(shoe)}
                bigShoeImg={bigShoeImg}
                
              />
            </div>
          ))}

        </div>
      </div>




    </section>
  )
}

export default Hero;
