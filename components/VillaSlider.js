'use client';

import Link from 'next/link';

import { useState } from 'react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Swiper, SwiperSlide } from 'swiper/react';
// import { Navigation, Pagination } from 'swiper';

import { AiOutlineRightCircle } from "react-icons/ai";


import { Navigation, Pagination } from 'swiper/modules';
import Image from 'next/image';

export default function VillaSlider() {

const [hoveredIndex, setHoveredIndex] = useState(null); // Track the hovered slide


  const villas = [
    {
      active: true,
      title: "Mint Villa",
      id: "mintvilla",
      cover: "/villa-images/Mint Villa-21.webp",
      para: "Mint Villa is a perfect getaway designed for couples...",
      comingsoon: "",
      slug:'mint-villa'
    },
    {
      active: false,
      title: "Salt Villa",
      id: "saltvilla",
      cover: "/villa-images/salt-villa/salt_villa_2.jpeg",
      para: "Salt Villa is a perfect getaway designed for couples...",
      comingsoon: "",
      slug:'salt-villa'
    },
    {
      active: false,
      title: "Shinju Villa",
      id: "pearlvilla",
      cover: "/pearlvilla_cardimg.png",
      para: "Pearl Villa is a perfect getaway designed for couples...",
      comingsoon: "Coming Soon",
      slug:'/'
    },
  ];

  return (
    <div className="slider-container">
      <Swiper
        slidesPerView={1.5}
        modules={[Navigation, Pagination]}
        navigation

        pagination={{ clickable: true }}
        breakpoints={{
        640: {
          slidesPerView: 1.5, // 1.5 slides on mobile
        },
        768: {
          slidesPerView: 3, // 3 slides on tablets and larger screens
        },
      }}
        loop={true}
      >
        {villas.map((villa, index) => (
          <SwiperSlide key={index} className="villa-slide overflow-hidden"
           onMouseEnter={() => setHoveredIndex(index)} 
          onMouseLeave={() => setHoveredIndex(null)}
          
          
          >

          <Link href={villa.slug}>
            <div className="image-container w-[full] aspect-[4/5]">
              <Image
               className={`object-cover transition-transform duration-[700ms] ease-in-out ${hoveredIndex === index ? 'scale-110' : 'scale-100'}`}
                src={villa.cover}
                alt={villa.title}
                fill
    
              />
              {/* Coming Soon Element */}
              {villa.comingsoon && (
                <div className="coming-soon">
                  <span className='font-headingFont uppercase'>{villa.comingsoon}</span>
                </div>
              )}
            </div>
            <div className="villa-info flex w-full items-center justify-center">
              <h2 className='text-4xl md:text-5xl font-headingFont'>{villa.title}</h2>
                <AiOutlineRightCircle
                className={`ml-2 transition-all duration-300 ease-in-out h-6 w-6 ${
                  hoveredIndex === index ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-2'
                }`}/>
            </div>
            </Link>
          </SwiperSlide>
        ))}

      </Swiper>
    </div>
  );
}
