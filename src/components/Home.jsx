import { MouseIcon } from 'lucide-react'
import React from 'react'

const Home = () => {
  return (
    <div className='min-h-screen flex item-center justify-center pt-24'>
       
       <div className='flex gap-4'>
          <h1 className='text-white ' style={{fontSize: '10rem'}}>&#402;</h1>
        <p className='text-white ' style={{fontSize: '10rem'}}>&#8317;</p>
        <div className='flex flex-col'>
        <p className='text-white ' style={{fontSize: '8rem'}}> 
        <span className='text-green-500'>Web</span> developer</p>
         <p className='w-full h-2 bg-white '></p>
         <div className='flex gap-12'>
         <p className='text-white relative ' style={{fontSize: '5rem'}}>&#8730; <span className='text-2xl absolute top-8 '>Creativity</span></p>
         <p className='text-white ml-12 mt-2  ' style={{fontSize: '3rem'}}>&#8727;</p>
         <p className='text-white relative' style={{fontSize: '5rem'}}>&#8730; <span className='text-2xl absolute top-8 '>Passion</span></p>
         <p className='text-white -mt-6 ml-12 ' style={{fontSize: '5rem'}}>&#8332;</p>
         <p className='text-white -mt-2' style={{fontSize: '5rem'}}> &#8734;</p>
       
         </div>
         </div>
        <p className='text-white ' style={{fontSize: '10rem'}}>&#8318; </p>
       </div>

       <MouseIcon className='absolute bottom-24 text-white mouse ' size={40}/>
       <span className='absolute bottom-12 text-white  text-xl'>Scroll</span>
    </div>
  )
}

export default Home
