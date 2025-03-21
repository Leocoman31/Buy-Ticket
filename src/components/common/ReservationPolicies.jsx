import React from 'react'

function ReservationPolicies() {
  return (
    <div>
         <h3 className=' font-semibold text-gray-700'>Reservations Policies</h3>
        <ul className='list-disc text-gray-600 text-sm p-2 '>
            <li>
                Pleade note that this ticket is non0refundable,
            </li>
            <li>
                Passengers must kepp their tickets until the journey ends, otherwise, they will need to purchase a new one.
            </li>
            <li>
                Tickets can be cancelled 24 hours before the departure time for a 50 % fee.
            </li>
            <li>
                Bus services may be cancelled, rescheduled, or delayed due to natural disaster or other unforessen circumstances.
            </li>
             <li>
                Passangers must arrive at the bording point 30 minutes before the departure time. The Company is not responsible for missed buses due to late arrivals.
                
            </li>
        </ul>
    </div>
  )
}

export default ReservationPolicies