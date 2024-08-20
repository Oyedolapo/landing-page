import React from 'react'
import './Banner.css';
import { Link } from 'react-router-dom';

const Banner = () => {
  return (
    <div className='app__banner'>
        <div className="app__banner-content">
            <h1><span className='app__banner-span'>Skilled and reliable experts</span><br /> at your disposal</h1>
            <p>What service do you require today?</p>
            <form className="app__banner-dropdown">
                <select name="service" id="service">
                    <option value="artisan">Artisan</option>
                    <option value="vendors">Vendors</option>
                    <option value="service provider">Service Provider</option>
                    <option value="facility management">Offsite / Facility Management</option>
                </select>
                <div className="app__banner-submit" id="">
                    <Link to="contact/#contactForm"><button type="submit">Get quote now</button></Link>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Banner