import { Markunread, Facebook, LinkedIn, WhatsApp } from '@mui/icons-material'
import React from 'react'
import "./footer.css"

const Footer = () => {
  return (
    <footer>
      <a href='#' className='footer__logo'> ME </a>
     
     <ul className='permalinks'>
        <li><a href='#'>Home</a></li>
        <li><a href='#about'>About</a></li>
        <li><a href='#experience'>Experience</a></li>
        {/* <li><a href='#service'>Services</a></li> */}
        <li><a href='#portfolio'>Portfolio</a></li>
        {/* <li><a href='#testimonial'>Testimonials</a></li> */}
        <li><a href='#contact'>Contact</a></li>
      </ul>

      <div className='footer__socials'>
        <a href="https://api.whatsapp.com/send?phone+2250758731621" target='_blank'><WhatsApp/></a>
        <a href="https://linkedin" target='_blank'><LinkedIn /></a>
        <a href="mailto:rosecoulibaly30@gmail.com " target='_blank'><Markunread/></a>
      </div>

      <div className='footer__copyright'>
        <small>&copy; CKRF All right reserved. </small>
      </div>
    </footer>
  )
}

export default Footer
