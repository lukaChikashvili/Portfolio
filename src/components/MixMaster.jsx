import React from 'react'
import { motion } from 'framer-motion'
import laptop from '../assets/laptop.png';
import mix from '../assets/mix.png';
import { ExternalLink } from 'lucide-react';


const MixMaster = () => {
    const neotech = [
        { id: 1,  name: "React", data: "React"},
        { id: 2,  name: "Tailwind.css", data: "Tailwind.css"},
        { id: 3,  name: "Three.js", data: "Three.js"},
        { id: 4,  name: "MaterialUI", data: "MaterialUI"}
    ];

  return (
    <div className='min-h-screen p-28'>
  
<div className='flex items-center justify-between md:px-12 px-12 pt-12'>
<div className='flex  items-center justify-between gap-12'>
    <div className='flex flex-col w-1/2 '>
        <div className='flex flex-col md:flex-row items-center gap-12'>
    <motion.h1 initial = {{ opacity: 0, translateY: 20}}
                 whileInView={{ opacity: 1, translateY: 0 }}
                 transition={{type: 'spring', duration: 1, delay: 2 }} 
    className='text-6xl text-[#FFD700] '>MixMaster</motion.h1>
     <div className='flex gap-8  mb-8  md:mb-0 md:ml-0 '>
        <motion.button initial = {{ opacity: 0, translateY: 20}}
                 whileInView={{ opacity: 1, translateY: 0 }}
                 transition={{type: 'spring', duration: 1, delay: 2 }}
        className='text-white text-2xl flex items-center gap-2 justify-center border-2 rounded-md py-1 px-4'><a href = "https://github.com/lukaChikashvili/MixMaster" target='_blank' data-replace = 'Github'><span>Github</span></a><ExternalLink size={20} /></motion.button>
        <motion.button  initial = {{ opacity: 0}}
                 whileInView={{ opacity: 1}}
                 transition={{type: 'spring', duration: 1, delay: 2.1 }} className='text-black text-2xl flex items-center gap-2 justify-center border-2 bg-[#FFD700] rounded-md py-1 px-4 duration-500 ease hover:bg-transparent'><a href='https://mix-master-seven.vercel.app/'  target='_blank' data-replace = 'Live'><span>Live</span></a><ExternalLink size={20} /></motion.button>
     </div>
    </div>
    <motion.p initial = {{ opacity: 0, translateY: 20}}
                 whileInView={{ opacity: 1, translateY: 0 }}
                 transition={{type: 'spring', duration: 1, delay: 2.2}} 
    className='text-white text-2xl w-64 md:w-full -ml-12 md:-ml-0 mt-8 '>Welcome to MixMaster, the cutting edge 3D software 
    designed for artists, designers, and creators who want to bring their imagination to life 
    with ease and precision. Whether you are a seasoned professional or a budding enthusiast, 
    MixMaster provides a robust suite of tools to help you create stunning 3D models, 
    add rich materials and textures, and render breathtaking images.</motion.p>

    <motion.p initial = {{ opacity: 0, translateY: 20}}
                 whileInView={{ opacity: 1, translateY: 0 }}
                 transition={{type: 'spring', duration: 1, delay: 2.2}} 
    className='text-white text-2xl w-64 md:w-full -ml-12 mt-4 md:-ml-0'>Easily move your meshes in the 3D space
     to the perfect spot. Our intuitive controls allow for smooth and precise adjustments, 
    enabling you to place elements exactly where they need to be in your scene.</motion.p>

         <div className='hidden md:flex gap-8 mt-8 -ml-16 md:-ml-0'>
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
                 transition={{ duration: 1, delay: 0.8 }} src={laptop} className='absolute right-2 -z-10 hidden md:block' style={{width: '900px'}} />
                    <motion.img initial = {{opacity: 0}}
                 whileInView={{ opacity: 1 }}
                 transition={{  delay: 0.7 }} src = {mix} className=' hidden md:block absolute w-96 right-64 rounded-md' style={{width: '400px', height: '250px'}}/>
                  
    
</div>


</div>
  
</div>
  )
}

export default MixMaster
