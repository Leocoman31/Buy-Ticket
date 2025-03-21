import React from 'react'

function PaymentMethod() {
  return (
    <>
   
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
                <input type="radio" id="methodPayment" name="methodPayment" value="mastercard"/>
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
        <button className='text-red-500'> + Add New Card</button>
    </div>
    </>
  )
}

export default PaymentMethod