import '../css/Academic.css'
import { motion } from 'framer-motion'
import Arrow from './Arrow'
import SkillsList from './SkillsList'

export default function Academic () {

    return (
        <motion.div className="slides"   
                    id="academic"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 2}}
                    >        
            <div className='education'>
                <article>
                    <h2>Tech skills</h2>
                    <div className='skills-wrapper'>
                        <SkillsList/>
                    </div>
                </article>
                <article>
                    <h2>Other expiriences</h2>
                    <div className='other-exp-sect'>
                        <div>
                            <h3>Tech Field</h3>
                            <ul>
                                <li>Software Developer at EntrustICT.</li>
                                <span>Melbourne, Australia.</span>
                                <span>Oct 2024 - Currently</span>
                                <li>Junior Software Developer at EntrustICT.</li>
                                <span>Melbourne, Australia.</span>
                                <span>Oct 2023 - Sep 2024</span>
                            </ul>
                        </div>
                        <div>
                            <h3>Health Care, Fitness & Social</h3>
                            <ul>
                                <li>Beat Community Fitness - Gym manager - Head Coach.</li>
                                <span>Cordoba,  Argentina.</span>
                                <span>Mar 2019 - Jun 2021</span>
                            </ul>
                        </div>
                        <div>
                            <h3>Legal & Professional Service</h3>
                            <ul>
                                <li>Boetto Law Firm - Paralegal & Legal Secretary.</li>
                                <span>Cordoba,  Argentina.</span>
                                <span>Jan 2013 - Jul 2018</span>
                            </ul>
                        </div>
                    <Arrow page={"#contact"}/>
                    </div>
                </article>
            </div>
        </motion.div >
    )
}