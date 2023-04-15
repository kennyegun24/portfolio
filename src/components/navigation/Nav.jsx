import React, { useState } from 'react'
import { FaBars } from 'react-icons/fa'
import './nav.css'
const Nav = () => {
    const [toggle, setToggle] = useState(false)
    const toggleMenu = () => {
        if (!toggle) {
            setToggle(true)
        } else {
            setToggle(false)
        }
    }
    // if (toggle === true) {
    //     document.body.addEventListener('click', setToggle(false))
    // }

    const hideMenu = () => {
        setToggle(false)
    }
    return (
        <header className='toggle flex spaceBetween alignCenter navHeader flex spaceBetween'>
            <h3>Kenny Egun</h3>
            <div className='showToggle'>
                <FaBars className='menuIcon' onClick={toggleMenu} />
            </div>
            <nav className={`navigationBtns flex ${toggle ? 'show flex wrap flexColumn navigationBtns flex' : 'hide'}`}>
                <a onClick={hideMenu} href="#about">About</a>
                <a onClick={hideMenu} href="#skills">Skills</a>
                <a onClick={hideMenu} href="#projects">Projects</a>
                <a onClick={hideMenu} href="#contact_me">Contact</a>
            </nav>
        </header >
        // <header className={window.innerWidth > 300 && window.innerWidth < 767 ? `toggle flex spaceBetween alignCenter` : 'navHeader flex spaceBetween'}>
        //     <h3>Kenny Egun</h3>
        //     {window.innerWidth > 300 && window.innerWidth < 767 && <FaBars onClick={toggleMenu} />}
        //     <nav className={window.innerWidth > 300 && window.innerWidth < 767 ? (toggle ? 'show flex wrap flexColumn' : 'hide') : 'navigationBtns flex'}>
        //         <a onClick={hideMenu} href="#about">About</a>
        //         <a onClick={hideMenu} href="#skills">Skills</a>
        //         <a onClick={hideMenu} href="#projects">Projects</a>
        //         <a onClick={hideMenu} href="#contact_me">Contact</a>
        //     </nav>
        // </header>
    )
}

export default Nav