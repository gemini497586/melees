import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import meleesLogo from '../images/meleesLogo.svg'
import React, { useEffect, useState, useContext } from 'react'
import '../style/headerCartRow.css'
import './FontawsomeIcons'
import Login from '../pages/member/Login'
import { HandleCart } from '../utils/HandleCart'

function HeaderCartRow(props) {
  const { removeCart, productsAll } = useContext(HandleCart)

  // 計算商品數量用
  const [amount, setAmount] = useState(1)
  let id = props.id - 1

  return (
    <div className="header-cart-row">
      <div className="header-cart-row-img">
        <img alt="商品圖片" src={meleesLogo} />
      </div>
      <h5 className="header-cart-row-name">{productsAll[id].name}</h5>
      <button
        className="header-cart-row-delete"
        id={id}
        onClick={(e) => removeCart(e, id)}
      >
        <FontAwesomeIcon icon="trash-alt" id={id} />
      </button>
      <div className="header-cart-row-operation d-flex">
        <button
          className="btn operation-btn minus"
          onClick={() => {
            amount > 1 ? setAmount(amount - 1) : setAmount(amount)
          }}
        >
          <FontAwesomeIcon icon="minus" />
        </button>
        <p>{amount}</p>
        <button
          className="btn operation-btn plus"
          onClick={() => {
            amount < 99 ? setAmount(amount + 1) : setAmount(99)
          }}
        >
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>
      <div className="header-cart-row-price">
        <FontAwesomeIcon icon="dollar-sign" /> {productsAll[id].price * amount}
      </div>
    </div>
  )
}

export default HeaderCartRow
