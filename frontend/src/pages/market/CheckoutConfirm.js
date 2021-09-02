import React from 'react'
import '../../style/checkoutConfirm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import CheckoutArea from './CheckoutArea'
import OrderProgressBar from './component/OrderProgressBar'

function CheckoutConfirm() {
  return (
    <div className="container">
      <OrderProgressBar />
      <div className="checkout-confirm">
        <div className="checkout-confirm-icon">
          <FontAwesomeIcon icon="file-alt" size="lg" />
        </div>
        <h5 className="checkout-confirm-title">付款資料確認</h5>
        <div className="checkout-confirm-w1100"></div>
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
          <p className="checkout-confirm-label font-700SL">訂單明細</p>
          <table className="checkout-confirm-table">
            <tbody className="font-400SL">
              <tr className="d-flex justify-content-between checkout-confirm-tr1">
                <td>
                  美國Choice嫩肩里肌肉片 <span>*5</span>
                </td>
                <td>
                  <FontAwesomeIcon icon="dollar-sign" /> 1,550
                </td>
              </tr>
              <tr className="d-flex justify-content-between checkout-confirm-tr2">
                <td>
                  紐西蘭小羔羊薄切片 <span>*4</span>
                </td>
                <td>
                  <FontAwesomeIcon icon="dollar-sign" /> 760
                </td>
              </tr>
              <tr className="d-flex justify-content-between checkout-confirm-tr3">
                <td>
                  大加燕米1kg <span>*1</span>
                </td>
                <td>
                  <FontAwesomeIcon icon="dollar-sign" /> 510
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <CheckoutArea />
      </div>
    </div>
  )
}

export default CheckoutConfirm
