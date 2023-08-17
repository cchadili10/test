import React from 'react'
import skills from '../assets/imges/skills.png'
import about from '../assets/imges/about.png'
import home from '../assets/imges/home.png'
import project from '../assets/imges/project.png'
import contact from '../assets/imges/contact.png'

const Toll = () => {
  return (
    <div className='h-full lg:h-20 lg:w-full  fixed left-1 bottom-0 lg:bottom-10  flex items-center justify-center'>
        <div className='flex lg:flex-row flex-col shadow-lg py-5 lg:py-0    lg:px-12 lg:h-full rounded-full bg-blue-500 bg-opacity-20 lg:bg-gradient-to-r from-sky-400 to-cyan-400 '>
            <div className='bg-white lg:p-3 lg:m-2 rounded-full  p-1 m-1'>
                <a  href="#home"><img className='h-8 lg:h-10' src={home} alt="" /></a>
            </div>
            <div className='bg-white p-1 m-1 lg:p-3 lg:m-2  rounded-full'>
                <a  href="#about"><img className='h-8 lg:h-10' src={about} alt="" /></a>
            </div>
             <div className='bg-white lg:p-3 lg:m-2  p-1 m-1  rounded-full'>
                <a  href="#skills"><img className='h-8 lg:h-10' src={skills} alt="" /></a>
            </div>
             <div className='bg-white lg:p-3 lg:m-2   p-1 m-1 rounded-full'>
                <a  href="#skills"><img className='h-8 lg:h-10' src={project} alt="" /></a>
            </div>
             <div className='bg-white lg:p-3 lg:m-2   p-1 m-1 rounded-full'>
                <a  href="#skills"><img className='h-8 lg:h-10' src={contact} alt="" /></a>
            </div>
        </div>
        
    </div>
  )
}

export default Toll