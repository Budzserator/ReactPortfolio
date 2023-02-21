import React from 'react'
import CTA from './CTA'
import ME from '../../assets/Barni03.jpg'

function Header() {
  return (
    <header>
      <div className='container header__container'>
        <h5> Hello I'm </h5>
        <h1> Barnabás Bor </h1>
        <h5 className='text-light'> Fullstack Developer </h5>
        <CTA/>
        <div className='me'>
          <img src={ME} alt=''/> 
        </div>
        <a href='#contact' className='scroll__down'>Scroll Down</a>
      </div>
    </header>

  )
}

export default Header
