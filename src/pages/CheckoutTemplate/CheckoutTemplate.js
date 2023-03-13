import React, { Component } from 'react'
import { Outlet } from 'react-router-dom'
import { Redirect } from 'react-router-dom'
import { USER_LOGIN } from '../../util/setting/config'

export default class CheckoutTemplate extends Component {
  render() {
    
    if (!localStorage.getItem(USER_LOGIN)) {
      return <Redirect to='/login' />
    }

    return (
      <div>
        {/* <NavbarHome /> */}

        {/* Checkout*/}
        <Outlet />

        <hr className='mt-5' />
        {/* <Footer /> */}
      </div>
    )
  }
}
