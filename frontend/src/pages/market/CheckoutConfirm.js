import React from 'react'
import '../../style/checkoutConfirm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import CheckoutArea from './CheckoutArea'
import OrderProgressBar from './component/OrderProgressBar'
import { Link } from 'react-router-dom'

import useCart from '../../utils/useCart'
import CheckoutConfirmTable from './CheckoutConfirmTable'
import useCheckoutInfo from '../../utils/useCheckoutInfo'
import axios from 'axios'
import { API_URL } from '../../utils/config'

function CheckoutConfirm() {
  const { carts, removeCart, clearCart } = useCart()
  const { info, addInfo, total, clearInfo } = useCheckoutInfo()

  const handleData = async () => {
    // 把資料傳進後端
    let data = {
      name: info[0].name,
      phone: info[0].phone,
      email: info[0].email,
      address: info[0].address,
      payment_method: info[0].howToPay,
      status: 1,
      total_price: total + 150,
      carts: carts,
    }

    try {
      await axios.post(`${API_URL}/market/checkout-confirm`, data, {
        // 設定可以跨源送 cookie
        withCredentials: true,
      })
    } catch (err) {
      console.error(err.message)
    }

    clearCart()
    clearInfo()
  }

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
          <p className="checkout-confirm-input font-400SL">
            {info[0].howToPay}
          </p>
        </div>
        <div className="checkout-confirm-name">
          <p className="checkout-confirm-label font-700SL">訂購姓名</p>
          <p className="checkout-confirm-input font-400SL">{info[0].name}</p>
        </div>
        <div className="checkout-confirm-address">
          <p className="checkout-confirm-label font-700SL">送貨地址</p>
          <p className="checkout-confirm-input font-400SL">{info[0].address}</p>
        </div>
        <div className="checkout-confirm-phone">
          <p className="checkout-confirm-label font-700SL">聯絡電話</p>
          <p className="checkout-confirm-input font-400SL">{info[0].phone}</p>
        </div>
        <div className="checkout-confirm-email">
          <p className="checkout-confirm-label font-700SL">聯絡信箱</p>
          <p className="checkout-confirm-input font-400SL">{info[0].email}</p>
        </div>
        <div className="checkout-confirm-detail">
          <div className="checkout-confirm-detail-w1100"></div>
          <p className="checkout-confirm-label font-700SL">訂單明細</p>
          <table className="checkout-confirm-table">
            <tbody className="font-400SL">
              {carts.map((value, index) => (
                <CheckoutConfirmTable id={value} index={index} />
              ))}
            </tbody>
          </table>
        </div>
        <div className="cart-checkout-box">
          <CheckoutArea toGO="" />
          <Link to="/market/orders-complete">
            <button
              className="btn font-700M cart-checkout-btn"
              onClick={handleData}
            >
              <FontAwesomeIcon icon="credit-card" /> 確認送出
            </button>
          </Link>
          <Link to="/market/checkout-personalData">
            <button className="btn font-700M cart-back-btn">
              <FontAwesomeIcon icon="long-arrow-alt-left" /> 回上頁
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckoutConfirm
