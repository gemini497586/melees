import React, { useEffect, useState } from 'react'
import '../../style/checkOrder.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import CartDetailRow from './component/CartDetailRow'
import axios from 'axios'
import { API_URL } from '../../utils/config'

function ProductDetails() {
  const [personalData, setPersonalData] = useState([])
  useEffect(() => {
    axios
      .post(`${API_URL}/market/order-personalData`, null, {
        // 設定可以跨源送 cookie
        withCredentials: true,
      })
      .then((response) => {
        setPersonalData(response.data[0])
      })
  }, [])

  const [product, setProduct] = useState([])

  useEffect(() => {
    axios
      .post(`${API_URL}/market/order-productData`, null, {
        withCredentials: true,
      })
      .then((result) => {
        setProduct(result.data)
      })
  }, [])

  const payment = { 1: '貨到付款', 2: '信用卡付款' }
  return (
    <div className="container">
      <div className="check-order">
        <div className="check-order-deliver-info">
          <div className="deliver-info-icon">
            <FontAwesomeIcon icon="file-alt" />
          </div>
          <h5 className="deliver-info-title">訂單配送資訊</h5>
          <div className="deliver-info-w1100"></div>
          <div className="deliver-info-name">
            <label className="font-700SL">收件人</label>
            <input
              type="text"
              readOnly
              value={personalData.name}
              className="font-400SL"
            />
          </div>
          <div className="deliver-info-way">
            <label className="font-700SL">結帳方式</label>
            <input
              type="text"
              readOnly
              value={payment[personalData.payment_method]}
              className="font-400SL"
            />
          </div>
        </div>
        <div className="check-order-main-detail">
          <div className="main-detail-icon">
            <FontAwesomeIcon icon="file-alt" />
          </div>
          <h5 className="main-detail-title">訂單詳細資訊</h5>
          <div className="main-detail-w1100"></div>
          <div className="main-detail-row-area">
            <div className="d-flex main-detail-row-title">
              <p className="font-400L cart-detail-title-info">商品介紹</p>
              <p className="font-400L cart-detail-title-price">單價</p>
              <p className="font-400L cart-detail-title-amount">數量</p>
              <p className="font-400L cart-detail-title-total">總價</p>
            </div>
          </div>
          {product.map((value) => {
            return <CartDetailRow value={value} />
          })}
          <div className="main-detail-checkout-area">
            <p className="font-400S main-detail-total-amount">訂單金額總計</p>
            <h6 className="main-detail-total-amount-num">
              NT <FontAwesomeIcon icon="dollar-sign" />
              {personalData.total_price}
            </h6>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails
