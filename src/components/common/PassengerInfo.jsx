import React, { useState } from 'react'
import { useForm } from 'react-hook-form';
import PaymentMethod from './PaymentMethod';
import { useContextBus } from '../../context/contextBus';
import { Navigate, useNavigate } from 'react-router-dom';

function PassengerInfo() {
    const {handleSubmit, register} = useForm();
    const { handleInfOrder} = useContextBus();
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
    const[phone,setPhone]=useState("");
    const [pickupStation, setPickupStation]=useState("");
    const [payMethod ,SetPayMethod]=useState("");
    const navigate = useNavigate();





    function handleForm (){

        const dataForm={
            name,
            email,
            phone,
            pickupStation,
            payMethod
        }

        handleInfOrder(dataForm);
        navigate('/invoice')
        
    }


    return(
    <div >
        <h3 className='text-gray-700 font-semibold'>
            Passenger Information
        </h3>

        <div >
          <form  id="hook-form"className=' text-gray-500 space-y-4' onSubmit={handleSubmit(handleForm)}>
                <div className=' w-full ' >
                    <label className='block'>Full name</label>
                    <input type='text '  className='border-2 w-full border-gray-300 rounded-md px-2 py-1' name='name' onChange={(e) => setName(e.target.value)}/>

                </div>
                <div className=' w-full ' >
                    <label className='block'>Email Adress</label>
                    <input type='email ' className='border-2 w-full border-gray-300 rounded-md px-2 py-1' name='email'onChange={(e) => setEmail(e.target.value)}/>

                </div>
                <div className=' w-full ' >
                    <label className='block'>Phone</label>
                    <input type='tel ' className='border-2 w-full border-gray-300 rounded-md px-2 py-1' name='phone' onChange={(e) => setPhone(e.target.value)}/>

                </div>
                <div className=' w-full ' >
                    <label className='block'>Pickup Station</label>
                    <select id="pickupStation" name="pickupStation"  onChange={(e) => setPickupStation(e.target.value)} className="border-2 w-full border-gray-300 rounded-md px-2 py-1">
                    <option value="Mutamba">Mutamba</option>
                    <option value="Morro da Luz">Morro da Luz</option>
                    <option value="Casa da Juventude em Viana">Casa da Juventude em Viana</option>
                    <option value="Largo 1º de Maio">LLargo 1º de Maio</option>

                    </select>
                   

                </div>

                <div  className='grid grid-cols-2 gap-4'>
        <div className='grid grid-cols-3 hover:bg-red-100 justify-between border-2 px-4  border-gray-300 rounded-md  items-center'>

           <div className='col-span-2'>
           <div className='grid grid-cols-2  justify-center items-center gap-2'>

<img src='https://res.cloudinary.com/dib1opete/image/upload/v1741782165/busTicket/ihpf1qrotfoc9hje7bfi.png'/>
<div className='text-[12px]  '>
    <p className='font-semibold' > Leonardo B</p>
    <p>****8888</p>
</div>
</div>
           </div>

            <div className='flex justify-end'>
                <input type="radio" id="methodPayment" name="methodPayment" value="mastercard"  onClick={(e)=> SetPayMethod(e.target.value )}/>
            </div>
           
        </div>
        <div className='grid grid-cols-3  hover:bg-red-100  justify-between border-2 px-4  border-gray-300 rounded-md  items-center'>

           <div className='col-span-2'>
           <div className='grid grid-cols-2  justify-center items-center gap-2'>

<img src='https://res.cloudinary.com/dib1opete/image/upload/v1741782165/busTicket/b3k56cl6l4bsikqgwufq.png'/>
<div className='text-[12px]  '>
    <p className='font-semibold' > Leonardo B</p>
    <p>****6564</p>
</div>
</div>
           </div>

            <div className='flex justify-end'>
                <input type="radio" id="methodPayment" name="methodPayment" value="mastercard"/>
            </div>
           
        </div>

    </div>
    <div className='flex justify-end'>
        <button  className='text-red-500'> + Add New Card</button>
    </div>


    
    <div className='flex justify-center'>
        <button  onSubmit={handleForm}  className='bg-red-500 text-gray-50 px-8 text-sm py-1.5 text-center rounded-lg'>PROCESSED TODAY </button>
        </div>
        
       
    
  
            </form>

        </div>
    </div>
  )
}

export default PassengerInfo