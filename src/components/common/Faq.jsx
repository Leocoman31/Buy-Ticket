import React, { useState } from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { IoIosArrowDown } from "react-icons/io";

function Faq({faq,index}) {
    const [click, setClick] = useState(false)

    const toggle = (index) => {
      if (click === index) {
        return setClick(null)
      }
      setClick(index)
    }
  return (
    <div>
        <div className='bg-white  my-4 '>
            <div className='flex justify-between border-2 border-gray-300 hover:bg-red-400 hover:text-white hover:shadow-xl text-gray-500  p-4'>
            <button  className='text-md  '  onClick={() => toggle(index)}>{faq.title}
            
            </button>
            <span>{click === index ? <IoIosArrowDown/>:<IoIosArrowForward/>}</span>
              </div>
            {click === index ? (
                <div className='bg-red-200'>
                  <p className='p-4 text-gray-700'>{faq.desc}</p>
                </div>
              ) : null}
        
        </div>
    </div>
  )
}

export default Faq