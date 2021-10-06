import React, { useEffect, useState } from 'react'
import '../../style/checkoutArea.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import { Link } from 'react-router-dom'
import useCart from '../../utils/useCart'

function CheckoutArea() {
  const { carts } = useCart()
  const [total, setTotal] = useState(0)
  const deliveryCost = 150 //運費

  useEffect(() => {
    let getTotal = 0
    for (let i = 0; i < carts.length; i++) {
      getTotal += carts[i].amount * carts[i].price
    }
    setTotal(getTotal)
  }, [carts])

  return (
    <div className="cart-checkout-area">
      <Link to="/market" className="btn font-700M cart-checkout-market-btn">
        {/* <button > </button> */}
        <FontAwesomeIcon icon="long-arrow-alt-left" /> 回到商城
      </Link>
      <button className="btn font-700M cart-checkout-coupon-btn">
        選取優惠券
      </button>
      <p className="font-400S cart-checkout-price-amount">商品金額總計</p>
      <p className="font-700SL cart-checkout-price-amount-num">
        NT <FontAwesomeIcon icon="dollar-sign" />
        {total}
      </p>
      <p className="font-400S cart-checkout-coupon-txt">優惠券扣抵</p>
      <p className="font-700SL cart-checkout-coupon-num">
        NT <FontAwesomeIcon icon="dollar-sign" />0
      </p>
      <p className="font-400S cart-checkout-freight-txt">運費</p>
      <p className="font-700SL cart-checkout-freight-num">
        NT
        <FontAwesomeIcon icon="dollar-sign" /> {deliveryCost}
      </p>
      <div className="w244"></div>
      <p className="font-400S cart-checkout-total-amount">商品總金額</p>
      <h6 className="cart-checkout-total-amount-num">
        NT <FontAwesomeIcon icon="dollar-sign" />
        {total + deliveryCost}
      </h6>
    </div>
  )
}

export default CheckoutArea
