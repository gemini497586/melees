import React from 'react'
import '../../style/cartDetail.css'
import CartDetailRow from './component/CartDetailRow'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'

const cartArray = [1, 2, 3]

function CartDetail() {
  return (
    <div className="container">
      <div className="cart-detail">
        {cartArray.map((v, i) => {
          return <CartDetailRow />
        })}
        <div className="cart-detail-checkout-area">
          <button className="btn font-700M cart-detail-continue-btn">
            <FontAwesomeIcon icon="long-arrow-alt-left" /> 繼續購物
          </button>
          <button className="btn font-700M cart-detail-coupon-btn">
            選取優惠券
          </button>
          <p className="font-400S cart-detail-price-amount">商品金額總計</p>
          <p className="font-700SL cart-detail-price-amount-num">NT 2,820</p>
          <p className="font-400S cart-detail-coupon-txt">優惠券扣抵</p>
          <p className="font-700SL cart-detail-coupon-num">NT 0</p>
          <div className="w244"></div>
          <p className="font-400S cart-detail-total-amount">商品總金額</p>
          <h6 className="cart-detail-total-amount-num">NT 2,820</h6>
          <button className="btn font-700M cart-detail-checkout-btn">
            <FontAwesomeIcon icon="credit-card" /> 結帳去
          </button>
        </div>
      </div>
    </div>
  )
}

export default CartDetail
