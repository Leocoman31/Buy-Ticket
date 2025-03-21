import React from 'react'
import { IoMenuOutline } from "react-icons/io5";
import SideBar from './SiderBar';
import { useContextSideBar } from '../../context/contextSideBar';
import { Link } from 'react-router-dom';

function HeaderPhone() {
 


    const {openSideBar,handleSideBar}=useContextSideBar();

  return (
    <header className=' sticky z-10 '>
         <div>
        { openSideBar && <SideBar/>}
        
    </div> 
         <div>
       
            <div className='flex  justify-between m-4 gap-10'>

             

                <div>
                <Link to="/" className='text-[2rem] font-bold text-red-500'>BusTicket</Link>
            </div>

            <div>
                <button className=' text-red-500 hover:text-red-900 hover:bg-red-100 rounded-full p-2'><IoMenuOutline onClick={handleSideBar}  size={40}/></button>
                </div>
              

            </div>
            </div>
         


        
   
    </header>
   
   
  )
}




export default HeaderPhone