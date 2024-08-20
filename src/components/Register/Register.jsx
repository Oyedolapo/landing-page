import React, { useEffect, useRef } from 'react'
import images from '../../constants/images'
import './Register.css'
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
          <div className="app__register-btn">
            <button>Register Now</button>
          </div>
        </div>
        <motion.div className="app__register-image" initial="hidden" animate={imageControls} ref={imageRef} variants={{
          hidden: { rotate: 100, opacity: 0},
          visible: {
            rotate: 0,
            opacity: 1,
            transition: { duration: 0.8, ease: "easeOut" },
          }
        }}>
          <img src={images.plumber} alt="plumber" />
        </motion.div>
      </div>
    </div>
  )
}

export default Register