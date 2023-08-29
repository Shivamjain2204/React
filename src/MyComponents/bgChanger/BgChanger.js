import React, { useState } from 'react';
import "./bgChanger.css";

const BgChanger = () => {
    const [color, setColor] = useState("olive")
  return (
    <div className='background' style={{backgroundColor: color}} >
      <div className='bar'>
        <div className='barinner'>

        </div>
      </div>
    </div> 
  )
}

export default BgChanger
