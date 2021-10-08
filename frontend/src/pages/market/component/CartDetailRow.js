import React from 'react'
import '../../../style/cartDetailRow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { API_URL, P_CATEGORY } from '../../../utils/config'

function CartDetailRow(props) {
  const { value } = props
  return (
    <div className="cart-detail-row">
      <img
        src={`${API_URL}/market/${value.image}`}
        alt="商品圖片"
        className="cover-fit"
      />
      <p className="font-400S cart-detail-category">
        {P_CATEGORY[value.category]}
      </p>
      <h6 className="cart-detail-name">{value.name}</h6>
      <p className="font-400S cart-detail-specs">{value.specs}</p>
      <p className="cart-detail-price">
        <FontAwesomeIcon icon="dollar-sign" /> {value.price}
      </p>
      <div className="cart-detail-amount">{value.amount}</div>
      <h5 className="cart-detail-total">
        NT <FontAwesomeIcon icon="dollar-sign" />
        {value.price * value.amount}
      </h5>
    </div>
  )
}

export default CartDetailRow
