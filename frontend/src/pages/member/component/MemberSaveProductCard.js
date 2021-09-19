import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { API_URL } from '../../../utils/config'

function MemberSaveProdcutCard(props) {
  const { saveList, productList } = props

  let category = { 1: '食材', 2: '鍋具', 3: '調味料' }
  return (
    <>
      {saveList.map((value, index) => {
        return (
          <div className="product-card col-6" key={index}>
            <Link to={`/market/product/${value.product_id}`}>
              <div className="product-img">
                <img
                  src={`${API_URL}/market/${
                    productList && productList[value.product_id].image
                  }`}
                  alt={productList && productList[value.product_id].name}
                  className="b-cover-fit"
                />
                <FontAwesomeIcon icon="bookmark" className="bookmark" />
              </div>
              <p className="font-700S product-category">
                {productList &&
                  category[productList[value.product_id].category]}
              </p>
              <h6 className="product-name">
                {productList && productList[value.product_id].name}
              </h6>
              <p className="product-price">
                <FontAwesomeIcon icon="dollar-sign" />
                {productList && productList[value.product_id].price}
              </p>
            </Link>
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
