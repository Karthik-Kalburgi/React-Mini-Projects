//create a form that takes user input and display in real time

import React, { useState } from "react";

const Three = () => {
    const [input,setinput] = useState('');
  return (
    <div>
      <input className="focus-ring-3 px-4 border border-red-900  p-1 " type="text" value={input} onChange={(e)=>{
        setinput(e.target.value)
      }} />
      <p className="">User Input : {input} </p>
    </div>
  );
};

export default Three;
