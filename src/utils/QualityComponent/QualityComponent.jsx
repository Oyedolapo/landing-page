import React from 'react'
import './QualityComponent.css'

const QualityComponent = ({ title, img, text}) => {
  return (
    <div className="app__qualityComponent-card">
      <img src={img} alt="icon" />
      <div className="app__qualityComponent-text">
        <h6>{title}</h6>
        <p>{text}</p>
      </div>
    </div>
    
  )
}

export default QualityComponent