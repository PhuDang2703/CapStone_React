import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import Footer from './Footer/Footer'
import NavbarHome from './_Components/Navbar'

export default class HomeTemplate extends Component {
  render() {
    return (
      <div>
        <NavbarHome />

        {/* HomePage, AboutPage, lishMovie */}
        <Outlet />

        <hr className='mt-5' />
        <Footer />
      </div>
    )
  }
}
