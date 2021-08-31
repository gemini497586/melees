import React from 'react'

function OrderDetails() {
  return (
    <>
      <ol className="progressBar">
        <li>
          <div className="progressBar-icon">1</div>
          <p className="progressBar-text font-400S">訂單成立</p>
        </li>
        <li className="active">
          <div className="progressBar-icon">2</div>
          <p className="progressBar-text font-400S">處理中</p>
        </li>
        <li>
          <div className="progressBar-icon">3</div>
          <p className="progressBar-text font-400S">已出貨</p>
        </li>
        <li>
          <div className="progressBar-icon">4</div>
          <p className="progressBar-text font-400S">派送中</p>
        </li>
        <li>
          <div className="progressBar-icon">5</div>
          <p className="progressBar-text font-400S">已送達</p>
        </li>
      </ol>
    </>
  )
}

export default OrderDetails
