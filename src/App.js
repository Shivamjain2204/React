// import Two from "./Two";
// import Three from "./Three";

// import Footer from "./MyComponents/Footer";
import Header from "./MyComponents/Header";
// import Todos from "./MyComponents/Todos";
import { useState } from "react";


function One(){

  // let [Count, setCount] = useState(3);
  let [count, setCount] = useState(3)

  // let Count = 15;

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

 
  return(
    <>
    <Header about="About2"/>
    <div className="container">
    <h2>React</h2>
    <h3>Value Count:{count}</h3>

    <button onClick={added} >ADD</button> <br/>
    <button onClick={remove} >REMOVE</button>
    </div>
 
    </>
   
  )
}

export default One;