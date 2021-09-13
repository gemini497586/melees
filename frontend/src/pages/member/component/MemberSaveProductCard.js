import React from 'react'
import '../../../style/marketMainPage.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import productImg from '../../../images/005.jpg'

function MemberSaveProdcutCard(props) {
  const { productlist } = props
  let category = { 1: '食材', 2: '鍋具', 3: '調味料' }
  return (
    <>
      {productlist.map((v, i) => {
        return (
          <div className="product-card col-6">
            <div className="product-img">
              <img src={productImg} alt="好想吃威靈頓牛排" />
              <FontAwesomeIcon icon="bookmark" className="bookmark" />
            </div>
            <p className="font-700S product-category">{category[v.category]}</p>
            <h6 className="product-name">{v.name}</h6>
            <p className="product-price">
              <FontAwesomeIcon icon="dollar-sign" />
              {v.price}
            </p>
            <button className="btn font-700M product-add-to-cart-btn">
              <FontAwesomeIcon icon="cart-plus" className="cart-plus" />
              加入購物車
            </button>
          </div>
        )
      })}
    </>
  )
}

export default MemberSaveProdcutCard
