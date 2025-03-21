import React, { useEffect } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import { MdOutlineChair } from "react-icons/md";
import HeroLayoult from '../components/UI/HeroLayoult';



import { useState } from 'react';
import Amenities from '../components/common/Amenities';
import ReservationPolicies from '../components/common/ReservationPolicies';
import ImageBus from '../components/common/ImageBus';

import { useContextBus } from '../context/contextBus';

function TicketDetail() {
 const{verificationSeat,
  handleSeatSelected,
  selectedSeat,
  setSeletectSeat,getBus,handleCheckoutInfo} = useContextBus();
  const [showDetail, setShowDetail] = useState(false);
  const [bus,setBus] = useState({});
  const[date,setDate] =useState(new Date())
  



  const navigate = useNavigate()

  const {name} = useParams();

  useEffect(function(){
    const name_bus = getBus(name)
    setBus(name_bus);
  },[name]);

  

 
const busSeatData=[
  { id: 'B1', status: 'available' },
  { id: 'B3', status: 'available' },
  { id: 'B5', status: 'available' },
  { id: 'B7', status: 'available' },
  { id: 'B9', status: 'available' },
  { id: 'B11', status: 'available'},
  { id: 'B13', status: 'available'},
  { id: 'B15', status: 'available'},
  { id: 'B17', status: 'available'},

  { id: 'B2', status: 'available'},
  { id: 'B4', status: 'available'},
  { id: 'B6', status: 'available'},
  { id: 'B8', status: 'available'},
  { id: 'B10', status: 'available'},
  { id: 'B12', status: 'available'},
  { id: 'B14', status: 'available'},
  { id: 'B16', status: 'available'},
  { id: 'B18', status: 'available'},

 

  { id: 'A1', status: 'available'},
  { id: 'A3', status: 'available'},
  { id: 'A5', status: 'available'},
  { id: 'A7', status: 'available'},
  { id: 'A9', status: 'available'},
  { id: 'A11', status: 'available'},
  { id: 'A13', status: 'available'},
  { id: 'A15', status: 'available'},
  { id: 'A17', status: 'available'},

  { id: 'A2', status: 'available'},
  { id: 'A4', status: 'available'},
  { id: 'A6', status: 'available' },
  { id: 'A8', status: 'available' },
  { id: 'A10', status: 'available'},
  { id: 'A12', status: 'available' },
  { id: 'A14', status: 'available' },
  { id: 'A16', status: 'available'},
  { id: 'A18', status: 'available'},
]





    


    //const busdata = useSelector(getBus);
    
   // console.log('coman -',busdata);
   
    //const newBus = getBus(bus_name);

    
    function handleCheckout(){
  
      const newCheckOut={
        from:bus.from,
        to:bus.to,
        hourFrom:bus.hourFrom,
        hourTo:bus.hourTo,
        name:bus.busName,
        seats:selectedSeat,
        price:bus.price,
        totalPrice:bus.price*selectedSeat.length,
        date
      

      }

      handleCheckoutInfo(newCheckOut);
      navigate("/ticket/checkout")
      //return <Checkout selectedSeat={selectedSeat}/>
    }
  return (
    <div className='mt-16 min-h-screen'>

      <div className='mx-16'>
      <input type='date' name='date ' value={date}  onChange={(e) => setDate(e.target.value)}   className='border-2 border-gray-300 relative rounded-lg px-2 py-1 bg-white '  />
      </div>
   
    <div className='grid lg:grid-cols-5 gap-12 mx-16'>
      <div className='col-span-5 lg:col-span-3'>
        <h1 className='text-gray-700 my-2 text-center'> Click on available seats to reserve yur seat.</h1>

        {//currentBus.busSeatData.map((seat) => <p key={seat.id}>{seat.status}</p>)
        }
        
          <div className=' w-full  h-auto grid grid-cols-9  '>
            
          {busSeatData.slice(0,9).map(seat => <div key={seat.id} className='flex  justify-center items-center text-[12px] lg:text-md  gap-x-1 lg:gap-x-2'
          
          >
            <p >{seat.id}</p>
            <button onClick={() => handleSeatSelected(seat, seat.id,setSeletectSeat)}><MdOutlineChair  className={`${verificationSeat(seat,selectedSeat)}`}></MdOutlineChair></button>
         
          </div>)
}

          </div>
          <div className=' w-full h-auto grid grid-cols-9  '>
            
            {busSeatData.slice(9,18).map(seat => <div key={seat.id} className='flex  justify-center items-center text-[12px] lg:text-md  gap-x-1 lg:gap-x-2'>
              <p>{seat.id}</p>
              <button onClick={() => handleSeatSelected(seat, seat.id,setSeletectSeat)}><MdOutlineChair  className={`${verificationSeat(seat,selectedSeat)}`}></MdOutlineChair></button>
           
            </div>)
  }
  
            </div>
            <div className=' w-full h-auto grid grid-cols-9  '>
            
            {busSeatData.slice(18,27).map(seat => <div key={seat.id} className='flex  justify-center items-center text-[12px] lg:text-md  gap-x-1 lg:gap-x-2'>
              <p>{seat.id}</p>
              <button onClick={() => handleSeatSelected(seat, seat.id,setSeletectSeat)}><MdOutlineChair  className={`${verificationSeat(seat,selectedSeat)}`}></MdOutlineChair></button>
           
            </div>)
  }
  
            </div>
            <div className=' w-full h-auto grid grid-cols-9  '>
            
            {busSeatData.slice(27,36).map(seat => <div key={seat.id} className='flex  justify-center items-center text-[12px] lg:text-md  gap-x-1 lg:gap-x-2'>
              <p>{seat.id}</p>
              <button onClick={() => handleSeatSelected(seat, seat.id,setSeletectSeat)}><MdOutlineChair  className={`${verificationSeat(seat,selectedSeat)}`}></MdOutlineChair></button>
           
            </div>)
  }
  
            </div>

            <div className='flex gap-4 justify-center items-center my-8 '> 
              <div className='flex gap-2 text-gray-500 justify-center items-center'>
              <MdOutlineChair size={15} />
              <p className='text-sm'>Available</p>

              </div>
              <div className='flex gap-2 text-red-500 justify-center items-center'>
              <MdOutlineChair size={15} />
              <p className='text-sm'>Booked</p>

              </div>
              <div className='flex gap-2 text-yellow-500 justify-center items-center'>
              <MdOutlineChair size={15} />
              <p className='text-sm'>Selected</p>

              </div>
            
            </div>

        

       



        </div>

        <div className='col-span-5 lg:col-span-2 border-2 border-gray-300 p-4 space-y-2 rounded-xl'>

          <div className='flex justify-between  '>
          <h1 className='text-gray-700 text-md font-semibold'>Your Destination</h1>
          <h1 className='text-red-500'>Change Route</h1>
          </div>

          <div className='flex justify-between   text-sm text-gray-500'>
          <p >From ({bus.from})</p>
          <p >To ({bus.to})</p>
          </div>
          <div className='flex justify-between   text-sm text-gray-700'>
          <p >{bus.hourFrom}</p>
          <p>{bus.hourTo}</p>
          </div>
          <div>
            <p className='text-md   font-semibold text-gray-700'>Selected Seats</p>
            <div  className='flex  gap-2'>
            {selectedSeat.map((seat) =><div className='  rounded-lg p-2 bg-gray-300' key={seat}>
              <p className='text-sm text-gray-800'>{seat}</p>

            </div>)}

            </div>
          
            </div>

            <div>
           
            <div className='flex justify-between text-sm text-gray-700'>
              <p>Total Price</p>
              <p>{bus.price*selectedSeat.length}</p>
              </div>

              </div>

              <div className='bg-red-500 text-white text-center hover:bg-red-700 px-4 py-1 rounded-lg my-4 '>
                <button  onClick={() => handleCheckout()} className='text-sm'>PROCESS TO CHECKOUT</button>
              </div>


         
          
        </div>

    </div>
      <div id='details-bus' className='mx-16 my-8'>
        <div>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidente ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat. 
            Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.<span className='text-gray-800 font-semibold'>Do you want to see more about the Bus ?</span> </p>

            <div className=' flex justify-center items-center my-4'>
            <button onClick={() => setShowDetail(!showDetail)}  className='border-1 border-red-600 bg-white hover:bg-red-500 hover:text-white px-4 py-1'>{ !showDetail ? <p>Show Bus Details</p> :<p>Hide Bus Details</p>}</button>

            </div>
              
        

        </div>

        {showDetail && (
          <div>
            <div div className='grid md:grid-cols-2 gap-4 my-8 border justify-center items-center border-gray-300 p-4 '>
            <Amenities/>
            <ReservationPolicies/>
     
              </div>
              <ImageBus/>
            
            
            

        </div>)}
      </div>
    </div>
  )
}

export default TicketDetail