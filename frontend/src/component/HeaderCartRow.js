import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { API_URL } from '../utils/config'
import React from 'react'
import '../style/headerCartRow.css'
import './FontawsomeIcons'
import useCart from '../utils/useCart'

function HeaderCartRow(props) {
  const { carts, removeCart, minusAmount, plusAmount } = useCart()

  let index = props.index

  return (
    <div className="header-cart-row">
      <div className="header-cart-row-img">
        <img
          alt="商品圖片"
          src={`${API_URL}/market/${carts[index].img}`}
          className="header-cart-img"
        />
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
