import React, { useState } from 'react'
import { FaBus } from "react-icons/fa6";
import { useContextBus } from '../../context/contextBus';
import { Link } from 'react-router-dom';
import { CiWifiOn } from "react-icons/ci";
import { PiThermometerCold } from "react-icons/pi";
import { MdOutlineEventSeat } from "react-icons/md";



function CardRouteTicket({routeB}) {

    

  return (
    <div className='border-2 border-gray-300 rounded-lg p-4 space-y-4'>
        <div className='flex justify-between '>
            <div>
                <p className='font-semibold text-gray-600'>{routeB.busName}</p>

            </div>

            <div className='flex gap-4'>
                <div className='flex gap-2 justify-center items-center text-sm text-gray-500'>
                <CiWifiOn size={18}/>
                <p>Wifi</p>


                </div>
                <div className='flex gap-2 justify-center items-center text-sm text-gray-500'>
                <PiThermometerCold size={18}/>
                    <p>AC</p>
                </div>

                <div className='flex gap-2 justify-center items-center tex-sm text-gray-500'>
                    <MdOutlineEventSeat size={18}/>
                    <p>Seats</p>
                </div>
             
            </div>
        </div>
        <div className='flex justify-between '>
            <div id='from'>
                <p className=' text-sm text-gray-400'>{routeB.hourFrom}</p>
                <p className='text-sm font-semibold text-gray-500'>{routeB.from}</p>
            </div>

            <div id='icone' className="rounded-full">
                <FaBus size={20} color='red'/>
                
                
            </div>

            <div id='to'>
                <p className='text-end text-gray-400'>{routeB.hourTo}</p>
                <p className='text-sm text-center font-semibold text-gray-500'>{routeB.to}</p>
            </div>

        </div>

        <div className='flex justify-between'>
            <div >
                <p  className='text-sm  font-bold text-gray-500'>{routeB.price}/per seat</p>

            </div>
            

                <Link to={`/ticket/${routeB.busName}`} className='bg-red-500 px-5 py-1 rounded-md text-white text-[12px]'>Reserve a Seat</Link>

     

        </div>

    </div>
  
  )
}

export default CardRouteTicket