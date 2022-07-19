import React from 'react'
import {BsLinkedin} from 'react-icons/bs'
import {FaGithub} from 'react-icons/fa'
import {FaTwitterSquare} from 'react-icons/fa'


const HeaderSocials = () => {
    return (
        <div className='header__socials'>
            <a href="https://www.linkedin.com/in/ankit-gupta0/" target="_blank" rel="noreferrer noopener"><BsLinkedin/></a>
            <a href="https://github.com/Ankit-Gupta0" target="_blank" rel="noreferrer noopener"><FaGithub/></a>
            <a href="https://twitter.com" target="_blank" rel="noreferrer noopener"><FaTwitterSquare/></a>
        </div>
    )
}

export default HeaderSocials
