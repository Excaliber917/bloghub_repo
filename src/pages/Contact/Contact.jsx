import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './contact.css'
export default function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_onok0mt', 'template_66edv8m', form.current, 'qchSsSFwLiQI_vawc')
      .then((result) => {
        console.log(result.text);
        e.target.reset()
      }, (error) => {
        console.log(error.text);
      });
  };
  return (
    <form ref={form} onSubmit={sendEmail} className="form-container" >
      <label className='label'>Name</label>
      <input type="text" name="name"  className='input' />
      <label className='label'>Email</label>
      <input type="email" name="email" className='input' />
      <label className='label'>Message</label>
      <textarea name="message" className='textarea'/>
      <input type="submit" value="Send" className='input' />
    </form>
  )
}
