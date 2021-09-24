import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { Link } from 'react-router-dom'

function OrderListRow(props) {
  const { dataList, payment_method, status } = props

  return (
    <>
      {dataList.map((value, item) => {
        return (
          <div className="orderList-row font-400SL" key={value.id}>
            <div className="orderList-row-date">{value.create_date}</div>
            <div className="orderList-row-10">
              <Link to={`/member/orderdetail/${value.id}`}>000{value.id}</Link>
            </div>
            <div className="orderList-row-10 orderList-web">
              {payment_method[value.payment_method]}
            </div>
            <div className="orderList-row-10">{status[value.status]}</div>
            <div className="orderList-row-date orderList-web">
              {value.create_date}
            </div>
            <div className="orderList-row-10">$ {value.total_price}</div>
            <div className="rderList-row-refund orderList-web">
              鑑賞期 {value.create_date}
            </div>
            <div className="orderList-row-10 orderList-web">
              <Link to="#/">
                客服
                <FontAwesomeIcon
                  icon="info-circle"
                  className="icon-info ms-2"
                />
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default OrderListRow
