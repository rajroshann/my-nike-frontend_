import React from 'react'
import { headerLogo } from '../assets/images';
import { hamburger } from '../assets/icons'

import { navLinks } from '../constants'

function Nav() {
  return (
    <header className='px-9 py-8 z-10    absolute  w-full '>
      <nav className=' flex  justify-between gap-2  items-center max-container'>
        <a href="/">
          <img
            src={headerLogo}
            alt="logo"

          />
        </a>
        <ul className='flex  py-2 bg-slate-600 rounded-xl flex-1  items-center  justify-center gap-16 max-lg:hidden '>
          {navLinks.map((item) =>
          (
            <li key={item.label}>
              <a
                href={item.href}
                className='text-lg
                  text-gray-300
                  '

              >
                {item.label}

              </a>

            </li>

          ))}
          <button className='px-3 py-1 rounded-lg bg-gray-300 hover:scale-110 cursor-pointer
          hover:bg-slate-400 '>Sign In</button>
        </ul>
        <div className=" hidden max-lg:block">
          <img src={hamburger}
            alt="hamburger"
            width={25}
          />
        </div>



      </nav>
    </header>
  )
}

export default Nav
