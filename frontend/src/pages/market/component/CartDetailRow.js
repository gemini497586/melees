import React, { useEffect, useState } from 'react'
import img from '../../../images/005.jpg'
import '../../../style/cartDetailRow.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import axios from 'axios'
import { API_URL, P_CATEGORY } from '../../../utils/config'

function CartDetailRow() {
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios
      .post(`${API_URL}/market/order-productData`, null, {
        withCredentials: true,
      })
      .then((result) => {
        console.log(result.data)
        setProduct(result.data)
      })
  }, [])
  return (
    <>
      {product.map((v, i) => {
        return (
          <div className="cart-detail-row">
            <img src={`${API_URL}/market/${v.image}`} alt="商品圖片" className="cover-fit"/>
            <p className="font-400S cart-detail-category">
              {P_CATEGORY[v.category]}
            </p>
            <h6 className="cart-detail-name">{v.name}</h6>
            {/* <p className="font-400S cart-detail-specs">{v.specs}</p> */}
            <p className="cart-detail-price">
              <FontAwesomeIcon icon="dollar-sign" /> {v.price}
            </p>
            <div className="cart-detail-amount">{v.amount}</div>
            <h5 className="cart-detail-total">
              NT <FontAwesomeIcon icon="dollar-sign" />
              {v.price * v.amount}
            </h5>
          </div>
        )
      })}
    </>
  )
}

export default CartDetailRow
