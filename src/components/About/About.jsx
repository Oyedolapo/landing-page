import React, { useEffect, useRef } from 'react'
import images from '../../constants/images'
import { motion, useAnimation, useInView } from 'framer-motion';
import './About.css';


const About = () => {
    const imageRef = useRef(null)
    const aboutTextRef = useRef(null)

    const isInView = useInView(imageRef)
    const textInView = useInView(aboutTextRef, { once: false })

    const mainControls = useAnimation()
    const textControls = useAnimation()

    useEffect(() => {
        if (isInView) {
            mainControls.start("visible")
        } else {
            mainControls.start("hidden")
        }
    }, [isInView, mainControls])

    useEffect(() => {
        if (textInView) {
            textControls.start({
                opacity: 1,
                x: 0,
                transition: { duration: 1},
            })
        } else {
            textControls.start({ opacity: 0, x: 100});
        }
    }, [textInView, textControls])
  return (
    <div className='app__about'>
        <motion.div className="about-image" initial="hidden" animate={mainControls} ref={imageRef} variants={{
            hidden: { rotate: -70, opacity: 0},
            visible: {
                rotate: 0,
                opacity: 1,
                transition: { duration: 0.8, ease: "easeOut" },
            }
        }}>
            <img src={images.about1} alt="image" className='about-image-one'/>
            <img src={images.about2} alt="image" className='about-image-two'/>
        </motion.div>
        <motion.div className="about-text" ref={aboutTextRef} animate={textControls} initial={{ opacity: 0, x: 100 }}>
            <div className="about-text_content">
                <p>Beyond being a platform for services, Call2Fix is a lifestyle choice</p>
                <p>"With our Call2Fix app, get all of your home and workplace repairs taken care of!"</p>
                <p>Easily keep an eye on your home services. With a variety of services to make your life easier and a smooth booking experience, you tend to stay more organized. Let us handle the rest, and concentrate on what really matters.</p>
                <div className="about-text-btn">
                    <button>More about us</button>
                </div>
            </div>
        </motion.div>
    </div>
  )
}

export default About