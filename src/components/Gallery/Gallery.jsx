import React, { useState, useEffect } from 'react';
import { GalleryPics, GalleryVideos } from '../utils/Datas';

function Gallery() {
  const [activeLink, setActiveLink] = useState(0);
  const [images, setImages] = useState([]);
  const [videos, setVideos] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const choose = ["Photo", "Videos"];

  useEffect(() => {
    const loadContent = async () => {
      setIsLoading(true);

      if (activeLink === 0) {
        await new Promise(resolve => setTimeout(resolve, 500)); 
        setImages(GalleryPics);
      } else {
        // Simulating an async loading of videos
        await new Promise(resolve => setTimeout(resolve, 500)); 
        setVideos(GalleryVideos);
      }

      setIsLoading(false);
    };

    loadContent();
  }, [activeLink]);

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

      <section className='px-5 lg:px-20'>
        <section className='flex justify-center flex-wrap gap-10 lg:gap-5 mt-10'>
          {isLoading ? (
            <p>Loading...</p>
          ) : (
            <>
              {activeLink === 0 &&
                images.map((gal, index) => (
                  <div key={index} className='lg:w-[32%]'>
                    <img src={gal} alt={`Gallery ${index + 1}`} loading="lazy" />
                  </div>
                ))}
              {activeLink === 1 &&
                videos.map((link, index) => (
                  <div key={index} className='w-full lg:w-[32%]'>
                    <iframe
                      width="100%"
                      height="auto"
                      src={link}
                      title={`YouTube video ${index + 1}`}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      loading="lazy"
                    ></iframe>
                  </div>
                ))}
            </>
          )}
        </section>
      </section>
    </div>
  );
}

export default Gallery;

