import React from 'react'
import { motion } from 'framer-motion'
import laptop from '../assets/laptop.png';
import fors from '../assets/for.png';
import { ExternalLink } from 'lucide-react';

const Forever = () => {
    const neotech = [
        { id: 1,  name: "React", data: "React"},
        { id: 2,  name: "Css", data: "Css"},
        { id: 3,  name: "Lenis", data: "Lenis"},
      
    ];

  return (
    <div className='min-h-screen p-28'>
  
<div className='flex items-center justify-between md:px-12 px-12 pt-12'>
<div className='flex  items-center justify-between gap-12'>
    <div className='flex flex-col w-1/2'>
        <div className='flex flex-col md:flex-row items-center gap-12'>
    <motion.h1 initial = {{ opacity: 0, translateY: 20}}
                 whileInView={{ opacity: 1, translateY: 0 }}
                 transition={{type: 'spring', duration: 1, delay: 2 }} 
    className='text-5xl md:text-6xl text-[#FFD700] '>Forever&#8330;</motion.h1>
     <div className='flex gap-8  mb-8  md:mb-0 md:ml-0'>
        <motion.button initial = {{ opacity: 0, translateY: 20}}
                 whileInView={{ opacity: 1, translateY: 0 }}
                 transition={{type: 'spring', duration: 1, delay: 2 }}
        className='text-white text-2xl flex items-center gap-2 justify-center border-2 rounded-md py-1 px-4'><a href = "https://github.com/lukaChikashvili/forever-website" target='_blank' data-replace = 'Github'><span>Github</span></a><ExternalLink size={20} /></motion.button>
        <motion.button  initial = {{ opacity: 0}}
                 whileInView={{ opacity: 1}}
                 transition={{type: 'spring', duration: 1, delay: 2.1 }} className='text-black text-2xl flex items-center gap-2 justify-center border-2 bg-[#FFD700] rounded-md py-1 px-4 duration-500 ease hover:bg-transparent'><a href='https://lukachikashvili.github.io/forever-website/'  target='_blank' data-replace = 'Live'><span>Live</span></a><ExternalLink size={20} /></motion.button>
     </div>
    </div>
    <motion.p initial = {{ opacity: 0, translateY: 20}}
                 whileInView={{ opacity: 1, translateY: 0 }}
                 transition={{type: 'spring', duration: 1, delay: 2.2}} 
    className='text-white text-2xl w-64 md:w-full -ml-12 md:-ml-0 mt-8'>Discover Forever, the revolutionary perfume that transcends 
    the ordinary. Our unique blend not only captivates the senses but also promises an eternal allure. With 
    Forever, each spritz whispers of immortality, granting you timeless elegance and everlasting charm. 
    Experience the essence of forever &minus; because with Forever, you do not just wear a fragrance, you live it.</motion.p>

 

         <div className='hidden md:flex  gap-8 mt-8 -ml-16 md:-ml-0'>
      {neotech.map((value, i) => (
        
         <motion.button initial = {{ opacity: 0, translateY: 20}}
         whileInView={{ opacity: 1, translateY: 0 }}
         transition={{type: 'spring', duration: 1, delay: i * 0.5 }} 
         className='text-white flex items-center  justify-center text-2xl border-2 w-28 h-10 rounded-md ' key={value.id}><a data-replace = {value.data}><span>{value.name}</span></a></motion.button>
         
      ))}
</div>
    </div>
    
           
                    <motion.img initial = {{opacity: 0}}
                 whileInView={{ opacity: 1 }}
                 transition={{ duration: 1, delay: 0.8 }} src={laptop} className='hidden md:block absolute right-2 -z-10' style={{width: '900px'}} />
                    <motion.img initial = {{opacity: 0}}
                 whileInView={{ opacity: 1 }}
                 transition={{  delay: 0.7 }} src = {fors} className='hidden md:block absolute w-96 right-64 rounded-md' style={{width: '400px', height: '250px'}}/>
                  
    
</div>


</div>
  
</div>
  )
}

export default Forever
