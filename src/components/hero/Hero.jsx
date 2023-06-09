import React from 'react'
import './hero.css'

const Hero = () => {
  return (
    <div className='hero'>
        <div className="container">
            <div className="content">
                <div className="text">
                    <p>Allways</p>
                </div>
                <h1>Served Fresh</h1>
                <h1>Daily</h1>
                <button className='btn'>Delivery</button>
                <button className='btn'>Take-out</button>
            </div>
        </div>
    </div>
  )
}

export default Hero