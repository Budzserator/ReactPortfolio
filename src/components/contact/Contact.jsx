import React from 'react'
import "./contact.css"
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'
import {useRef} from 'react'
import emailjs from 'emailjs-com'

function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_l7qe3dk', 'template_dqibvhc', form.current, '7gRKxTiXO1EvyVv1W')
            .then((result) => {
                console.log(result.text);
            }, (error) => {
                console.log(error.text);
            })
        e.target.reset();
    };
    return (
        <section id="contact">
            <h5>Get In Touch</h5>
            <h2>Contact Me</h2>
            <div className='container contact__container'>
                <div className='contact__options'>
                    <article className='contact__option'>
                        <AiOutlineMail/>
                        <h4>Email</h4>
                        <h5>borokbora@gmail.com</h5>
                        <a href='mailto:borokbora@gmail.com' target='_blank'> Send an email</a>
                    </article>
                    <article className='contact__option'>
                        <RiMessengerLine/>
                        <h4>Messenger</h4>
                        <h5>Barnabás Bor</h5>
                        <a href='https://m.me/barnabas.bor' target='_blank'>Send a message</a>
                    </article>
                </div>
                <form ref={form} onSubmit={sendEmail}>
                    <input type='text' name='name' placeholder='Your Full Name' required/>
                    <input type='email' name='email' placeholder='Your Email' required/>
                    <textarea name='message' rows='7' placeholder='Your Message' required/>
                    <button type='submit' className='btn btn-primary'>Send Message</button>
                </form>
            </div>
        </section>
    )
}

export default Contact
