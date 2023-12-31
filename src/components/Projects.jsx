
import { useState } from 'react';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import '../css/Projects.css'
import { motion } from 'framer-motion';
import Arrow from './Arrow.jsx';

export default function Projects () {
    const [key, setKey] = useState('project-9');

    return (
        <motion.div  
            className="slides"  
            id="projects"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            style={{ height: "100vh" }}
            transition={{ duration: 2}}>
            <h2>Recent Projects</h2>
            
            <Tabs
                activeKey={key}
                onSelect={(k) => setKey(k)}
                className="mb-3 projects wrapper-tab"
                > 
                <Tab eventKey="project-9" title="Clone-Translate" > 
                    <div className='project-card'>
                        <div className='screen'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/DUg8X0dKKjo?si=1LMFjVHkObx0-yTV?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='info-project'>
                            <h3>Clone Translate App</h3>
                            <p>This project is a Full Stack Application, utilizing TypeScript, React and Vite. It features sophisticated implementations of useReducer and useDebounce, enhancing the efficiency of user status management and interactions. This project encompasses both the frontend and backend, as I have designed the server side using Node.js and integrated a third-party service, OpenAI's GPT-3.5-turbo model.</p>
                            <div className='github-link'>
                                <motion.a href="https://github.com/ValeGottardello/translateClone" 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                        >GitHub Code</motion.a>
                                <motion.a href="https://github.com/ValeGottardello/apiCloneTranslate" 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                        >GitHub Code Server</motion.a>
                            </div>
                        </div>
                    </div>
                    <div className='skills-used'>
                        <div style={{width: '100%', marginBottom: 0}}>
                            <h2 className='techstack' style={{ textAlign: "center", fontSize: "1.5rem", width: 'auto', borderBottom:'0px'}}>TECH STACK</h2>
                        </div>
                        <motion.img whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
                           src="/images/icons/typescript.svg" alt="" /> 
                        <motion.img 
                            whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
                           src="/images/icons/javascript.svg" alt="" /> 
                       <motion.img 
                            whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/react.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/node.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/bootstrap.svg" alt="" /> 
                    </div>
                </Tab>
                <Tab eventKey="project-8" title="ToDo-App" > 
                    <div className='project-card'>
                        <div className='screen'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/IUJnaxgvIwo?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='info-project'>
                            <h3>To-do App</h3>
                            <p>My first TypeScript Project: A simple and efficient to-do app built with React and TypeScript. It allows users to effortlessly add, edit, and remove tasks from the task board, with three simple filters for active, all, and completed tasks.</p>
                            <div className='github-link'>
                                <motion.a href="https://github.com/ValeGottardello/todoTypeScript/" 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                        >GitHub Code</motion.a>
                            </div>
                        </div>
                    </div>
                    <div className='skills-used'>
                        <div style={{width: '100%', marginBottom: 0}}>
                            <h2 className='techstack' style={{ textAlign: "center", fontSize: "1.5rem", width: 'auto', borderBottom:'0px'}}>TECH STACK</h2>
                        </div>
                        <motion.img whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
                           src="/images/icons/typescript.svg" alt="" /> 
                        <motion.img 
                            whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
                           src="/images/icons/javascript.svg" alt="" /> 
                       <motion.img 
                            whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/react.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/node.svg" alt="" /> 
                    </div>
                </Tab>
                <Tab eventKey="project-7" title="MoviePlus" > 
                    <div className='project-card'>
                        <div className='screen'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/4HdasGODz8s?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='info-project'>
                            <h3>MoviePlus</h3>
                            <p>MoviePlus is a full-stack movie application that provides users with an immersive experience to explore movies, view detailed information, create an account, and add movies to their personal watchlist. The application is built using modern technologies like React, Tailwind css for the frontend, GraphQL, Apollo, MongoDB, and node.js for the backend, ensuring a seamless and efficient user experience.</p>
                            <div className='github-link'>
                                <motion.a href="https://github.com/ValeGottardello/movies" 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                        >GitHub Code</motion.a>
                            </div>
                        </div>
                    </div>
                    <div className='skills-used'>
                        <div style={{width: '100%', marginBottom: 0}}>
                            <h2 className='techstack' style={{ textAlign: "center", fontSize: "1.5rem", width: 'auto', borderBottom:'0px'}}>TECH STACK</h2>
                        </div>
                        <motion.img 
                            whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
                           src="/images/icons/javascript.svg" alt="" /> 
                       <motion.img 
                            whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/react.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/tailwindcss.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/node.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/GraphQL.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/MongoDB.svg" alt="" /> 
                    </div>
                </Tab>
                <Tab eventKey="project-5" title="FIXUP" > 
                    <div className='project-card'>
                        <div className='screen'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/mjP4Q32IJeM?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='info-project'>
                            <h3>FIX•UP</h3>
                            <p> Workspace application for a small/medium business. Where users can log in as a company or as a dependent, be registered as employees of a particular company, manage their availability, clock in/out (remaining from the current hours), view their assigned tasks and check that they are done, create and assign new tasks.</p>
                            <div className='github-link'>
                                <motion.a href="https://github.com/ValeGottardello/dashboard" 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                        >GitHub Code</motion.a>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank" 
                                        href="https://github.com/ValeGottardello/server-dashboard">GitHub Code - Server</motion.a>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"  
                                        href="https://fixup.vercel.app">Demo here</motion.a >
                            </div>
                        </div>
                    </div>
                    <div className='skills-used'>
                        <div style={{width: '100%', marginBottom: 0}}>
                            <h2 className='techstack' style={{ textAlign: "center", fontSize: "1.5rem", width: 'auto', borderBottom:'0px'}}>TECH STACK</h2>
                        </div>
                        <motion.img 
                             whileHover={{ scale: 1.2 }}
                           whileTap={{ scale: 0.9 }}
                           transition={{ type: "spring", stiffness: 400, damping: 17 }}
                           src="/images/icons/javascript.svg" alt="" /> 
                       <motion.img 
                            whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/react.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/bootstrap.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/node.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/express.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/postgresql.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/css.svg" alt="" /> 
                    </div>
                </Tab>
                <Tab eventKey="project-6" title="Native App" > 
                    <div className='project-card'>
                        <div className='screen'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/CaVr6Rh2eu4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='info-project'>
                            <h3>Contacts App</h3>
                            <p> This is a contact management application. It allows importing, storing, editing, and deleting contacts using a node.js server with express and a PostgreSQL database on the backend, and a React Native client-side user interface on the frontend.</p>
                            <div className='github-link'>
                                <motion.a href="https://github.com/ValeGottardello/contact-list-react-native" 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                        >GitHub Code</motion.a>
                            </div>
                        </div>
                    </div>
                    <div className='skills-used'>
                        <div style={{width: '100%', marginBottom: 0}}>
                            <h2 className='techstack' style={{ textAlign: "center", fontSize: "1.5rem", width: 'auto', borderBottom:'0px'}}>TECH STACK</h2>
                        </div>
                       <motion.img 
                            whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/javascript.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/react.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/node.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/express.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/postgresql.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }}
                          src="/images/icons/css.svg" alt="" /> 
                    </div>
                </Tab>
                <Tab eventKey="project-4" title="PLAN MY PLATE" >
                    <div className='project-card'>
                        <div className='screen'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/SGjiXhLYmYk?controls=0?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='info-project'>
                            <h3>PLAN MY PLATE</h3>
                            <p>Meal plan app is collaborative project with third party API where users can sign in or not, search and save recipes, create meal plans, and arrange the recipes with a drag and drop weekly plan.</p>
                            <div className='github-link'>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                        href="https://github.com/ValeGottardello/react_meal_planner_app">GitHub Code</motion.a >
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank" 
                                href="https://planmyplate.netlify.app/">Demo here</motion.a>
                            </div>
                            </div>
                    </div>
                    <div className='skills-used'>
                        <div style={{width: '100%', marginBottom: 0}}>
                            <h2 className='techstack' style={{ textAlign: "center", fontSize: "1.5rem", width: 'auto', borderBottom:'0px'}}>TECH STACK</h2>
                        </div>
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/react.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/javascript.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/bootstrap.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/firebase.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/css.svg" alt="" /> 
                    </div>
                </Tab>
                <Tab eventKey="project-2" title="Talker's">
                    <div className='project-card'>
                        <div className='screen'>
                            <iframe width="560" height="315" src="https://www.youtube.com/embed/GN3KYw5b1n4?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen></iframe>
                        </div>
                        <div className='info-project'>
                            <h3>Talker's Social Media</h3>
                            <p>Talker's app is a CRUD Web application data base backed, whose objective is users can connect each other in order to improve and practice the language skills. Users can log in, create their own profile, post and comment on themselves and other profiles. Completly handled from server side, using Node.js, express and libraries as Ejs for the server side.</p>
                            <div className='github-link'>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                    href="https://github.com/ValeGottardello/project2">GitHub Code</motion.a >
                            </div>
                        </div>
                    </div>
                    <div className='skills-used'>
                        <div style={{width: '100%', marginBottom: 0}}>
                            <h2 className='techstack' style={{ textAlign: "center", fontSize: "1.5rem", width: 'auto', borderBottom:'0px'}}>TECH STACK</h2>
                        </div>
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/javascript.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/node.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/express.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/postgresql.svg" alt="" /> 
                        <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                          src="/images/icons/css.svg" alt="" /> 
                    </div>
                </Tab>
                {/* <Tab eventKey="project-0" title="Mobilia" >
                    <div className='project-card'>
                        <div className='screen'>
                            <img src="/images/mobilia.png" alt="alternative img demo navegating through the website" />
                        </div>
                        <div className='info-project'>
                            <h3>Web Site Mobilia S.A.</h3>
                            <p>Final project of the Coderhouse Foundation course, Argentine Institution. Mobilia Muebles is a static web page that I made for a Family Furniture Business located in Argentina. Users can navigate around the page to known more about the business history and the company, contact with them and see the design catalog.</p>
                            <div className='github-link'>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank" href="https://github.com/ValeGottardello/proyecto-coderhouse">GitHub Code</motion.a>
                                <motion.a 
                                        whileHover={{ scale: 1.2 }}
                                        whileTap={{ scale: 1.1 }}
                                        drag="x"
                                        dragConstraints={{ left: -100, right: 100 }}
                                        target="_blank"
                                        href="https://mobiliamuebles-proyectocoder-house.netlify.app/">Demo here</motion.a>
                            </div>
                        </div>
                    </div>
                    <div className='skills-used'>
                        <div style={{width: '100%', marginBottom: 0}}>
                            <h2 className='techstack' style={{ textAlign: "center", fontSize: "1.5rem", width: 'auto', borderBottom:'0px'}}>TECH STACK</h2>
                        </div>
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                           src="/images/icons/html.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                           src="/images/icons/css.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                           src="/images/icons/bootstrap.svg" alt="" /> 
                       <motion.img whileHover={{ scale: 1.2 }}
                          whileTap={{ scale: 0.9 }}
                          transition={{ type: "spring", stiffness: 400, damping: 17 }} 
                           src="/images/icons/sass.svg" alt="" /> 
                    </div>
                </Tab> */}
            </Tabs>
            <Arrow page={"#academic"}/>
        </motion.div>
    )
}


