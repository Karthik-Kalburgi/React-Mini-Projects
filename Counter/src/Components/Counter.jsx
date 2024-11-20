import React, { useState } from "react";

const Counter = () => {
  const [count, setcount] = useState(0);
  return (
    <div className="flex items-center  h-screen justify-center bg-gray-100">
      <button className="bg-red-700 text-white  rounded px-4 py-2 mx-2 transition-transform transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500 "
        onClick={() => {
          setcount(count + 1);
        }}
      >
        +
      </button>
      <span> {count} </span>
      <button className="bg-red-700 text-white  rounded px-4 py-2 mx-2 transition-transform transform hover:scale-110 active:scale-95 focus:outline-none focus:ring-2 focus:ring-blue-500"
        onClick={() => {
          setcount(count - 1);
        }}
      >
        -
      </button>
    </div>
  );
};

export default Counter;
