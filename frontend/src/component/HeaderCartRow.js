import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import meleesLogo from '../images/meleesLogo.svg'
import React, { useEffect, useState, useContext } from 'react'
import '../style/headerCartRow.css'
import './FontawsomeIcons'
import Login from '../pages/member/Login'
import { HandleCart } from '../utils/HandleCart'

function HeaderCartRow(props) {
  const { carts, removeCart, minusAmount, plusAmount } = useContext(HandleCart)

  let index = props.index

  return (
    <div className="header-cart-row">
      <div className="header-cart-row-img">
        <img alt="商品圖片" src={meleesLogo} />
      </div>
      <h5 className="header-cart-row-name">{carts[index].name}</h5>
      <button
        className="header-cart-row-delete"
        id={carts[index].id}
        onClick={() => {
          removeCart(index)
        }}
      >
        <FontAwesomeIcon icon="trash-alt" id={carts[index].id} />
      </button>
      <div className="header-cart-row-operation d-flex">
        <button
          className="btn operation-btn minus"
          onClick={() => {
            minusAmount(index)
          }}
        >
          <FontAwesomeIcon icon="minus" />
        </button>
        <p>{carts[index].amount}</p>
        <button
          className="btn operation-btn plus"
          onClick={() => {
            plusAmount(index)
          }}
        >
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>
      <div className="header-cart-row-price">
        <FontAwesomeIcon icon="dollar-sign" />{' '}
        {carts[index].price * carts[index].amount}
      </div>
    </div>
  )
}

export default HeaderCartRow
