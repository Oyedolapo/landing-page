import React from 'react'
import images from '../../constants/images'
import { FaEnvelope, FaLocationDot } from "react-icons/fa6";
import { BsFillPhoneFill } from "react-icons/bs";
import { MdCopyright } from "react-icons/md";
import './Footer.css';
import { Link } from 'react-router-dom';

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
          <Link to='.'><p>Home</p></Link>
          <Link to='about'><p>Earn</p></Link>
          <Link to='request'><p>Request a service</p></Link>
          <Link to='https://alphamead.com'><p>Alpha Mead</p></Link>
        </div>

        <div className="footer-links_three">
          <h4>Our services</h4>
          <p>Electrical & Power Systems</p>
          <p>Plumbing, Water & Sewage</p>
          <p>Civil Works & Painting</p>
          <p>Locksmith</p>
          <p>Home Electronics</p>
          <Link to="request" className='more'><p>More...</p></Link>
        </div>

        <div className="footer-links_four">
          <h4>Download our app</h4>
           <Link to="https://play.google.com/store/apps/details?id=com.tulabyte.call2fix&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1"><img src={images.playstore} alt="playstore" /></Link>
           <Link to="https://apps.apple.com/ng/app/call2fix/id1483186601"><img src={images.appstore} alt="appstore" /></Link>
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