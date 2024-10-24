import localFont from "next/font/local";
import "./globals.css";
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
     
     {/* Booking Engine Script */}
        <Script
          id="booking-engine"
          // strategy="afterInteractive" // Loads the script after the page has been fully interactive
        >
          {`
            !function(e,n){
              var t="bookingengine",o="integration",i=e[t]=e[t]||{},a=i[o]=i[o]||{},r="__cq",c="__loader",d="getElementsByTagName";
              if(n=n||[],a[r]=a[r]?a[r].concat(n):n,!a[c]){
                a[c]=!0;
                var l=e.document,g=l[d]("head")[0]||l[d]("body")[0];
                !function n(i){
                  if(0!==i.length){
                    var a=l.createElement("script");
                    a.type="text/javascript";
                    a.async=!0;
                    a.src="https://"+i[0]+"/integration/loader.js";
                    a.onerror=a.onload=function(n,i){
                      return function(){
                        e[t]&&e[t][o]&&e[t][o].loaded||(g.removeChild(n),i())
                      }
                    }(a,(function(){
                      n(i.slice(1,i.length))
                    }));
                    g.appendChild(a)
                  }
                }(["my-ibe.hopenapi.com", "ibe.hopenapi.com", "ibe.behopenapi.com"]);
              }
            }(window, [
              ["setContext", "BE-INT-doublelvilla_2024-08-17", "en"],
              ["embed", "booking-form", { container: "be-booking-form" }],
              ["embed", "search-form", { container: "be-search-form" }]
            ]);
          `}
        </Script>

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
