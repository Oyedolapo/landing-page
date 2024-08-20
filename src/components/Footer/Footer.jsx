import React from 'react'
import images from '../../constants/images'
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";
import { FaApple } from "react-icons/fa";
import './Footer.css';

const Footer = () => {
  return (
    <footer className='app__footer'>
      <div className="footer-links">
        <div className="footer-links_one">
          <div className="footer-logo">
            <img src={images.logo} alt="logo" />
          </div>
          <p>Call2Fix provides you with secure, safe, convenient, and reliable home and office repair services from the comfort of your phone.</p>
          <h5>
            <span><FaEnvelope /></span>call2fixteam@alphamead.com
          </h5>
          <h5>
            <span><BsFillPhoneFill /></span>+2347015300138
          </h5>
          <h5>
            <span><FaLocationDot /></span>6, Mobolaji Johnson Avenue, Ikoyi, Lagos
          </h5>
        </div>

        <div className="footer-links_two">
          <h4>Quick links</h4>
          <p>Home</p>
          <p>Earn</p>
          <p>Request a service</p>
          <p>Alpha Mead</p>
        </div>

        <div className="footer-links_three">
          <h4>Our services</h4>
          <p>Electrical Repair & Maintenance</p>
          <p>Building & Civil Works</p>
          <p>Plumbing</p>
          <p>HVAC/Air Conditioning</p>
          <p>Environmental Services</p>
          <p>More...</p>
        </div>

        <div className="footer-links_four">
          <h4>Download our app</h4>
          <img src={images.playstore} alt="playstore" />
        </div>
      </div>

      <div className="app__footer-copyright">
        <MdCopyright /> 
        <h4>Alpha Mead Group</h4>
      </div>
    </footer>
  )
}

export default Footer