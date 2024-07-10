import React from "react";
import Button, {} from '../components/Button'
function Subscribe() {
  return <section className="flex justify-center items-center gap-10 max-lg:flex-col"
  id="contact-us">
    <h2 className="font-bold bg-slate-200 p-2 rounded-lg shadow-xl text-4xl leading-[64px] font-palanquin 
       ">Signup For 
      <span className="text-orange-500"> Updates </span>
      & Newsletter
    </h2>
    <div className="lg:max-w-[40%] flex items-center gap-5 w-full sm:border sm:border-gray-500 rounded-full max-sm:flex-col p-2  ">
      <input type="text" 
      placeholder="subscribr@nike.com"
      className="input"/>
      <div className="flex max-sm:justify-end max-sm:w-full items-center">
      <Button
      label='Sign Up'
      fullwidth/>
      </div>
    </div>
    
    
     </section>
}

export default Subscribe;
