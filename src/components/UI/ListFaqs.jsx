import React from 'react'
import {faq as listFaqs} from '../../data/dummy_data'
import Faq from '../common/Faq'

function ListFaqs() {
  return (

    <div className=' lg:mx-24'>

<h2 className="text-center  text-gray-500 text-lg ">
        FAQS
    </h2>
    <h1 className=' text-center text-gray-500 font-semibold'>
    Frequently Ask Question</h1>
        
        {
            listFaqs.map((faq,index) => <Faq faq={faq} index={index} key={faq.title}/>)
            
        }
    </div>
  )
}

export default ListFaqs