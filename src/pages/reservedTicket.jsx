import React, { useCallback, useRef } from 'react'
import { useContextBus } from '../context/contextBus'
import HeroLayoult from '../components/UI/HeroLayoult'
import { HiCheckBadge } from "react-icons/hi2";
import {toPng} from 'html-to-image';
import download from 'downloadjs';

function Invoice() {
     const{
        infOrder,
        checkout,
        selectedSeat,
       
      } =useContextBus();



    const invoiceRef = useRef(null)

    
const handleDownlooadInvoice = async () => {
    if (invoiceRef.current === null) {
      return
    }

    try{
        const dataUrl = await toPng(invoiceRef.current);
        download(dataUrl,"invoice.png")
    }catch(error){
        console.error("Error while downloading the invice", error)
    }
} 






  return (

    <div className='mt-16 min-h-screen'>
      

<div className='m-16'>
    
<div ref={invoiceRef}>
<div className=' bg-red-500  rounded-lg  '>

<div className='grid grid-cols-3 justify-center items-center gap-4 text-white'>

           
                <div className='flex items-center gap-2 px-4 py-1'>
                    <img src='https://res.cloudinary.com/dib1opete/image/upload/v1741782224/busTicket/brbj3vqcuqpq18bonu1d.png' height="40px" width="80px"/>
                    <p className='text-sm uppercase' >{checkout.name}</p>

                </div>
                <div className='flex justify-center items-center'>
                    <p className='text-white text-sm'> {checkout.name}</p>
                </div>

                <div  className=' px-4 py-1 '>

                <p className='text-white text-sm'>Bus Ticket</p>

                    </div>

                


            
     

</div>

    <div className='bg-white grid grid-cols-3 gap-4'>
        
        
        <div  className='col-span-2'>
            <div className='flex justify-between text-[10px] px-4 py-2 text-gray-700'>
                <p >Bill No.:565</p>
                <p >{checkout.price} Kz/ seat</p>
                <p >Date:2025-20-03</p>

            </div>
            <div className='flex justify-between gap-4 px-4 py-2 '>
                <div className='text-[10px] text-gray-700'>
                    <p> Name of Passenger: <span className='font-semibold'>{infOrder.name}</span></p>
                    <p>Total Seat No.: {selectedSeat.map(seat => <span key={seat} className='font-semibold mx-2'>{seat}</span>)}
                    </p>
                    <p>Total No. of Passenger: <span className='font-semibold'>{selectedSeat.length} Only</span>
                    </p>
                    <p> Pickup Station: <span className='font-semibold'>{infOrder.pickupStation}</span></p>

                </div>

                <div>
                    <p className='text-[10px] text-gray-700 text-center'>Total Price</p>
                    <p className=' text-[10px] font-bold text-center'>{checkout.totalPrice} Kz</p>
                    <div className='flex gap-2 text-[10px] justify-center items-center rounded-xl px-5 py-1 border border-green-600 text-green-600 bg-green-100'>
                    <HiCheckBadge/>
                        <p >Paid</p>

                    </div>

                </div>

                <div>
                    <img src='https://res.cloudinary.com/dib1opete/image/upload/v1742470614/qr-code_puqqbz.gif' width="100px" height="100px"/>
                </div>

            </div>

            <div className='flex justify-between px-4 py-2 text-gray-700 text-[10px]'>
                <p> {checkout.from} - {checkout.to}</p>
                <p> Arrive 15min before {checkout.hourFrom}</p>
                <p> Departure at {checkout.hourFrom}</p>

            </div>
            
        </div>


        <div className='bg-white border-l-2 border-dashed   border-gray-500  text-gray-700 text-[10px] px-4 py-2'>
           <p> Bill No. {Math.floor(Math.random()* (10-1)+1)}</p>
           <p>Date:{checkout.date}</p>
           <p>From:{checkout.from}</p>
           <p>To:{checkout.to}</p>
           <p>Dept. Time:{checkout.hourFrom}</p>
           <p>Seat:{selectedSeat.map(seat => <span key={seat} className='font-semibold mx-2'>{seat}</span>)}</p>
           <p>Total No. of Passenger: <span>{selectedSeat.length} Only</span></p>
           <p>Total Price: {checkout.totalPrice} kz</p>
           
            
        </div>
        </div>

        <div className='bg-red-500 grid grid-cols-3 rounded-b-lg gap-4'>
            <div className='col-span-2'>
            <div className=' flex justify-between px-4 py-2 text-gray-100 text-[10px] '>

<p>Note:40% charge for cancelation price 24 hours of programme. </p>
<p>999 99 99 99</p>
</div>

            </div>

            <div className='px-4 py-2 text-gray-100 text-[10px]'>
            <p>999 99 99 99</p>
            
        </div>
        </div>

       

    <div>
 
        

       
        
    </div>

 </div>

</div>
</div>
         

         <div className='w-full flex justify-center '><button onClick={handleDownlooadInvoice}  className=' bg-red-500 px-8 py-2 text-white text-center rounded-md '>Download Ticket</button></div>
    </div>
  )
}

export default Invoice