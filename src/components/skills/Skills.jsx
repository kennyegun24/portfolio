import React from 'react'
import './skills.css'

const Skills = () => {
    return (
        <div className='skillsDiv flex flexColumn alignCenter' id='skills'>
            <h2 data-aos="fade-bottom">Skills</h2>
            <div data-aos="fade-right" className='skillsDivSm wrap flex'>
                <div data-aos="fade-right" className='flexColumn flex'>
                    <h3>Frameworks and tools</h3>
                    <ul className='flex flexColumn'>
                        <li>React.js</li>
                        <li>Ruby on Rails</li>
                        <li>PostgreSQL</li>
                        <li>MySQL</li>
                        <li>Firebase</li>
                        <li>Jest</li>
                        <li>Git</li>
                        <li>Rspec</li>
                    </ul>
                </div>

                <div data-aos="fade-up" className='flexColumn flex'>
                    <h3>Languages and Web development</h3>
                    <ul className='flex flexColumn'>
                        <li>JavaScript</li>
                        <li>Ruby</li>
                        <li>HTML5</li>
                        <li>CSS3</li>
                    </ul>
                </div>

                <div data-aos="fade-left" className='flexColumn flex'>
                    <h3>Soft Skills</h3>
                    <ul className='flex flexColumn'>
                        <li>Project Management</li>
                        <li>Communication</li>
                        <li>Attention to detail</li>
                        <li>Remote Works</li>
                        <li>Collaboration</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Skills