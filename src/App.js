import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import { ArrowBigLeft, Github, Linkedin, Mail, Mic, Moon, MoveLeft, MoveRight, Sun } from 'lucide-react';
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import SmoothScroll from "./components/SmoothScroll";
import MixMaster from "./components/MixMaster";
import EternalMemories from "./components/EternalMemories";
import Forever from "./components/Forever";
import { AnimatePresence, motion, useMotionValue, useSpring } from 'framer-motion';
import { useContext, useEffect, useRef, useState } from "react";
import {Canvas} from '@react-three/fiber';
import Three from "./components/Three";
import { Context } from "./context/Context";
import useSpeechRecognition from "./components/useSpeechRecognition";
import CircusMircus from "./components/CircusMircus";





function App() {

  // speech recognition
  const {
    text, startListening
 } = useSpeechRecognition();



  const [showMenu, setShowMenu] = useState(false);
  
 const {showCards, setShowCards} = useContext(Context);
 
 const [darkMode, setDarkMode] = useState(false);



 let menuRef = useRef();

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

useEffect(() => {
  
  localStorage.setItem('darkMode', JSON.stringify(darkMode));

  if (menuRef.current) {
    document.body.style.backgroundColor = darkMode ? 'black' : '#003366'; 
    menuRef.current.style.transition = "all 0.9s ease-in";
    menuRef.current.style.backgroundColor = darkMode ? 'black' : '#003366';
  }
}, [darkMode, menuRef]);

const toggleDarkMode = () => {
  setDarkMode(!darkMode);
};

useEffect(() => {
  const data = localStorage.getItem('darkMode');
  setDarkMode(JSON.parse(data));
}, []); 



// control with voice
useEffect(() => {
   if(text === "about") {
     window.location.hash = "#about";
   }else if(text === "home") {
    window.location.hash = "#home";
   }else if(text === "skills") {
    window.location.hash = "#skills";
   }else if(text === "projects") {
    window.location.hash = "#projects";
   }else if(text === "menu") {
    setShowCards(true);
   }else if(text === "github") {
    window.open('https://github.com/lukaChikashvili', '_blank');
   }else if(text === "linkedin") {
    window.open('https://www.linkedin.com/in/luka-chikashvili/', '_blank');
   }else if(text === "neo writers github") {
    window.open("https://github.com/lukaChikashvili/neoWriters2", "_blank");
   }else if(text === "neo writers live") {
    window.open("https://neowriters-front.onrender.com", "_blank");
   }else if(text === "mix master github" || text === "mixmaster github") {
    window.open("https://github.com/lukaChikashvili/MixMaster", "_blank");
   }else if(text === "mix master live" || text === "mixmaster live") {
    window.open("https://mix-master-seven.vercel.app/", "_blank");
   }else if(text === "eternal memories github") {
    window.open("https://github.com/lukaChikashvili/EternalMemories", "_blank");
   }else if(text === "eternal memories live") {
    window.open("https://eternal-memories.onrender.com/", "_blank");
   }
});



useEffect(() => {
  const handleKeyDown = (event) => {
    if (event.code === 'KeyM') {
      startListening();
    }
  };

  window.addEventListener('keydown', handleKeyDown);

  return () => {
    window.removeEventListener('keydown', handleKeyDown);
  };
}, [startListening]);
 
  return (
    <div className="App">
      <SmoothScroll>

      <button onClick={startListening} className=' btn md:fixed text-white right-8 top-10 '><Mic size={30} className="hidden md:block duration-500 ease-in hover:text-[#FFD700]" /></button>
      <h2 className="text-[#FFD700] font-bold fixed bottom-12 text-4xl left-1/2 mr-12">{text}</h2>
        
      <div className="fixed bottom-4 left-4 text-white  hidden md:flex flex-col gap-4 " >
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
    <CircusMircus />
    <Forever />
    <motion.div style={{left: smoothMouse.x, top: smoothMouse.y}} className="cursor hidden md:block"></motion.div>
    {showMenu && <button onClick={displayCards} 
    className="hidden md:block fixed z-10 bottom-4 right-8 text-white text-2xl duration-500 ease-in hover:text-[#FFD700]">{!showCards ? "Menu" : "X"}</button>}
<AnimatePresence>
{showCards && (

 <motion.div ref={menuRef}  initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
 animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
 transition={{ duration: 1, delay: 0.8 }} exit={{clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
 className="card  fixed  left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full min-h-screen  flex gap-24 justify-center items-center ">
   <motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1, delay: 0.8 }} 
          className='text-6xl text-[#FFD700] absolute top-12'>Menu</motion.h1>
           <motion.div initial = {{ clipPath: 'polygon(0 0, 0 0, 0 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                     transition={{ duration: 1.5, delay: 1.3 }} 
      className='w-full bg-white h-1 absolute top-36'></motion.div>
      <MoveLeft className="absolute bottom-12 -ml-56 text-white z-10 cursor-pointer" size={60} onClick={handleLeftClick} />
      <MoveRight className="absolute bottom-12 ml-56 text-white z-10 cursor-pointer " size={60} onClick={handleRightClick} />
<motion.h1 initial = {{ clipPath: 'polygon(0 100%, 100% 100%, 100% 100%, 0 100%)'}}
                     animate={{ clipPath: 'polygon(0 0, 100% 0, 100% 100%, 0 100%)' }}
                    
                     transition={{ duration: 1, delay: 0.8 }} 

          className='text-6xl text-[#FFD700] absolute bottom-12'>{texts[index]}</motion.h1>
           {!darkMode ? <Sun onClick={toggleDarkMode} size={30} className="text-white absolute top-12 left-12 cursor-pointer duration-500 ease-in hover:text-[#FFD700] z-10" />
           : <Moon onClick={toggleDarkMode} size={30} className="text-white absolute top-12 left-12 cursor-pointer duration-500 ease-in hover:text-[#FFD700] z-10" /> }
   <div className="canvas-container">
              <Canvas className="canvas">
                <Three />
              </Canvas>
            </div>


</motion.div>

)}
</AnimatePresence>




     </SmoothScroll>
    </div>
  );
}

export default App;
