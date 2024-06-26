import React from 'react'
import html from '../assets/html.png';
import css from '../assets/css.png';
import js from '../assets/js.png';
import react from '../assets/react.png';
import types from '../assets/type.png';
import node from '../assets/node.png';
import mongo from '../assets/mongo.png';
import three from '../assets/three.png';
import redux from '../assets/redux.png';
import figma from '../assets/figma.png';
import git from '../assets/git.png';
import mui from '../assets/mui.png';
import { motion } from 'framer-motion';

const Skills = () => {
  const images = [
    {id: 1, img: html},
    {id: 2, img: css},
    {id: 3, img: js},
    {id: 4, img: react},
    {id: 5, img: types},
    {id: 6, img: node},
    {id: 7, img: mongo},
    {id: 8, img: three},
    {id: 9, img: redux},
    {id: 10, img: figma},
    {id: 11, img: git},
    {id: 12, img: mui}
    
  ];

  const langs = [
    {id: 1, name: 'Georgian', data: 'Georgian'},
    {id: 2, name: 'English', data: 'English'},
    {id: 3, name: 'Spanish', data: 'Spanish'},
    {id: 4, name: 'Italian', data: 'Italian'},
    {id: 5, name: 'Portuguese',data: 'Portuguese'},
    {id: 6, name: 'French', data: 'French'},
    {id: 7, name: 'German', data: 'German'},
  ]

  return (
    <section id = "skills" className='min-h-screen p-28'>
       <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1, delay: 0.8 }} 
       className='text-6xl text-[#FFD700]'>Skills</motion.h1>
      <motion.div initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.3 }}
       className='w-full bg-white h-1'></motion.div> 

      <motion.div initial = {{opacity: 0}} whileInView={{opacity: 1}} transition={{duration: 1, delay: 0.5}}
      className='grid grid-cols-2 md:flex pt-12 gap-12 w-full flex-wrap'>
       {images.map((value, i) => (
          <img key = {i} src = {value.img} className='w-full md:w-24 object-cover'/>
       ))}
      </motion.div>


      <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1, delay: 0.8 }} 
       className='text-5xl text-[#FFD700] pt-20'>Languages</motion.h1>
      <motion.div initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.3 }}
       className='w-full bg-white h-1 mt-2'></motion.div> 

       <div className='flex flex-col md:flex-row items-center gap-8 pt-8'>
       {langs.map((value, i) => (
            
            <motion.button initial = {{ opacity: 0, translateY: 20}}
            whileInView={{ opacity: 1, translateY: 0 }}
            transition={{type: 'spring', duration: 1, delay: i * 0.5 }} 
            className='text-white flex  items-center  justify-center text-2xl border-2 w-28 h-10 rounded-md ' key={value.id}><a data-replace = {value.data}><span>{value.name}</span></a></motion.button>
            
         ))}
       </div>
    </section>
  )
}

export default Skills
