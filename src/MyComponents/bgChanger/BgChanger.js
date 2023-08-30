import React, { useState } from 'react';
import "./bgChanger.css";

const BgChanger = () => {
    const [color, setColor] = useState("olive")
  return (
    <div className='background' style={{backgroundColor: color}} >
      <div className='bar'>
        <div className='bar-inner'>
          
              <button onClick={()=> setColor("red")} className='button' style={{backgroundColor: "red"}} >Red</button>

              <button onClick={()=> setColor("black")} className='button' style={{backgroundColor: "black"}} >Black</button>

              <button onClick={()=> setColor("green")} className='button' style={{backgroundColor: "green"}} >Green</button>

              <button onClick={()=> setColor("aqua")} className='button' style={{backgroundColor: "aqua"}} >Aqua</button>

              <button onClick={()=> setColor("pink")} className='button' style={{backgroundColor: "pink"}} >Pink</button>

              <button onClick={()=> setColor("blue")} className='button' style={{backgroundColor: "blue"}} >Blue</button>

              <button onClick={()=> setColor("yellow")} className='button' style={{backgroundColor: "yellow"}} >Yellow</button>

              <button onClick={()=> setColor("gray")} className='button' style={{backgroundColor: "gray"}} >Gray</button>

        </div>
      </div>
    </div>  
  ) 
}

export default BgChanger
