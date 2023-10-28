import React from 'react'
import '../styles/header.scss'
import coffeimage from '../images/coffeelogo.png'
import background from '../images/coffeeBackground.png'
const Header = () => {
  return (
    <section>
      <div className="header-container">
        <div className="header-logo"><img src={coffeimage} alt="" /></div>
        <div className="header-text">
          <div className="header-head">Coffee Makes Mood</div>
          <div className="secondary-header">"indulge in every sip: Experience the Richness of Coffee!"</div>

        </div>
        <div className="header-image"><img className='background' src={background} alt="" /></div>
      </div>
    </section>
  )
}

export default Header