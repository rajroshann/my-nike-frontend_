import React from "react";
import { footerLogo } from '../assets/images'
import { footerLinks, socialMedia } from "../constants";
import { copyrightSign } from "../assets/icons";

function Footer() {
  return <footer id="">
    <div className=" flex justify-between items-start gap-20 flex-wrap max-lg:flex-col"> 
      <div className="flex flex-col items-start">
        <a href="/">
          <img src={footerLogo} alt="footer logo"
            width={150}
            height={46}  className="hover:bg-green-700 hover:rounded-full" />
        </a>
        <p className="text-white-400 mt-6 leading-7 text-base font-montserrat sm:max-w-sm">get shoe early for new term at your nearest Nike store. 
           find your perfect size in store .Get Rewards </p>
           <div className=" flex gap-5 items-center mt-5">
            {socialMedia.map((icon)=>(
              <div className=" bg-slate-50 w-12 h-12 flex justify-center items-center rounded-full hover:bg-slate-400 hover:scale-125 ">
                <img src={icon.src} alt={icon.alt}
                width={24}
                height={24} />
              </div>
            ) )}
           </div>

      </div>
      <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
        {footerLinks.map((section) => (
          <div key={section}>
             <h3 className="text-white text-2xl font-medium font-montserrat mb-5 leading-normal hover:scale-110 hover:text-slate-700">
              {section.title}
             </h3>
             <ul>
              {section.links.map((link)=>
              <li className="text-white-400 mt-2 text-base leading-normal hover:text-gray-400 font-montserrat cursor-pointer"
              key={link.name}>
                <a href="">{link.name}</a>
              </li> )}
             </ul>

          </div>
        ))}
      </div>

    </div>
    <div className=" mt-20  text-white-400 flex justify-start  font-montserrat cursor-pointer max-sm:flex-col max-sm:items-center">
      <div className=" flex flex-1 gap-2 cursor-pointer justify-start items-center">
        <img src={copyrightSign} alt="copy right
        "
        width={24}
        height={24} 
        className="m-0 rounded-full"/>
        <p>copyright. All Right Reserved</p>
      </div>
      <div className=" font-montserrat cursor-pointer">
        Term  & Condition
      </div>
    </div>
  </footer>
}

export default Footer;
