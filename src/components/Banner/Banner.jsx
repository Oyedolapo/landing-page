import React, { useState } from 'react'
import './Banner.css';
import { Link, useNavigate } from 'react-router-dom';
import { data } from '../../constants';

const Banner = () => {
    const [selectedService, setSelectedService] = useState('')
    const navigate = useNavigate()

    const handleChange = (e) => {
        setSelectedService(e.target.value)
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate(`request/${selectedService}`)
    };

    const categoryKeys = Object.keys(data.categoryData)

  return (
    <div className='app__banner'>
        <div className="app__banner-content">
            <h1><span className='app__banner-span'>Skilled and reliable experts</span><br /> at your disposal</h1>
            <p>What service do you require today?</p>
            <form className="app__banner-dropdown" onSubmit={handleSubmit}>
                <select name="service" id="service" value={selectedService} onChange={handleChange} required>
                    <option value="">Select a service</option>
                    {categoryKeys.map((option, index) => (
                        <option key={index} value={option}>{option}</option>
                    ))}
                </select>
                <div className="app__banner-submit" id="">
                    <button type="submit">Get quote now</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Banner