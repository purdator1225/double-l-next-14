import localFont from "next/font/local";
import "./globals.css";
import "./be-style.css";
import { Cormorant_Garamond, Work_Sans } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Head from "next/head";
import Script from "next/script";

const headingFont = Cormorant_Garamond({
  subsets:["latin"],
  variable: "--font-heading",
  style: ['normal', 'italic'],
  weight: ['300', '400','500','600'],
  display:'swap'
});
const bodyFont = Work_Sans({
 subsets:["latin"],
  variable: "--font-body",
  weight: ['200', '400'],
});

export const metadata = {
  title: "Double L Villa",
  description: "Where You Live to Love and Laugh",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
      <Navbar/>
      
        {children}

      <Footer/>
      </body>
    </html>
  );
}
