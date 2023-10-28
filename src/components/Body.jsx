import React from 'react'
import '../styles/body.scss'
import image from '../images/coffeeImage.png'
export const Body = () => {
  return (
    <div className='body-container'>
      <div className="body-container-image">
        <img src={image} alt="" />
      </div>
      <div className="body-text">
        <div className="body-header">Discover Coffee Borocelle</div>
        <div className="body-secondary-header">Elevating Your Coffee Experience</div>
        <div className="text-1">At Coffee Borcelle, we're on a mission to redefine your coffee moments. Our carefully curated selection of premium beans, sourced from the world's most renowned coffee regions.
</div>
        <div className="text-1">
          
With expert craftsmanship and a commitment to quality, 
Join us in savoring the art of coffee, one cup at a time.
        </div>
        <div className="button-container">
          <button>Read More</button>
        </div>
      </div>
    </div>
  )
}
