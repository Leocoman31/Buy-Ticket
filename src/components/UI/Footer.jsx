import React from 'react'
import { Link } from 'react-router-dom'
import { FaFacebook } from "react-icons/fa";
import { AiFillInstagram } from "react-icons/ai";
import { FaTelegram } from "react-icons/fa6";
import { AiFillTikTok } from "react-icons/ai";
import {methodPayment} from "../../data/dummy_data"
import {topRoutes} from '../../data/dummy_data'

function Footer() {
  return (
    <footer className='bg-black   w-full p-8 space-y-4'>
        <div className='grid grid-cols-4 gap-4'>
            <div>
            <h1 className='text-lg lg:text-3xl font-bold text-red-400'>BusTicket</h1>
            <p className='text-gray-500 text-sm'>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.
             At vero eos et accusam et justo duo dolores et ea rebum.
            </p>
            </div>

            <div>
               <h1 className='text-md font-bold text-gray-400'>Quick Links</h1> 
               <ul className='text-sm text-gray-500'>
                <li><Link to="/">Home</Link></li>
                <li> <Link to="services">Services</Link></li>
                <li><Link to="ticket">Ticket</Link></li>
                <li><Link to="about">About</Link></li>  
               </ul>
            </div>
            <div>
            <h1 className='text-md font-bold text-gray-400'>Top Reserved Routes</h1>
            {topRoutes.map((topRoute) => <p className='text-sm text-gray-500'>{topRoute.from} - {topRoute.to}</p>)}
             
            </div>
            <div>
                <h1 className='text-md font-bold text-gray-400'>Support Links </h1>
                <ul className='text-sm text-gray-500'>
                <li><Link to="/">Privacy Policy</Link></li>
                <li> <Link to="/">Terms & Conditions</Link></li>
                <li><Link to="/">Help & Support Center</Link></li>
                <li><Link to="/">FaQs</Link></li>  
               </ul>
            </div>

        </div>

        <div className='flex gap-4'>
        <FaFacebook className="text-sky-50 hover:text-red-400" size={25}/>
        <AiFillInstagram className="text-sky-50 hover:text-red-400" size={25}/>
        <FaTelegram className="text-sky-50 hover:text-red-400" size={25}/>
        <AiFillTikTok className="text-sky-50 hover:text-red-400" size={25}/>
        </div>

        <div className='flex justify-between items-center '>
            <div>
                <p className='text-gray-500 text-[10px] md:text-sm'>
                © Copyright BusTicket -All rights reserved,developed by Leonardo Comendala.
                </p>
            </div>
            <div className='flex gap-4 '>
                {methodPayment.map((payment) =><img key={payment.id} className='w-[50px] h-[40px] md:w-[120px] md:h-[100px] ' src={`${payment.image}`} />)}
             
            </div>

        </div>

    </footer>
  )
}

export default Footer