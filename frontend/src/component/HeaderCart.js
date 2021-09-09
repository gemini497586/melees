import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import meleesLogo from '../images/meleesLogo.svg'
import React, { useEffect } from 'react'
import '../style/headerCartRow.css'
import './FontawsomeIcons'
import HeaderCartRow from './HeaderCartRow'

function HeaderCart() {
  return (
    <>
      <HeaderCartRow />
      <Link to="/market/cart-detail">
        <button className="font-400S btn header-checkout-btn">前往結帳</button>
      </Link>
    </>
  )
}

export default HeaderCart
