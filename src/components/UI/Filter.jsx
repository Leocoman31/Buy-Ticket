import React from 'react'

function Filter() {
  return (
    <div className='space-y-4 px-16 '>
      <h1 className='text-xl font-sembold text-gray-600'>Apply Filters</h1>
      <div id='Apply filters' className='border-2 border-gray-300 p-4 rounded-md'>
      <div className='flex justify-between text-gray-500 text-sm  font-semibold '>
        <p >150 Kz</p>
        <p>400 Kz</p>

      </div>
      <input type="range" id="vol" name="vol" min="150" max="400" className="w-full"/>

      </div>
      <div id='bus types' className='border-2 border-gray-300 p-4 rounded-md'>
      <h1 className='text-gray-600 font-semibold text-lg my-2'> Bus Types</h1>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label> Ac Deluxe(10)</label>

        </div>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label> Tourist AC Deluxe(10)</label>

        </div>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label> Air Suspension (10)</label>

        </div>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label> Luxuary AC Deluxe (10)</label>

        </div>


      </div>
      <div id='bus company' className='border-2 border-gray-300 p-4 rounded-md'>
        <h1 className='text-gray-600 font-semibold text-lg my-2'> Bus Companies</h1>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label> Sworgadwari Deluxe(10)</label>

        </div>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label> Pokhara Deluxe(10)</label>

        </div>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label> Mustang  (10)</label>

        </div>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label> Lumbini Deluxe (10)</label>

        </div>
       


      </div>
      <div id='bus company' className='border-2 border-gray-300 p-4 rounded-md'>
        <h1 className='text-gray-600 font-semibold text-lg my-2'>Amenities</h1>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label> Internet/Wiffi</label>

        </div>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label> AC and Air Suspension</label>

        </div>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label> Water Botties</label>

        </div>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label>LED TV and Music </label>

        </div>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label>Charging Port </label>

        </div>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label>Fan </label>

        </div>
        <div className='text-gray-500'>
        <input type="checkbox"/>
        <label>Super AC </label>

        </div>
       
       


      </div>
     

      </div>
  )
}

export default Filter