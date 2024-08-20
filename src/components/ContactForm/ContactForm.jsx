import React, { useState } from 'react'
import './ContactForm.css';
import emailjs from "@emailjs/browser"
import toast from 'react-hot-toast';


const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        service: "",
        email: "",
        phone: "",
        date: "",
        description: "",
        address: ""
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const toastId = toast.loading('Sending email...');

        emailjs.sendForm('service_muroq3d', 'template_uw6ifeg', e.target, 'eWHq1NA1q4vl_PzP8')
        .then((result) => {
            toast.dismiss(toastId)
            toast.success('Request sent successfully!');
        }, (error) => {
            toast.dismiss(toastId)
            toast.error('Failed to send email.');
            console.error('Error:', error.text);
        });
        
    }
  return (
    <div className='app__contactForm'>
        <div className="app__contactForm-heading">
            <h3>Make an online request</h3>
        </div>
        <form action="" onSubmit={handleSubmit} id="contactForm">
            <div className="app__form-input">
                <div className="input-div">
                    <label htmlFor="">First name</label><br />
                    <input type="text" name="firstname" id="first-name" value={formData.firstname} onChange={handleChange} required placeholder='Firstname'/>
                </div>

                <div className="input-div">
                    <label htmlFor="">Last name</label><br />
                    <input type="text" name="lastname" id="last-name" value={formData.lastname} onChange={handleChange} required placeholder='Lastname'/>
                </div>
            </div>

            <div className="app__form-input">
                <div className="input-div">
                    <label htmlFor="service">Service</label><br />
                    <select name="service" id="service" value={formData.service} onChange={handleChange}>
                        <option value="Electrical works">Electrical works</option>
                        <option value="Plumbing works">Plumbing works</option>
                        <option value="Carpentry works">Carpentry works</option>
                        <option value="Air Conditioning">Air Conditioning/HVAC Systems</option>
                        <option value="Cleaning">Cleaning and Fumigation</option>
                        <option value="Generator">Generator Repairs</option>
                        <option value="Domestic appliances">Domestic appliances</option>
                        <option value="Office equipments">Office equipments</option>
                        <option value="Furniture">Furniture & Carpentry services</option>
                        <option value="Others">Others</option>
                    </select>
                </div>

                <div className="input-div">
                    <label htmlFor="email">Email address</label><br />
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required placeholder='youremail@email.com'/>
                </div>
            </div>

            <div className="app__form-input">
                <div className="input-div">
                    <label htmlFor="phone">Phone</label><br />
                    <input type="text" name="phone" id="phone" value={formData.phone} onChange={handleChange} required placeholder='08xxxxxxxxx'/>
                </div>

                <div className="input-div">
                    <label htmlFor="date">Expected date of service</label><br />
                    <input type="date" name="date" id="date" value={formData.date} onChange={handleChange} required/>
                </div>
            </div>

            <div className="app__form-input">
                <div className="input-div">
                   <label htmlFor="description">Request Description</label><br />
                   <textarea name="description" id="description" value={formData.description} onChange={handleChange} required placeholder='Describe the service you want'></textarea>
                </div>

                <div className="input-div">
                    <label htmlFor="address">Address</label><br />
                    <input type="text" name="address" id="address" value={formData.address} onChange={handleChange} required placeholder='Provide us with the address for the service'/>
                </div>
            </div>
            <div className="form-btn">
                <button type="submit">Submit Request</button>
            </div>
        </form>
    </div>
  )
}

export default ContactForm