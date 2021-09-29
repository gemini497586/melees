import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import MinorBar from './component/MinorBar'
import OrderDetailRow from './component/OrderDetailRow'
import ProgressBar from './component/ProgressBar'
import PayInfo from './component/PayInfo'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function OrderDetails(props) {
  // 從網址上拿到訂單編號，打後端的API
  const id = props.match.params.id

  const [detail, setDetail] = useState([])
  const [mainList, setMainList] = useState([])
  const [step, setStep] = useState(1)
  const [product, setProduct] = useState([])

  // 幫商品做成查表法
  let productList = {}
  product.map((item) => {
    productList[item.id] = item.name
  })
  const payment_method = { 1: '信用卡', 2: '貨到付款' }

  // 初始值
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await Axios.get(`${API_URL}/order/detail/${id}`, {
          withCredentials: true,
        })
        let data = res.data.result
        let mainList = res.data.mainList
        let product = res.data.result2
        setDetail(data)
        setMainList(mainList)
        setStep(mainList.status)
        setProduct(product)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="container">
          <ProgressBar step={step} />
          {/* <!-- 訂單編號 --> */}
          <div className="orderList-title">
            <div className="font-700L">訂單編號為: {id}</div>
            <h6> </h6>
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
              <div className="orderDetail-title font-400L">
                <div className="orderDetail-title-info">商品介紹</div>
                <div className="orderDetail-title-count">
                  <div className="orderDetail-title-price">單價</div>
                  <div className="orderDetail-title-amount">數量</div>
                </div>
                <div className="orderDetail-title-total">總價</div>
              </div>
              <OrderDetailRow detailList={detail} productList={productList} />
              {/* 總金額計算 */}
              <div className="sumGroup">
                <div className="sumGroup-item">
                  <div className="sumGroup-item-subtitle font-400S">
                    商品金額總計
                  </div>
                  <div className="sumGroup-item-money font-700SL">
                    NT$ {mainList.total_price}
                  </div>
                </div>
                <div className="sumGroup-item">
                  <div className="sumGroup-item-subtitle font-400S">
                    折扣金額
                  </div>
                  <div className="sumGroup-item-money font-700SL">NT$ 0</div>
                </div>
                <div className="sumGroup-item">
                  <div className="sumGroup-item-subtitle font-400S">
                    物流費用
                  </div>
                  <div className="sumGroup-item-money font-700SL">NT$ 0</div>
                </div>
                <div className="sumGroup-item sumGroup-item-total">
                  <div className="sumGroup-item-subtitle font-400S">總計</div>
                  <div className="sumGroup-item-money font-700SL">
                    NT$ {mainList.total_price}
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
              <PayInfo mainList={mainList} payment_method={payment_method} />
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
                  您可以隨時到本網站「
                  <Link to={`/member/orderdetail/${mainList.order_number}`}>
                    訂單查詢
                  </Link>
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
                  電子發票相關詳細說明，請參考「<Link to="#/">購物說明</Link>
                  」。
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default withRouter(OrderDetails)
