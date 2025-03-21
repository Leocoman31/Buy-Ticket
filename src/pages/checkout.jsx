import React from 'react'
import PassengerInfo from '../components/common/PassengerInfo'
import YourStatusTicket from '../components/common/YourStatusTicket'
import { useNavigate } from 'react-router-dom'
import { useContextBus } from '../context/contextBus';

function Checkout() {
    const navigate = useNavigate();


   
   
  return (

    <>
    <button className='text-red-500 hover:text-black text-sm mx-16' onClick={() => navigate(-1) }> Go Back</button>
     < div className='grid lg:grid-cols-2  gap-x-14 m-16'>
       
       <PassengerInfo/>


       <YourStatusTicket/>

       
   </div></>
   
  )
}

export default Checkout