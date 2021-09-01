import React from 'react'
import '../../style/checkoutCreditCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'

function CheckoutCreditCard() {
  return (
    <>
      <div className="credit-area">
        <label className="checkout-credit-card-label">卡號*</label>
        <div>
          <input type="text" className="checkout-credit-card-num credit1" />
          <input type="text" className="checkout-credit-card-num credit2" />
          <input type="text" className="checkout-credit-card-num credit3" />
          <input type="text" className="checkout-credit-card-num credit4" />
        </div>
      </div>
      <div className="expiration-period">
        <label className="checkout-credit-card-label">有效期限*</label>
        <input type="text" className="checkout-credit-card-input ep1" />
        <input type="text" className="checkout-credit-card-input ep2" />
      </div>
      <div className="last3num">
        <label className="checkout-credit-card-label">末三碼*</label>
        <input type="text" className="checkout-credit-card-input" />
      </div>
      <div className="checkout-credit-card-address">
        <label className="checkout-credit-card-label">地址*</label>
        <input
          type="text"
          className="checkout-credit-card-input address1"
          placeholder="縣市"
        />
        <input
          type="text"
          className="checkout-credit-card-input address2"
          placeholder="鄉鎮區"
        />
        <input
          type="text"
          className="checkout-credit-card-input address3"
          placeholder="XX路 / 街 / 巷"
        />
      </div>
    </>
  )
}

export default CheckoutCreditCard
