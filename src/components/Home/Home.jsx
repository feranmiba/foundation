import React from 'react'
import { Hero, Mission, Objective, Values, obj, Program, Promote, UpcomingGen, Support,lastProgram, Check } from '../utils/Datas'
import Register from './Register'

function Home() {
  return (
    <div>

    <section className='relative'>
    <div>
    <img src={Hero} alt='jkd' className='w-full h-screen object-cover' />
    </div> 

    <div className='absolute top-1/3 lg:left-[10%] lg:right-[10%] px-2 lg:px-20'>
    <div className='flex flex-col justify-center text-center items-center'>
    <h1 className='text-3xl lg:text-5xl font-medium'>Improving Lives.</h1>
    <h2 className='text-3xl lg:text-5xl font-medium mt-8'>Strengthening Communities.</h2>
    
    <button className='px-16 py-2 mt-8 rounded-3xl bg-[#D35515]'>Donate</button>
    </div>
    </div>
    </section>



    <section className='px-5 lg:px-20 mt-10 text-black'>
      <div className='text-center'>
        <h1 className='text-3xl mb-4'>About the Arit Fuller Foundation</h1>
        <p>The Arit Fuller Foundation was established in year (year) by Arit Fuller Harris with the vision of creating a better future for all. Our foundation is built on the principles of compassion, integrity, and service.  Our foundation is built on the principles of compassion, integrity, and service.  Our foundation is built on the principles of compassion, integrity, and service.</p>
      </div>

      <section className='flex flex-wrap lg:flex-nowrap justify-between mt-14 gap-5'>
        <div className='bg-[#F4D4C5] lg:w-[50%]  px-4 py-6 flex flex-col gap-4 rounded-lg'>
        <p className='w-[50px] h-[50px] border rounded-full flex justify-center items-center bg-[#D35515]'>
        <img src={Mission} alt='mission' />
        </p>
        <h1 className='font-bold'>Mission Statement</h1>

        <ul>
        <li>The Arit Fuller Foundation is a non-profit organisation dedicated to empowering individuals and communities through education, healthcare, and economic empowerment initiatives.</li>
        </ul>
        
        </div>


        <div className='lg:w-[50%] bg-[#f4d4c5] flex flex-col gap-4  px-4 py-6 rounded-lg'>
        <p className='w-[50px] h-[50px] border rounded-full flex justify-center items-center bg-[#D35515]'>
        <img src={Values} alt='mission' />
        </p>

        <h1 className='font-bold'>Values</h1>

        <ul className='flex flex-col gap-2'>
        <li>Compassion: We care deeply about the well-being of others.</li>
        <li> Integrity: We operate with transparency.</li>
        <li>Service: We are committed to making a positive impact.</li>
        </ul>
        </div>
      
      
      </section>




    </section>





    <section className='px-5 lg:px-20 mt-16 text-black'>

    <section className='flex gap-5 justify-between flex-wrap lg:flex-nowrap'>
      <div>
      <img src={Objective} alt='obj' className='lg:h-[100vh]' />
      </div>


      <section className=' lg:w-[60%] mt-5'>
      <h1 className='font-medium text-3xl mb-6'>Our Objectives</h1>
      <section className='flex-wrap flex  gap-5 '>
      {obj.map((objs) => (  <div className='bg-[#F2F2F6] lg:w-[48%]  px-4 py-4 flex flex-col gap-4 rounded-lg'>
        <p>
        <img src={objs.img} alt='' />
        </p>
        <h1 className='font-bold'>{objs.title}</h1>
        <p className='text-[#5E6068] text-sm'>{objs.summ}</p>
        
        </div>))}
      </section>
      </section>
    
    
    </section>



    </section>


    <section className='mt-16'>
    <section className='relative'>
      <div>
        <img src={Program} alt='Program' className='w-full h-[70vh] lg:h-screen object-cover' />
      </div>
      <div className='text-black mt-10 lg:mt-0 lg:text-white lg:absolute top-10 lg:top-1/4 px-5 lg:px-20 w-full'>
        <div className='text-center'>
          <h1 className='font-medium text-2xl lg:text-3xl'>Programs and Initiatives</h1>
          <p className='my-5 text-xs lg:text-sm'>
            The Arit Fuller Foundation is a non-profit organisation dedicated to empowering individuals and communities through education, healthcare, and economic empowerment initiatives.
          </p>
        </div>
        <section className='flex flex-wrap lg:flex-nowrap justify-between gap-4 lg:gap-5'>
          {lastProgram.map((last) => (
            <div
              className='w-full lg:w-[25%] flex flex-col justify-center items-center text-center rounded-2xl px-5 py-5 bg-[#D35515] mb-4 lg:mb-0 text-white'
              key={last.id}
            >
              <p className='w-[40px] h-[40px] bg-white rounded-full flex justify-center items-center'>
                <img src={Check} alt='Check' />
              </p>
              <h1 className='mt-2 text-lg'>{last.title}</h1>
              <p className='text-xs lg:text-sm mt-3'>{last.summ}</p>
            </div>
          ))}
        </section>
      </div>
    </section>
  </section>
  


    <section className='px-5 lg:px-20 mt-16'>

        <section className='flex flex-wrap lg:flex-nowrap gap-10 justify-between'>
        <div className='lg:w-[60%] text-black mt-5'>
        <h1 className='font-medium text-3xl leading-[48px]' >Why Arit Fuller Foundation Has Promoted Empowerment</h1>
        <p className='text-[#5E6068] mt-2 leading-[24px]'>Arit Fuller Foundation has been able to reach out to some communities especially in Nigeria, Ghana and Togo, with humanitarian care in the areas of medical care, food and clothings. Many who were dropped out of school have been able to continue their education to get basic education.</p>
        <button className='border rounded-3xl mt-5 flex justify-center text-white px-16 bg-[#D35515] py-2'>Donate</button>
        </div>

        <div>
        <p> <img src={Promote} alt='why' /> </p>
        </div>

        </section>


    </section>



    <section className='lg:px-20 px-5 mt-16 text-black'>
    <div className='flex justify-center items-center flex-col'>
    <h1 className='font-medium text-3xl'>Upcoming Events and Outreaches</h1>
    <p className='mt-8'>The Arit Fuller Foundation was established in year (year) by Arit Fuller Harris with the vision of creating a better future for all.</p>
    </div>

    <section className='flex flex-wrap lg:flex-nowrap justify-between gap-5' >

  {UpcomingGen.map((up) => (  <div className='px-5 py-5 rounded-xl lg:w-[30%] shadow-lg mt-10' key={up.id}>
    <p>
    <img src={up.img} alt='hhs' />
    </p>
    <h1 className='leading-[28px] mt-3 text-[#3F4045] font-semibold'>{up.title}</h1>
    <p className='text-[#5E6068] text-sm mt-3'>{up.summ}</p>
    <p className='mt-5 text-sm'>
    <a href="#"> View more </a>
    </p>    
    </div>))}
    
    </section>


    </section>


    <Register />

    <section className='lg:px-20 px-5 mt-16 text-black'>
    <div className='flex justify-center items-start flex-col'>
    <h1 className='font-medium text-3xl'>Articles and Blog</h1>
    <p className='mt-8'>The Arit Fuller Foundation was established in year (year) by Arit Fuller Harris with the vision of creating a better future for all.</p>
    </div>

    <section className='flex flex-wrap lg:flex-nowrap justify-between gap-5' >

  {UpcomingGen.map((up) => (  <div className='px-5 py-5 rounded-xl lg:w-[30%] shadow-lg mt-10' key={up.id}>
    <p>
    <img src={up.img} alt='hhs' />
    </p>
    <h1 className='leading-[28px] mt-3 text-[#3F4045] font-semibold'>{up.title}</h1>
    <p className='text-[#5E6068] text-sm mt-3'>{up.summ}</p>
    <p className='mt-5 text-sm'>
    <a href="#"> View more </a>
    </p>    
    </div>))}
    
    </section>


    </section>




    <section className='mt-10'>
    <section className='relative'>
    <div>
    <img src={Support} alt='hjsh' className='w-full h-[70vh] object-cover'/>
    </div>

    <div className='absolute top-[32%] lg:right-1/4 lg:left-1/4'>
    <div className='flex flex-col justify-center items-center text-center gap-3'>
    <h1 className='font-medium text-3xl'>Support Our Cause</h1>
    <p>The Arit Fuller Foundation is a non-profit organisation dedicated to empowering individuals </p>
    <button
    className='px-16 py-2 rounded-3xl bg-[#D35515] font-bold text-white'
  >
    Register
  </button>
    </div>
    </div>
    
    </section>
    
    </section>



      
    </div>
  )
}

export default Home
