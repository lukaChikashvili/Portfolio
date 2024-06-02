import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import { ArrowBigLeft, Github, Linkedin, Mail, MoveLeft, MoveRight } from 'lucide-react';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SmoothScroll from "./components/SmoothScroll";
import MixMaster from "./components/MixMaster";
import EternalMemories from "./components/EternalMemories";
import Forever from "./components/Forever";
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useContext, useEffect, useState } from "react";
import {Canvas} from '@react-three/fiber';
import Three from "./components/Three";
import { Context } from "./context/Context";




function App() {

  const [showMenu, setShowMenu] = useState(false);
  const [showCards, setShowCards] = useState(false);

 


  useEffect(() => {
     
    const handleScroll = () => {
      if(window.scrollY > 300) {
        setShowMenu(true);
      }else {
        setShowMenu(false);
      }
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [])

  const cursorSize = 20;
  const mouse = {
    x: useMotionValue(0),
    y: useMotionValue(0)
  };

  const smoothOptions = {damping: 40, stiffness: 300, mass: 0.5};

  const smoothMouse = {
    x: useSpring(mouse.x, smoothOptions),
    y: useSpring(mouse.y, smoothOptions)
  };


  const manageMouseMove = (e) => {
    const {clientX, clientY} = e;
    mouse.x.set(clientX - cursorSize / 2);
    mouse.y.set(clientY - cursorSize / 2);

  }

  useEffect(() => {
     window.addEventListener('mousemove', manageMouseMove);


     return () => {
      window.removeEventListener('mousemove', manageMouseMove);
     }
  }, [])
  
 
  const displayCards = () => {
    setShowCards(!showCards);
   
      
   
  }

  useEffect(() => {
    if (showCards) {
      document.body.classList.add('dimmed');
    } else {
      document.body.classList.remove('dimmed');
    }
  }, [showCards]);


const {index, setIndex} = useContext(Context);

const texts = ["Home", "About", "Skills", "Projects"];

const handleRightClick = () => {

    setIndex((prevIndex) => (prevIndex + 1) % texts.length);

  
};

const handleLeftClick = () => {
  setIndex((prevIndex) => (prevIndex - 1 + texts.length) % texts.length);
};
  return (
    <div className="App">
      <SmoothScroll>
      <div className="fixed bottom-4 left-4 text-white hidden md:flex flex-col gap-4 " >
      <a href="https://github.com/lukaChikashvili" target="_blank"> <Github size={30} className="cursor-pointer duration-500 ease hover:text-[#FFD700]"  /></a> 
        <a href = "https://www.linkedin.com/in/luka-chikashvili/" target="_blank"><Linkedin size={30} className="cursor-pointer duration-500 ease hover:text-[#FFD700]"/></a>
        <Mail size={30}className="cursor-pointer duration-500 ease hover:text-[#FFD700]" />
      </div>
      <Header />
     <Home />
     <About />
     <Skills />
     <Projects />
    <MixMaster />
    <EternalMemories />
    <Forever />
    <motion.div style={{left: smoothMouse.x, top: smoothMouse.y}} className="cursor"></motion.div>
    {showMenu && <button onClick={displayCards} 
    className="fixed z-10 bottom-4 right-8 text-white text-2xl duration-500 ease-in hover:text-[#FFD700]">Menu</button>}

{showCards && (
 <div className="card  fixed  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-h-screen  flex gap-24 justify-center items-center ">
   <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1, delay: 0.8 }} 
          className='text-6xl text-[#FFD700] absolute top-12'>Menu</motion.h1>
           <motion.div initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.3 }} 
      className='w-full bg-white h-1 absolute top-36'></motion.div>
      <MoveLeft className="absolute bottom-12 -ml-56 text-white z-10" size={60} onClick={handleLeftClick} />
      <MoveRight className="absolute bottom-12 ml-56 text-white z-10 " size={60} onClick={handleRightClick} />
<motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                    
                     transition={{ duration: 1, delay: 0.8 }} 

          className='text-6xl text-[#FFD700] absolute bottom-12'>{texts[index]}</motion.h1>
   <div className="canvas-container">
              <Canvas className="canvas">
                <Three />
              </Canvas>
            </div>


</div>
)}




   
     </SmoothScroll>
    </div>
  );
}

export default App;
