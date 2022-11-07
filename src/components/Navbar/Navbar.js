import React from 'react'
import { Link } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
      <ul>
        <li><Link to="contact">Contact</Link></li>
        <li><Link to="about">About</Link></li>
        <li><Link to="home">Home</Link></li>
      </ul>
    </div>
  )
}

export default Navbar
