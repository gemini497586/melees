import React from 'react'
import '../../style/global.css'

function OrderDetails() {
  return (
    <>
      <ol class="progressBar">
        <li>
          <div class="progressBar-icon">1</div>
          <p class="progressBar-text">訂單成立</p>
        </li>
        <li class="active">
          <div class="progressBar-icon">2</div>
          <p class="progressBar-text">處理中</p>
        </li>
        <li>
          <div class="progressBar-icon">3</div>
          <p class="progressBar-text">已出貨</p>
        </li>
        <li>
          <div class="progressBar-icon">4</div>
          <p class="progressBar-text">派送中</p>
        </li>
        <li>
          <div class="progressBar-icon">5</div>
          <p class="progressBar-text">已送達</p>
        </li>
      </ol>
    </>
  )
}

export default OrderDetails
