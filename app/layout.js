import localFont from "next/font/local";
import "./globals.css";
import "./be-style.css";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  style: ["normal", "italic"],
  weight: ["300", "400", "500", "600"],
  display: "swap",
});
const bodyFont = Work_Sans({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["200", "400"],
});

export const metadata = {
  title: "Double L Villa",
  description: "Where You Live to Love and Laugh",
  icons: {
    icon: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "16x16",
        url: "/favicon-16x16.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "32x32",
        url: "/favicon-32x32.png",
      },
      { rel: "shortcut icon", url: "/favicon.ico" },
    ],
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "Double L Villa",
    description: "Where You Live to Love and Laugh",
    url: "https://www.doublelvilla.com", // Replace with your actual domain
    siteName: "Double L Villa",
    images: [
      {
        url: "/villa-images/mint-villa-2.webp", // Place your Open Graph image in /public
        width: 1200,
        height: 630,
        alt: "Double L Villa",
      },
    ],
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${headingFont.variable}  ${bodyFont.variable} font-bodyFont antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
