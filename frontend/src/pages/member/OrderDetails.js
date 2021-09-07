import React from 'react'
import MinorBar from './component/MinorBar'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/orderList.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import OrderDetailRow from './component/OrderDetailRow'

const cartArray = [1, 2, 3]

function OrderDetails() {
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="orderList-container">
          {/* <!-- 訂單進度條 --> */}
          <ol className="progressBar">
            <li>
              <div className="progressBar-icon">1</div>
              <p className="progressBar-text font-400S">訂單成立</p>
            </li>
            <li className="active">
              <div className="progressBar-icon">2</div>
              <p className="progressBar-text font-400S">處理中</p>
            </li>
            <li>
              <div className="progressBar-icon">3</div>
              <p className="progressBar-text font-400S">已出貨</p>
            </li>
            <li>
              <div className="progressBar-icon">4</div>
              <p className="progressBar-text font-400S">派送中</p>
            </li>
            <li>
              <div className="progressBar-icon">5</div>
              <p className="progressBar-text font-400S">已送達</p>
            </li>
          </ol>
          {/* <!-- 訂單編號 --> */}
          <div className="orderList-title">
            <h6>您的訂單編號為：0001</h6>
          </div>
          {/* <!-- 訂單查詢 --> */}
          <div className="member-form member-form-forOrderDetail">
            <div className="member-form-title">
              <div className="member-form-title-icon">
                <FontAwesomeIcon
                  icon="file-alt"
                  size="lg"
                  className="icon-file"
                />
              </div>
              <h5>訂單查詢</h5>
            </div>
            <div className="member-form-group-content member-form-group-content-forOrderDetail">
              <div className="d-flex orderDetail-title">
                <p className="font-400L orderDetail-title-info">商品介紹</p>
                <p className="font-400L orderDetail-title-price">單價</p>
                <p className="font-400L orderDetail-title-amount">數量</p>
                <p className="font-400L orderDetail-title-total">總價</p>
              </div>
              {cartArray.map((v, i) => {
                return <OrderDetailRow />
              })}
              {/* 總金額計算 */}
              <div className="sumGroup">
                <div className="sumGroup-item">
                  <div className="sumGroup-item-subtitle font-400S">
                    商品金額總計
                  </div>
                  <div className="sumGroup-item-money">
                    <strong>
                      NT$ <span>3,930</span>
                    </strong>
                  </div>
                </div>
                <div className="sumGroup-item">
                  <div className="sumGroup-item-subtitle font-400S">
                    折扣金額
                  </div>
                  <div className="sumGroup-item-money">
                    <strong>
                      NT$ <span>0</span>
                    </strong>
                  </div>
                </div>
                <div className="sumGroup-item">
                  <div className="sumGroup-item-subtitle font-400S">
                    物流費用
                  </div>
                  <div className="sumGroup-item-money">
                    <strong>
                      NT$ <span>0</span>
                    </strong>
                  </div>
                </div>
                <div className="sumGroup-item sumGroup-item-total">
                  <div className="sumGroup-item-subtitle font-400S">總計</div>
                  <div className="sumGroup-item-money">
                    <strong className="h6">
                      NT$ <span>3,930</span>
                    </strong>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* 付款方式與寄送資料 */}
          <div className="member-form member-form-forOrderDetail">
            <div className="member-form-title">
              <div className="member-form-title-icon">
                <FontAwesomeIcon
                  icon="file-alt"
                  size="lg"
                  className="icon-file"
                />
              </div>
              <h5>付款方式與寄送資料</h5>
            </div>
            <div className="member-form-group-content member-form-group-content-forPayInfo">
              <ul className="orderDetail-payInfo">
                <li className="font-400SL">
                  <strong className="font-700SL">付款方式</strong>7-11 取貨付款
                </li>
                <li className="font-400SL">
                  <strong className="font-700SL">訂購姓名</strong>王小明
                </li>
                <li className="font-400SL">
                  <strong className="font-700SL">取貨門市</strong>
                  174132-德隆門市-桃園市八德區永豐路408號410號1樓
                </li>
                <li className="font-400SL">
                  <strong className="font-700SL">發票類型</strong>電子發票 -
                  個人
                </li>
              </ul>
            </div>
          </div>
          {/* 注意事項  */}
          <div className="member-form member-form-forOrderDetail">
            <div className="member-form-title">
              <div className="member-form-title-icon">
                <FontAwesomeIcon
                  icon="file-alt"
                  size="lg"
                  className="icon-file"
                />
              </div>
              <h5>注意事項</h5>
            </div>
            <div className="member-form-group-content">
              <ul className="orderDetail-notes">
                <li className="font-400SL">
                  本訂單已發送至超商系統，恕無法取消或修改訂單內容。
                </li>
                <li className="font-400SL">
                  商品送達門市時，系統會以簡訊及E-mail通知您取貨。
                </li>
                <li className="font-400SL">
                  您可以隨時到本網站「<a href="#/">訂單查詢</a>
                  」，查詢目前訂單處理進度。
                </li>
                <li className="font-400SL">
                  取貨時請告訴門市人員您的姓名，並於當場支付現金即可。
                </li>
                <li className="font-400SL">
                  如訂購之商品無法順利出貨或缺貨，我們將主動通知您並取消該訂購品項。
                </li>
                <li className="font-400SL">
                  <strong>
                    如您未前往門市取貨，累積2次退貨記錄後，將無法再使用便利商店取貨付款服務，請務必注意！
                  </strong>
                </li>
                <li className="font-400SL">
                  電子發票相關詳細說明，請參考「<a href="#/">購物說明</a>」。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderDetails
