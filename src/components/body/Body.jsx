import React from 'react'
import Nav from '../navigation/Nav'
import './body.css'
import Intro from '../intro/Intro'
import Projects from '../project/Projects'
import Skills from '../skills/Skills'
import Contact from '../contact/Contact'
const Body = () => {
    return (
        <div className="bodyDiv flex flexColumn">
            <div className='navMainDiv'>
                <Nav />
            </div>
            <div className='bodyIntro'>
                <div>
                    <Intro />
                </div>
            </div>
            <div className="bodyProjects">
                <div>
                    <Projects />
                    <a href='https://github.com/kennyegun24?tab=repositories' target="_blank" rel="noreferrer noopener" className='moreAboutMe hover'>More Projects</a>
                </div>
            </div>
            <div className="bodySkills">
                <div>
                    <Skills />
                </div>
            </div>
            <div className="bodyContact">
                <div>
                    <Contact />
                </div>
            </div>
        </div>
    )
}

export default Body
