import React from 'react'
import img from '../../../images/005.jpg'
import '../../../style/cartDetailRowBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'

function CartDetailRow(props) {
  return (
    <div className="cart-btn-detail-row">
      <img src={img} alt="商品圖片" />
      <p className="font-400S cart-btn-detail-category">食材</p>
      <h6 className="cart-btn-detail-name">美國Choice嫩肩里肌肉片</h6>
      <p className="font-400S cart-btn-detail-specs">
        重量：100g±5% <br />
        原產地：美國 <br />
        保存方式：請置於冷凍-18℃保存
      </p>
      <p className="cart-btn-detail-price">
        <FontAwesomeIcon icon="dollar-sign" /> 310
      </p>
      <div className="cart-btn-detail-amount">
        <FontAwesomeIcon icon="minus" className="operation" />
        5
        <FontAwesomeIcon icon="plus" className="operation" />
      </div>
      <h5 className="cart-btn-detail-total">
        NT <FontAwesomeIcon icon="dollar-sign" />
        1,550
      </h5>
      <button className="btn cart-btn-detail-delete">
        <FontAwesomeIcon icon="trash-alt" />
      </button>
    </div>
  )
}

export default CartDetailRow
