import React from 'react'
import '../../style/ordersComplete.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import OrderProgressBar from './component/OrderProgressBar'
import { Link } from 'react-router-dom'

function OrdersComplete() {
  return (
    <div className="container">
      <OrderProgressBar />
      <div className="orders-complete">
        <FontAwesomeIcon
          icon={['far', 'check-circle']}
          size="9x"
          className="orders-complete-icon"
        />

        <p className="font-700L orders-complete-title">
          您的訂單已經成功送出!!
        </p>
        <Link to="/market/check-order">
          <button className="btn font-700M  orders-complete-btn">
            追蹤訂單
          </button>
        </Link>
      </div>
    </div>
  )
}

export default OrdersComplete
