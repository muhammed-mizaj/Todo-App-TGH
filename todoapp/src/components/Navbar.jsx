import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return (
    <div className='bg-gray-900 w-screen '>
      <div className='flex flex-row justify-evenly p-2 '>
        <Link to='/'>Home</Link>
        <Link to='/login'>Login</Link>
        <Link to='/register'>Register</Link>

      </div>
    </div>
  )
}

export default Navbar