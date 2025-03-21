import React from 'react'
import HeroLayoult from '../components/UI/HeroLayoult'
import FormContact from '../components/common/FormContact'
import ListFaqs from '../components/UI/ListFaqs'

function About() {
  return (
    <div className= 'space-y-16 w-full min-h-screen'>
    <HeroLayoult bgCover={"https://res.cloudinary.com/dib1opete/image/upload/v1741782165/busTicket/b0hiaw0xven18xxhtbnq.png"} title={"About us"} subtitle={"Everything about us "}/>
    <main className=" mt-[650px] md:mt-[65%] lg:mt-[55%] xl:mt-[40%] min-h-screen space-y-8 px-16">
    <div className='grid  lg:grid-cols-2 gap-x-16 justify-center items-center'>
      <div className='text-gray-500 space-y-4'>
        <h1 className='text-lg font-semibold '>About Bus-Ticket</h1>
        <p className=' text-justify'> 
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidente ut labore et dolore magna aliqua.
       Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat.Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidente ut labore et dolore magna aliqua. 
         Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea comodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
        
        </p>

      </div>
      <div >
      <FormContact />
      </div>
    
    </div>
    
    <ListFaqs/>
      
    </main>
  
 
    
    </div>
    
  )
}

export default About