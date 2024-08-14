import React, { useState } from 'react';
import { GalleryPics } from '../utils/Datas'; 
import { GalleryVideos } from '../utils/Datas';

function Gallery() {
  const [activeLink, setActiveLink] = useState(0);

  const choose = ["Photo", "Videos"];

  return (
    <div>
      <div className='text-center text-4xl font-bold py-10 bg-[#D35515]'>
        <p>Gallery</p>
      </div>

      <div className='text-center flex justify-center gap-10 text-black mt-10'>
        {choose.map((ch, index) => (
          <p key={index}>
            <a
              href='#'
              onClick={() => setActiveLink(index)}
              className={activeLink === index ? 'border-b-2 border-[#D35515] pb-2 text-[#D35515] font-bold' : 'text-black font-bold'}
            >
              {ch}
            </a>
          </p>
        ))}
      </div>

      <section className='px-10 lg:px-20'>
        <section className='flex justify-center flex-wrap gap-10 lg:gap-5 mt-10'>
          {activeLink === 0 && 
            GalleryPics.map((gal, index) => (
              <div key={index} className='lg:w-[32%]'>
                <img src={gal} alt={`Gallery ${index + 1}`} />
              </div>
            ))
          }
          {activeLink === 1 && 
            GalleryVideos.map((link, index) => (
              <div key={index} className='w-full lg:w-[32%]'>
                <iframe
                  width="100%"
                  height="auto"
                  src={link}
                  title={`YouTube video ${index + 1}`}
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            ))
          }
        </section>
      </section>
    </div>
  );
}

export default Gallery;

