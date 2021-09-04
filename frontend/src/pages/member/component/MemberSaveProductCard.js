import React from 'react'
import '../../../style/marketMainPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import productImg from '../../../images/005.jpg'

function MemberSaveProdcutCard() {
  return (
    <>
      <div className="product-card col-6">
        <div className="product-img">
          <img src={productImg} alt="好想吃威靈頓牛排" />
          <FontAwesomeIcon icon="bookmark" className="bookmark" />
        </div>
        <p className="font-700S product-category">食材</p>
        <h6 className="product-name">美國Choice嫩肩里肌牛排</h6>
        <p className="product-price">
          <FontAwesomeIcon icon="dollar-sign" />
          135
        </p>
        <button className="btn font-700M product-add-to-cart-btn">
          <FontAwesomeIcon icon="cart-plus" className="cart-plus" />
          加入購物車
        </button>
      </div>
    </>
  )
}

export default MemberSaveProdcutCard