import CV from '../../images/cv.pdf'
import ME from '../../images/me.png'


const CTA = () => {
    return (
        <div className='cta'>
            <a href={CV} download className='btn'>Download CV</a>
            <a href="#contact" className='btn btn-primary'>Let's Talk</a>
        </div>


    )
}

export default CTA
