import React from 'react'
import './contact.css'
import { AiOutlineMail } from 'react-icons/ai'
import { AiOutlinePhone } from 'react-icons/ai'
import { useRef } from 'react';
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_73o9177', 'template_kspw3fj', form.current, 'Z9clxleBxrR2RGMes')

        e.target.reset();
    };
    return (
        <section id='contact'>
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>

            <div className="container contact_container">
                <div className="contact_options">
                    <article className="contact_option">
                        <AiOutlineMail className='contact_option-icon' />
                        <h4>Email</h4>
                        <h5>doh13@my.bcit.ca</h5>
                        <a href="mailto:doh13@my.bcit.ca">Send a message</a>
                    </article>
                    <article className="contact_option">
                        <AiOutlinePhone className='contact_option-icon' />
                        <h4>Phone</h4>
                        <h5>778-227-7145</h5>
                        <a href="tel:7782277145">Send a call</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type="text" name='name' placeholder='Your Full Name' required />
                    <input type="email" name='email' placeholder='Your Email' required />
                    <textarea name="message" rows="7" placeholder='Your Message' required></textarea>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
