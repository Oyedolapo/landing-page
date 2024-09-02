import React, { useState, useEffect } from 'react'
import './ContactForm.css';
import emailjs from "@emailjs/browser"
import toast from 'react-hot-toast';
import SelectField from '../SelectField/SelectField';
import { data } from '../../constants';


const ContactForm = ({service}) => {
    const [formData, setFormData] = useState({
        firstname: "",
        lastname: "",
        service: service || "",
        email: "",
        phone: "",
        date: "",
        description: "",
        address: "",
        subcategory: "",
        firstTimer: "No"
    });

    useEffect(() => {
        setFormData((prevData) => ({
            ...prevData,
            service: service
        }));
    }, [service]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });

        if (name === 'service') {
            setFormData({
                ...formData,
                service: value,
                subcategory: ""
            })
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const toastId = toast.loading('Sending email...');

        emailjs.sendForm('service_t0q8n4f', 'template_741xw6c', e.target, 'xy_9kVoCbi4lmxvWj')
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
                <SelectField 
                    label="Category"
                    name="service"
                    value={formData.service}
                    options={Object.keys(data.categoryData)}
                    handleChange={handleChange}
                />

                <SelectField 
                    label="Subcategory"
                    name="subcategory"
                    value={formData.subcategory}
                    options={data.categoryData[formData.service] || ["Select a category first"]}
                    handleChange={handleChange}
                />
            </div>

            <div className="app__form-input">
                <div className="input-div">
                    <label htmlFor="email">Email address</label><br />
                    <input type="email" name="email" id="email" value={formData.email} onChange={handleChange} required placeholder='youremail@email.com'/>
                </div>

                <div className="input-div">
                    <label>First time using Call2Fix?</label>
                    <div className="radio-email-group">
                        <input type="radio" name="firstTimer" id="firstTimerYes" value="Yes" onChange={handleChange} checked={formData.firstTimer === "Yes"}/>
                        <label htmlFor="firstTimerYes">Yes</label>

                        <input type="radio" name="firstTimer" id="firstTimerNo" value="No" onChange={handleChange} checked={formData.firstTimer === "No"}/>
                        <label htmlFor="firstTimerNo">No</label>
                    </div>
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