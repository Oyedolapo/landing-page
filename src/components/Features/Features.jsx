import React, { useRef, useEffect } from 'react'
import './Features.css';
import images from '../../constants/images';
import { animate, motion, useAnimation, useInView } from 'framer-motion';

const Features = () => {
    const cardRef = useRef(null)
    const cardControls = useAnimation()
    const cardInView = useInView(cardRef, { once: false })

    useEffect(() => {
        if (cardInView) {
            cardControls.start({
                scale: 1,
                opacity: 1,
                transition: { duration: 1, ease: "easeInOut"}
            })
        } else {
            cardControls.start({
                scale: 1,
                opacity: 1,
                transition: { duration: 1, ease: "easeOut"}
            });
        }
    }, [cardInView, cardControls])
    
  return (
    <div className='app__features'>
        <div className="app__features-heading">
            <h2>Why Choose Us</h2>
            <p>We connect you to professional building repair artisans closest to you anytime, anywhere. Like Uber, once you make a request, we will send you professional artisan(s) closest to you from our large pool of well-trained, pre-qualified, and service oriented artisans. Call2Fix provides you with secure, safe, convenient, and reliable home and office repair services from the comfort of your phone.</p>
        </div>
        <div className="app__features-cards">
            <motion.div className="app__feature-card" ref={cardRef} initial={{ scale: 0, opacity: 1}} animate={cardControls}  transition={{ duration: 1, ease: "easeInOut"}}>
                <div className="app__feature-icon">
                    <img src={images.feedback} alt="feedback image" />
                </div>
                <div className="app__feature-text">
                    <h3>System</h3>
                    <p>The app allows you to track all your requests from the comfort of your phone.</p>
                </div>
            </motion.div>

            <motion.div className="app__feature-card" ref={cardRef} initial={{ scale: 0, opacity: 1}} animate={cardControls}  transition={{ duration: 1, ease: "easeInOut"}}>
                <div className="app__feature-icon">
                    <img src={images.feedback} alt="feedback image" />
                </div>
                <div className="app__feature-text">
                    <h3>Marketplace</h3>
                    <p>You get to buy building materials or rent equipment directly from the vendors on the app.</p>
                </div>
            </motion.div>

            <motion.div className="app__feature-card" ref={cardRef} initial={{ scale: 0, opacity: 1}} animate={cardControls}  transition={{ duration: 1, ease: "easeInOut"}}>
                <div className="app__feature-icon">
                    <img src={images.feedback} alt="feedback image" />
                </div>
                <div className="app__feature-text">
                    <h3>Briefing Feature</h3>
                    <p>You can share videos with Artisans to get an accurate scope of repair work to be done in your building.</p>
                </div>
            </motion.div>

            <motion.div className="app__feature-card" ref={cardRef} initial={{ scale: 0, opacity: 1}} animate={cardControls}  transition={{ duration: 1, ease: "easeInOut"}}>
                <div className="app__feature-icon">
                    <img src={images.feedback} alt="feedback image" />
                </div>
                <div className="app__feature-text">
                    <h3>Process</h3>
                    <p>You get up to five price quotations from different vendors for you to choose from.</p>
                </div>
            </motion.div>
        </div>
    </div>
  )
}

export default Features