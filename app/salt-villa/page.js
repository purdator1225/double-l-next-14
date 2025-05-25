import SaltVillaClient from "@/components/SaltVillaClient";

export const metadata = {
  title: "Salt Villa – Double L Villa",
  description:
    "A natural retreat to unwind, breathe, and embrace the calm of life. Salt Villa features a rooftop pool and spacious rooms for up to 8 guests.",
  openGraph: {
    title: "Salt Villa – Double L Villa",
    description:
      "A natural retreat to unwind, breathe, and embrace the calm of life. Salt Villa features a rooftop pool and spacious rooms for up to 8 guests.",
    url: "https://www.doublelvilla.com/salt-villa",
    siteName: "Double L Villa",
    images: [
      {
        url: "/villa-images/salt-villa/salt-villa-rooftop-1.jpg", // Make sure this exists in /public
        width: 1200,
        height: 630,
        alt: "Salt Villa Rooftop Pool",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function SaltVilla() {
  return <SaltVillaClient />;
}