// //<Tab eventKey="project-1" title="TicTacToe" >
// <div className='project-card'>
//     <div className='screen'>
//         <img src="/images/tictactoe.png" alt="alternative img demo navegating through the website" />
//     </div>
//     <div className='info-project'>
//         <h3>Tic•Tac•Toe OR Ta•Te•Ti!</h3>
//         <p>Classic game of circle and crosses. First project in just two weeks of learning javascript. Users can play eachother, track their scores and reset the game any time.</p>
//         <div className='github-link'>
//             <motion.a 
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 1.1 }}
//                     drag="x"
//                     dragConstraints={{ left: -100, right: 100 }}
//                     target="_blank"
//                      href="https://github.com/ValeGottardello/tictactoe">GitHub Code</motion.a>
//             <motion.a 
//                     whileHover={{ scale: 1.2 }}
//                     whileTap={{ scale: 1.1 }}
//                     drag="x"
//                     dragConstraints={{ left: -100, right: 100 }}
//                     target="_blank"
//                     href="https://valegottardello.github.io/tictactoe/">Demo here</motion.a>
//         </div>
//     </div>
// </div>
// <div className='skills-used'>
//    <motion.img  whileHover={{ scale: 1.2 }}
//       whileTap={{ scale: 0.9 }}
//       transition={{ type: "spring", stiffness: 400, damping: 17 }} 
//       src="/images/icons/javascript.svg" alt="" /> 
//    <motion.img whileHover={{ scale: 1.2 }}
//       whileTap={{ scale: 0.9 }}
//       transition={{ type: "spring", stiffness: 400, damping: 17 }} 
//        src="/images/icons/html.svg" alt="" /> 
//    <motion.img whileHover={{ scale: 1.2 }}
//       whileTap={{ scale: 0.9 }}
//       transition={{ type: "spring", stiffness: 400, damping: 17 }} 
//        src="/images/icons/css.svg" alt="" /> 
// </div>
// </Tab> 
/* <Tab eventKey="project-3" title="Servo API" >
<div className='project-card'>
    <div className='screen'>
        <img src="/images/mapapi.png" alt="alternative img demo navegating through the website" />
    </div>
    <div className='info-project'>
        <h3>Servo API</h3>
        <p>Single Page Application using its own REST JSON API to display all petrol stations that are inside of the boundaries based on current location, is displayed using the Google Maps API. Team project motivated to handle GitHub instance in a collaborative project.</p>
        <div className='github-link'>
            <motion.a 
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 1.1 }}
                    drag="x"
                    dragConstraints={{ left: -100, right: 100 }}
                    target="_blank" 
                    href="https://github.com/ValeGottardello/Project3">GitHub Code</motion.a>
        </div>
    </div>
</div>
<div className='skills-used'>
    <div style={{width: '100%', marginBottom: 0}}>
        <h2 className='techstack' style={{ textAlign: "center", fontSize: "1.5rem", width: 'auto', borderBottom:'0px'}}>TECH STACK</h2>
    </div>
    <motion.img whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} 
      src="/images/icons/javascript.svg" alt="" /> 
    <motion.img whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} 
      src="/images/icons/node.svg" alt="" /> 
    <motion.img whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} 
      src="/images/icons/express.svg" alt="" /> 
    <motion.img whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} 
      src="/images/icons/postgresql.svg" alt="" /> 
    <motion.img whileHover={{ scale: 1.2 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 400, damping: 17 }} 
      src="/images/icons/css.svg" alt="" /> 
</div>
</Tab>*/