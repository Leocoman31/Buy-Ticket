import React from 'react'
import {routesBuss} from '../../data/dummy_data'
import CardRouteTicket from '../common/CardRouteTicket'
import { useState } from 'react';

function RouterBus() {
  const [showRoutes, setShowRoutes] = useState(false);
  return (
    <>
    {showRoutes ? (
      <div className='my-4'>
         <div className='grid md:grid-cols-2 gap-4'>

{routesBuss.map((routeB) => <CardRouteTicket key={routeB.id} routeB={routeB} />)}
</div>
<div className='w-full 0 my-4  text-center'><button className='bg-red-500 text-sm py-1.5 px-5 rounded-lg text-gray-50 hover:bg-red-700' onClick={() => setShowRoutes(!showRoutes)}>See Less</button></div>

      </div>)
   
  : (
    <div className='my-4'>
       <div className='grid md:grid-cols-2 gap-4'>

{routesBuss.slice(0, 6).map((routeB) => <CardRouteTicket key={routeB.id} routeB={routeB} />)}
</div>

<div className='w-full 0 my-4  text-center'><button className='bg-red-500 text-sm py-1.5 px-5 rounded-lg text-gray-50 hover:bg-red-700' onClick={() => setShowRoutes(!showRoutes)}>See More</button></div>

    </div>
  )
  
}

    </>
  )
}

export default RouterBus