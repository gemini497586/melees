import { Link } from 'react-router-dom'
import React from 'react'
import '../style/headerCartRow.css'
import './FontawsomeIcons'
import HeaderCartRow from './HeaderCartRow'
import useCart from '../utils/useCart'

function HeaderCart(props) {
  const { setHidden } = props
  const { carts } = useCart()
  return (
    <>
      <div className="header-cart-max">
        {carts.map((value, index) => (
          <HeaderCartRow key={index} id={value} index={index} />
        ))}
      </div>
      {carts.length > 0 ? (
        <Link to="/market/cart-detail">
          <button
            className="font-400S btn header-checkout-btn"
            onClick={() => {
              setHidden(false)
            }}
          >
            前往結帳
          </button>
        </Link>
      ) : (
        <h6 className="no-product-in-cart">請新增商品至購物車</h6>
      )}
    </>
  )
}

export default HeaderCart
