import React from 'react'
import './Details.css'

const Details = () => {
  return (
    <div className='app__details'>
        <div className="app__details-text">
            <h2>How it works</h2>
            <p>We are creating an eco-system of building maintenance service providers where customers can connect through Call2Fix mobile application to request for service in pre-defined categories of building maintenance.</p>
            <p>Service providers on Call2Fix will register their businesses and after confirmation, also register their screened artisans in the service category they have been pre-qualified for. Requests from customers from the platform will automatically be allocated to appropriate artisan (who have been registered by a service provider), based on proximity to the customer and the automated rating systems.</p>
            <p>Customers will receive a system-generated personal details of the assigned artisan, which they will use to verify his/her identity on arrival at the job site. On completion of the job, service provider and artisan get paid, in line with Call2Fix payment process.</p>
        </div>
    </div>
  )
}

export default Details