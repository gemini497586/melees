import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { Link } from 'react-router-dom'

function OrderListRow() {
  return (
    <>
      <tr>
        <td>2021-08-20</td>
        <td>
          <Link to="/member/orderdetail/">0025</Link>
        </td>
        <td>信用卡</td>
        <td>處理中</td>
        <td>2021-08-24</td>
        <td>$1,989</td>
        <td>鑑賞期 2021-08-30</td>
        <td>
          <Link to="#/">
            客服 <FontAwesomeIcon icon="info-circle" className="icon-info" />
          </Link>
        </td>
      </tr>
    </>
  )
}

export default OrderListRow
