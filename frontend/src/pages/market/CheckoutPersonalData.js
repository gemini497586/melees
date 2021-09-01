import React, { useState, useEffect } from 'react'
import '../../style/checkoutPersonalData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import CheckoutCreditCard from './CheckoutCreditCard'

function CheckoutPersonalData() {
  const [howToPay, setHowToPay] = useState('請選擇付款方式')

  useEffect(() => {
    let payingBtn = document.getElementById('payingBtn')
    payingBtn.addEventListener('click', () => {
      payingBtn.classList.remove('dropdown-toggle')
    })
  }, [howToPay])

  let showInfo
  if (howToPay === '信用卡') {
    showInfo = <CheckoutCreditCard />
  }
  return (
    <div className="container">
      <div className="checkout-personal-data">
        <div className="form-icon">
          <FontAwesomeIcon icon="file-alt" />
        </div>
        <h5 className="checkout-personal-data-title">確認購買資料</h5>
        <div className="w1100"></div>
        <div className="checkout-personal-data-name">
          <label className="checkout-personal-data-label">名字*</label>
          <input className="checkout-personal-data-input" type="text" />
        </div>
        <div className="checkout-personal-data-phone">
          <label className="checkout-personal-data-label">手機號碼*</label>
          <input className="checkout-personal-data-input" type="text" />
        </div>
        <div className="checkout-personal-data-email">
          <label className="checkout-personal-data-label">電子信箱*</label>
          <input className="checkout-personal-data-input" type="email" />
        </div>
        <div className="checkout-personal-data-paying">
          <label className="checkout-personal-data-label">付款方式*</label>
          <button
            className="btn dropdown-toggle checkout-personal-data-btn"
            data-bs-toggle="dropdown"
            id="payingBtn"
            onChange={(e) => {
              console.log(e.target)
            }}
          >
            {howToPay}
          </button>
          <ul class="dropdown-menu paying-dropdown-btn">
            <li
              className="dropdown-item"
              onClick={(e) => {
                setHowToPay(e.target.innerText)
              }}
            >
              信用卡
            </li>
            <li
              className="dropdown-item"
              onClick={(e) => {
                setHowToPay(e.target.innerText)
              }}
            >
              貨到付款
            </li>
          </ul>
        </div>
        <div className="checkout-credit-card-area">{showInfo}</div>
        <div className="checkout-personal-data-checkout-area">
          <button className="btn font-700M  checkout-personal-data-back-btn">
            <FontAwesomeIcon icon="long-arrow-alt-left" /> 返回
          </button>
          <p className="font-400S">商品總金額</p>
          <h6>
            NT <FontAwesomeIcon icon="dollar-sign" />
            2,820
          </h6>
          <button className="btn font-700M  checkout-personal-data-next-btn">
            <FontAwesomeIcon icon="credit-card" /> 下一頁
          </button>
        </div>
      </div>
    </div>
  )
}

export default CheckoutPersonalData
