import React, { useEffect, useRef } from 'react'
import images from '../../constants/images'
import './Register.css'
import { Link } from 'react-router-dom'
import { motion, useAnimation, useInView } from 'framer-motion'


const Register = () => {
  const imageRef = useRef(null)

  const imageInView = useInView(imageRef)

  const imageControls = useAnimation()

  useEffect(() => {
    if (imageInView) {
      imageControls.start("visible")
  } else {
      imageControls.start("hidden")
  }
  })

  return (
    <div className='app__register'>
      <div className="app__register-content">
        <div className="app__register-text">
          <h2>Want to be a service provider?</h2>
          <p>Use Call2Fix and start earning</p>
          <div className="app__register-img">
            <Link to="https://play.google.com/store/apps/details?id=com.tulabyte.call2fix&hl=en&gl=US&pcampaignid=pcampaignidMKT-Other-global-all-co-prtnr-py-PartBadge-Mar2515-1" target='_blank'><img src={images.playstore} alt="playstore" /></Link>
            <Link to="https://apps.apple.com/ng/app/call2fix/id1483186601" target='_blank'><img src={images.appstore} alt="appstore" /></Link>
          </div>
        </div>
        <motion.div className="app__register-image" initial="hidden" animate={imageControls} ref={imageRef} variants={{
          hidden: { rotate: 100, opacity: 0},
          visible: {
            rotate: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeInOut" },
          }
        }}>
          <img src={images.plumber} alt="plumber" />
        </motion.div>
      </div>
    </div>
  )
}

export default Register