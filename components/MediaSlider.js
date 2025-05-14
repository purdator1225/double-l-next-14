'use client';

import { useState } from 'react';

import 'swiper/css';
// import 'swiper/css/navigation';
import 'swiper/css/pagination';

import ExportedImage from 'next-image-export-optimizer';



import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';


import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import Image from 'next/image';

import { useRef, useEffect } from 'react';

const MediaSlider = () => {

     const swiper2Ref = useRef(null); // Create a reference to access Swiper instance



  const mediaItems = [
    { type: 'video', src: '/testimonials/homie.mp4' },
    { type: 'video', src: '/testimonials/places.mp4' },
    { type: 'image', src: '/testimonials/couple1.webp' },
    { type: 'image', src: '/testimonials/girl-back.webp' },
      { type: 'image', src: '/testimonials/couple2.webp' },
         { type: 'image', src: '/testimonials/girl-back.webp' },

      
        // { type: 'video', src: '/testimonials/places.mp4' },
        //   { type: 'video', src: '/testimonials/homie.mp4' },
  
  ];

   // Function to handle slide change and control video playback
  const handleSlideChange = () => {
    const swiper = swiper2Ref.current.swiper; // Get the swiper instance
    const allVideos = document.querySelectorAll('video');

    // Pause all videos
    allVideos.forEach((video) => video.pause());

    // Play video on the active slide if it's a video
    const activeSlide = swiper.slides[swiper.activeIndex];
    const activeVideo = activeSlide.querySelector('video');
    if (activeVideo) {
      activeVideo.play();
    }
  };

  useEffect(() => {
    const swiperInstance = swiper2Ref.current.swiper;

    // Attach the slide change event when component mounts
    swiperInstance.on('slideChange', handleSlideChange);

    // Clean up the event listener when component unmounts
    return () => {
      swiperInstance.off('slideChange', handleSlideChange);
    };
  }, []);

  return (
    <Swiper
        ref={swiper2Ref}
        direction='horizontal'
      modules={[Navigation, Autoplay,Pagination]}
      spaceBetween={30}
     // Show 4 slides on desktop
     slidesPerView={2}
      autoplay={{ delay: 3000, disableOnInteraction: false }} // Autoplay settings
      centeredSlides={true}
      navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        }}
    
    //  loopAdditionalSlides= {10}
      loop={true} // Infinite loop
      pagination={{ clickable: true }}
       // Enable next/prev buttons
      breakpoints={{
        640: {
          slidesPerView: 2, // 2 slides on mobile
          spaceBetween: 20,
        },
        1024: {
          slidesPerView: 4, // 4 slides on larger screens
          spaceBetween: 40,
        },
      }}
      draggable={true}
    >
      {mediaItems.map((item, index) => (
        <SwiperSlide className='m-auto' key={index}>
          {item.type === 'image' ? (
            <ExportedImage
                width={500}
                height={500}
              src={item.src}
              alt={`media-${index}`}
              style={{ width: '100%', height: 'auto' }}
            />
          ) : (
            <video
              src={item.src}
              controls={false}
              autoPlay
              muted
              playsInline
              loop
              style={{ width: '100%', height: 'auto' }}
            />
          )}
        </SwiperSlide>
      ))}

      <div className="swiper-button-prev w-[100px] h-[100px]">
        <ExportedImage className=' aspect-square' alt='left-arrow' width={100} height={100} src={'/ll-arrow-left.svg'}/>


      </div>
        <div className="swiper-button-next w-[100px] h-[100px]">
            <ExportedImage className='w-[100px] aspect-square' alt='right-arrow' width={100} height={100} src={'/ll-arrow-right.svg'}/>
        </div>
    </Swiper>
  );
};

export default MediaSlider;

