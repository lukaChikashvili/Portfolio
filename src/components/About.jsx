import { Circle, Link } from 'lucide-react'
import React, { useEffect, useRef, useState } from 'react'
import cert from '../assets/cert.png';

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
    <div className='min-h-screen p-28 '>
          <h1 className='text-6xl text-green-500'>About me</h1>
      <div className='w-full bg-white h-1'></div>
        <div className='flex justify-between gap-12 '>
    
<div className='flex flex-col w-full  '>
      <p className='text-white text-3xl  pt-12'>Hello! my name is Luka, a passionate and dedicated web developer eager to start my professional 
        journey in the world of web development. While I may not have formal work experience yet, I bring a 
        wealth of knowledge, a strong foundation in web technologies,
         and an unquenchable thirst for learning and innovation.</p>

         <p className='text-white text-3xl  pt-12'>Over the past few years, I have immersed myself in the exciting field of web development. I have honed my skills in HTML, CSS, JavaScript, and various modern frameworks and libraries such as React, Vue.js, and Node.js. Through self-directed projects, online courses, and coding bootcamps,
             I have built a solid understanding of both front end and back end development.</p>
             </div>
             <p className=' left-48 ml-64 h-0.5 bg-white rotate-90 absolute -bottom-96 -mb-48' style={{width: '700px'}}></p>
<div className='flex flex-col  gap-4 w-full pt-12 pl-16 '>
    <div className='flex items-center gap-4'>
     <Circle className='text-white' />
    <img src = "https://media.licdn.com/dms/image/C4E0BAQGTKuI41IKAlQ/company-logo_200_200/0/1648738492869/academyofdigitalindustries_logo?e=1724889600&v=beta&t=aVRcrtda0BPQuGqWdnbPV8_XS3WlNf_IayigvquFEaU" 
    className='w-12 h-12 rounded-full shadow-lg shadow-[#191919] cursor-pointer'/>

     <a href='https://digitaledu.ge/' target='_blank'><h2 className='text-white text-2xl underline-offset-8 cursor-pointer duration-500 ease-in hover:underline ' >Academy of Digital Industries</h2></a>
   
     </div>

     <div className='flex flex-col gap-4'>
     <h1 className='text-green-500 font-bold text-3xl'>Feb, 2024 &#8722; April, 2024</h1>
     <div className='flex gap-4 text-white'>
     <p className='text-3xl text-white'>Successfully finished <span className='text-green-500'>Node js</span> course</p>
      <span className='flex gap-4 items-center '>&#8722; <Link /><p className='underline underline-offset-8 cursor-pointer text-xl duration-500 ease-in hover:decoration-wavy' onMouseEnter={() => setShowImg(true)} onMouseLeave={() => setShowImg(false)} onClick={() => setShowModal(!showModal)}>See certificate</p></span>
      {showImg && <img src = {cert} className='w-36 absolute right-36 mt-12 rounded-md shadow-lg shadow-[#191919]'/>}

      {showModal && <img ref={modalRef} src = {cert} className='absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-1/2 rounded-md shadow-lg shadow-[#191919] ' style={{marginTop: '1000px'}} />}
      </div>
     </div>
</div>
           
             </div>
    </div>
  )
}

export default About
