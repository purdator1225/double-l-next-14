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
  icons: {
    icon: [
      { rel: "icon", type: "image/png", sizes: "16x16", url: "/favicon-16x16.png" },
      { rel: "icon", type: "image/png", sizes: "32x32", url: "/favicon-32x32.png" },
    ],
    apple: "/apple-touch-icon.png",
    shortcut: "/favicon.ico",
  },
  manifest: "/site.webmanifest", // Optional: If you have a web app manifest
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <Head>
        {/* Favicon links */}
        <link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="manifest" href="/site.webmanifest" />
      </Head>
      <body
        className={`${headingFont.variable} ${bodyFont.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
