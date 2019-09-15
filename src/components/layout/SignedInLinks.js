import React from 'react'
import { NavLink } from 'react-router-dom';

export default function SignedInLinks() {
  return (
    <div>
      <ul className="right">
        <li><NavLink to='/'>New Post</NavLink></li>
        <li><NavLink to='/'>Log out</NavLink></li>
        <li><NavLink to='/' className='btn btn-floating pink lighten-1'>RA</NavLink></li>
      </ul>
    </div>
  )
}
