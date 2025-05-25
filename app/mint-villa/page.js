import MintVillaClient from "@/components/MintVillaClient";

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

export default function MintVillaPage() {
  return <MintVillaClient />;
}
