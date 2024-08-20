import React from 'react'
import './Reason.css'
import images from '../../constants/images'
import { data } from '../../constants'


const Reason = () => {
  return (
    <div className='app__reason'>
        <div className="app__reason-heading">
            <h2>Why Call2Fix</h2>
        </div>

        <div className="app__reason-body">
            {data.reasonData.map((item) => (
                <div key={item.name} className="app__reason-card">
                    <img src={item.img} alt={item.title} />
                    <h3>{item.title}</h3>
                    <p>{item.text}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Reason