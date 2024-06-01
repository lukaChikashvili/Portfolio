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



function App() {

  return (
    <div className="App">
      <SmoothScroll>
      <div className="fixed bottom-4 left-4 text-white flex flex-col gap-4 " >
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
     </SmoothScroll>
    </div>
  );
}

export default App;
