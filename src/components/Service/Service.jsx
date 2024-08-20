import React from 'react'
import './Service.css';

import { ServiceCard } from '../../utils';
import images from '../../constants/images';

const Service = () => {
  return (
    <div className='app__service'>
        <div className="app__service-heading">
            <h1>Popular Services</h1>
        </div>
        <div className="app__service-cards">
            <ServiceCard title="Electrical Repair & Maintenance" imgUrl={images.cable}/>
            <ServiceCard title="Building & Civil Works" imgUrl={images.civil}/>
            <ServiceCard title="Plumbing Services" imgUrl={images.pipe}/>
            <ServiceCard title="HVAC / Air Conditioning" imgUrl={images.minisplit}/>
            <ServiceCard title="Environmental Services" imgUrl={images.plant}/>
            <ServiceCard title="Equipment Leasing" imgUrl={images.truck}/>
            <ServiceCard title="Cleaning Services" imgUrl={images.bottle}/>
            <ServiceCard title="Fire Systems & Security" imgUrl={images.alarm}/>
            <ServiceCard title="Generator Maintenance" imgUrl={images.generator}/>
            <ServiceCard title="Domestic Appliances Repair & Maintenance" imgUrl={images.machine}/>
            <ServiceCard title="Office Equipment Repair & Maintenance" imgUrl={images.printer}/>
            <ServiceCard title="Furniture & Carpentry Services" imgUrl={images.chair}/>
        </div>
    </div>
  )
}

export default Service