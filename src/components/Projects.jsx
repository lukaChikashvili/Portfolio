import React from 'react'
import { motion } from 'framer-motion'
import laptop from '../assets/laptop.png';

const Projects = () => {
    const neotech = [
        { id: 1,  name: "React", data: "React"},
        { id: 2,  name: "Tailwind.css", data: "Tailwind.css"},
        { id: 3,  name: "Node.js", data: "Node.js"},
        { id: 4,  name: "MongoDB", data: "MongoDB"}
    ];


  return (
    <div className='min-h-screen p-28'>
        <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1, delay: 0.8 }} 
          className='text-6xl text-green-500'>Projects</motion.h1>

<motion.div initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.3 }} 
      className='w-full bg-white h-1'></motion.div>

<div className='flex items-center justify-between px-12 pt-12'>
    <div className='flex  items-center justify-between gap-12'>
        <div className='flex flex-col'>
        <motion.h1 initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1, delay: 2 }} 
        className='text-6xl text-green-500'>Neo Writers</motion.h1>
        <motion.p initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1, delay: 2.2}} 
        className='text-white text-2xl mt-8'>NeoWriters is a platform for aspiring authors and publishing enthusiasts. 
            With NeoWriters, you can create and edit your book, design stunning book covers, and
             publish your work with ease. The app offers a seamless experience, allowing you to 
             download your finalized book and share it with the world. Engage with other writers 
             through comments, save your favorite projects to your cart, and explore a vibrant community 
             of creators. Whether you are an experienced author or just starting out,
             NeoWriters provides the tools you need to bring your stories to life.</motion.p>

             <div className='flex gap-8 mt-8'>
          {neotech.map((value, i) => (
            
             <motion.button initial = {{ opacity: 0, translateY: 20}}
             whileInView={{ opacity: 1, translateY: 0 }}
             transition={{type: 'spring', duration: 1, delay: i * 0.5 }} 
             className='text-white flex items-center  justify-center text-2xl border-2 w-28 h-10 rounded-md ' key={value.id}><a data-replace = {value.data}><span>{value.name}</span></a></motion.button>
             
          ))}
</div>
        </div>
        <img src = {laptop} />
    </div>
</div>
      
    </div>
  )
}

export default Projects
