import React from 'react'


const Header = () => {
  const time = new Date();
  const hours = time.getHours();
  const minutes = time.getMinutes();
  return (
    <div className='w-full flex items-center justify-between px-28 py-8 text-white  text-3xl'>
       <div className="hidden logo md:flex gap-4 mt-4">
         <p style={{fontSize: '70px'}} >&radic; </p>
         <div className='flex flex-col '>
         <span className='text-3xl absolute top-10 '>Chikashvili <p className='text-xl -right-4 text-green-500 absolute -top-4'>Luka</p></span>
     
         </div>
       </div>

       <nav className='flex gap-12 list-none '>
          <li><a href = "#home" data-replace = "Home"><span>Home</span></a></li>
          <li><a href = "#about" data-replace = "About"><span>About</span></a></li>
          <li><a href = "#skills" data-replace = "Skills"><span>Skills</span></a></li>
          <li><a href = "#projects" data-replace = "Projects"><span>Projects</span></a></li>
     
       </nav>

    <div>
        <a href = "#" data-replace = " Tbilisi"><span> Tbilisi</span></a>
        <span className='absolute text-xl top-6'>{hours}&#8758;{minutes}</span>
       
    </div>
    </div>
  )
}

export default Header
