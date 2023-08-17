import React from 'react'
import image from '../assets/skills1.png'
import image2 from '../assets/skills3.png'
import image1 from '../assets/skills2.png'

const Skills = () => {
  return (
    <div id='skills' className='flex flex-col lg:h-screen lg:justify-start lg:my-20 items-center text-black  justify-around   '>
      <h1 className='mt-20 lg:my-20 lg:text-5xl  text-3xl font-mono font-semibold text-sky-800 '>Skills</h1>
        <div className=' lg:flex lg:justify-evenly lg:items-center lg:mt-20 lg:w-full'>

          <div className='h-72 w-60 lg:h-96 lg:w-80 mt-20 lg:my-0 shadow-2xl flex flex-col items-center rounded-xl  bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]  from-blue-500 to-cyan-400'>
            <div  className='h-20 w-20 -mt-10 rounded-full shadow-xl bg-gray-50 flex justify-center items-center '>
              <img className='h-10 w-10    ' src={image1} alt="" srcset="" />
            </div>
            <h1 className='text-white mt-3 text-lg lg:text-2xl font-mono font-semibold' >Professional Skills</h1>
            <div className='flex lg:mt-10 lg:font-light lg:text-white lg:text-xl flex-col w-full mt-5 ml-5 text-gray-100 font-semibold '>
                <li>Creativity</li>
                <li>Teamwork</li>
                <li>Communication</li>
                <li>Problem-solving </li>
                <li>Leadership</li>
                <li>Flexibility</li>
            </div>
            
        </div>
        
        <div className='h-72 w-60 lg:h-96 lg:w-80 my-20 lg:my-0 shadow-2xl flex flex-col items-center rounded-xl  bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]  from-blue-500 to-cyan-400'>
            <div  className='h-20 w-20 -mt-10 rounded-full shadow-xl bg-gray-100 flex justify-center items-center '>
              <img className='h-10 w-10 ' src={image2} alt="" srcset="" />
            </div> 
            <h1 className='text-white mt-3 text-lg lg:text-2xl font-mono font-semibold' >Design  Skills</h1>
            <div className='flex lg:mt-10 lg:font-light lg:text-white lg:text-xl flex-col w-full mt-5 ml-5 text-gray-50 font-semibold '>
                <li>HTML - CSS</li>
                <li>Photoshop</li>
                <li>Illustrator</li>
                <li>UX/UI design</li>
                <li>After Effects</li>
                <li>Adobe Premiere Pro</li>
            </div>
            
        </div>
         <div className='h-72 w-60 lg:h-96 lg:w-80 mb-20 lg:mb-0  shadow-2xl flex flex-col items-center rounded-xl  bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))]  from-blue-500 to-cyan-400'>
            <div  className='h-20 w-20 -mt-10 rounded-full shadow-xl bg-gray-100 flex justify-center items-center '>
              <img className='h-10 w-10     ' src={image} alt="" srcset="" />
            </div>
            <h1 className='text-white mt-3 text-lg lg:text-2xl font-mono font-semibold' >Technical Skills</h1>
            <div className='flex lg:mt-10 lg:font-light lg:text-white lg:text-xl flex-col w-full mt-5 ml-5 text-gray-100 font-semibold '>
                <li>JavaScript(jQuery-React)</li>
                <li>SQL(MySQL-SQl Server)</li>
                <li>NoSQL(MongoDB)</li>
                <li>Node js(Express)</li>
                <li>PHP(Laravel)</li>
                <li>Python</li>
                <li>flutter</li>
            </div>
            
        </div>
        </div>
        
    </div>
  )
}

export default Skills