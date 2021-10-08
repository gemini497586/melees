import React from 'react'
import { API_URL } from '../../../utils/config'

function CartDetailRow(props) {
  const { detailList, productList } = props
  return (
    <>
      {detailList.map((value) => {
        return (
          <div className="orderDetail-row" key={value.id}>
            <div className="orderDetail-info">
              <div className="orderDetail-image">
                <img
                  src={`${API_URL}/market/${
                    productList && productList[value.product_id].image
                  }`}
                  alt={productList && productList[value.product_id].name}
                  className="b-cover-fit"
                />
              </div>
              <div className="orderDetail-name">
                <h6 className="orderDetail-productname">
                  {productList && productList[value.product_id].name}
                </h6>
              </div>
            </div>
            <div className="orderDetail-count">
              <h6 className="orderDetail-price">$ {value.price}</h6>
              <div className="orderDetail-amount font-400L">{value.amount}</div>
              <h6 className="orderDetail-total">NT$ {value.total}</h6>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default CartDetailRow
