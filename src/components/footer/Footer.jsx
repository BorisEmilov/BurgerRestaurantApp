import React from 'react'
import './footer.css'
import { FaFacebookSquare, FaInstagramSquare, FaTwitterSquare } from 'react-icons/fa'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="container">
            <div className="col">
                <h3>Take a look at our Menu</h3>
                <p>Hamburgers</p>
                <p>Salads</p>
                <p>Fries</p>
                <p>Drinks</p>
            </div>
            <div className="col">
                <h3>Know Us</h3>
                <p>About Us</p>
                <p>Franchising</p>
                <p>Fundation</p>
                <p>Location</p>
            </div>
            <div className="col">
                <h3>Contact</h3>
                <p>Phone</p>
                <p>Email</p>
                <p>Social Media</p>
                <p>Carrers</p>
            </div>
            <div>
                <h3>Let`s Connect</h3>
                <div className="social">
                    <FaFacebookSquare className='icon' />
                    <FaInstagramSquare className='icon' />
                    <FaTwitterSquare className='icon' />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer