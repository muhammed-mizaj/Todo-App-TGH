import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div className='w-full bg-indigo-900 text-xl font-serif font-bold'>
      
      <div className='flex flex-row justify-between align-middle p-2'>
        <Link to ='/'>Home</Link>
        <Link to ='/login'>Login</Link>
        <Link to ='/register'>Register</Link>
      </div>
    </div>
  )
}

export default Navbar