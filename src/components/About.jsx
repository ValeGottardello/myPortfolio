import { motion } from 'framer-motion'
import '../css/About.css'
import '../css/lightMode.css'
import { BiMap } from 'react-icons/bi';
import { HiOutlineMail } from 'react-icons/hi';
import Arrow from './Arrow.jsx';

export default function About () {
    return (
        <motion.div className='slides'
                    id="about"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    style={{ height: "100vh" }}
                    transition={{ duration: 2}}
                    >
            <div className='about-wrapper'>
                <h2>About me</h2>
                <h3 className='subtitle-about'>Know my history</h3>
                <article className='about-sect' initial={{ opacity: 0, scale: 0.5 }}>
                    <p> 
                        <span className='presentation'>I'm <span className='myname'>Valentina</span></span> a Melbourne-based full-stack software engineer with four years of experience in the legal field. 
                    </p>
                    <p>
                        Developer, paralegal, runner, and lifelong learner, these are just a few of my roles. Who I truly am is a passionate technology enthusiast who loves exploring new innovations and finding ways to make a meaningful impact in people's daily lives.
                    </p>
                    <p>
                        I specialize in JavaScript (React), C#, Node.js, PHP, and Azure Cloud technologies. I thrive on tackling new challenges and continuously improving my skills, whether it's developing user-centric applications or integrating complex APIs.
                    </p>
                    <p>
                        Beyond work, I have a strong passion for continuous learning and love engaging with fellow professionals. I'd be happy to connect and explore potential collaboration opportunities!
                    </p>
                </article>
                <article className='details-about-sec'>
                    <h3><span><BiMap/> Based in </span>  
                    Melbourne, Australia</h3>
                    <h3>
                        <span><HiOutlineMail/> My email address is </span>
                        valengottardello37@gmail.com</h3>
                </article>
                <Arrow page={"#projects"}/>
            </div>
        </motion.div >
    )
}

// className="card-container"
// initial="offscreen"
// whileInView="onscreen"
// viewport={{ once: true, amount: 0.8 }}