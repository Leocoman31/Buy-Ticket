import React from 'react'
import {topRoutes} from '../../data/dummy_data'
import CardTopSearchRoutes from '../common/CardTopSearchRoutes'

function TopSearchRoutes() {
  return (
    <section className='space-y-12 my-12'> 
        <h1 className='text-[2rem] text-black   font-bold text-center'> Top Search <span className='text-red-500'>Routes</span></h1>
   <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-4 '>
{
    topRoutes.map((topRoute) => <CardTopSearchRoutes topRoute={topRoute} key={topRoute.id}/>)
}
    
   </div>
    </section>
  )
}

export default TopSearchRoutes