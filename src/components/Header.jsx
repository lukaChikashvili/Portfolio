import React from 'react'


const Header = () => {
  return (
    <div className='w-full flex items-center justify-between px-24 py-8 text-white  text-3xl'>
       <div className="logo flex gap-4 mt-4">
         <p style={{fontSize: '70px'}} >&radic; </p>
         <div className='flex flex-col '>
         <span className='text-3xl absolute top-10 '>Chikashvili <p className='text-xl -right-4 text-green-500 absolute -top-4'>Luka</p></span>
     
         </div>
       </div>

       <nav className='flex gap-12 list-none '>
          <li><a href = "#">Home</a></li>
          <li><a href = "#">About</a></li>
          <li><a href = "#">Projects</a></li>
          <li><a href = "#">Contact me</a></li>
       </nav>

    <div>
        sfs
    </div>
    </div>
  )
}

export default Header
