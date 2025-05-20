"use client";

import FAQ from "@/components/FAQ";
import Image from "next/image";
import { amenities } from "@/data/amenities";
import { useState } from "react";

import ExportedImage from "next-image-export-optimizer";

const rooms = [
  {
    title: "Bedroom 1",
    bed: "King",
    additions: "Floor Mattress",
    roomImages: [
      "/villa-images/Mint Villa-3.webp",
      "/villa-images/mint-villa-2.webp",
      "/villa-images/Mint Villa-5.webp",
    ],
  },

  {
    title: "Bedroom 2",
    bed: "Queen",
    roomImages: [
      "/villa-images/Mint Villa-21.webp",
      "/villa-images/Mint Villa-11.webp",
      "/villa-images/Mint Villa-12.webp",
    ],
  },

  {
    title: "Bedroom 3",
    bed: "Queen",
    roomImages: [
      "/villa-images/Mint Villa-8.webp",
      "/villa-images/Mint Villa-7.webp",
    ],
  },
];

const features = [
  {
    title: "Private Jacuzzi Pool",
    description:
      "Mint Villa’s private Jacuzzi pool offers the perfect setting to enjoy serene, luxurious moments with loved ones.",
    featureImage: "/villa-images/Mint Villa-23.webp",
  },
  {
    title: "Shower Room",
    description:
      "All shower rooms feature a sleek, modern design and provide Malaysia-inspired botanical bath amenities for a refreshing, relaxing experience.",
    featureImage: "/villa-images/Mint Villa-4.webp",
  },
];

const InfoItem = ({ icon, label, type }) => (
  <div>
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

function MintVilla() {
  const [showFullList, setShowFullList] = useState(false);

  const minAmenitiesCount = 5;

  const displayedAmenities = showFullList
    ? amenities
    : amenities.slice(0, Math.min(minAmenitiesCount, amenities.length));

  console.log(displayedAmenities);

  return (
    <main>
      <section className="min-h-[70vh] grid place-items-center bg-cover bg-center bg-mint-hero">
        <div>
          <h1 className="text-6xl font-headingFont text-white text-center ">
            Mint Villa
          </h1>

          <h2 className="text-3xl font-headingFont text-white text-center">
            For the most refreshing time of your life
          </h2>
        </div>
      </section>

      <section className="villa-slider-section  bg-gradient-to-b from-white to-llbeige py-10 md:py-14 xl:py-20 px-5">
        <div className="max-w-screen-lg m-auto">
          <div className="border-solid border-[1px] gap-5 border-black flex justify-center rounded-full items-center mb-5  w-fit py-1 px-8">
            <ExportedImage
              alt="star"
              width={31}
              height={31}
              src="/star-icon.svg"
              loader={({ src }) => src}
            />
            <h3 className="font-headingFont sm:text-2xl">Our Villa</h3>
          </div>

          <div className="sm:flex sm:gap-10 sm:justify-between">
            <h1 className=" text-4xl md:text-6xl basis-1/2 max-w-[600px] mb-5 font-headingFont font-medium italic text-llbrown">
              All villas have a unique theme because we want our every guest to
              feel special.
            </h1>

            <p className="basis-1/2 max-w-[300px] font-bodyFont mb-5 text-llblack">
              Our spacious 3-bedroom villa, which can accommodate up to 8
              guests, features a private Jacuzzi pool and is nestled in a
              peaceful neighbourhood, offering a serene getaway.{" "}
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
              {room.title} / {room.bed} bed{" "}
              {room.additions ? `• ${room.additions}` : ""}
            </h2>

            <div className="sm:grid gap-5 sm:grid-cols-3">
              {room.roomImages.map((roomImage, index) => (
                <ExportedImage
                  className="object-cover mb-5 h-full object-center"
                  key={`room-${index}`}
                  alt="room-image"
                  width={900}
                  height={900}
                  src={roomImage}
                />
              ))}
            </div>
          </div>
        ))}
      </section>

      <section className="features-section max-w-screen-lg m-auto px-5 sm:flex sm:justify-between">
        {features.map((feature, index) => (
          <div
            className="feature-card py-10 md:py-14 xl:py-20 max-w-[400px] mb-8"
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

      <section>
        <div className="max-w-screen-xl m-auto">
          <div className="border-solid border-[1px] gap-5 border-black flex justify-center rounded-full items-center mb-5  w-fit py-1 px-8">
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

export default MintVilla;

export const metadata = {
  title: "Mint Villa – Double L Villa",
  description:
    "A refreshing 3-bedroom villa with a private Jacuzzi pool, perfect for up to 8 guests. Enjoy a unique themed stay at Double L Villa.",
  openGraph: {
    title: "Mint Villa – Double L Villa",
    description:
      "A refreshing 3-bedroom villa with a private Jacuzzi pool, perfect for up to 8 guests. Enjoy a unique themed stay at Double L Villa.",
    url: "https://www.doublelvilla.com/mint-villa",
    siteName: "Double L Villa",
    images: [
      {
        url: "/villa-images/mint-villa-2.webp", // Make sure this exists in /public
        width: 1200,
        height: 630,
        alt: "Mint Villa at Double L Villa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};
