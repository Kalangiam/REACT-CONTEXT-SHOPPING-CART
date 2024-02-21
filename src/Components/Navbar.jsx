import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='bg-dark text-light text-center d-flex justify-content-evenly h3'>
      <Link to="/" className='text-light'>Shop</Link>
      <Link to="/cart" className='text-light'>Cart</Link>
    </div>
  )
}

export default Navbar