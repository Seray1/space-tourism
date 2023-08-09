import React from 'react'
import logo from '../assets/logo.svg'


function Header({personsName}) {
  
  
  return (
    <div>
      <header className='flex justify-between py-6  pl-12'>
        <div className='self-center'>
          <img src={logo} alt="" />
        </div>
        <div className='p-3 border-white filter contrast-50 border-b absolute line w-2/5'></div>
      <ul className='text-white flex gap-6 items-center   backdrop-blur-xl filter  pl-32 contrast-75 tracking-[.10em] pr-9 font-barlowCondensed' >
        <li className='l1 relative py-8'><span className='font-bold'>00</span> HOME</li>
        <li><span className='font-bold'>01</span> DESTINATION</li>
        <li><span className='font-bold'>02</span> CREW</li>
        <li><span className='font-bold'>03</span> TECHNOLOGY</li>
        <li><span>{personsName}</span></li>
      </ul>
      </header>
    </div>
  )
}

export default Header
