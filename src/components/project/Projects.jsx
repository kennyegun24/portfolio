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
              <div className='projectLilDiv flex alignCenter'>
                <aside data-aos={proj.data2} className='aside1'>
                  <div className='flex flexColumn'>
                    <h4>
                      {proj.projectTitle}
                    </h4>
                    <p>{proj.description2}</p>
                    <ul className='flex'>
                      <li>CSS</li>
                      <li>React.Js</li>
                      <li>Firebase</li>
                    </ul>
                    <div className='sourceLinks flex'>
                      <a href={proj.liveDemo} className='hover moreAboutMe'>Visite Site</a>
                      <a href={proj.sourceCode} className='hover moreAboutMe'>Source Code</a>
                    </div>
                  </div>
                </aside>
                <aside data-aos={proj.data1} className='aside2'>
                  <img style={{ width: '100%', objectFit: 'contain' }} src={proj.projectImage} alt="" />
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