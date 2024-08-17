import React, { useState } from 'react';
import { FaChevronDown } from 'react-icons/fa';  // Import the dropdown icon
import { Success } from '../utils/Datas';

function Register() {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedEvent, setSelectedEvent] = useState('Select Type');
  const [selectedEvents, setSelectedEvents] = useState('Select Event');
  const [showModal, setShowModal] = useState(false);  // Modal state

  const events = ['Sponsor', 'Participant', 'Volunteer'];

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowModal(true);  // Show modal after registration
  };

  return (
    <div className='mt-16'>
      <div className='text-center text-3xl font-medium pt-14 pb-24 bg-[#D35515]'>
        <h1>Register for Events and Outreaches</h1>
        <p className='font-light text-sm mt-5'>
          The Arit Fuller Foundation is a non-profit organisation dedicated to empowering individuals.
        </p>
      </div>

      <section className='px-5 lg:px-52 transform -translate-y-14'>
        <form className='bg-white shadow-xl py-10 px-5 rounded-xl text-black' onSubmit={handleSubmit}>
          <section className='flex justify-between flex-wrap'>
            {/* First Name Field */}
            <div className='w-[45%]'>
              <label className='font-medium text-lg'>First Name</label>
              <p className='mt-3 border w-[100%] px-3 py-1 rounded-3xl'>
                <input type='text' placeholder='First name' className='w-[100%] outline-none' required />
              </p>
            </div>

            {/* Last Name Field */}
            <div className='w-[45%]'>
              <label className='font-medium text-lg'>Last Name</label>
              <p className='mt-3 border w-[100%] px-3 py-1 rounded-3xl'>
                <input type='text' placeholder='Last name' className='w-[100%] outline-none' required />
              </p>
            </div>

            {/* Email Field */}
            <div className='w-[45%] mt-8'>
              <label className='font-medium text-lg'>Email</label>
              <p className='mt-3 border w-[100%] px-3 py-1 rounded-3xl'>
                <input type='email' placeholder='Email address' className='w-[100%] outline-none' required />
              </p>
            </div>

            {/* Telephone Field */}
            <div className='w-[45%] mt-8'>
              <label className='font-medium text-lg'>Telephone</label>
              <p className='mt-3 border w-[100%] px-3 py-1 rounded-3xl'>
                <input type='text' placeholder='Telephone' className='w-[100%] outline-none' required />
              </p>
            </div>

            {/* Custom Dropdown for Event Selection */}
            <div className='w-[100%] mt-8 relative'>
              <label className='font-medium text-lg'>Select Type </label>
              <div
                className='mt-3 border w-[100%] px-3 py-2 rounded-3xl bg-white cursor-pointer flex items-center justify-between'
                onClick={() => setIsOpen(!isOpen)}
              >
                <span>{selectedEvent}</span>
                <FaChevronDown className='text-gray-500' />  {/* Dropdown Icon */}
              </div>

              {/* Dropdown Menu */}
              {isOpen && (
                <ul className='absolute w-full bg-white border mt-2 rounded-lg shadow-lg z-10'>
                  {events.map((event) => (
                    <li
                      key={event}
                      onClick={() => {
                        setSelectedEvent(event);
                        setIsOpen(false);
                      }}
                      className='p-2 hover:bg-red-500 hover:text-white cursor-pointer'
                    >
                      {event}
                    </li>
                  ))}
                </ul>
              )}
            </div>

            {/* Second Dropdown */}
            <div className='w-[100%] mt-8 relative'>
              <label className='font-medium text-lg'>Select Event</label>
              <div className='mt-3 border w-[100%] px-3 py-2 rounded-3xl bg-white cursor-pointer flex items-center justify-between'>
                <span>{selectedEvents}</span>
                <FaChevronDown className='text-gray-500' />  {/* Dropdown Icon */}
              </div>
            </div>
          </section>

          {/* Register Button */}
          <div className='flex justify-center text-center mt-10'>
            <button
              type='submit'
              className='border px-16 py-2 rounded-3xl bg-[#D35515] font-bold text-white'
            >
              Register
            </button>
          </div>
        </form>
      </section>

      {/* Success Modal */}
      {showModal && (
        <div className='fixed inset-0  flex justify-center items-center bg-black bg-opacity-50 z-50 text-black'>
          <div className='bg-white w-[70%] p-6 rounded-lg text-center flex flex-col justify-center items-center'>
          <p className='border flex justify-center items-center w-[200px] h-[200px] rounded-full'>
          <img src={Success} alt='kj' />
          </p>

            <h2 className='text-xl font-semibold'>You Have Successfully Registered</h2>
            <p className='mt-4'>The Arit Fuller Foundation was established in year (year) by Arit Fuller Harris with the vision of creating a better future for all.</p>
            <button
              className='mt-6 px-8 py-2 bg-[#D35515] text-white rounded-3xl font-bold'
              onClick={() => setShowModal(false)}
            >
              Done
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Register;

