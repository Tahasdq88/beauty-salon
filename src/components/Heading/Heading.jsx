import React from 'react'
import './Heading.css'
const Heading = (props) => {
  return (
      <div className='heading' style={props.style}>
            <div></div>
            <h2>{props.heading}</h2>
            <div></div>
        </div>
  )
}

export default Heading
