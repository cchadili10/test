import React from 'react'
import { TypeAnimation } from 'react-type-animation';
const Write = () => {
  return (
    <TypeAnimation 
        sequence={[
            "DEVELOPER",1000,
            "DESIGNER",1000,     
        ]}
        speed={10} // Custom Speed from 1-99 - Default Speed: 40
        style={{ fontSize: '1em' }}
        wrapper = 'span'
        repeat={Infinity}
    />
  )
}

export default Write