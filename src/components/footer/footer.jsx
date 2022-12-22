/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'
import './footer.css'
import { BsLinkedin } from 'react-icons/bs'

const footer = () => {
    return (

        <footer>
            <a href="#" className='footer_logo'>Justin</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#projects">Projects</a></li>
                <li><a href="#hobbies">Hobbies</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>
            <div className='footer_socials'>
                <a href="https://linkedin.com"><BsLinkedin /></a>

            </div>

            <div className="footer_copyright">
                <small>&copy; Justin Oh All rights reserved. 2022</small>
            </div>
        </footer>
    )
}

export default footer
