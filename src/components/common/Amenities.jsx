import React from 'react'
import { IoIosCheckboxOutline } from "react-icons/io";
import { AiOutlineCloseSquare } from "react-icons/ai";

function Amenities() {
  return (
    <div>
    <h3 className=' font-semibold text-gray-700'>Bus Amenities</h3>

    <div className='flex gap-22'> 
    <div>
    <div className='flex gap-2 items-center'>
        <IoIosCheckboxOutline className='text-green-500'/>
        <p className='text-sm text-gray-600'>Super AC</p>

    </div>
    <div className='flex gap-2 items-center'>
        <IoIosCheckboxOutline className='text-green-500'/>
        <p className='text-sm text-gray-600'>Charging Port</p>

    </div>

    <div className='flex gap-2 items-center'>
        <IoIosCheckboxOutline className='text-green-500'/>
        <p className='text-sm text-gray-600'>Internet/Wifi</p>

    </div>

    <div className='flex gap-2 items-center'>
        <IoIosCheckboxOutline className='text-green-500'/>
        <p className='text-sm text-gray-600'>AC & Air Suspension</p>

    </div>
    <div className='flex gap-2 items-center'>
        <AiOutlineCloseSquare className='text-red-500'/>
        <p className='text-sm text-gray-600'>Sleeper Seat</p>

    </div>
    <div className='flex gap-2 items-center'>
        <AiOutlineCloseSquare className='text-red-500'/>
        <p className='text-sm text-gray-600'>Snacks</p>

    </div>

   
    </div>
    <div>
    <div className='flex gap-2 items-center'>
        <IoIosCheckboxOutline className='text-green-500'/>
        <p className='text-sm text-gray-600'>2*2 VIP Sofa</p>

    </div>
    <div className='flex gap-2 items-center'>
        <AiOutlineCloseSquare className='text-red-500'/>
        <p className='text-sm text-gray-600'>Cooper Fan</p>

    </div>
    <div className='flex gap-2 items-center'>
        <IoIosCheckboxOutline className='text-green-500'/>
        <p className='text-sm text-gray-600'>LED TV</p>

    </div>
    <div className='flex gap-2 items-center'>
        <IoIosCheckboxOutline className='text-green-500'/>
        <p className='text-sm text-gray-600'>Water Bottles</p>

    </div>
    <div className='flex gap-2 items-center'>
        <AiOutlineCloseSquare className='text-red-500'/>
        <p className='text-sm text-gray-600'>Luxury Seat</p>

    </div>
    <div className='flex gap-2 items-center'>
        <IoIosCheckboxOutline className='text-green-500'/>
        <p className='text-sm text-gray-600'>Comfrtable Seat</p>

    </div>

    </div>

    
    


    </div>
    


    </div>
  )
}

export default Amenities