import React from 'react'
import './Socialmedia.css'
import instagramData from '../../../Helper/data.js'
import Heading from '../../Heading/Heading'
const Socialmedia = () => {
    // console.log("the data is " , instagramData)
  return (
    <section className='container-insta'>
        {/* <div className='heading-insta'>
            <div></div>
            <h2>INSTAGRAM</h2>
            <div></div>
        </div> */}
        <Heading heading="INSTAGRAM"/>
        <div className='gallery'>
        {instagramData.map((item) => (
          <div className='gallery__item'>
          <a href="">
          <img src={item.image} className="gallery__img" alt="" />
          </a>
          </div>
        ))}
        </div>
    </section>
  )
}

export default Socialmedia
