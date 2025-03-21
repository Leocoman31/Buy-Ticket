import React from 'react'
import { Link } from 'react-router-dom'

function CardTopSearchRoutes({topRoute}) {
  return (
    <div className='border-2 border-gray-300 rounded-lg p-4 space-y-4'>
        <div className='flex justify-between '>
            <div id='from'>
                <p className=' text-sm text-gray-400'>From</p>
                <p className='text-lg  font-semibold text-gray-500'>{topRoute.from}</p>
            </div>

            <div id='timeDuration' className="relative">
                
                <p className=' absolute w-fit px-3 h-6 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-neutral-50 rounded-full flex items-center justify-center text-sm text-neutral-500 font-normal border-dashed border border-neutral-400    '>{topRoute.timeDuration}</p>
            </div>

            <div id='to'>
                <p className='text-end text-gray-400'>To</p>
                <p className='text-lg text-center font-semibold text-gray-500'>{topRoute.to}</p>
            </div>

        </div>

        <div className='flex justify-between'>
            <div >
                <p  className='text-lg  font-bold text-gray-500'>{topRoute.price}</p>

            </div>
            
                <Link to={`/ticket/${topRoute.busName}`} className='bg-red-500 px-5 py-1 rounded-md text-white text-[12px]'>Reserve a Seat</Link>

     

        </div>

    </div>
  )
}

export default CardTopSearchRoutes