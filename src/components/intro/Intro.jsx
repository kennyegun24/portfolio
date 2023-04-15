import React from 'react'
import './intro.css'
import Typewriter from '../Typewriter'
import CV from '../../assets/KennyCv.pdf'
const Intro = () => {
    return (
        <div data-aos="fade-down" className='introMainDiv flex alignCenter justifyCenter flexColumn' id='about'>
            <div className='flex flexColumn'>
                <div className='type'>
                    <Typewriter text="Hello, I am Kenny Elias!" />
                </div>
                <p>
                    Full-Stack Developer Ruby on Rails and Front-end React.Js Developer
                </p>
                <p>
                    I'm a Building technology student from Nigeria
                </p>
                <p>
                    I have built several projects varying from different technologies and I always follow the best practices so I produce a well maintainable code as well as a fully functional webapp
                </p>
                <p>
                    I learned how to code from an Online Coding School that is based in California called Microverse.
                </p>
            </div>
            <a href={CV} download className='hover margin-top-2rem moreAboutMe'>Download my CV</a>
        </div>
    )
}

export default Intro;