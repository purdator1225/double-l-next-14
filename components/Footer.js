import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <footer className='py-10 font-bodyFont md:py-14 xl:py-20 px-5'>

    <hr className='mb-8' />

    <div className='footer-grid-wrapper grid md:grid-cols-3 gap-10 max-w-screen-xl m-auto'>

    <div className='md:m-auto'><h2 className='font-headingFont text-3xl mb-5'>About Us</h2>
    <p className='text-sm'>Double L Villa, the essence of our venture lies in the fusion of our surnames, Lim & Loh, representing a union of family and shared dreams.</p></div>

       <div className='md:m-auto'><h2 className='font-headingFont text-3xl mb-5'>Our Villa</h2>

       <div className='flex flex-col'>
         <Link href={'/'}>MINT VILLA</Link>
       <Link href={'/'}>SALT VILLA(COMING SOON)</Link>
       <Link href={'/'}>PEARL VILLA(COMING SOON)</Link>
       </div>

      
   </div>

       <div className='md:m-auto'><h2 className='font-headingFont text-3xl mb-5'>Social</h2>
       <div className='flex flex-col'>
              <Link href={'/'}>TIKTOK</Link>
       <Link href={'/'}>INSTAGRAM</Link>
       <Link href={'/'}>FACEBOOK</Link>
       </div>
    
  </div>

  <div className='text-sm font-bodyFont'>©2024 All rights reserved - Double L Villa</div>


    </div>





    </footer>
  )
}

export default Footer