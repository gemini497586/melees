import React, { useContext } from 'react'
import '../../style/checkoutConfirm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import CheckoutArea from './CheckoutArea'
import OrderProgressBar from './component/OrderProgressBar'
import { Link } from 'react-router-dom'
import { HandleCart } from '../../utils/HandleCart'
import CheckoutConfirmTable from './CheckoutConfirmTable'

function CheckoutConfirm() {
  const { carts, removeCart, amount, setAmount } = useContext(HandleCart)

  return (
    <div className="container">
      <OrderProgressBar />
      <div className="checkout-confirm">
        <div className="checkout-confirm-icon">
          <FontAwesomeIcon icon="file-alt" size="lg" />
        </div>
        <h5 className="checkout-confirm-title"> 付款資料確認 </h5>
        <div className="checkout-confirm-w1100"> </div>
        <div className="checkout-confirm-way">
          <p className="checkout-confirm-label font-700SL">付款方式</p>
          <p className="checkout-confirm-input font-400SL">信用卡付款</p>
        </div>
        <div className="checkout-confirm-name">
          <p className="checkout-confirm-label font-700SL">訂購姓名</p>
          <p className="checkout-confirm-input font-400SL">陳柏元</p>
        </div>
        <div className="checkout-confirm-address">
          <p className="checkout-confirm-label font-700SL">送貨地址</p>
          <p className="checkout-confirm-input font-400SL">
            桃園市中壢區環北路543號
          </p>
        </div>
        <div className="checkout-confirm-phone">
          <p className="checkout-confirm-label font-700SL">聯絡電話</p>
          <p className="checkout-confirm-input font-400SL">0912345678</p>
        </div>
        <div className="checkout-confirm-email">
          <p className="checkout-confirm-label font-700SL">聯絡信箱</p>
          <p className="checkout-confirm-input font-400SL">
            shopping@gmail.com
          </p>
        </div>
        <div className="checkout-confirm-detail">
          <div className="checkout-confirm-detail-w1100"></div>
          <p className="checkout-confirm-label font-700SL">訂單明細</p>
          <table className="checkout-confirm-table">
            <tbody className="font-400SL">
              {carts.map((value) => (
                <CheckoutConfirmTable value={value} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart-checkout-box">
          <CheckoutArea toGO="" />
          <Link to="/market/orders-complete">
            <button className="btn font-700M cart-checkout-btn">
              <FontAwesomeIcon icon="credit-card" /> 確認送出
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckoutConfirm
