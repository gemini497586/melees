import React, { useContext } from 'react'
import img from '../../../images/005.jpg'
import '../../../style/cartDetailRowBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { HandleCart } from '../../../utils/HandleCart'

function CartDetailRow(props) {
  const { carts, removeCart, productsAll, minusAmount, plusAmount } =
    useContext(HandleCart)
  const index = props.index
  const productID = carts[index].id - 1
  // console.log(productsAll)
  return (
    <div className="cart-btn-detail-row">
      <img src={img} alt="商品圖片" />
      <p className="font-400S cart-btn-detail-category">
        {productsAll[productID].category}
      </p>
      <h6 className="cart-btn-detail-name">{carts[index].name}</h6>
      <p className="font-400S cart-btn-detail-specs">
        {productsAll[productID].specs}
      </p>
      <p className="cart-btn-detail-price">
        <FontAwesomeIcon icon="dollar-sign" /> {carts[index].price}
      </p>
      <div className="cart-btn-detail-amount">
        <p>{carts[index].amount}</p>
        <button
          className="btn minus"
          onClick={() => {
            minusAmount(index)
          }}
        >
          <FontAwesomeIcon icon="minus" />
        </button>
        <button
          className="btn plus"
          onClick={() => {
            plusAmount(index)
          }}
        >
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>
      <h5 className="cart-btn-detail-total">
        NT <FontAwesomeIcon icon="dollar-sign" />
        {carts[index].amount * carts[index].price}
      </h5>
      <button
        className="btn cart-btn-detail-delete"
        onClick={() => removeCart(index)}
      >
        <FontAwesomeIcon icon="trash-alt" />
      </button>
    </div>
  )
}

export default CartDetailRow
