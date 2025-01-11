// import React from 'react'
import { assets } from '../../assets/assets'
import './Footer.css'

function Footer() {
  return (
    <div className='footer' id='footer'>
      <div className="footer-content">
        <div className="footer-content-left">
            <img src={assets.logo} alt="" />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam sequi amet quo nemo eos, tempore a.</p>
             <div className="footer-social-icons">
                <img src={assets.facebook_icon} alt="" />
                <img src={assets.twitter_icon} alt="" />
                <img src={assets.linkedin_icon} alt="" />
             </div>
        </div>
        <div className="footer-content-center">
            <h2>COMPANY</h2>
            <ul>
                <li>Home</li>
                <li>About us</li>
                <li>Delivery</li>
                <li>Privacy Policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
              <h2>GIT IN TOUCH</h2>
              <ul>
                <li>+02 01270922057</li>
                <li>BESHOY.MICHAAEL@GMAIL.COM</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Lorem ipsum dolor sit, amet consectetur adipisicing.</p>
    </div>
  )
}

export default Footer
