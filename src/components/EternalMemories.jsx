import React from 'react'
import { motion } from 'framer-motion'
import laptop from '../assets/laptop.png';
import eternal from '../assets/eternal.png';
import { ExternalLink } from 'lucide-react';

const EternalMemories = () => {
    const neotech = [
        { id: 1,  name: "React", data: "React"},
        { id: 2,  name: "Tailwind.css", data: "Tailwind.css"},
        { id: 3,  name: "Three.js", data: "Three.js"},
        { id: 4,  name: "Node.js", data: "Node.js"},
        { id: 5,  name: "MongoDB", data: "MongoDB"}
    ];

  return (
    <div className='min-h-screen p-28'>
  
    <div className='flex items-center justify-between px-12 pt-12'>
    <div className='flex  items-center justify-between gap-12'>
        <div className='flex flex-col w-1/2'>
            <div className='flex items-center gap-12 '>
        <motion.h1 initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1, delay: 2 }} 
        className='text-6xl text-[#FFD700]  '>Eternal Memories</motion.h1>
         <div className='flex gap-8'>
            <motion.button initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1, delay: 2 }}
            className='text-white text-2xl flex items-center gap-2 justify-center border-2 rounded-md py-1 px-4'><a href = "https://github.com/lukaChikashvili/EternalMemories" target='_blank' data-replace = 'Github'><span>Github</span></a><ExternalLink size={20} /></motion.button>
            <motion.button  initial = {{ opacity: 0}}
                     whileInView={{ opacity: 1}}
                     transition={{type: 'spring', duration: 1, delay: 2.1 }} className='text-black text-2xl flex items-center gap-2 justify-center border-2 bg-[#FFD700] rounded-md py-1 px-4 duration-500 ease hover:bg-transparent'><a href='https://eternal-memories.onrender.com/'  target='_blank' data-replace = 'Live'><span>Live</span></a><ExternalLink size={20} /></motion.button>
         </div>
        </div>
        <motion.p initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1, delay: 2.2}} 
        className='text-white text-2xl mt-8'>Welcome to Eternal Memories, 
        your dedicated platform for commemorating the lives of your loved ones. 
        Create heartfelt biographies, share funeral locations, and view example
         memorials to draw inspiration. Our memory wall allows friends and family
          to leave touching tributes and share fond memories. Eternal Memories helps
           you preserve and celebrate the legacy of those who have passed, ensuring their
            stories live on forever. 
        Join our community and honor your loved ones with dignity and grace.</motion.p>
    
      
    
             <div className='flex gap-8 mt-8'>
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
                     transition={{ duration: 1, delay: 0.8 }} src={laptop} className='absolute right-2 -z-10' style={{width: '900px'}} />
                        <motion.img initial = {{opacity: 0}}
                     whileInView={{ opacity: 1 }}
                     transition={{  delay: 0.7 }} src = {eternal} className='absolute w-96 right-64 rounded-md' style={{width: '400px', height: '250px'}}/>
                      
        
    </div>
    
    
    </div>
      
    </div>
  )
}

export default EternalMemories
