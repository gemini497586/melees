import React from 'react'
import { P_PAYMENT_METHOD } from '../../../utils/config'

function PayInfo(props) {
  const { mainList } = props
  return (
    <>
      <ul className="orderDetail-payInfo">
        <li className="font-400SL">
          <strong className="font-700SL">付款方式</strong>
          {P_PAYMENT_METHOD[mainList.payment_method]}
        </li>
        <li className="font-400SL">
          <strong className="font-700SL">訂購姓名</strong>
          {mainList.name}
        </li>
        <li className="font-400SL">
          <strong className="font-700SL">收件地址</strong>
          {mainList.address}
        </li>
        <li className="font-400SL">
          <strong className="font-700SL">發票類型</strong>電子發票 - 個人
        </li>
      </ul>
    </>
  )
}

export default PayInfo
