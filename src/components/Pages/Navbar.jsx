import React from 'react'
import {  Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <header className="flex items-center justify-between p-6 bg-gray-100 md:p-8">
  <Link className="ml-4 text-xl font-black text-black hover:underline md:text-2xl md:ml-10  hover:text-gray-700    ease-in   transition ease-in-out delay-150  hover:-translate-y-1  duration-200" to="/">
    #VanLife
  </Link>
  <nav className="flex">
  <Link className="mx-2 text-sm font-semibold hover:underline md:mx-5 md:text-base hover:text-gray-700 ease-in    ease-in   transition ease-in-out delay-150  hover:-translate-y-1   duration-200 " to="/host">
      Host
    </Link>
    <Link className="mx-2 text-sm font-semibold hover:underline md:mx-5 md:text-base hover:text-gray-700 ease-in    ease-in   transition ease-in-out delay-150  hover:-translate-y-1   duration-200 " to="/about">
      About
    </Link>
    <Link className="mx-2 text-sm font-semibold hover:underline md:mx-5 md:mr-10 md:text-base   hover:text-gray-700   ease-in   transition ease-in-out delay-150  hover:-translate-y-1  duration-200" to="/van">
      Vans
    </Link>
  </nav>
</header>
    </>
  )
}
