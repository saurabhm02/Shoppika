import React from 'react';
import { Link } from 'react-router-dom';

const Body = () => {
  return (
    <div className="bg-[conic-gradient(at_left,_var(--tw-gradient-stops))] from-indigo-200 via-red-200 to-yellow-100 w-[100vw] h-[100vh]">
      <div className="flex flex-col justify-center items-center h-[80vh]">
        <h1 className="text-6xl font-bold text-white">UNIVERSAL FINDS HUB</h1>
        <p className="text-2xl font-bold text-white">Your One-Stop Source for Fashion, Electronics, Furniture & More</p>
        <Link to="/products" className="text-2xl text-white mt-4">Shop Now</Link>
      </div>
    </div>
  )
}

export default Body