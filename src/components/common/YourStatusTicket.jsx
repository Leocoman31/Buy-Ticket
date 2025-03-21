import React from 'react'
import { useContextBus } from '../../context/contextBus';

function YourStatusTicket() {

    const{checkout} =useContextBus();
    
    const{verificationSeat,
        handleSeatSelected,
        selectedSeat,
        } = useContextBus();


        console.log(checkout)
  return (
    <div className='space-y-4 mt-8  md:mt-0'>
       
            
        <h3 className='text-gray-700 font-semibold'>
            Your Ticket Report Status
        </h3>

        <div className='border-2 border-gray-300 p-4 rounded-lg'>

        
        <h4 className='text-gray-600 text-sm  font-semibold'> Your Destinations</h4>
        <p className=' text-sm text-gray-500'>{checkout.date}</p>
        <div className='flex justify-between text-sm text-gray-500'>
            <p >{checkout.from} at {checkout.hourFrom} </p>
            <p>{checkout.to} at {checkout.hourTo}</p>
    

        </div>
        <div className='flex justify-between text-sm text-gray-500'>
            <p >Bus No. </p>
            <p className='font-semibold'>{checkout.name} </p>
    

        </div>
        

          <h3 className='text-gray-700 font-semibold'>
            Your Seats
        </h3>
        <div className='flex gap-4'>
            {selectedSeat.map(seat =>  <div key={seat} className='bg-gray-300 text-sm text-black p-2 rounded-md'>
                {seat}
            </div>)}
        </div>

        <h3 className='text-gray-700 font-semibold'>
            Total Fare Price:
        </h3>
        <div className='flex justify-between text-sm text-gray-500'>
            <p >Total Price: </p>
            <p className='font-semibold'>Kz {checkout.totalPrice} </p>
    

        </div>



        </div>

    

       


    </div>

  )
}

export default YourStatusTicket