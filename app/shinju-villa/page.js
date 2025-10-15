import ShinjuVillaClient from "@/components/ShinjuVillaClient";

export const metadata = {
  title: "Shinju Villa – Double L Villa",
  description:
    "Experience elegance and tranquility at Shinju Villa. A luxurious retreat with premium amenities for up to 8 guests.",
  openGraph: {
    title: "Shinju Villa – Double L Villa",
    description:
      "Experience elegance and tranquility at Shinju Villa. A luxurious retreat with premium amenities for up to 8 guests.",
    url: "https://www.doublelvilla.com/shinju-villa",
    siteName: "Double L Villa",
    images: [
      {
        url: "/villa-images/shinju-villa/shinju-villa-living-1.jpeg",
        width: 1200,
        height: 630,
        alt: "Shinju Villa at Double L Villa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function ShinjuVilla() {
  return <ShinjuVillaClient />;
}
