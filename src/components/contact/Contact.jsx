import React, { useRef } from 'react';
import './contact.css'
import {MdOutlineEmail} from 'react-icons/md'
import {BsWhatsapp} from 'react-icons/bs'
import emailjs from 'emailjs-com'



const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_iwzyrxs', 'template_55se0wn', form.current, 'G5vLj4724xqPOvDEw')
        
        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact__container">
                <div className="contact__options">
                    <article className='contact__option'>
                        <MdOutlineEmail className='contact__option-icon'/>
                        <h4>Email</h4>
                        <h5>iamankitgupta007@gmail.com</h5>
                        <a href="mailto:iamankitgupta007@gmail.com" target='_blank'>Send a message</a>
                    </article>
                    <article className='contact__option'>
                        <BsWhatsapp className='contact__option-icon'/>
                        <h4>WhatsApp</h4>
                        <h5>+9199##655###</h5>
                        <a href="https://wa.me/+919905655153" target='_blank'>Send a message</a>
                    </article>
                </div>

                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name="name" placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button className="btn btn-primary">Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
