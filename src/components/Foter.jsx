import React from 'react'
import '../styles/footer.scss'
import icon from '../images/coffeelogo.png'

const Foter = () => {
  return (
   <footer>
    <div className="footer-container">
      <div className="contact-con">
        <div className="footer-header">Contact Us</div>
        <div className="footer-head">Send us a message</div>
        <div className="form">
          <input type="text" placeholder='Full name' />
          <input type="text" placeholder='Your Email' />
          <textarea type="text" className='text'  placeholder='Your Message'/>
<div className="btn">          <button className='footer-btn'>Submit</button></div>
        </div>
      </div>
    <div className="site-map">
      <div className="footer-header">Sitemap</div>
      <div className="footer-head">All our pages</div>
      <div className="links">
        <div className="link">
          <div className="div"></div>
          <div className="nav">Home</div>
        </div>
        <div className="link">
          <div className="div"></div>
          <div className="nav">About Us</div>
        </div>
        <div className="link">
          <div className="div"></div>
          <div className="nav">Feature</div>
        </div>
        <div className="link">
          <div className="div"></div>
          <div className="nav">Pricing</div>
        </div>
        <div className="link">
          <div className="div"></div>
          <div className="nav">Contact Us</div>
        </div>
      </div>
    </div>
    <div className="communication">
<img src={icon} alt="" />

<div className="phone">
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="35" viewBox="0 0 36 35" fill="none">
  <path d="M1.7312 23.5053C0.423442 24.0267 -0.272621 25.4013 0.100018 26.7149L1.78744 32.6738C2.12493 33.852 3.23582 34.6714 4.50139 34.6714C21.8959 34.6714 36 21.0879 36 4.33529C36 3.11643 35.1493 2.04654 33.9259 1.72151L27.7386 0.0963631C26.3746 -0.262524 24.9474 0.407848 24.406 1.66734L21.5936 8.16793C21.1155 9.27168 21.446 10.5515 22.4092 11.3031L25.8754 14.0388C23.5341 18.8059 19.5265 22.6656 14.5767 24.9205L11.7433 21.5822C10.9558 20.6545 9.63397 20.3362 8.48793 20.7967L1.73823 23.5053H1.7312Z" fill="white"/>
</svg>
<div className="p">+2347046226782</div>
</div>
<div className="phone">
<svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" viewBox="0 0 36 36" fill="none">
  <path d="M4.5 7.82671C3.88125 7.82671 3.375 8.32985 3.375 8.9448V10.4892L15.5039 20.3843C16.9594 21.5723 19.0477 21.5723 20.5031 20.3843L32.625 10.4892V8.9448C32.625 8.32985 32.1188 7.82671 31.5 7.82671H4.5ZM3.375 14.8288V26.8344C3.375 27.4493 3.88125 27.9525 4.5 27.9525H31.5C32.1188 27.9525 32.625 27.4493 32.625 26.8344V14.8288L22.6406 22.9769C19.9406 25.1782 16.0523 25.1782 13.3594 22.9769L3.375 14.8288ZM0 8.9448C0 6.478 2.01797 4.47241 4.5 4.47241H31.5C33.982 4.47241 36 6.478 36 8.9448V26.8344C36 29.3012 33.982 31.3068 31.5 31.3068H4.5C2.01797 31.3068 0 29.3012 0 26.8344V8.9448Z" fill="white"/>
</svg>
<div className="p">matthewarowosegbe@gmail.com</div>
</div>
    </div>
    </div>
    <div className="copy-right">
      <p>Copyright 2020 All Rights Reserved Company Name'.</p>
    </div>
   </footer>
  )
}

export default Foter