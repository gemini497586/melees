import React from 'react'
import img from '../../../images/005.jpg'
import '../../../style/cartDetailRow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'

function CartDetailRow(props) {
  return (
    <div className="orderDetail-row">
      <img src={img} alt="商品圖片" />
      <h6 className="orderDetail-name">美國Choice嫩肩里肌肉片</h6>
      <p className="font-400S orderDetail-activity">生鮮肉品，3件85折起</p>
      <p className="orderDetail-price">
        <FontAwesomeIcon icon="dollar-sign" /> 310
      </p>
      <div className="orderDetail-amount">5</div>
      <h5 className="orderDetail-total">
        NT <FontAwesomeIcon icon="dollar-sign" />
        1,550
      </h5>
    </div>
  )
}

export default CartDetailRow
