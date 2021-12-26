import DarkButton from '../../components/Button/Button'
import Me from '../../img/mundir.png'
import './Welcome.css'
import { useState } from 'react'
import Skill from '../../components/Skill/Skill'
const Welcome = () => {
    const [skills] = useState(["JavaScript", "PHP", "BootStrap", "React Js", "Codeigniter", "Sass", "Ajax", "Mysql"]);
    const handleDownload = () => {
        window.open('/assets/muhammed-mundir.pdf');
    }
    return (
        <div>
            <section id='welcome'>
                <div className="intro">
                    <h1 className='introText'><span>Hi, my name is</span><br/>Muhammed Mundir.<br/><span>I’m A Full Stack Web Developer</span></h1>
                    <DarkButton text="Download my resume" action={handleDownload}/>
                    {/* <a href="/assets/muhammed-mundir.pdf" download="muhammed-mundir">pdf</a> */}
                </div>
            </section>

            <section id='aboutMe'>
                <div className="about">
                    <h4>About Me</h4>
                    <div className="about-col-row">
                        <div className="about-col">
                            <p>Hi, my name is Muhammed Mundir. I'm a full stack web developer.
                            In 2017 I started my developer journey. During this period I completed
                            various projects.</p>
                            <p>I am always happy to work for you. If you need my service regarding your 
                            web ideas please <a href="mailto:codewithmundir@gmail.com">contact me.</a></p>
                        </div>
                        <div className="about-col">
                            <div className="profile-image-cover">
                                <img src={Me} alt="mundir" className='me'/>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            <section id='mySkills'>
                <div className="skills">
                    <h4>Skills</h4>
                    <div className="skill-row">
                        {skills.map((item, index) => (
                             <Skill key={index} text={item} />
                         ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Welcome
