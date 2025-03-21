import React from 'react'
import { BiSupport } from "react-icons/bi";
import { SiFsecure } from "react-icons/si";
import { RiRefund2Line } from "react-icons/ri";
import { services } from '../../data/dummy_data'

function Services() {
  return (
    <section className='space-y-12' >
        <h1 className='text-[2rem] text-black  font-bold text-center'>Our <span className='text-red-500'>services</span></h1>
        <div className='grid md:grid-cols-3 gap-4 justify-center  items-center'>
        {services.map((service)=><div className="bg-gray-300 rounded-lg h-full p-4" key={service.id}>
            <div className='flex p-4   gap-4 justify-center items-center ' >
            {//<div>{service.icon}</div>
}
            <h1 className='font-bold text-lg'>{service.title} </h1>
            </div>
            <p className='text-center'>{service.desc}</p>
            
          

</div>)}

        </div>
        

    </section>
  )
}

export default Services