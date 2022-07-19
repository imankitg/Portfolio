import React from 'react'
import './portfolio.css'
import IMG1 from '../../images/mern.png'
import IMG2 from '../../images/textHelper.png'
import IMG3 from '../../images/portfolio2.jpg'

const Portfolio = () => {
    return (
        <section id='portfolio'>
            <h5>My Recent Work</h5>
            <h2>Portfolio</h2>

            <div className="container portfolio__container">
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG1} alt="" />
                    </div>
                    <h3>MERN app with JWT authentication on REST API</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Ankit-Gupta0/MERN-App" className='btn' target='_blank' rel="noreferrer noopener">GitHub</a>
                        <a href="https://mernankit.herokuapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer noopener">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG2} alt="" />
                    </div>
                    <h3>A simple text utility app in which user can perform multiple operation on entered texts.</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com/Ankit-Gupta0/text-util" className='btn' target='_blank' rel="noreferrer noopener">GitHub</a>
                        <a href="https://text-assist.herokuapp.com/" className='btn btn-primary' target='_blank' rel="noreferrer noopener">Live Demo</a>
                    </div>
                </article>
                <article className="portfolio__item">
                    <div className="portfolio__item-image">
                        <img src={IMG3} alt="" />
                    </div>
                    <h3>This is a portfolio item title</h3>
                    <div className="portfolio__item-cta">
                        <a href="https://github.com" className='btn' target='_blank' rel="noreferrer noopener">GitHub</a>
                        <a href="https://leetcode.com" className='btn btn-primary' target='_blank' rel="noreferrer noopener">Live Demo</a>
                    </div>
                </article>
            </div>
        </section>
    )
}

export default Portfolio
