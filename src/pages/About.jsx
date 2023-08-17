import React from 'react'
import image from '../assets/about.png'

const About = () => {
  return (
    <div id='about' className='h-screen grid grid-rows-2 lg:flex lg:justify-around '>
        <div className='flex justify-center items-center  '>
            <img className='w-80  imm' src={image} alt="" srcset="" />
        </div>
        <div className='flex flex-col lg:-mt-20 lg:-ml-72 justify-center items-center lg:items-start'>
            <h1 className='text-3xl lg:text-5xl font-mono font-semibold text-sky-800'>About Me</h1>
            <p className='text-center lg:text-start lg:text-2xl lg:my-8 lg:w-96  w-80 pt-8 pb-6 text-gray-900'>I am a talented , ambitious and hardworking individual , with broad skills Create and design full website , Android apps , also editing videos . </p>
            <p className='text-center lg:text-start  w-80 lg:text-2xl lg:w-96'> Furthermore , I am adept at handling multiple tasks on a daily basis Competently and at working well under pressure .</p>
        </div>

    </div>
  )
}

export default About