import React from 'react'
import './about.css'
import Me from '../../images/showcase.svg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'

const About = () => {
    return (
        <section id='about'>
            <h5>Get To Know</h5>
            <h2>About Me</h2>

            <div className="container about__container">
                <div className="about__me">
                    <div className="about__me-image">
                        <img src={Me} alt="" />
                    </div>
                </div>

                <div className="about__content">
                    <div className="about__cards">
                        <article className='about__card'>
                            <FaAward className='about__icon'/>
                            <h5>B.Tech '24</h5>
                            <small>NIT Patna | CGPA - 8.94</small>
                        </article>
                        <article className='about__card'>
                            <FiUsers className='about__icon'/>
                            <h5>Intermediate</h5>
                            <small>95.2%</small>
                        </article>
                        <article className='about__card'>
                            <VscFolderLibrary className='about__icon'/>
                            <h5>Matriculation</h5>
                            <small>95.8% District Topper</small>
                        </article>
                    </div>
                   
                    <p>
                        An undergraduate student from NIT Patna with demonstrated skill in Problem Solving and Web Development. Solving DSA problems on <a href="https://leetcode.com/ankitgupta0/" target='_blank' rel="noreferrer noopener">Leetcode</a> with 100% consistency. Solved 100+ questions there.
                    </p>

                    <a href="#contact" className='btn btn-primary'>Let's Talk</a>

                </div>

            </div>

        </section>
    )
}

export default About
