import React, { useContext } from 'react'
import img from '../../../images/005.jpg'
import '../../../style/cartDetailRowBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { HandleCart } from '../../../utils/HandleCart'

function CartDetailRow(props) {
  const { carts, addCart, removeCart, productsAll } = useContext(HandleCart)
  const pID = props.value - 1

  return (
    <div className="cart-btn-detail-row">
      <img src={img} alt="商品圖片" />
      <p className="font-400S cart-btn-detail-category">
        {productsAll[props.value].category}
      </p>
      <h6 className="cart-btn-detail-name">{productsAll[pID].name}</h6>
      <p className="font-400S cart-btn-detail-specs">
        {productsAll[pID].specs}
      </p>
      <p className="cart-btn-detail-price">
        <FontAwesomeIcon icon="dollar-sign" /> {productsAll[pID].price}
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
