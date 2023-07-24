import React from 'react'
import {Markunread, LinkedIn, WhatsApp} from '@mui/icons-material';
import "./contact.css"
const Contact = () => {
  return (
    <section id="contact">
      <h5>Entrer en contacte avec moi</h5>
      <h2>Me contacter</h2>

      <div className='container contact__container'>
        <div className='contact__options'>
          <article className='contact__option'>
            <Markunread className='contact__option-icon' /> 
            <h4>Email</h4>
            <h5>rosecoulibaly30@ gmail.com</h5>
            <a href='mailto:rosecoulibaly30@gmail.com'>Envoyer un message</a>
          </article>
          <article className='contact__option'>
            <LinkedIn className='contact__option-icon' /> 
            <h4>LinkedIn</h4>
            <h5> </h5>
            <a href='https://www.linkedin.com/feed' target='_blank'>Envoyer un message</a>
          </article>
          <article className='contact__option'>
            <WhatsApp className='contact__option-icon' /> 
            <h4>WhatsApp</h4>
            <h5> </h5>
            <a href='https://api.whatsapp.com/send?phone+2250758731621' target='_blank'>Envoyer un message</a>
          </article>
        </div>
        <form action="">
          <input type='text' name="name" placeholder='Nom et prénoms'/>
          <input type='email' name="email" placeholder='Email'/>
          <textarea name='message' rows="8" placeholder='Votre message' required></textarea>
          <button type='submit' className='btn btn-primary'>Envoyer</button>
        </form>
      </div>

    </section>
  )
}

export default Contact
