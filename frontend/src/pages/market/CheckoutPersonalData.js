import React, { useState, useEffect } from 'react'
import '../../style/checkoutPersonalData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import CheckoutCreditCard from './CheckoutCreditCard'
import CheckoutArea from './CheckoutArea'
import OrderProgressBar from './component/OrderProgressBar'
import { Link } from 'react-router-dom'

function CheckoutPersonalData() {
  const [howToPay, setHowToPay] = useState('請選擇付款方式')
  const [credit, setCredit] = useState(false)

  useEffect(() => {
    let payingBtn = document.getElementById('payingBtn')
    payingBtn.addEventListener('click', () => {
      payingBtn.classList.remove('dropdown-toggle')
    })
  }, [])
  const [name, setName] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')

  return (
    <div className="container">
      <OrderProgressBar />
      <div className="checkout-personal-data">
        <div className="form-icon">
          <FontAwesomeIcon icon="file-alt" />
        </div>
        <h5 className="checkout-personal-data-title">確認購買資料</h5>
        <div className="checkout-personal-data-w1100"></div>
        <div className="checkout-personal-data-name">
          <label className="checkout-personal-data-label">名字*</label>
          <input
            className="checkout-personal-data-input"
            type="text"
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="checkout-personal-data-phone">
          <label className="checkout-personal-data-label">手機號碼*</label>
          <input
            className="checkout-personal-data-input"
            type="text"
            placeholder="0912xxxxxx"
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </div>
        <div className="checkout-personal-data-email">
          <label className="checkout-personal-data-label">電子信箱*</label>
          <input
            className="checkout-personal-data-input"
            type="email"
            placeholder="abc@gmail.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="checkout-personal-data-paying">
          <label className="checkout-personal-data-label">付款方式*</label>
          <button
            className="btn dropdown-toggle checkout-personal-data-btn"
            data-bs-toggle="dropdown"
            id="payingBtn"
          >
            {howToPay}
          </button>
          <ul class="dropdown-menu paying-dropdown-btn">
            <li
              className="dropdown-item"
              onClick={() => {
                setHowToPay('信用卡')
                setCredit(true)
              }}
            >
              信用卡
            </li>
            <li
              className="dropdown-item"
              onClick={() => {
                setHowToPay('貨到付款')
                setCredit(false)
              }}
            >
              貨到付款
            </li>
          </ul>
        </div>
        <div className="checkout-credit-card-area">
          {credit && <CheckoutCreditCard />}
        </div>
        <div className="cart-checkout-box">
          <CheckoutArea />
          <Link to="/market/checkout-confirm">
            <button className="btn font-700M cart-checkout-btn">
              <FontAwesomeIcon icon="credit-card" /> 結帳去
            </button>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPersonalData
