import React, { useState, useEffect } from 'react';
import { Logo, Nav } from '../utils/Datas'
import { NavLink } from 'react-router-dom'

const Navbar = () => {
  const [isFixed, setIsFixed] = useState(false);

  // Function to handle scroll event
  const handleScroll = () => {
    if (window.scrollY > 50) { 
      setIsFixed(true);
    } else {
      setIsFixed(false);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='hidden lg:block'>
    <section
      className={`px-20 py-3 shadow-lg bg-white w-[100%] ${isFixed ? 'fixed top-0 left-0 z-50' : 'relative'}`}
    >
      <section className='flex justify-between'>
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
  );
};

export default Navbar;



