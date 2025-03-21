import React from 'react'
import { motion } from 'motion/react';
import { FaLocationDot } from "react-icons/fa6";
import { IoMdSearch } from "react-icons/io";

function Search() {
  return (
    <motion.div 
    initial={{opacity:0 , y:-800}}
    animate={{opacity:1, y:0}}
    exit={{opcaity:0, y:-800}}
    transition={{duration:2,ease:"easeOut"}}
    className='border border-gray-400 rounded-md p-2'>
    <div className='grid lg:grid-cols-2 xl:grid-cols-3 justify-center items-center gap-2'>
        <div className='relative'>
            <input type='text' name='from ' placeholder='From...' className='border border-gray-500 rounded-lg px-4 py-2 bg-white  w-full'  />
            <div className='absolute top-3 text-gray-500 right-2 '>
            <FaLocationDot size={15}/></div>
        </div>
       
        <div className='relative'>
            <input type='text' name='to ' placeholder='To...' className='border border-gray-500 relative rounded-lg px-4 py-2 bg-white  w-full'  />
            <div className='absolute top-3 text-gray-500 right-2 '>
            <FaLocationDot size={15}/></div>
        </div>

        
        <div className='flex gap-4 justify-center items-center'>
            <input type='date' name='to '  className='border border-gray-500 relative rounded-lg px-4 py-2 bg-white  w-full'  />

            <div className='relative text-center   px-4 py-1.5 text-white bg-red-500 rounded-lg w-[50%]'>
          
            <button className='mx-4 '>Search</button>
            <div className='absolute top-2 text-white left-2 '>
            <IoMdSearch size={20}/></div>

         
            
            
        </div>
            
        </div>

        
       
        </div>




    </motion.div>
  )
}

export default Search