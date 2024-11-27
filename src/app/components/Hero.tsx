import React from 'react';

function Hero() {
  return (
    <div className='flex justify-center items-center custom-img'>
      <div className='flex flex-col justify-end px-7 py-7 items-center bg-black/40 border-8 border-green-700 text-white rounded-lg shadow-inner shadow-green-900'>
        <h1 className='md:text-5xl text-3xl font-bold mb-5'>Task-5</h1>
        <h2 className='md:text-4xl text-2xl font-bold'>Welcome to Arjumand&apos;s Burger Club</h2>  {/* Fixed apostrophe */}
      </div>
    </div>
  );
}

export default Hero;
