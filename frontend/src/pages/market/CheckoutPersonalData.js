import React, { useState, useEffect } from 'react'
import '../../style/checkoutPersonalData.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import CheckoutCreditCard from './CheckoutCreditCard'
import CheckoutArea from './CheckoutArea'
import OrderProgressBar from './component/OrderProgressBar'
import { Link } from 'react-router-dom'
import useCheckoutInfo from '../../utils/useCheckoutInfo'
import axios from 'axios'
import { API_URL } from '../../utils/config'
import Swal from 'sweetalert2'

function CheckoutPersonalData() {
  const [howToPay, setHowToPay] = useState('請選擇付款方式')
  const [credit, setCredit] = useState(false)
  const [alert, setAlert] = useState(false)
  const [path, setPath] = useState('checkout-confirm')

  const { info, addInfo } = useCheckoutInfo()
  const [personalData, setPersonalData] = useState([])
  const [id, setId] = useState(1)
  const [name, setName] = useState(info[0].name)
  const [phone, setPhone] = useState(info[0].phone)
  const [email, setEmail] = useState(info[0].email)
  const [address, setAddress] = useState(info[0].address)

  useEffect(() => {
    let payingBtn = document.getElementById('payingBtn')
    payingBtn.addEventListener('click', () => {
      payingBtn.classList.remove('dropdown-toggle', 'checkout-alert')
    })
  }, [])

  const frontendCheck = () => {
    if (howToPay === '請選擇付款方式') {
      Swal.fire('請選擇付款方式')
      setAlert(true)
      let red = document.getElementById('payingBtn')
      red.classList.add('checkout-alert')
    } else if (!name || !phone || !email || !address) {
      Swal.fire('請完整填寫購買資料')
    } else {
      addInfo({
        id: id,
        name: name,
        phone: phone,
        email: email,
        address: address,
        howToPay: howToPay,
      })
    }
  }

  useEffect(() => {
    // 只要有任何一個欄位沒有填寫就不能連到下一頁
    if (
      howToPay === '請選擇付款方式' ||
      !name ||
      !phone ||
      !email ||
      !address
    ) {
      setPath('checkout-personalData')
    }
  }, [frontendCheck])

  useEffect(() => {
    // 拿到會員的資料
    axios
      .post(`${API_URL}/market/get-personalData`, null, {
        // 設定可以跨源送 cookie
        withCredentials: true,
      })
      .then((response) => {
        setPersonalData(response.data[0])
      })
  }, [])

  useEffect(() => {
    // 在取得會員資料後預設帶入該會員的資料
    setId(personalData.id)
    setName(personalData.nickname)
    setPhone(personalData.phone)
    setEmail(personalData.email)
    setAddress(personalData.address)
  }, [personalData])

  return (
    <div className="container">
      <OrderProgressBar />
      <form className="checkout-personal-data">
        <div className="form-icon">
          <FontAwesomeIcon icon="file-alt" />
        </div>
        <h5 className="checkout-personal-data-title">確認購買資料</h5>
        <div className="checkout-personal-data-w1100"></div>
        <div className="checkout-personal-data-name">
          <label className="checkout-personal-data-label">名字 *</label>
          <input
            className="checkout-personal-data-input"
            type="text"
            placeholder="請輸入您的名字"
            required
            value={name}
            onChange={(e) => {
              setName(e.target.value)
            }}
          />
        </div>
        <div className="checkout-personal-data-phone">
          <label className="checkout-personal-data-label">手機號碼 *</label>
          <input
            className="checkout-personal-data-input"
            type="text"
            placeholder="請輸入您的聯絡電話"
            required
            value={phone}
            onChange={(e) => {
              setPhone(e.target.value)
            }}
          />
        </div>
        <div className="checkout-personal-data-email">
          <label className="checkout-personal-data-label">電子信箱 *</label>
          <input
            className="checkout-personal-data-input"
            type="email"
            placeholder="請輸入您的收件信箱"
            required
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
            }}
          />
        </div>
        <div className="checkout-credit-card-address">
          <label className="checkout-personal-data-label">地址 *</label>
          <input
            type="text"
            className="checkout-personal-data-input"
            placeholder="請輸入您的收件地址"
            required
            value={address}
            onChange={(e) => {
              setAddress(e.target.value)
            }}
          />
        </div>
        <div className="checkout-personal-data-paying">
          <label className="checkout-personal-data-label">付款方式 *</label>
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
                setAlert(false)
              }}
            >
              信用卡
            </li>
            <li
              className="dropdown-item"
              onClick={() => {
                setHowToPay('貨到付款')
                setCredit(false)
                setAlert(false)
              }}
            >
              貨到付款
            </li>
          </ul>
        </div>
        {alert ? (
          <div className="show-alert font-400SS">請選擇付款方式</div>
        ) : (
          <></>
        )}
        <div className="checkout-credit-card-area">
          {credit && <CheckoutCreditCard />}
        </div>
        <div className="cart-checkout-box">
          <CheckoutArea />
          <Link to={`/market/${path}`}>
            <button
              className="btn font-700M cart-checkout-btn"
              type="submit"
              onClick={() => frontendCheck()}
            >
              <FontAwesomeIcon icon="credit-card" /> 結帳去
            </button>
          </Link>
          <Link to="/market/cart-detail">
            <button className="btn font-700M cart-back-btn">
              <FontAwesomeIcon icon="long-arrow-alt-left" /> 回上頁
            </button>
          </Link>
        </div>
      </form>
    </div>
  )
}

export default CheckoutPersonalData
