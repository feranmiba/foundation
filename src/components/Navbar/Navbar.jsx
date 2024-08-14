import React from 'react'
import { Logo, Nav } from '../utils/Datas'
import { NavLink } from 'react-router-dom'

function Navbar() {
  return (
    <div>

    <section className='px-20 py-3 shadow-2xl hidden md:block'>

    <section className='flex justify-between '>
    <div>
    <img src={Logo} alt="logo" />
    </div>

    <div className='flex justify-between gap-10 mt-5 text-black self-start'>
  {Nav.map((nav) => (
    <NavLink 
      key={nav.id} 
      to={nav.link !== "#" ? nav.link : ""} 
      className={({ isActive }) => 
        isActive && nav.link !== "#" 
        ? 'border-b-2 pb-1 border-black font-bold text-black' 
        : 'text-black'
      }
    >
      <p>{nav.navi}</p>
    </NavLink>
  ))}
</div>



    <div className='flex self-start mt-3'>
    <button className='px-8 py-3 bg-[#D35515] rounded-full'>Donate</button>
    </div>
    
    </section>
  
    </section>
    </div>
  )
}

export default Navbar
