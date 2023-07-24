import React from 'react'
import {LinkedIn,GitHub} from '@mui/icons-material';

const HeaderSocials = () => {
  return (
    <div className="header__socials">
    <a href="https://www.linkedin.com" target='_blank'><LinkedIn /></a>
    <a href="https://www.github.com" target='_blank'><GitHub /></a>
      
    </div>
  )
}

export default HeaderSocials
