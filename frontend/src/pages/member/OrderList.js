import React, { useState, useEffect } from 'react'
import '../../style/orderList.css'
import MinorBar from './component/MinorBar'
import OrderListRow from './component/OrderListRow'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function OrderQuery() {
  const [data, setData] = useState([])
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await Axios.get(`${API_URL}/order`)
        let data = res.data
        setData(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  let payment_method = { 1: '信用卡', 2: '貨到付款' }
  let status = {
    1: '訂單成立',
    2: '處理中',
    3: '已出貨',
    4: '派送中',
    5: '已送達',
  }

  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="container">
          <div className="orderList-title">
            <div className="font-700L">共: 25 筆訂單</div>
            <button className="orderList-refundBtn font-700M">
              退款帳戶查詢/結清
            </button>
          </div>
          <table className="orderList-table">
            <thead>
              <tr>
                <th className="font-400SL" scope="col">
                  訂購日期
                </th>
                <th className="font-400SL" scope="col">
                  訂單編號
                </th>
                <th className="font-400SL" scope="col">
                  付款方式
                </th>
                <th className="font-400SL" scope="col">
                  處理進度
                </th>
                <th className="font-400SL" scope="col">
                  預計出貨日期
                </th>
                <th className="font-400SL" scope="col">
                  應付金額
                </th>
                <th className="font-400SL" scope="col">
                  訂單取消/退貨詳情
                </th>
                <th className="font-400SL" scope="col">
                  問與答
                </th>
              </tr>
            </thead>
            <tbody>
              <OrderListRow
                dataList={data}
                payment_method={payment_method}
                status={status}
              />
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default OrderQuery
