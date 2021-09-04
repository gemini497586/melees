import React from 'react'
import '../../../style/orderProgressBar.css'

function OrderProgressBar() {
  return (
    <>
      <ol className="orderProgressBar">
        <li>
          <div className="orderProgressBar-icon">1</div>
          <p className="orderProgressBar-text font-400S">購物車</p>
        </li>
        <li>
          <div className="orderProgressBar-icon">2</div>
          <p className="orderProgressBar-text font-400S">運送資訊</p>
        </li>
        <li className="active">
          <div className="orderProgressBar-icon">3</div>
          <p className="orderProgressBar-text font-400S">付款資訊</p>
        </li>
        <li>
          <div className="orderProgressBar-icon">4</div>
          <p className="orderProgressBar-text font-400S">訂單完成</p>
        </li>
      </ol>
    </>
  )
}

export default OrderProgressBar
