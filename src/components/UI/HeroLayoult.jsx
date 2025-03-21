import React from 'react'
import { motion } from 'motion/react';

function HeroLayoult({bgCover, title,subtitle}) {
  return (
    <div className='w-full h-screen  flex-1 bg-cover bg-no-repeat absolute top-0'
    style={{backgroundImage: `url(${bgCover})`}}>
      <div className='  absolute top-40 w-full  py-[9ch]'>
      <motion.h1 initial={{opacity:0 , y:-800}}
            animate={{opacity:1, y:0}}
            exit={{opcaity:0, y:-800}}
            transition={{duration:2,ease:"easeOut"}}
             className='text-lg text-center text-neutral-500 font-medium] '>{title}</motion.h1>
      <motion.h1 initial={{opacity:0 , y:-800}}
            animate={{opacity:1, y:0}}
            exit={{opcaity:0, y:-800}}
            transition={{duration:2,ease:"easeOut"}}
             className='text-black  text-center text-5xl font-bold'>{subtitle}</motion.h1>
        </div>
    

    </div>
  )
}

export default HeroLayoult