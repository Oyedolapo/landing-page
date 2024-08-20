import React from 'react'
import images from '../../constants/images'
import './Navbar.css';
import { Link, NavLink } from 'react-router-dom';



const Navbar = () => {
  return (
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <Link to="/"><img src={images.logo} alt="logo" /></Link>
      </div>
      <ul className='app__navbar-links'>
        <NavLink to="." className={({isActive}) => isActive ? "active-links" : null}><li>Home</li></NavLink>
        <NavLink to="about" className={({isActive}) => isActive ? "active-links" : null}><li>Earn</li></NavLink>
        <NavLink to="contact" className={({isActive}) => isActive ? "active-links" : null}><li>Request</li></NavLink>
      </ul>
    </nav>
  )
}

export default Navbar