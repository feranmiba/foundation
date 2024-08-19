import React from 'react'
import Another from '../utils/image/gala.png'
import { GalaNite, CEO, Gallery6, Supporters } from '../utils/Datas'

function Gala() {
  return (
    <div>

    <section className='px-5 lg:px-20'>
        <section className='flex justify-between flex-wrap-reverse lg:flex-nowrap py-10'>
        <div className='lg:mt-5 mt-10 lg:w-[40%]'>
        <h1 className='text-4xl text-black'>14th Annual AFFI Awards  Banquet Yatch Cruise 2024</h1>
        <p className='text-[#5E6068] py-5'>Experience a distinctive setting that combines business and leisure with global personalities as well as networking etc.</p>
        <a className='px-8 py-3 bg-[#D35515] font-bold rounded-full mt-5' href='https://www.eventbrite.com/e/14th-annual-affi-awards-dinner-banquet-yatch-cruise-2024-tickets-916503886797?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl' >Buy Ticket</a>
        </div>

        <div className=' shadow-2xl lg:w-[45%]'>
        <img src={Another} alt='hja' />
        </div>
        
        
        </section> 
    </section>



    <section className='bg-[#F2F2F6] mt-10'>
    
    <section className='px-5 lg:px-20 py-14'>

    <div className='text-center text-black'>
    <h1 className='text-4xl '>Event Details</h1>
    <p className='py-10'>Tickets are limited, so book now to secure your spot on board.</p>
    </div>


    <section className='flex flex-wrap justify-center lg:justify-between'>
    {GalaNite.map((gala) => (
      <div
        className='flex justify-center items-center flex-col text-center w-full sm:w-[80%] lg:w-[32%] mt-10 lg:mt-0'
        key={gala.id}
      >
        <p className='w-[50px] h-[50px] border rounded-full bg-[#D35515] flex justify-center items-center'>
          {gala.icon}
        </p>
        <p className='text-black mt-5 text-xl mb-5'>{gala.title}</p>
        <ol>
          {gala.detail.map((det, index) => (
            <li className='text-[#3F4045] mt-2' key={index}>
              {det}
            </li>
          ))}
        </ol>
      </div>
    ))}
  </section>
  


         <section className='flex lg:justify-start px-14 gap-5 lg:gap-0 lg:space-x-44 lg:flex-nowrap flex-wrap mt-10 justify-center'>
         <div className='border px-7 py-5 bg-black text-white rounded-xl justify-center'>
         <p className='font-bold'>Dress Code</p>
         <p className='mt-2 text-sm'># African Wear</p>
         </div>

         <div className='mt-6'>
         <a className='font-bold border px-14 py-3 bg-[#D35515] text-white rounded-3xl self-start lg:mt-5' href='https://www.eventbrite.com/e/14th-annual-affi-awards-dinner-banquet-yatch-cruise-2024-tickets-916503886797?utm-campaign=social&utm-content=attendeeshare&utm-medium=discovery&utm-term=listing&utm-source=cp&aff=ebdsshcopyurl'>Buy Ticket</a>
         </div>

         </section>




    </section>
    
    </section>


    <section className='px-5 lg:px-20 py-14'>

    <div className='flex flex-col text-center justify-center items-center'>
  <p> <img src={Gallery6} alt='ceo' className='rounded-b-full' /></p> 
    <h1 className='mt-5 text-black text-3xl'>Ambassador Dr. Arit Fuller Harris</h1> 
    <p className='text-[#7D808B] mt-3'>CEO / Founder</p>
    </div>



    </section>


    <section className='px-5 lg:px-20 py-14 text-black'>
    <div className='text-center'>
    <p className='text-4xl'>Supporters</p>
    </div>


    <section className='flex flex-wrap justify-center lg:justify-between '>

   {Supporters.map((support) => ( <div className='flex-col flex lg:w-[32%] justify-center text-center items-center mt-10' key={support.id}>
    <img src={support.img} alt='jhhb'/>

    <p className='text-2xl mt-5'>{support.name}</p>
    <p className='mt-1 text-[#7D808B]'>{support.title}</p>
    </div>))}
    
    </section>
    
    
    </section>
      
    </div>
  )
}

export default Gala
