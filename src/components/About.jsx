import { Circle, Link } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import cert from '../assets/cert.png';
import { motion } from 'framer-motion';


const About = () => {
    const [showImg, setShowImg] = useState(false);
    const [showModal, setShowModal] = useState(false);

    let modalRef = useRef(null);

    useEffect(() => {

        const detect = (e) => {
            if(modalRef.current && !modalRef.current.contains(e.target)) {
                setShowModal(false);
            }
        }
      
        document.addEventListener('mousedown', detect);

        return () => {
            document.removeEventListener('mousedown', detect);
        }
    }, [])


  return (
    <section id = "about" className='min-h-screen p-4 pt-36 md:pt-0 md:p-28  '>
          <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1, delay: 0.8 }} 
          className='text-6xl text-[#FFD700]'>About me</motion.h1>
      <motion.div initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.3 }} 
      className='w-full bg-white h-1'></motion.div>
        <div className='flex flex-col md:flex-row justify-between gap-12 '>
    
<div className='flex flex-col w-full  '>
      <motion.p initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1, delay: 1.2 }} 
      className='text-white text-3xl  pt-12'>Hello! my name is Luka, a passionate and dedicated web developer eager to start my professional 
        journey in the world of web development. While I may not have formal work experience yet, I bring a 
        wealth of knowledge, a strong foundation in web technologies,
         and an unquenchable thirst for learning and innovation.</motion.p>

         <motion.p initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1.2, delay: 1.5 }} 
         className='text-white text-3xl  pt-12'>Over the past  year, I have immersed myself in the exciting field of web development. I have honed my skills in HTML, CSS, JavaScript, and various modern frameworks and libraries such as React and Node.js. Through  projects, online courses,
             I have built a solid understanding of both front end and back end development.</motion.p>
             </div>
             <motion.p initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     whileInView={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.7 }} 
             className='hidden md:block left-48 ml-64 h-0.5 bg-white rotate-90 absolute -bottom-72 -mb-48' style={{width: '700px'}}></motion.p>
             <div className='flex flex-col gap-4 w-full'>
<div className='flex flex-col  gap-4 w-full pt-12 pl-16 '>
    <div className='flex items-center gap-4'>
     <motion.div initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1.2, delay: 2 }}  ><Circle className='text-white' /></motion.div>
    <motion.img initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1.2, delay: 1.8 }}   src = "https://media.licdn.com/dms/image/C4E0BAQGTKuI41IKAlQ/company-logo_200_200/0/1648738492869/academyofdigitalindustries_logo?e=1724889600&v=beta&t=aVRcrtda0BPQuGqWdnbPV8_XS3WlNf_IayigvquFEaU" 
    className='w-12 h-12 rounded-full shadow-lg shadow-[#191919] cursor-pointer'/>

     <motion.a initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1.2, delay: 2 }} 
     href='https://digitaledu.ge/' target='_blank'><h2 className='text-white text-2xl underline-offset-8 cursor-pointer duration-500 ease-in hover:underline ' >Academy of Digital Industries</h2></motion.a>
   
     </div>

     <div className='flex flex-col gap-4'>
     <motion.h1 initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1.2, delay: 2.2 }} 
     className='text-[#FFD700] font-bold text-3xl'>Feb, 2024 &#8722; April, 2024</motion.h1>
     <div className='flex gap-4 text-white'>
     <motion.p initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1.2, delay: 2.4 }} 
     className='text-3xl text-white'>Successfully finished <span className='text-[#FFD700]'>Node js</span> course</motion.p>
      <motion.span initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring' , delay: 3}}
       className='flex gap-4 items-center '>&#8722; <Link /><motion.p initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring' }}
      className='underline underline-offset-8 cursor-pointer text-xl duration-500 ease-in hover:decoration-wavy' onMouseEnter={() => setShowImg(true)} onMouseLeave={() => setShowImg(false)} onClick={() => setShowModal(!showModal)}>See certificate</motion.p></motion.span>
      {showImg && <img src = {cert} className='w-36 absolute right-36 mt-12 rounded-md shadow-lg shadow-[#191919]'/>}

      {showModal && <motion.img initial = {{ opacity: 0}}
                     whileInView={{ opacity: 1 }}
                     transition={{type: 'spring',  delay: 0.5 }} 
       ref={modalRef} src = {cert} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 rounded-md shadow-lg shadow-[#191919] z-10' style={{marginTop: '1000px'}} />}
      </div>
     </div>
</div>


<div className='flex flex-col  gap-4 w-full pt-12 pl-16 '>
    <div className='flex items-center gap-4'>
     <motion.div initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1.2, delay: 2 }} ><Circle className='text-white' /></motion.div>
    <motion.img initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1.2, delay: 2.8 }}
    src = "https://media.licdn.com/dms/image/C4D0BAQEfjm3n_xsB4g/company-logo_200_200/0/1669118298177/cyberassociation_logo?e=1724889600&v=beta&t=g-qx5uFkMfw6U1Jz3JZtt0DZkReFBHSFAuER69sIKA0" 
    className='w-12 h-12 rounded-full shadow-lg shadow-[#191919] cursor-pointer'/>

     <motion.a initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1.2, delay: 2.9 }}
     href='https://scsa.ge/en/' target='_blank'><h2 className='text-white text-2xl underline-offset-8 cursor-pointer duration-500 ease-in hover:underline ' >Scientific Cyber Security Association </h2></motion.a>
   
     </div>

     <div className='flex flex-col gap-4'>
     <motion.h1 initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1.2, delay: 3.1 }}
     className='text-[#FFD700] font-bold text-3xl'>March, 2023 &#8722; july, 2023</motion.h1>
     <div className='flex gap-4 text-white'>
     <motion.p initial = {{ opacity: 0, translateY: 20}}
                     whileInView={{ opacity: 1, translateY: 0 }}
                     transition={{type: 'spring', duration: 1.2, delay: 3.3 }}
     className='text-3xl text-white'>Successfully finished <span className='text-[#FFD700]'>Front End development</span> course</motion.p>
     
      </div>

     </div>
</div>

</div>

             </div>
    </section>
  )
}

export default About
