import React from 'react'
import { ContactForm, Discover, PageBanner } from '../../components'

const Contact = () => {
  return (
    <div className='app__contact'>
      <PageBanner />
      <Discover />
      <ContactForm />
    </div>
  )
}

export default Contact