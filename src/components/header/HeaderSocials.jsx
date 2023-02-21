import React from 'react'
import {BsLinkedin,BsGithub,BsFacebook} from 'react-icons/bs'

const HeaderSocials = () => {
  return (
    <div className='header__socials'>
        <a href="https://www.linkedin.com/in/barnab%C3%A1s-bor-357184244/" target={'_blank'}><BsLinkedin/></a>
        <a href="https://github.com/Budzserator" target={'_blank'}><BsGithub/></a>
        <a href="https://www.facebook.com/barnabas.bor/"target={'_blank'}><BsFacebook/></a>
    </div> 
  )
}

export default HeaderSocials
