import React from 'react'

var data = {
    shose : ['Online Store','https://www.youtube.com/'],
    chat : ['Chat Websites','https://www.youtube.com/'],
    workout : ['workout','https://www.youtube.com/'],
    time:['AppTime','https://www.youtube.com/'],
    film:['film' , 'https://www.youtube.com/']
}
var dd = ['dewsd','hanza'] ;

const Project = () => {
  return (
    <div className='w-full  lg:h-screen bg-slate-50 lg:grid lg:grid-cols-2'> 
        <div>fdtd</div>
    {/* <h1 className='text-center text-3xl lg:text-5xl font-mono pt-10 mb-5 font-semibold text-sky-800'>Project</h1> */}
        <div className='flex flex-col lg:flex-row justify-around items-center h-full lg:h-fit'>
        
            {
               Object.values(data).map((value)=>{
                
                return (<a target='_blank' href={value[1]} > <div className='h-40 lg:h-64 shadow-lg my-5 w-64 flex items-center justify-center rounded-3xl bg-white  hover:opacity-80 hover:bg-sky-300'>
                   
                        <h1 className='text-slate-700 text-2xl font-semibold text-center '>{value[0]}</h1>
                  
                    
                </div> </a>)
               })
            }
        </div>  
        
    </div>
   
  )
}

export default Project