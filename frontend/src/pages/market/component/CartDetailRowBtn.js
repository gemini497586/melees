import React, { useContext } from 'react'
import img from '../../../images/005.jpg'
import '../../../style/cartDetailRowBtn.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { HandleCart } from '../../../utils/HandleCart'

function CartDetailRow(props) {
  const { carts, removeCart, productsAll, amount, setAmount } =
    useContext(HandleCart)
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
        <p>{amount}</p>
        <button
          className="btn minus"
          onClick={() => {
            amount > 1 ? setAmount(amount - 1) : setAmount(amount)
          }}
        >
          <FontAwesomeIcon icon="minus" />
        </button>
        <button
          className="btn plus"
          onClick={() => {
            amount < 99 ? setAmount(amount + 1) : setAmount(99)
          }}
        >
          <FontAwesomeIcon icon="plus" />
        </button>
      </div>
      <h5 className="cart-btn-detail-total">
        NT <FontAwesomeIcon icon="dollar-sign" />
        {productsAll[pID].price * amount}
      </h5>
      <button
        className="btn cart-btn-detail-delete"
        onClick={(e) => removeCart(e, pID)}
      >
        <FontAwesomeIcon icon="trash-alt" />
      </button>
    </div>
  )
}

export default CartDetailRow
