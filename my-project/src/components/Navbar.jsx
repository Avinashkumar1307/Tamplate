import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <>
      <div className='bg-slate-300 flex justify-around items-center p-4'>
        <Link to='/'>
            <h1 className='text-xl font-bold'>MERN STACK TAMPLATE</h1>
        </Link>
        <ul className='flex gap-4'>
            <Link to='/'>
                <li>Home</li>
            </Link>
            <Link to='/about'>
                <li>About</li>
            </Link>
            <Link to='/login'>
                <li>Sign in </li>
            </Link>
        </ul>
      </div>
    </>
  )
}
