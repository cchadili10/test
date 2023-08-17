import React, { useEffect, useState } from 'react'
import Write from '../assets/Write'

import image from '../assets/me.jpg'

 const Home = () => {
 
  return (                                          
    <div id='home' className='grid grid-rows-2 lg:flex lg:justify-evenly lg:flex-row-reverse h-screen bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] text-white from-sky-400 to-indigo-500'>
        <div className='flex h-full  justify-center items-center  '>
            <div className=''>
                <img className='h-64 lg:h-96 lg:-mt-32 rounded-full border-opacity-25 border-solid border-8 border-white ' src={image} alt="" />
            </div>
        </div>
        <div className='flex flex-col lg:items-start items-center  justify-center'>
            <h1 className='text-4xl lg:text-5xl font-semibold text-white '>Hamza Chadili</h1>
            
            <p className='py-3 mt-2 lg:text-3xl text-2xl text-gray-700'>I'M A <span className='text-gray-800'><Write /></span> </p>
            <p className='w-80 pb-10 lg:text-start lg:text-xl lg:w-96  text-center text-gray-200'>Create and design full website , Android applications, as well as editing photos and videos</p>
            <div className='bg-gray-700 py-2 lg:py-3 rounded-md px-10'>
               <a href="#skills">Contact Me</a>
            </div>
        </div>
    </div>
  )
}
export default Home

