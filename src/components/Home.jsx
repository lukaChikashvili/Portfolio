import { MouseIcon } from 'lucide-react'
import React from 'react'
import { motion } from 'framer-motion';

const Home = () => {
     
  return (
    <section id = "home" className='min-h-screen flex item-center justify-center pt-24 home  '>
       
       <div className='flex gap-4  '>
          <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1 }}
          className='text-white hidden md:block ' style={{fontSize: '10rem'}}>&#402;</motion.h1>
        <motion.p initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.2 }}
        className='text-white hidden md:block  ' style={{fontSize: '10rem'}}>&#8317;</motion.p>
        <div className='flex flex-col  '>
        <motion.p initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.4 }}
        className='text-white    ' style={{fontSize: '8rem'}}> 
        <span className='text-[#FFD700]'>Web</span> developer</motion.p>
         <motion.p initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1 }}
         className='w-full h-2 bg-white  '></motion.p>
         <div className='flex flex-col md:flex-row gap-12 m-auto md:m-0 '>
         <motion.p initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.5 }}
         className='text-white relative  ' style={{fontSize: '5rem'}}>Creativity </motion.p>



  
         <motion.p initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.7 }}
         className='text-white relative' style={{fontSize: '5rem'}}>Passion</motion.p>

<motion.p initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.7 }}
         className=' relative text-[#FFD700] ' style={{fontSize: '3rem'}}>Skills</motion.p>
   
         </div>
         </div>
        <motion.p initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 2 }} 
         className='text-white hidden md:block ' style={{fontSize: '10rem'}}>&#8318; </motion.p>
       </div>

    </section>
  )
}

export default Home
