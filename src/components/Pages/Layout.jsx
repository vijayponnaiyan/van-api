import React from 'react'
import Navbar from "./Navbar"
import { Outlet } from 'react-router-dom'
import Fooder from '../Pages/Fooder'

export default function Layout() {
  return (
    <>
      <div>
        <Navbar />
        <main>
          <Outlet />
        </main>
        <Fooder />
      </div>
    </>
  )
}
