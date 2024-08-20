import React from 'react'
import { About, Banner, Features, Info, Quality, Register, Service } from '../../components'

const Home = () => {
  return (
    <div className='app__home'>
        <Banner />
        <Quality />
        <About />
        <Features />
        <Service />
        <Register />
        <Info />
    </div>
  )
}

export default Home