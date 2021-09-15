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
              <Link to={`/member/orderdetail/${value.order_number}`}>
                {value.order_number}
              </Link>
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

      {/* <tr key={value.id}>
        <td>{value.create_date}</td>
        <td>
          <Link to={`/member/orderdetail/${value.order_number}`}>
            {value.order_number}
          </Link>
        </td>
        <td>{payment_method[value.payment_method]}</td>
        <td>{status[value.status]}</td>
        <td>{value.create_date}</td>
        <td>${value.total_price}</td>
        <td>鑑賞期 {value.create_date}</td>
        <td>
          <Link to="#/">
            客服
            <FontAwesomeIcon icon="info-circle" className="icon-info ms-2" />
          </Link>
        </td>
      </tr> */}
    </>
  )
}

export default OrderListRow
