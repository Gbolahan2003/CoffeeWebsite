import React from 'react'
import '../styles/body.scss'
import image from '../images/coffeeImage.png'
import icon from '../images/coffeIcon.png'
export const Body = () => {
  return (
   <>
    <div className='body-container'>
      <div className="body-container-image">
        <img className='icon' src={image} alt="" />
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
    <div className="review-container">
      <div className="review-header">
        <div className="review-header-text">Reviews</div>
        <div className="review-header-image"><img  src={icon} alt="" /></div>
      </div>
      <div className="secondary-review-header">What other people are saying!</div>
      <div className="review-cards-container">
        <div className="review-card">
          <div className="review-text">"Indulge in the sublime experience of Coffee Borcelle, where every sip is a journey to flavor paradise. Crafted with precision, our rich blends ignite the senses and redefine coffee appreciation."</div>
          <div className="review-users">@elonmusk</div>
        </div>
        <div className="review-card">
          <div className="review-text">"Discover a world of taste with Coffee Brocelle. Each cup is a masterpiece, blending aromas and flavors that dance on your palate. Join us in celebrating coffee at its finest."</div>
          <div className="review-users">@JeffBezos</div>
        </div>
        <div className="review-card">
          <div className="review-text">“Welcome to the heart and soul of coffee passion –Coffee Borcelle. Our carefully curated beans are an ode to craftsmanship, brewing a story of perfection in every cup.”</div>
          <div className="review-users">@MrBeast</div>
        </div>
      </div>
    </div>
   </>
  )
}
