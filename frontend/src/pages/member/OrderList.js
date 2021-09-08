import React from 'react'
import '../../style/global.css'
import '../../style/orderList.css'
import MinorBar from './component/MinorBar'
import OrderListRow from './component/OrderListRow'

function OrderQuery() {
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="orderList-container">
          <div className="orderList-title">
            <h6>共：25 筆訂單</h6>
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
<<<<<<< HEAD
              <tr>
                <td>2021-08-20</td>
                <td>
                  <a href="#/">0025</a>
                </td>
                <td>信用卡</td>
                <td>處理中</td>
                <td>2021-08-24</td>
                <td>$1,989</td>
                <td>鑑賞期 2021-08-30</td>
                <td>
                  客服{' '}
                  <FontAwesomeIcon icon="info-circle" className="icon-info" />
                </td>
              </tr>
              <tr>
                <td>2021-08-20</td>
                <td>
                  <a href="#/">0025</a>
                </td>
                <td>信用卡</td>
                <td>處理中</td>
                <td>2021-08-24</td>
                <td>$1,989</td>
                <td>鑑賞期 2021-08-30</td>
                <td>
                  客服{' '}
                  <FontAwesomeIcon icon="info-circle" className="icon-info" />
                </td>
              </tr>
              <tr>
                <td>2021-08-20</td>
                <td>
                  <a href="#/">0025</a>
                </td>
                <td>信用卡</td>
                <td>處理中</td>
                <td>2021-08-24</td>
                <td>$1,989</td>
                <td>鑑賞期 2021-08-30</td>
                <td>
                  客服{' '}
                  <FontAwesomeIcon icon="info-circle" className="icon-info" />
                </td>
              </tr>
              <tr>
                <td>2021-08-20</td>
                <td>
                  <a href="#/">0025</a>
                </td>
                <td>信用卡</td>
                <td>處理中</td>
                <td>2021-08-24</td>
                <td>$1,989</td>
                <td>鑑賞期 2021-08-30</td>
                <td>
                  客服{' '}
                  <FontAwesomeIcon icon="info-circle" className="icon-info" />
                </td>
              </tr>
              <tr>
                <td>2021-08-20</td>
                <td>
                  <a href="#/">0025</a>
                </td>
                <td>信用卡</td>
                <td>處理中</td>
                <td>2021-08-24</td>
                <td>$1,989</td>
                <td>鑑賞期 2021-08-30</td>
                <td>
                  客服{' '}
                  <FontAwesomeIcon icon="info-circle" className="icon-info" />
                </td>
              </tr>
              <tr>
                <td>2021-08-20</td>
                <td>
                  <a href="#/">0025</a>
                </td>
                <td>信用卡</td>
                <td>處理中</td>
                <td>2021-08-24</td>
                <td>$1,989</td>
                <td>鑑賞期 2021-08-30</td>
                <td>
                  客服{' '}
                  <FontAwesomeIcon icon="info-circle" className="icon-info" />
                </td>
              </tr>
              <tr>
                <td>2021-08-20</td>
                <td>
                  <a href="#/">0025</a>
                </td>
                <td>信用卡</td>
                <td>處理中</td>
                <td>2021-08-24</td>
                <td>$1,989</td>
                <td>鑑賞期 2021-08-30</td>
                <td>
                  客服{' '}
                  <FontAwesomeIcon icon="info-circle" className="icon-info" />
                </td>
              </tr>
              <tr>
                <td>2021-08-20</td>
                <td>
                  <a href="#/">0025</a>
                </td>
                <td>信用卡</td>
                <td>處理中</td>
                <td>2021-08-24</td>
                <td>$1,989</td>
                <td>鑑賞期 2021-08-30</td>
                <td>
                  客服{' '}
                  <FontAwesomeIcon icon="info-circle" className="icon-info" />
                </td>
              </tr>
              <tr>
                <td>2021-08-20</td>
                <td>
                  <a href="#/">0025</a>
                </td>
                <td>信用卡</td>
                <td>處理中</td>
                <td>2021-08-24</td>
                <td>$1,989</td>
                <td>鑑賞期 2021-08-30</td>
                <td>
                  客服{' '}
                  <FontAwesomeIcon icon="info-circle" className="icon-info" />
                </td>
              </tr>
=======
              <OrderListRow />
              <OrderListRow />
              <OrderListRow />
              <OrderListRow />
              <OrderListRow />
              <OrderListRow />
              <OrderListRow />
              <OrderListRow />
>>>>>>> develop
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default OrderQuery
