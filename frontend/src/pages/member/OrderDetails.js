import React from 'react'
// import Header from '../../component/Header'
// import MinorBar from './component/MinorBar'
// import Footer from '../../component/Footer'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/orderList.css'

function OrderDetails() {
  return (
    <>
      {/* <Header />
      <MinorBar /> */}
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-text"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
            </div>
            <h5>訂單查詢</h5>
          </div>
          <div className="member-form-group-content">
            <table>
              <thead>
                <tr>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
                <tr>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                  <td></td>
                </tr>
              </tbody>
            </table>
            <div className="sumGroup">
              <div className="sumGroup-item">
                <div className="sumGroup-item-subtitle">商品金額總計</div>
                <div className="sumGroup-item-money">
                  <strong>
                    NT$ <span>3,930</span>
                  </strong>
                </div>
              </div>
              <div className="sumGroup-item">
                <div className="sumGroup-item-subtitle">折扣金額</div>
                <div className="sumGroup-item-money">
                  <strong>
                    NT$ <span>0</span>
                  </strong>
                </div>
              </div>
              <div className="sumGroup-item">
                <div className="sumGroup-item-subtitle">物流費用</div>
                <div className="sumGroup-item-money">
                  <strong>
                    NT$ <span>0</span>
                  </strong>
                </div>
              </div>
              <div className="sumGroup-item">
                <div className="sumGroup-item-subtitle">總計</div>
                <div className="sumGroup-item-money">
                  <strong>
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-text"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
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
                <strong className="font-700SL">發票類型</strong>電子發票 - 個人
              </li>
            </ul>
          </div>
        </div>
        {/* 注意事項  */}
        <div className="member-form member-form-forOrderDetail">
          <div className="member-form-title">
            <div className="member-form-title-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-text"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
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
      {/* <Footer /> */}
    </>
  )
}

export default OrderDetails
