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
          <tr key={value.id}>
            <td>{value.create_date}</td>
            <td>
              <Link to="/member/orderdetail/">0025</Link>
            </td>
            <td>{payment_method[value.payment_method]}</td>
            <td>{status[value.status]}</td>
            <td>{value.create_date}</td>
            <td>${value.total_price}</td>
            <td>鑑賞期 {value.create_date}</td>
            <td>
              <Link to="#/">
                客服
                <FontAwesomeIcon
                  icon="info-circle"
                  className="icon-info ms-2"
                />
              </Link>
            </td>
          </tr>
        )
      })}
    </>
  )
}

export default OrderListRow
