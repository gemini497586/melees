import React from 'react'
import '../../style/checkoutConfirm.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'

function CheckoutConfirm() {
  return (
    <div className="container">
      <div className="checkout-confirm">
        <div className="checkout-confirm-icon">
          <FontAwesomeIcon icon="file-alt" size="lg" />
        </div>
        <h5 className="checkout-confirm-title">付款資料確認</h5>
        <div className="checkout-confirm-w1100"></div>
        <div className="checkout-confirm-way">
          <p className="checkout-confirm-label">付款方式</p>
          <p className="checkout-confirm-input">信用卡付款</p>
        </div>
        <div className="checkout-confirm-name">
          <p className="checkout-confirm-label">訂購姓名</p>
          <p className="checkout-confirm-input">陳柏元</p>
        </div>
        <div className="checkout-confirm-address">
          <p className="checkout-confirm-label">送貨地址</p>
          <p className="checkout-confirm-input">桃園市中壢區環北路543號</p>
        </div>
        <div className="checkout-confirm-phone">
          <p className="checkout-confirm-label">聯絡電話</p>
          <p className="checkout-confirm-input">0912345678</p>
        </div>
        <div className="checkout-confirm-email">
          <p className="checkout-confirm-label">聯絡信箱</p>
          <p className="checkout-confirm-input">shopping@gmail.com</p>
        </div>
        <div className="checkout-confirm-detail">
          <p className="checkout-confirm-label">訂單明細</p>
            <table className="checkout-confirm-table">
              <tbody>
                <tr>
                  <td>美國Choice嫩肩里肌肉片</td>
                  <td>*5</td>
                  <td>1,550</td>
                </tr>
                {/* <tr>
                  <td>紐西蘭小羔羊薄切片</td>
                  <td>*4</td>
                  <td>760</td>
                </tr>
                <tr>
                  <td>大加燕米1kg</td>
                  <td>*1</td>
                  <td>510</td>
                </tr> */}
              </tbody>
            </table>
        </div>
      </div>
    </div>
  )
}

export default CheckoutConfirm
