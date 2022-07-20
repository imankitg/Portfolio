import React from 'react'
import {FaLinkedin, FaGithub} from 'react-icons/fa'
import {IoLogoTwitter} from 'react-icons/io'
import './footer.css';

const Footer = () => {
    return (
        <footer>
            <a href="#" className='footer__logo'>Ankit_Gupta</a>

            <ul className='permalinks'>
                <li><a href="#">Home</a></li>
                <li><a href="#about">About</a></li>
                <li><a href="#experience">Experience</a></li>
                <li><a href="#portfolio">Portfolio</a></li>
                <li><a href="#contact">Contact</a></li>
            </ul>

            <div className="footer__socials">
                <a href="https://www.linkedin.com/in/ankit-gupta0/"><FaLinkedin /></a>
                <a href="https://github.com/Ankit-Gupta0"><FaGithub/></a>
                <a href="https://twitter.com/__Ankit__Gupta"><IoLogoTwitter/></a>
            </div>

            <div className="footer__copyright">
                <small>&copy; Ankit Gupta. All rights reserved</small>
            </div>

        </footer>
    )
}

export default Footer
