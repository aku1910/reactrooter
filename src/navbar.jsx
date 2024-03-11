import React from 'react'
import { Link } from 'react-router-dom';

const navbar = () => {
  return (
    <nav>
        <ul>
      <li className='justice'>
        <Link to="/">Justice.</Link>
      </li>
      </ul>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <Link to="/Practiseareas">Practise Areas</Link>
      </li>
      <li>
        <Link to="/Service">Service</Link>
      </li>
      <li>
        <Link to="/Attorneys">Attorneys</Link>
      </li>
      <li>
        <Link to="/About">About</Link>
      </li>
      <li>
        <Link to="/Contactus">Contact Us</Link>
      </li>
    </ul>
  </nav>
  )
}

export default navbar