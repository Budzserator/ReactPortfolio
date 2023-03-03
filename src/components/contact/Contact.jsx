import React from 'react'
import "./contact.css" 
import {AiOutlineMail} from 'react-icons/ai'
import {RiMessengerLine} from 'react-icons/ri'

function Contact() {
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
        <form action=''>
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
