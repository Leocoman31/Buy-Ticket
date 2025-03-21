import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import HeaderPhone from './HeaderPhone'


function Header() {
  
  return (
    <>
    <div className='md:hidden '>  <HeaderPhone/></div>
  
     <header className =' hidden md:block sticky z-10'>
        <nav className='flex justify-between items-center p-8 '>
            <div>
                <h1 className='text-[2rem] font-bold text-red-500'>BusTicket</h1>
            </div>

            <div className='flex justify-end items-center gap-4'>
                <div className='flex gap-4 text-gray-800'>
                    <Link to="/" className='hover:text-red-500'>Home</Link>
                    <Link to="services" className='hover:text-red-500'>Services</Link>
                    <Link to="ticket" className='hover:text-red-500'>Ticket</Link>
                    <Link to="about" className='hover:text-red-500'>About</Link>

                </div>

                <div className='bg-red-500 text-white py-3 px-4 text-sm rounded-lg'>
                    <buttom>Sign In</buttom>
                </div>
               
            </div>
           
        

        </nav>
    </header></>
   
  )
}

export default Header