import React, { useState } from 'react'


function Count() {
    let [count, setCount] = useState(0)

    const added=()=>{
      console.log("Value Added",count)
      // Count = Count + 1;
      setCount(count + 1)
    }
  
    function remove(){
      console.log("Value Removed", count);
      count = count - 1;
      setCount(count)
    }

    function reset(){
      setCount(0)
    }

  return (
    <>
    <div className="container">
    <h2>React</h2>
    <h3>Value Count:{count}</h3>

    <button onClick={added} >ADD</button> <br/>
    <button onClick={remove} >REMOVE</button> <br/>
    <button onClick={reset} >RESET</button> 

    </div>

    
    </>
  )
}


export default Count;
