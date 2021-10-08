import React, { useState, useEffect } from 'react'
import '../../style/orderList.css'
import MinorBar from './component/MinorBar'
import OrderListRow from './component/OrderListRow'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function OrderQuery() {
  const [data, setData] = useState([])
  const [count, setCount] = useState(0)

  const status = {
    1: '訂單成立',
    2: '處理中',
    3: '已出貨',
    4: '派送中',
    5: '已送達',
  }

  useEffect(() => {
    const getData = async () => {
      try {
        let res = await Axios.post(
          `${API_URL}/order`,
          {},
          { withCredentials: true }
        )
        let data = res.data.result
        let count = res.data.count.count
        setData(data)
        setCount(count)
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
          <div className="orderList-title">
            <div className="font-700L">共: {count} 筆訂單</div>
            <button className="orderList-refundBtn font-700M">
              退款帳戶查詢/結清
            </button>
          </div>
          <div className="orderList-table-wrap">
            {/* 上面標題 */}
            <div className="orderList-header font-700SL">
              <div className="orderList-row-date">訂購日期</div>
              <div className="orderList-row-10">訂單編號</div>
              <div className="orderList-row-10 orderList-web">付款方式</div>
              <div className="orderList-row-10">處理進度</div>
              <div className="orderList-row-date orderList-web">
                預計出貨日期
              </div>
              <div className="orderList-row-10">應付金額</div>
              <div className="rderList-row-refund orderList-web">
                訂單取消/退貨詳情
              </div>
              <div className="orderList-row-10 orderList-web">問與答</div>
            </div>
            {/* 下面內容 */}
            <OrderListRow dataList={data} status={status} />
          </div>
        </div>
      </div>
    </>
  )
}

export default OrderQuery
