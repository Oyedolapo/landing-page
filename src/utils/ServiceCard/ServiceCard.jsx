import React from 'react'
import './ServiceCard.css';

const ServiceCard = ({ title, imgUrl }) => {
  return (
    <div className='app__serviceCard'>
      <div className="app__service-icon">
        <img src={imgUrl} alt="service" />
      </div>
      <div className="app__service-info">
        <h4>{title}</h4>
      </div>
    </div>
  )
}

export default ServiceCard