import React from 'react'
import { motion } from 'framer-motion';
import { Menu } from 'lucide-react';

const Header = () => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return (
    <div className='w-full flex items-center justify-between px-28 py-8 text-white  text-3xl'>
       <div
        className=" logo flex gap-4 mt-4">
         <motion.p initial = {{opacity: 0}}
                      whileInView={{opacity: 1}}
                      transition={{duration:1, delay: 1.5}}
         style={{fontSize: '70px'}}  >&radic; </motion.p>
         <div 
         className='flex flex-col '>
         <motion.span initial = {{opacity: 0}}
                      whileInView={{opacity: 1}}
                      transition={{duration:1, delay: 1.6}}
         className='text-2xl md:text-3xl absolute top-10  '>Chikashvili <p className='text-xl -right-4 text-[#FFD700] absolute -top-4 hidden md:block'>Luka</p></motion.span>
     
         </div>
       </div>

       <motion.nav initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.6 }}
       className='hidden md:flex gap-12 list-none '>
          <li><a href = "#home" data-replace = "Home"><span>Home</span></a></li>
          <li><a href = "#about" data-replace = "About"><span>About</span></a></li>
          <li><a href = "#skills" data-replace = "Skills"><span>Skills</span></a></li>
          <li><a href = "#projects" data-replace = "Projects"><span>Projects</span></a></li>
     
       </motion.nav>

       <Menu className='block md:hidden absolute right-8 duration-500 ease-in hover:text-[#FFD700]' size={30}/>

    <div className='hidden md:block'>
        <motion.a initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.6 }} href = "#" data-replace = " Tbilisi"><span> Tbilisi</span></motion.a>
        <motion.span initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.8 }}
        className='absolute text-xl top-6'>{hours}&#8758;{minutes}</motion.span>
       
    </div>
    </div>
  )
}

export default Header
