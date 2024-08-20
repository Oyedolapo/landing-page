import React from 'react'
import QualityComponent from '../../utils/QualityComponent/QualityComponent'
import './Quality.css'
import images from '../../constants/images'

const Quality = () => {
  return (
    <div className='app__quality'>
      <QualityComponent title="Sameday" img={images.calendar} text="Service"/>
      <QualityComponent title="1,000 +" img={images.cursor} text="Bookings"/>
      <QualityComponent title="4.8 Rating" img={images.feedback} text="Customer"/>
      <QualityComponent title="5,000 +" img={images.architect} text="Professionals"/>
    </div>
  )
}

export default Quality