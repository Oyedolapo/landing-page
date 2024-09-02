import React from 'react'
import './Service.css';

import { ServiceCard } from '../../utils';
import { data } from '../../constants';
import { Link } from 'react-router-dom';

const Service = () => {
  return (
    <div className='app__service'>
      <div className="app__service-heading">
        <h1>Popular Services</h1>
      </div>
      <div className="app__service-cards">
        {data.serviceData.map((service) => (
          <Link to={`request/${service.title}`} key={service.title}><ServiceCard title={service.title} imgUrl={service.imgUrl}/></Link>
        ))}
      </div>
    </div>
  )
}

export default Service