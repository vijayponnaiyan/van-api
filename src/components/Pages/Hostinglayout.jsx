import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function Hostinglayout() {
  return (
    <>
      <div className='' >
         <div className=' p-12  '  >
        <nav className=' flex items-start  ' >
          <Link className='mx-2 text-sm font-semibold hover:underline md:mx-5 md:text-base hover:text-gray-700 ease-in    ease-in   transition ease-in-out delay-150  hover:-translate-y-1   duration-200' to="/host">Dashboard</Link>
          <Link className='mx-2 text-sm font-semibold hover:underline md:mx-5 md:text-base hover:text-gray-700 ease-in    ease-in   transition ease-in-out delay-150  hover:-translate-y-1   duration-200' to="/host/income">Income</Link>
          <Link className='mx-2 text-sm font-semibold hover:underline md:mx-5 md:text-base hover:text-gray-700 ease-in    ease-in   transition ease-in-out delay-150  hover:-translate-y-1   duration-200' to="/host/vans">Vans</Link>
          <Link className='mx-2 text-sm font-semibold hover:underline md:mx-5 md:text-base hover:text-gray-700 ease-in    ease-in   transition ease-in-out delay-150  hover:-translate-y-1   duration-200' to="/host/review">Reviews</Link>
        </nav>
        </div>
        <div className='pt-5 '>
          <  Outlet />
        </div>
      </div>
    </>
  )
}
