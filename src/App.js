import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import { Github, Linkedin, Mail } from 'lucide-react';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SmoothScroll from "./components/SmoothScroll";
import MixMaster from "./components/MixMaster";
import EternalMemories from "./components/EternalMemories";
import Forever from "./components/Forever";
import { motion, useMotionValue, useSpring } from 'framer-motion';
import { useEffect } from "react";



function App() {

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
     </SmoothScroll>
    </div>
  );
}

export default App;
