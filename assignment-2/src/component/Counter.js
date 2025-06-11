import React, { useState } from "react";
function Counter (props){
  
   let [count, setCount] = useState(Number(props.count));
    function buttonClick(num){
        setCount(prevCount => prevCount +(num));
            }
 
return <>
<h1>{count}</h1>
<button onClick={()=>buttonClick(+1)}> Increment + </button>
<button onClick={()=>buttonClick(-1)}> Decrement  - </button>
</>
}

export default Counter;