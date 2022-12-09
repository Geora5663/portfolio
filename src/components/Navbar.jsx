import { useState } from 'react'

import { close, logo, menu, resume } from '../assets';
import { navLinks } from '../constants';

const Navbar = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <nav className="mx-auto w-full flex py-6 justify-between items-center navbar">
      <img src={logo} alt="hoobank" className="w-auto h-[64px]"/>

      <ul className="list-none sm:flex hidden justify-end items-center flex-1">
        {navLinks.map((nav, index) => (
          <li 
            key={nav.id}
            className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'} text-white` } 
          >
            <a href={`#${nav.id}`} className='text-cream'>
              {nav.title}
            </a>  
          </li>
          
        ))}
        <li><a href={resume} className='font-poppins text-primary py-[8px] px-[25px] rounded-[10px] ml-[50px] bg-secondary' download>Resume</a></li>
      </ul>

      <div className="sm:hidden flex flex-1 justify-end items-center">
        <img 
          src={toggle ? close : menu} 
          alt="menu"
          className="w-[28px] h-28px object-contain" 
          onClick={() => setToggle((prev) => !prev)}
        />

        <div className={`${toggle ? 'flex' : 'hidden'} p-6 bg-gray absolute top-[100px] right-0 left-0  my-2 min-w-[100%] sidebar z-50`}>
          <ul className="list-none flex flex-col justify-end items-center flex-1">
            {navLinks.map((nav, index) => (
              <li 
                key={nav.id}
                className={`font-poppins font-normal cursor-pointer text-[16px] ${index === navLinks.length - 1 ? 'mb-0' : 'mb-4'} text-white` } 
              >
                <a href={`#${nav.id}`} className='text-white'>
                  {nav.title}
                </a>  
              </li>
            ))}
            <li><a href="#" className='font-poppins text-primary py-[8px] px-[25px] rounded-[10px] mt-[20px] min-w-[100%] block bg-secondary'>Resume</a></li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navbar