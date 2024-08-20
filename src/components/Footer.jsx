import React from 'react'
import { Logo } from './utils/Datas'
import { Nav } from './utils/Datas'
import { NavLink } from 'react-router-dom'
import Acree from './utils/image/accre.png'

function Footer() {

    const date = new Date()
    const currentYear = date.getFullYear()
  return (
    <div>


    <footer className='py-10  px-5 md:px-24 flex justify-between flex-wrap lg:flex-nowrap gap-10 lg:gap-0 bg-black'>



    <div className='flex flex-col gap-5 w-full lg:w-[25%] mt-5'>
    <div>
    <img src={Logo} alt='logo' />
    </div>
    <p className=' text-base'>The Arit Fuller Foundation is a non-profit organisation dedicated to empowering individuals and communities through education, healthcare, and economic empowerment initiatives.</p>
    </div>

    <div className='mt-10'>
    <p className='text-xl uppercase font-bold'>Quick Links</p>
    <div className='flex flex-col justify-between gap-2 mt-5 self-start'>
    {Nav.map((nav) => (
      <NavLink 
        key={nav.id} 
        to={nav.link !== "#" ? nav.link : ""} 
        className={({ isActive }) => 
                 isActive && nav.link !== "#"
          ? ' border-black font-bold' 
          : nav.navi === 'Programs' 
            ? 'line-through text-gray-400' 
            : ''
        }
      >
        <p>{nav.navi}</p>
      </NavLink>
    ))}
    <p>Donations</p>
  </div>
    </div>

    <div className='mt-10'>
    <p className='text-xl uppercase font-bold'>Social Media</p>
    <ul className='flex flex-col gap-3 mt-5 '>
    <li> <a href='https://web.facebook.com/profile.php?id=61564480465591 '>Facebook</a> </li>
    <li><a href='https://x.com/aritfuller'> Twitter </a> </li>
    <li> <a href='https://www.instagram.com/aritfuller_harrisfoundationinc?igsh=d2Q1a3pqN25wZmFr&utm_source=qr'>Instagram</a> </li>
    <li> <a href='https://m.youtube.com/@aritfullerfoundation4848'> Youtube</a></li>
    </ul>
    </div>

    <div className='mt-10'>
    <p className='text-xl uppercase font-bold'>CONTACT US</p>
    <ul className='flex flex-col gap-3 mt-5 '>
    <li>New York: (347) 526 3884</li>
    <li>Nigeria: +234 803 363 0509</li>
    <li>Nigeria: +234 816 926 7760</li>
    <li> <a href='mailto:info@aritfuller.org'>Email: info@aritfuller.org</a> </li>
    </ul>
    </div>

    </footer>

    <div className='px-5 lg:px-20 py-10 flex justify-center items-center gap-5 flex-col text-center font-space  border-t-[1px] bg-black border-[#545454]'>
    <p>
    <img src={Acree} alt='hdv' />
    </p>
    <p>
    © {currentYear} Arit Fuller-Harris Foundation Inc. All Rights Reserved
    </p>

    <p className='text-sm'>At Arit Fuller Foundation, we are dedicated to creating lasting change by empowering communities and improving lives. We guarantee that every project we undertake is guided by the principles of inclusivity, sustainability, and respect for the dignity of every individual.</p>

    </div>
      
    </div>
  )
}

export default Footer
