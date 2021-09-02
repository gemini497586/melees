import React from 'react'
import '../../../style/orderProgressBar.css'

function OrderProgressBar() {
  return (
    <>
      <ol className="orderProgressBar">
        <li>
          <div className="orderProgressBar-icon">1</div>
          <p className="orderProgressBar-text font-400S">訂單成立</p>
        </li>
        <li>
          <div className="orderProgressBar-icon">2</div>
          <p className="orderProgressBar-text font-400S">處理中</p>
        </li>
        <li className="active">
          <div className="orderProgressBar-icon">3</div>
          <p className="orderProgressBar-text font-400S">已出貨</p>
        </li>
        <li>
          <div className="orderProgressBar-icon">4</div>
          <p className="orderProgressBar-text font-400S">派送中</p>
        </li>
        <li>
          <div className="orderProgressBar-icon">5</div>
          <p className="orderProgressBar-text font-400S">已送達</p>
        </li>
      </ol>
    </>
  )
}

export default OrderProgressBar
