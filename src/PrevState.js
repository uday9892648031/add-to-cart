import React, { useState } from "react";

const PrevState = () => {
  const [no,setNo] = useState(20)
  function increment(){
    setNo((prev)=>prev + 1)
    setNo((prev)=>prev + 1)
    setNo((prev)=>prev + 1)
  }
  return (
    <div>
      <h1>PrevState hook</h1>
      <h1>No: {no}</h1>
      <button onClick={increment}>Increment no.</button>
    </div>
  );
};

export default PrevState;
