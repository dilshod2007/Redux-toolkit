import React from 'react'
import { NavLink } from 'react-router-dom'

const nav = () => {
  return (
    <>
    <div className=' bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 p-6 flex justify-center items-center w-full text-3xl font-extrabold text-white shadow-lg shadow-indigo-500/50 rounded-lg hover:bg-gradient-to-l hover:from-purple-600 hover:via-indigo-600 hover:to-blue-600 duration-500 transform hover:scale-110 cursor-pointer'>
  <ul className='flex gap-[60px] [list-style:none]'>
    <li className='flex gap-[260px] justify-between'>
      <NavLink
        to="/"
        className="transition duration-300 hover:text-yellow-400 underline hover:underline-offset-8"
      >
        Sign Up
      </NavLink>
      <NavLink
        to="/list"
        className="transition duration-300 hover:text-yellow-400 underline hover:underline-offset-8"
      >
        Group List
      </NavLink>
    </li>
  </ul>
</div>

    </>
  )
}

export default nav