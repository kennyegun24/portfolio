import React from 'react'
import './contact.css'

const Contact = () => {
    return (
        <div className='contactDiv flex justifyCenter alignCenter flexColumn' id='contact_me'>
            <h2>Contact Me</h2>
            <form className='contactForm flex flexColumn alignCenter'>
                <input type="text" placeholder='Enter name' required />
                <input type="email" placeholder='Enter email address' required />
                <textarea name="message" id="" cols="30" rows="10" placeholder='Type message' required />
                <button className='hover moreAboutMe' type='submit'>Send Message</button>
            </form>
        </div>
    )
}

export default Contact