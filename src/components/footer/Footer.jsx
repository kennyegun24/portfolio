import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import './footer.css'

const Footer = () => {
    return (
        <div className='footerDiv flex spaceBetween'>
            <aside className='iconAside1 flex'>
                <a href='https://github.com/kennyegun24'><FaGithub /></a>
                <a href='https://linkedin.com/in/kenny-egun-kennyegun24'><FaLinkedin /></a>
            </aside>

            <aside className='footerAside2'>
                <p>Email: &copy;kennyegun240@gmail.com</p>
            </aside>
        </div>
    )
}

export default Footer