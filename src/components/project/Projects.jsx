import React from 'react'
import './project.css'
import { allProjects } from '../projects'
const Projects = () => {
  return (
    <div className='projectDiv' id='projects'>
      <div>

        <h3>Highlighted Projects 💻</h3>

        <div>
          {allProjects.map((proj) => (
            <div >
              <div className={`${proj.class} projectLilDiv flex alignCenter`}>
                <aside data-aos={proj.data2} className='aside1'>
                  <div className='flex flexColumn'>
                    <h4>
                      {proj.projectTitle}
                    </h4>
                    <p>{proj.description2}</p>
                    <ul className='flex'>
                      {proj.technology.map((tech) => (
                        <li>{tech}</li>
                      ))}
                    </ul>
                    <div className='sourceLinks flex'>
                      {proj.liveDemo && <a href={proj.liveDemo} target="_blank" rel="noreferrer noopener" className='hover moreAboutMe'>Visit Site</a>}
                      <a href={proj.sourceCode} target="_blank" rel="noreferrer noopener" className='hover moreAboutMe'>Source Code</a>
                    </div>
                  </div>
                </aside>
                <aside data-aos={proj.data1} className='aside2'>
                  <img style={{ width: '100%', objectFit: 'contain', maxHeight: '500px' }} src={proj.projectImage} alt="" />
                </aside>
              </div>
              <hr style={{ marginBottom: '3rem', marginTop: '3rem' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Projects
