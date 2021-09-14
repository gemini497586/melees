import React from 'react'
import img from '../../../images/005.jpg'
import '../../../style/cartDetailRow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'

function CartDetailRow(props) {
  const { dataList } = props
  return (
    <>
      {dataList.map((value, index) => {
        return (
          <div className="orderDetail-row">
            <img src={img} alt="商品圖片" />
            <h6 className="orderDetail-name">{value.product_id}</h6>
            <p className="font-400S orderDetail-activity">
              生鮮肉品，3件85折起
            </p>
            <p className="orderDetail-price">
              <FontAwesomeIcon icon="dollar-sign" /> {value.price}
            </p>
            <div className="orderDetail-amount">{value.amount}</div>
            <h5 className="orderDetail-total">
              NT <FontAwesomeIcon icon="dollar-sign" />
              {value.total}
            </h5>
          </div>
        )
      })}
    </>
  )
}

export default CartDetailRow
