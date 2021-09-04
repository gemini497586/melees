import React from 'react'
import '../../style/checkoutArea.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'

function CheckoutArea() {
  return (
    <div className="cart-checkout-box">
      <div className="cart-checkout-area">
        <button className="btn font-700M cart-checkout-continue-btn">
          <FontAwesomeIcon icon="long-arrow-alt-left" /> 繼續購物
        </button>
        <button className="btn font-700M cart-checkout-coupon-btn">
          選取優惠券
        </button>
        <p className="font-400S cart-checkout-price-amount">商品金額總計</p>
        <p className="font-700SL cart-checkout-price-amount-num">
          NT <FontAwesomeIcon icon="dollar-sign" />
          2,820
        </p>
        <p className="font-400S cart-checkout-coupon-txt">優惠券扣抵</p>
        <p className="font-700SL cart-checkout-coupon-num">
          NT <FontAwesomeIcon icon="dollar-sign" />0
        </p>
        <p className="font-400S cart-checkout-freight-txt">運費</p>
        <p className="font-700SL cart-checkout-freight-num">
          NT
          <FontAwesomeIcon icon="dollar-sign" /> 150
        </p>
        <div className="w244"></div>
        <p className="font-400S cart-checkout-total-amount">商品總金額</p>
        <h6 className="cart-checkout-total-amount-num">
          NT <FontAwesomeIcon icon="dollar-sign" />
          2,820
        </h6>
        <button className="btn font-700M cart-checkout-btn">
          <FontAwesomeIcon icon="credit-card" /> 結帳去
        </button>
      </div>
    </div>
  )
}

export default CheckoutArea
