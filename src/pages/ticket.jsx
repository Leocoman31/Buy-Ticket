import React from 'react'
import HeroLayoult from '../components/UI/HeroLayoult'
import Search from '../components/common/Search'
import Filter from '../components/UI/Filter'
import RouterBus from '../components/UI/RouterBus'


 

function Ticket() {
  return (
    <div className='space-y-16 w-full min-h-screen  '>
      <HeroLayoult  bgCover={"https://res.cloudinary.com/dib1opete/image/upload/v1741782165/busTicket/b0hiaw0xven18xxhtbnq.png"} title={"All the Bus" } subtitle={"Choose the best travel route" }/>
      <main className=" mt-[600px] md:mt-[65%] lg:mt-[55%] xl:mt-[40%] min-h-screen space-y-8 px-16">
      <h1 className='text-[2rem] text-black  font-bold text-center'>Want to change the route?</h1>
      <Search/>
      <div className='grid  grid-cols-3 my-8'>
        
        <div className='hidden lg:block'>  <Filter/></div>
      
        
        <div className='col-span-3 lg:col-span-2'>
  
          <RouterBus/>

        </div>
      </div>
     
        
    </main>
    
      
    </div>
  )
}

export default Ticket