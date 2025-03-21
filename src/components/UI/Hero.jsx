import React from 'react'
import { motion } from 'motion/react';
import { fadeIn } from '../../framerMotion/variants'
import Search from '../common/Search';
function Hero() {

  
  return (
    <>
    <section id='hero'>
        <div className='w-full flex-1 h-screen bg-[url("https://res.cloudinary.com/dib1opete/image/upload/v1741782165/busTicket/b0hiaw0xven18xxhtbnq.png")] bg-cover bg-no-repeat absolute top-0 '>

        <div className='absolute top-10 w-full h-full py-[9ch]'>
          <div className='space-y-2'>
            <motion.p
            initial={{opacity:0 , y:-800}}
            animate={{opacity:1, y:0}}
            exit={{opcaity:0, y:-800}}
            transition={{duration:2,ease:"easeOut"}}
             className='text-lg text-center text-neutral-500 font-medium'>
              Get you bus tickets
            </motion.p>
            <motion.h1
            initial={{opacity:0 , y:-800}}
            animate={{opacity:1, y:0}}
            exit={{opcaity:0, y:-800}}
            transition={{duration:2,ease:"easeOut"}}
             className='text-5xl text-center text-neutral-800 font-bold capitalize'>
              Find best bus for you!
            </motion.h1>

            <div className='m-8'> 
            <Search/>

            </div>
         


          </div>
          </div>
        </div>

    </section>
    </>
  )
}

export default Hero