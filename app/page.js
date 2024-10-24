'use client';

import Image from "next/image";
import { motion } from "framer-motion";
import VillaSlider from "@/components/VillaSlider";
import MediaSlider from "@/components/MediaSlider";


const amenities = [
  { title: "Free Wifi Access", img: "/amenities/wifi.svg" },
  { title: "Compound Parking", img: "/amenities/parking.svg" },
  { title: "Private Pool", img: "/amenities/swimming.svg" },
  { title: "Pet Friendly", img: "/amenities/pet-friendly.svg" },
  { title: "Pickup Service", img: "/amenities/pickup.svg" },
  { title: "Luggage Dropoff", img: "/amenities/luggage.svg" },
  { title: "Long Term Staycation", img: "/amenities/longterm.svg" },
  { title: "Cleaning Service", img: "/amenities/cleaning.svg" },
];




export default function Home() {
  return (
    <main className="font-bodyFont">

      <section className="hero-section relative z-10 flex flex-col items-center bg-hero-bg bg-cover bg-center min-h-[90vh]">

       <div className="absolute inset-0 bg-black opacity-30 z-10"></div>



      <h1 className="font-headingFont text-3xl text-center z-30 text-llcream md:text-5xl m-auto">An intimate stay crafted by passionate travellers.</h1>

      <div id="block-search">
  <div id="be-search-form" className="be-container">
    <a href="https://exely.com/" rel="nofollow" target="_blank">Hotel management software</a>
  </div>
</div>

       <div className="w-[50px] h-[50px] absolute z-10 bottom-[20%]">
          <Image alt="logo" width={100} height={100} src="/logo.svg" />
        </div>

          <div className="absolute bottom-0 z-10 translate-y-[50%]">
           <div className="arrow flex flex-col justify-center items-center">
            <motion.div
              initial={{ y: [0] }}
              animate={{ y: [0, 20] }}
              transition={{
                delay: "3.5",
                ease: "easeInOut",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: "0",
                duration: 2.5,
              }}
              className="w-[20px] h-[90px]"
            >
              <Image fill alt="arrow" className="" src={"/hero_arrow.svg"}></Image>
            </motion.div>

            <motion.div
              initial={{ y: [0] }}
              animate={{ y: [0, -30] }}
              transition={{
                delay: "3.5",
                repeat: Infinity,
                repeatType: "reverse",
                repeatDelay: "0",
                duration: 2.5,
              }}
              className="circle w-[121px] h-[121px]"
            >
              <Image alt="circle" className="circle" fill src="/circle.svg"></Image>
            </motion.div>
          </div>
        </div>


      </section>

      <section className="about-us px-5  py-10 sm:py-14 xl:py-20">
              
              <div className="grid gap-y-10 md:gap-10 xl:gap-x-20 md:grid-cols-3 max-w-screen-xl m-auto">
                    <h1 className="text-4xl sm:mr-[10%] md:col-span-2 md:text-6xl font-headingFont">Welcome to the most authentic home, where exquisite craftsmanship meets the quality of
 your life </h1>

              <Image className="w-full" alt='craft-vase' width={300} height={300} src={'/about-us-img.webp'}/>

          
              <h3 className="text-sm sm:mr-[10%] md:col-span-2 md:max-w-[400px] md:ml-auto ">We are the only property management company based in Penang, Malaysia that focuses on luxurious interior designs and intimate experiences to provide unparalleled comfort for your close friends and loved ones. </h3>

              <h3 className="text-sm">
                Double L Villa, inspired by our founder&apos;s global travels and hospitality experiences, is crafted to provide the perfect staycation with a focus on creating memorable, intimate moments. Her passion for exceptional hospitality shines through in every detail, ensuring a stay that feels both indulgent and personal, making it a truly unique retreat.
              </h3>
              </div>

      </section>

          <section className="villa-slider-section  bg-gradient-to-b from-white to-llbeige py-10 md:py-14 xl:py-20">

        <div className="max-w-screen-xl m-auto px-5">
          <h1 className="text-5xl md:text-6xl font-headingFont mb-5">Our Villas</h1>
            <VillaSlider/>
        </div>

      
        </section>


        <section className="px-5 py-10 md:py-14 xl:py-20">

        <div className="sm:flex gap-10 max-w-screen-xl m-auto">
              <div className="basis-1/2 flex flex-col justify-center gap-8 mb-5">
                <h1 className="text-5xl md:text-6xl font-headingFont">Exclusive Services</h1>
                <h4 className="text-sm" >Double L Villa offers exclusive services designed to perfect every moment of your experience.</h4>
                <div className="grid grid-cols-4 gap-5">
                   {amenities.map((amenity) => (
              <div key={amenity.title} className="font-headingFont text-center">
                <Image className="m-auto w-[40px] h-[40px]" alt={amenity.img} width={100} height={100} src={amenity.img} />

                <p
                  className={`font-headingFont text-[16px] leading-[26px] tracking-tight`}
                >
                  {amenity.title}
                </p>
              </div>
            ))}
                </div>

              </div>

              <Image className="basis-1/2 max-h-[600px] object-cover" alt="high-quality-soap" width={600} height={600} src="/villa-images/Mint Villa-25.webp"/>

</div>

        </section>

        <section className="villa-slider-section  bg-gradient-to-b from-white to-llbeige py-10 md:py-14 xl:py-20 px-5">

        <div className="max-w-screen-xl m-auto">

            <div className="border-solid border-[1px] gap-5 border-black flex justify-center rounded-full items-center mb-5 m-auto w-fit py-1 px-8">
              <Image alt="star" width={31} height={31} src="/star-icon.svg"/>
              <h3 className="font-headingFont sm:text-2xl">Hear Our Guests Experience</h3>
            </div>


            <h1 className="font-headingFont text-2xl mb-5 max-w-screen-lg m-auto md:text-5xl text-center italic">
              “The host is very responsive. The house is beautifully designed, built and decorated. The quality of furnitures, and amenities are all top notch. Is a good location for a gathering. I would give a score of 9/10 for this stay.”
            </h1>

            <h1 className="font-headingFont text-3xl xl:text-5xl text-center italic">-Wilson</h1>

        </div>

        <div className="py-10 md:py-14 xl:py-20">

            <MediaSlider/>
            </div>



        </section>

        <section className="featured-in bg-featured-bg bg-cover min-h-[90vh] py-10 md:py-20 bg-center overflow-hidden relative px-5 md:px-14">
          <h1 className="absolute text-6xl sm:text-[230px] inline-block font-headingFont text-white text-nowrap">Proudly Featured In</h1>

          <Image className="w-[300px] absolute left-[50%] translate-x-[-50%] translate-y-[20%] z-10 object-cover h-[470px]" alt="goingplaces" width={500} height={500} src={'/magazine.webp'}/>


        </section>


        <section className="promo-section md:min-h-[70vh] relative  ">

   
          <Image className="md:top-[5%] w-[12%] aspect-square object-cover hidden md:block absolute" alt='balinese' width={300} height={300} src={'/villa-images/Mint Villa-7.webp'}/>

            <Image className="hidden w-[15%] aspect-square object-cover md:bottom-0 md:left-[5%] md:block absolute" alt="zen-garden" width={300} height={300} src={'/villa-images/Mint Villa-1.webp'}/>


        <div className="px-5 py-10  md:py-0 md:absolute max-w-[500px] md:translate-y-[50%] md:left-[50%] md:translate-x-[-50%]">
                    <h1 className="text-6xl font-headingFont mb-5">Early Bird & 
Last-Minute Deals!</h1>

<h3 className="font-bodyFont text-sm">Indulge in a private getaway with exclusive experience like a private pool and a fully equipped kitchen.
Book early for <span className="text-2xl">5% off</span>, or seize the moment with limited-time last-minute savings.</h3>
        </div>

   
           <Image className="w-[10%] top-[3%] hidden md:right-0 aspect-square object-cover md:block absolute" alt='pantry' width={300} height={300} src={'/villa-images/Mint Villa-14.webp'}/>

            <Image className="w-[20%] md:bottom-[5%] md:right-[2%] hidden md:block absolute" alt="indoor-jacuzzi" width={300} height={300} src={'/villa-images/Mint Villa-23.webp'}/>


          
        </section>



    </main>
  );
}
