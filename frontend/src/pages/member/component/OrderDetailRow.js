import React from 'react'
import img from '../../../images/005.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'

function CartDetailRow(props) {
  const { detailList, productList } = props
  return (
    <>
      {detailList.map((value) => {
        return (
          <div className="orderDetail-row" key={value.id}>
            <div className="orderDetail-info">
              <div className="orderDetail-image">
                <img src={img} alt="商品圖片" className="b-cover-fit" />
              </div>
              <div className="orderDetail-name">
                <h6 className="orderDetail-productname">
                  {productList[value.product_id]}
                </h6>
                <p className="font-400S orderDetail-activity">
                  生鮮肉品，3件85折起
                </p>
              </div>
            </div>
            <div className="orderDetail-count">
              <h5 className="orderDetail-price">$ {value.price}</h5>
              <div className="orderDetail-amount font-700L">{value.amount}</div>
            </div>
            <h5 className="orderDetail-total">NT$ {value.total}</h5>
          </div>
        )
      })}
    </>
  )
}

export default CartDetailRow
