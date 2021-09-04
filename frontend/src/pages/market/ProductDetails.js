import React from 'react'
import '../../style/productDetails.css'
import img from '../../images/005.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'

import productData from '../../data/Products.json'
import { useParams } from 'react-router'

function ProductDetails(props) {
  const { id } = useParams()
  return (
    <div className="container">
      <div className="product-detail">
        {id}
        <img src={img} alt="商品" />
        <p className="product-detail-category">
          {productData.products[id - 1].category}
        </p>
        <h2 className="product-detail-name">
          {productData.products[id - 1].name}
        </h2>
        <h2 className="product-detail-price">
          <FontAwesomeIcon icon="dollar-sign" />
          {productData.products[id - 1].price}
        </h2>
        <button className="font-700M product-detail-add-to-cart-btn btn">
          <FontAwesomeIcon icon="cart-plus" className="cart-plus" />
          加入購物車
        </button>
        <div className="w507"></div>
        <p className="font-400L product-detail-specs">
          {productData.products[id - 1].specs}
        </p>
        <div className="info-shadow"></div>
        <h3 className="product-detail-info">商品介紹</h3>
        <p className="font-400L product-detail-information">
          {productData.products[id - 1].info}
        </p>
      </div>
    </div>
  )
}

export default ProductDetails
