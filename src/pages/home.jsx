import React from 'react'
import Hero from '../components/UI/Hero'

import Services from '../components/UI/Services'
import TopSearchRoutes from '../components/UI/TopSearchRoutes'
import Footer from '../components/UI/Footer'

function Home() {
  
  return (
    <div className=' w-full  '>
    <Hero/>
    
    <main className='mt-[500px] md:mt-[60%] lg:mt-[50%] xl:mt-[40%] min-h-screen px-16'>
      <Services/>
      <TopSearchRoutes/>
        
    </main>
    </div>
  )
}

export default Home