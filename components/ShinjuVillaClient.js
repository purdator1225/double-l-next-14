"use client";

import FAQ from "@/components/FAQ";
import { amenities } from "@/data/amenities";
import { useState } from "react";
import ExportedImage from "next-image-export-optimizer";
import { motion } from "framer-motion";
import Link from "next/link";

const rooms = [
  {
    title: "Bedroom 1",
    bed: "King",
    additions: "Floor Mattress",
    roomImages: [
      "villa-images/shinju-villa/shinju-villa-bedroom-1-1.0.jpeg",
      "villa-images/shinju-villa/shinju-villa-bedroom-1-2.jpeg",
      "villa-images/shinju-villa/shinju-villa-bedroom-1-3.jpeg",
    ],
  },
  {
    title: "Bedroom 2",
    bed: "Queen",
    additions: "Floor Mattress",
    roomImages: [
      "villa-images/shinju-villa/shinju-villa-bedroom-2-1.jpeg",
      "villa-images/shinju-villa/shinju-villa-bedroom-2-2.jpeg",
      "villa-images/shinju-villa/shinju-villa-bedroom-2-3.jpeg",
    ],
  },
  {
    title: "Living Room",
    bed: "",
    roomImages: [
      "villa-images/shinju-villa/shinju-villa-living-1.jpeg",
      "villa-images/shinju-villa/shinju-villa-living-2.jpeg",
      "villa-images/shinju-villa/shinju-villa-living-3.jpeg",
    ],
  },
  {
    title: "Exteriors",
    bed: "",
    roomImages: [
      "villa-images/shinju-villa/shinju-villa-exterior-1.1.jpeg",
      "villa-images/shinju-villa/shinju-villa-exterior-2.jpeg",
      "villa-images/shinju-villa/shinju-villa-exterior-3.jpeg",
    ],
  },
  {
    title: "Kitchen",
    bed: "",
    roomImages: ["villa-images/shinju-villa/shinju-villa-kitchen.jpeg"],
  },
];

