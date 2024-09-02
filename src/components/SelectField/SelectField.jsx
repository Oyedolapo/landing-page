import React from 'react'
import './SelectField.css'

const SelectField = ({ label, name, value, options, handleChange}) => {
  return (
    <div className='input-div'>
        <label htmlFor={name}>{label}</label><br />
        <select name={name} id={name} value={value} onChange={handleChange}>
            <option value="">Select a {label.toLowerCase()}</option>
            {options.map((option, index) => (
                <option key={index} value={option}>{option}</option>
            ))}
        </select>
    </div>
  )
}

export default SelectField