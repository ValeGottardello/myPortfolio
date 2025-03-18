import '../css/NavBar.css'
import Navbar from 'react-bootstrap/Navbar';
import BodyClass from './BodyClass';
import Nav from 'react-bootstrap/Nav';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { MdDarkMode, MdOutlineDarkMode, MdOutlineContactMail  } from "react-icons/md";
import { SiMinds } from "react-icons/si";
import { FaRegClipboard, FaUserAlt, FaCode } from 'react-icons/fa';


function NavBar() {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleDarkMode = () => {
      setDarkMode(!darkMode);
      const body = document.body;
      const note = document.querySelector('.hitNote'); // Selecciona el elemento con la clase 'hitNote'
  
      if (body.classList.contains('dark')) {
          body.classList.remove('dark');
          body.classList.add('light');
          if (note) note.innerHTML = "Too bright? Hit the moon icon for dark mode!";
      } else {
          body.classList.remove('light');
          body.classList.add('dark');
          if (note) note.innerHTML = "Too dark? Hit the moon icon for light mode!";
      }
    };
  
  return (
    <header>
        <BodyClass className={darkMode ? 'dark' : 'light'}/>
        <Navbar expand="lg">
            <Navbar.Brand>
              <h5 className='mode' onClick={toggleDarkMode}>{darkMode ? <MdDarkMode/> : <MdOutlineDarkMode/>}</h5>
              <span className='darkHitNote' id="hitNote">
                  Too bright? Hit the moon icon for dark mode!
              </span>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav> 
                <motion.a href="#about" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}><FaUserAlt/> About</motion.a>
                <motion.a href="#projects" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}><FaCode/> Projects</motion.a>
                <motion.a href="#academic" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}><SiMinds/>Skills</motion.a>
                <motion.a href="#contact" 
                          whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}><MdOutlineContactMail/>Contact</motion.a>
                <motion.a whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}  
                          className='cv' 
                          href="/cv/cv_Valentina.pdf" target="_blank"><FaRegClipboard/> CV</motion.a>       
              </Nav>
            </Navbar.Collapse>
        </Navbar> 
    </header>
  );
}

export default NavBar;


