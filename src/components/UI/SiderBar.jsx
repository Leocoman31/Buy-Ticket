import React from 'react'
import { Link } from 'react-router-dom'
import { FaCircleXmark } from "react-icons/fa6";

import { useContextSideBar } from '../../context/contextSideBar';



function SideBar() {
    
    const {openSideBar,handleSideBar}=useContextSideBar();
  return (
    <div className='h-full bg-red-400 fixed top-0 text-white '>
        <button className='absolute  text-black p-2 right-4 top-2  hover:text-white' onClick={() => handleSideBar(!openSideBar)}><FaCircleXmark size={20}/></button>
        <div className='flex flex-col gap-2 justify-center text-sm'>

            <div className='p-8 mt-8'>
            <h1 className='text-xl'> Hi From Bus-Ticket </h1>
            </div>


           

            <div id="menu">
                <ul className='space-y-4' >
                <li className="hover:bg-gray-900 py-2 px-4">

<Link to="/"  className='font-semibold text-[16px]'> Home</Link>
</li>
                    <li className="hover:bg-gray-900 py-2 px-4">

                    <Link to="services"  className='font-semibold text-[16px]'> Services</Link>
                    </li>
                    <li className="hover:bg-gray-900 py-2 px-4">
                    <Link to="ticket"  className='font-semibold text-[16px]'  >Ticket</Link>
                    </li>
                    <li className="hover:bg-gray-900 py-2 px-4">
                    <Link to="about"  className='font-semibold text-[16px]'>About</Link>
                    </li>
                    <li className="hover:bg-gray-900 py-2 px-4">
                    <Link to="/"  className='font-semibold text-[16px]'>Sign In </Link>
                    </li>
                    
                </ul>

            </div>

            


            


        </div>

    </div>
  )
}

export default SideBar