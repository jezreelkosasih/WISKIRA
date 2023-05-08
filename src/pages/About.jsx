// Import Components
import Navbar from "../components/Navbar";

// Import skill
import communication from '../images/skill/communication.png'
import css from '../images/skill/css.png'
import figma from '../images/skill/figma.png'

import html from '../images/skill/html.png'
import javascript from '../images/skill/javascript.png'
import leadership from '../images/skill/leadership.png'

import microsoft from '../images/skill/microsoft.png'
import mysql from '../images/skill/mysql.png'
import php from '../images/skill/php.png'




import dayspic from '../images/project/7daysPic.jpg';
import prototipe from '../images/project/prototipe.jpg';
import umnlife from '../images/project/umnLife.jpg';
import saya from '../images/project/Profile.jpg';

// Import React Stuff
import { StrictMode } from "react";
import { motion } from "framer-motion";
import $ from 'jquery';
import { useNavigate, Link } from 'react-router-dom';

const Home = () => {
    $('body').css('backgroundColor', '#F1F1F1');
    const navigate = useNavigate();
    return (
        <StrictMode>
            <Navbar />
            <main id="main" className="{ container }">
                <div id="whatIsSevendays" className="penjelasan">
                    <div className="leftSection">
                        <img src={saya} alt="sayaGanteng" id="sayakeren" />
                    </div>
                    <div className="rightSection">
                        <h3>Hi,<br /> Saya Joshua Hotama</h3>
                        <p>I am currently studying at Universitas Multimedia Nusantara 4th semester in Informatics Engineering Major, I like technology, therefore I try to explore this technology. My focus is in the field of technology, I have skills in Design, Web Development and Leadership. My passion is in Graphic Design by using Figma, I can make Prototypes.</p>
                    </div>
                </div>
                <div id="project" className="project">
                    <h1>My Skills</h1>
                    <motion.div whileHover={{rotate: 1}} className="topSection">
                        <p>SThis is a skill that I have mastered for now, for the future my skills will continue to grow. <br />
                        this is not the end, this is just the beginning of other things.</p>
                    </motion.div>
                    <div className="skill1">
                        <div id="left" className="square">
                            <img src={communication} class="imgPro"/>
                            <p>Communication</p>
                        </div>
                        <div id="mid" className="square">
                            <img src={css} class="imgPro"/>
                            <p>Css</p>
                        </div>
                        <div id="right" className="square">
                            <img src={figma} class="imgPro"/>
                            <p>Figma</p>
                        </div>
                    </div>
                    <div className="skill2">
                        <div id="right" className="square">
                            <img src={html} class="imgPro"/>
                            <p>Html</p>
                        </div>
                        <div id="left" className="square">
                            <img src={javascript} class="imgPro"/>
                            <p>Javascript</p>
                        </div>
                        <div id="mid" className="square">
                            <img src={leadership} class="imgPro"/>
                            <p>Leadership</p>
                        </div>
                    </div>
                    <div className="skill3">
                        <div id="mid" className="square">
                            <img src={microsoft} class="imgPro"/>
                            <p>Microsoft</p>
                        </div>
                        <div id="right" className="square">
                            <img src={mysql} class="imgPro"/>
                            <p>MySQL</p>
                        </div>
                        <div id="left" className="square">
                            <img src={php} class="imgPro"/>
                            <p>PHP</p>
                        </div>
                    </div>
                </div>
                <footer>
                    <div className="insideFooter">
                        <h1>©Joshua Hotama 2023 | Personal Website</h1>
                    </div>
                </footer>
            </main>
        </StrictMode>
    );
}
 
export default Home;
