import React from 'react'
import './navbar.css'
import {
    
    Link,
  } from "react-router-dom";
function Navbar() {
  return (
    <>
        <nav className='navbar'>
                <h3 className='logo'>Mangcake</h3>
                <ul className='nav-links'>
                    <Link to='/'><li>Home</li></Link>
                    <Link to='/about'><li>About</li></Link>

                    <Link to='/services'><li>Services</li></Link>
                    <Link to='/contact'><li>Contact</li></Link>


                </ul>
        </nav>
        </>
  )
}

export default Navbar