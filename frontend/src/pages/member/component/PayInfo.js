import React from 'react'

function PayInfo(props) {
  const { mainList, payMethod, payment_method } = props
  return (
    <>
      <ul className="orderDetail-payInfo">
        <li className="font-400SL">
          <strong className="font-700SL">付款方式</strong>
          {payment_method[mainList.payment_method]}
        </li>
        <li className="font-400SL">
          <strong className="font-700SL">訂購姓名</strong>
          {mainList.name}
        </li>
        {payMethod === 1 ? (
          <li className="font-400SL">
            <strong className="font-700SL">收件地址</strong>
            {mainList.address}
          </li>
        ) : (
          <li className="font-400SL">
            <strong className="font-700SL">取貨門市</strong>
            174132-德隆門市 {mainList.address}
          </li>
        )}
        <li className="font-400SL">
          <strong className="font-700SL">發票類型</strong>電子發票 - 個人
        </li>
      </ul>
    </>
  )
}

export default PayInfo
