import React, {useState} from "react";

function Counter(){
  // Setting the state variables.
  const [count, setCount] = useState(0)

  // Incrementing the value of count
  function Increment(){
    setCount((count)=> (count +=1) )
  }

  return(
    <button onClick={Increment}>I was clicked {count} times</button>
  )
}


export default Counter


