import React, { useState } from 'react'
import { Logo } from '../utils/Datas'
import { FaAlignLeft, FaTimes } from 'react-icons/fa'
import { AnimatePresence } from 'framer-motion'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'
import { Nav } from '../utils/Datas'

function MobileNav() {
    const [visible, setVisible] = useState(false)
 

    const toggleMenu = () => {
      setVisible(!visible)
    }


  return (
    <div className='px-5 py-5 md:hidden'>

    <section className='flex justify-between'>
    <div>
    <img src={Logo} alt='logo' />
    </div>



    <div className='mt-6'>
 <FaAlignLeft className='text-2xl text-black' onClick={toggleMenu} />
    </div>
    </section>



    <AnimatePresence>
    {visible && (
        <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
        className='fixed z-50 bg-white right-0 top-0 w-full lg:hidden'
      >
      <div className='px-10 w-full h-screen pt-10'>
      <div className='flex justify-between'>
      <div>
      <img src={Logo} alt='jhg' />
      </div>




      <p onClick={toggleMenu} className='duration-100 mt-5'>
        <FaTimes className='text-3xl text-black' />
      </p>
      </div>

      <section className='text-center flex flex-col gap-10'>

      <div className=' justify-center gap-5 mt-5 text-black text-center'>
      {Nav.map((nav) => (
        <NavLink 
          key={nav.id} 
          to={nav.link !== "#" ? nav.link : ""} 
          onClick={toggleMenu} 
          className={({ isActive }) => 
            isActive && nav.link !== "#" 
            ? 'border-b-2 pb-1 border-black font-bold text-black' 
              : 'text-black'
          }
        >
          <p className='mt-5 text-xl'>{nav.navi}</p>
        </NavLink>
      ))}
    </div>


    <div>
    <button className='px-8 py-3 bg-[#D35515] rounded-full'>Donate</button>
    </div>

      </section>


      </div>

    



      </motion.div>

    )}
    
    </AnimatePresence>
      
    </div>
  )
}

export default MobileNav
