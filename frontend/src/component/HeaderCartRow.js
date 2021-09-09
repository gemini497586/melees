import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import meleesLogo from '../images/meleesLogo.svg'
import React, { useEffect } from 'react'
import '../style/headerCartRow.css'
import './FontawsomeIcons'

function HeaderCartRow() {
  return (
    <div className="header-cart-row">
      <div className="header-cart-row-img">
        <img alt="商品圖片" src={meleesLogo} />
      </div>
      <h5 className="header-cart-row-name">美國Choice嫩肩里肌牛排</h5>
      <div className="header-cart-row-delete">
        <FontAwesomeIcon icon="trash-alt" />
      </div>
      <div className="header-cart-row-operation">
        <FontAwesomeIcon icon="minus" />
        <span>5</span>
        <FontAwesomeIcon icon="plus" />
      </div>
      <div className="header-cart-row-price">
        <FontAwesomeIcon icon="dollar-sign" /> 1100
      </div>
    </div>
  )
}

export default HeaderCartRow
