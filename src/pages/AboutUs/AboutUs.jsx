import React from 'react'
import './AboutUs.css'
import images from '../../constants/images'
import { Details, FAQs, Reason } from '../../components'

const AboutUs = () => {
  return (
    <div className='app__aboutUs'>
      <header className='app__aboutUs-header'>
        <img src={images.aboutUs} alt="" />
      </header>
      <Details />
      <Reason />
      <FAQs />
    </div>
  )
}

export default AboutUs