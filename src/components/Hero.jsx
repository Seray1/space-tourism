import React from 'react'

function Hero() {
  return (
    <div className='text-white flex justify-around tracking-[.15em]'>
      <section className='flex flex-col gap-3 '>
      <h1 className='text-lg font-barlowCondensed'>SO, YOU WANT TO TRAVEL TO </h1>
          <h1 className='font-bold text-9xl'>SPACE</h1>
    <h3>Let’s face it; if you want to go to space, you might as well <br /> genuinely go to 
  outer space and not hover kind of on the<br />  edge of it. Well sit back, and relax 
  because we’ll give you a <br /> truly out of this world experience!</h3>
      </section>

  <section className='self-end p-10  rounded-full  hover:bg-gray-500'>
  <section className=' p-8 rounded-full bg-white text-black w-40 h-40 justify-center items-center flex'>
    <h1 className='text-lg '>EXPLORE</h1>
  </section>
  </section>
    </div>
  )
}

export default Hero
