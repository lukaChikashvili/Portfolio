import About from "./components/About";
import Header from "./components/Header";
import Home from "./components/Home";
import { Github, Linkedin, Mail } from 'lucide-react';

function App() {

  return (
    <div className="App">
      <div className="fixed bottom-4 left-4 text-white flex flex-col gap-4 " >
      <a href="https://github.com/lukaChikashvili" target="_blank"> <Github size={30} className="cursor-pointer duration-500 ease hover:text-green-500"  /></a> 
        <a href = "https://www.linkedin.com/in/luka-chikashvili/" target="_blank"><Linkedin size={30} className="cursor-pointer duration-500 ease hover:text-green-500"/></a>
        <Mail size={30}className="cursor-pointer duration-500 ease hover:text-green-500" />
      </div>
      <Header />
     <Home />
     <About />

    </div>
  );
}

export default App;