const features = [];

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const imageVariants = {
  hidden: { opacity: 0, y: 40 },
  show: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const InfoItem = ({ icon, label, type }) => (
  <div className="flex flex-col justify-center items-center">
    {type === "svg" ? (
      <div
        className="sm:m-auto flex flex-row justify-center"
        aria-label={`${label}-icon`}
      >
        {icon()} {/* Render SVG component as a function call */}
      </div>
    ) : (
      <ExportedImage
        className="sm:m-auto"
        alt={`${label}-icon`}
        width={45}
        height={45}
        src={icon}
      />
    )}
    <h3 className="font-headingFont text-xl sm:mt-6">{label}</h3>
  </div>
);

function ShinjuVillaClient() {
  const [showFullList, setShowFullList] = useState(false);

  const minAmenitiesCount = 5;

  const displayedAmenities = showFullList
    ? amenities
    : amenities.slice(0, Math.min(minAmenitiesCount, amenities.length));

  return (
    <main>
      <section className="min-h-[70vh] grid place-items-center bg-cover bg-center bg-shinju-hero">
        <div>
          <h1 className="text-6xl font-headingFont text-white text-center drop-shadow-lg">
            Shinju Villa
          </h1>
          <h2 className="text-3xl font-headingFont text-white text-center drop-shadow-lg">
            A pearl of luxury and comfort
          </h2>
        </div>
      </section>

      <section className="villa-slider-section bg-gradient-to-b from-white to-llbeige py-10 md:py-14 xl:py-20 px-5">
        <div className="max-w-screen-lg m-auto">
          <div className="border-solid border-[1px] gap-5 border-black flex justify-center rounded-full items-center mb-5 w-fit py-1 px-8">
            <ExportedImage
              alt="star"
              width={31}
              height={31}
              src="/star-icon.svg"
              loader={({ src }) => src}
            />
            <h3 className="font-headingFont sm:text-2xl">Shinju Villa</h3>
          </div>

          <div className="sm:flex sm:gap-10 sm:justify-between">
            <h1 className="text-4xl md:text-6xl basis-1/2 max-w-[600px] mb-5 font-headingFont font-medium italic text-llbrown">
              Experience elegance and tranquility in your private sanctuary
            </h1>

            <p className="basis-1/2 max-w-[300px] font-bodyFont mb-5 text-llblack">
              Our spacious 2-bedroom villa, which can accommodate up to 8
              guests, features premium amenities and a serene atmosphere,
              perfect for a memorable getaway.
            </p>
          </div>

          <div
            id="amenities"
            className="grid gap-6 sm:justify-items-center sm:my-20 grid-cols-2 sm:grid-cols-5"
          >
            {displayedAmenities.map((amenity, index) => (
              <InfoItem
                type={amenity.type}
                key={index}
                icon={amenity.icon}
                label={amenity.title}
              />
            ))}
          </div>
          <div className="text-center mt-5">
            <button
              className="bg-llbrown text-white font-bodyFont py-2 px-5 rounded-full"
              onClick={() => setShowFullList(!showFullList)}
            >
              {showFullList ? "Show Less" : "See Full List"}
            </button>
          </div>
        </div>
      </section>

      <section className="px-5 max-w-screen-xl m-auto">
        {rooms.map((room) => (
          <div className="room-row py-5 sm:py-10" key={room.title}>
            <h2 className="font-headingFont text-3xl text-llbrown mb-5">
              {room.title} {room.bed ? ` • ${room.bed} bed` : ""}{" "}
              {room.additions ? `• ${room.additions}` : ""}
            </h2>
            <motion.div
              className="sm:grid gap-5 sm:grid-cols-3"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, amount: 0.2 }}
            >
              {room.roomImages.map((roomImage, index) => (
                <motion.div key={`room-${index}`} variants={imageVariants}>
                  <ExportedImage
                    className="object-cover mb-5 h-full object-center"
                    alt="room-image"
                    width={500}
                    height={300}
                    src={roomImage}
                  />
                </motion.div>
              ))}
            </motion.div>
          </div>
        ))}
      </section>

      <section className="features-section max-w-screen-lg m-auto px-5 sm:flex sm:justify-around sm:gap-10 sm:flex-wrap">
        {features.map((feature, index) => (
          <div
            className="feature-card pt-10 md:pt-14 xl:pt-20 max-w-[400px] mb-8"
            key={index}
          >
            <ExportedImage
              alt={feature.title}
              width={500}
              height={500}
              className="mb-5"
              src={feature.featureImage}
            />

            <h2 className="font-headingFont text-llbrown text-3xl md:text-4xl mb-4 mr-5">
              {feature.title}
            </h2>

            <p className="font-bodyFont text-llblack text-justify mr-10">
              {feature.description}
            </p>
          </div>
        ))}
      </section>

      {/* Promo section */}
      <section className="promo-section md:min-h-[70vh] relative">
        <ExportedImage
          className="md:top-[5%] w-[12%] aspect-square object-cover hidden md:block absolute"
          alt="bedroom"
          width={300}
          height={300}
          src={"/villa-images/shinju-villa/shinju-villa-bedroom-1-1.0.jpeg"}
        />
        <ExportedImage
          className="hidden w-[15%] aspect-square object-cover md:bottom-0 md:left-[5%] md:block absolute"
          alt="living-room"
          width={300}
          height={300}
          src={"/villa-images/shinju-villa/shinju-villa-living-1.jpeg"}
        />
        <div className="px-5 py-10 md:py-0 md:absolute max-w-[500px] top-[50%] md:translate-y-[-50%] md:left-[50%] md:translate-x-[-50%] flex flex-col gap-14 items-center">
          <h1 className="text-6xl text-center font-headingFont">
            Early Bird & Last-Minute Deals!
          </h1>
          <h3 className="font-bodyFont text-center">
            Indulge in a private getaway with exclusive experience like a
            private pool and a fully equipped kitchen. Book early for{" "}
            <span className="text-4xl font-headingFont">5% off</span>, or seize
            the moment with limited-time last-minute savings.
          </h3>
          <button className="bg-llbrown text-white text-2xl font-bodyFont px-7 py-4">
            <a
              href="https://book-directonline.com/properties/ShijuVilla?locale=en&items[0][adults]=2&items[0][children]=0&items[0][infants]=0&currency=MYR&checkInDate=2025-07-22&checkOutDate=2025-07-23&trackPage=no"
              target="_blank"
              rel="noopener noreferrer"
            >
              Secure Your Stay Today!
            </a>
          </button>
        </div>
        <ExportedImage
          className="w-[10%] top-[3%] hidden md:right-0 aspect-square object-cover md:block absolute"
          alt="kitchen"
          width={300}
          height={300}
          src={"/villa-images/shinju-villa/shinju-villa-kitchen.jpeg"}
        />
        <ExportedImage
          className="w-[12%] md:bottom-[5%] md:right-[2%] hidden md:block absolute"
          alt="exterior"
          width={300}
          height={300}
          src={"/villa-images/shinju-villa/shinju-villa-exterior-1.1.jpeg"}
        />
      </section>

      {/* FAQ section */}
      <section className="pt-16">
        <div className="max-w-screen-xl m-auto">
          <div className="border-solid border-[1px] gap-5 border-black flex justify-center rounded-full items-center mb-5 w-fit py-1 px-8">
            <ExportedImage
              alt="star"
              width={31}
              height={31}
              src="/star-icon.svg"
              loader={({ src }) => src}
            />
            <h3 className="font-headingFont sm:text-2xl">
              We&apos;re Here To Help
            </h3>
          </div>
          <h1 className="text-6xl text-llbrown italic font-headingFont">
            Your Questions,
            <br />
            Perfectly Answered.
          </h1>
          <FAQ />
        </div>
      </section>
    </main>
  );
}

export default ShinjuVillaClient;
