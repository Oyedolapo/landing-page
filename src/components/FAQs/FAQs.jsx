import React, { useState } from 'react'
import { data } from '../../constants';
import { FaAngleDown, FaAngleUp } from "react-icons/fa6";
import './FAQs.css'

const FAQs = () => {
    const [selected, setSelected] = useState(null);

    const toggle = (i) => {
        if (selected == i) {
            return setSelected(null)
        }

        setSelected(i)
    }
  return (
    <div className='app__questions'>
        <div className="app__questions-heading">
            <h2>Frequently asked questions</h2>
        </div>
        <div className="app__questions-container">
            {data.faqs.map((item, i) => (
                <div key={i} className="app__questions-item">
                    <div className="app__questions-head" onClick={() => toggle(i)}>
                        <h3>{item.question}</h3>
                        <span>{selected == i ? <FaAngleUp /> : <FaAngleDown />}</span>
                    </div>
                    <div className={selected === i ? "app__questions-body show" : "app__questions-body"}>
                        <p>{item.answer}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default FAQs