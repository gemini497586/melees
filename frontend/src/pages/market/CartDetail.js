import React, { useContext } from 'react'
import '../../style/cartDetail.css'
import CartDetailRowBtn from './component/CartDetailRowBtn'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import OrderProgressBar from './component/OrderProgressBar'
import { HandleCart } from '../../utils/HandleCart'
import { Link } from 'react-router-dom'

function CartDetail() {
  const { carts, removeCart } = useContext(HandleCart)

  return (
    <div className="container">
      <OrderProgressBar />
      <div className="cart-detail">
        <div className="d-flex cart-detail-title">
          <p className="font-400L cart-detail-title-info">商品介紹</p>
          <p className="font-400L cart-detail-title-price">單價</p>
          <p className="font-400L cart-detail-title-amount">數量</p>
          <p className="font-400L cart-detail-title-total">總價</p>
        </div>
        {carts.map((value) => {
          return <CartDetailRowBtn value={value} />
        })}
        {carts.length > 0 ? (
          <div className="cart-detail-checkout-area">
            <Link
              to="/market"
              className="btn font-700M cart-detail-continue-btn"
            >
              <FontAwesomeIcon icon="long-arrow-alt-left" /> 繼續購物
            </Link>
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
        ) : (
          <h5>請新增商品至購物車</h5>
        )}
      </div>
    </div>
  )
}

export default CartDetail
