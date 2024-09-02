import React from 'react'
import { useParams } from 'react-router-dom'
import { ContactForm, Discover, PageBanner } from '../../components'
import { data } from '../../constants';
import './Contact.css'

const Contact = () => {
  const { serviceName } = useParams();

  const selectedService = data.serviceData.find(service => service.title === serviceName)
  return (
    <div className='app__contact'>
      <PageBanner />
      <Discover />
      <div className="app__contact-selectedService">
        <h3>{selectedService?.title}</h3>
        <p>{selectedService?.description}</p>
      </div>
      <ContactForm service={selectedService?.title || ""}/>
    </div>
  )
}

export default Contact