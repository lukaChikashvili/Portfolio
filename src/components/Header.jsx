import React from 'react'


const Header = () => {
  return (
    <div className='w-full flex items-center justify-between px-24 py-8 text-white  text-3xl'>
       <div className="hidden logo md:flex gap-4 mt-4">
         <p style={{fontSize: '70px'}} >&radic; </p>
         <div className='flex flex-col '>
         <span className='text-3xl absolute top-10 '>Chikashvili <p className='text-xl -right-4 text-green-500 absolute -top-4'>Luka</p></span>
     
         </div>
       </div>

       <nav className='flex gap-12 list-none '>
          <li><a href = "#" data-replace = "Home"><span>Home</span></a></li>
          <li><a href = "#" data-replace = "About"><span>About</span></a></li>
          <li><a href = "#" data-replace = "Projects"><span>Projects</span></a></li>
          <li><a href = "#" data-replace = "Contact me"><span>Contact me</span></a></li>
       </nav>

    <div>
        sfs
    </div>
    </div>
  )
}

export default Header
