import React, { useEffect, useState } from 'react'
import '../../style/productDetails.css'
import img from '../../images/005.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'

import productData from '../../data/Products.json'
import { useParams } from 'react-router'
import { API_URL } from '../../utils/config'
import axios from 'axios'

function ProductDetails(props) {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  useEffect(() => {
    axios.get(`${API_URL}/market`).then((response) => {
      setProduct(response.data[id - 1])
    })
  }, [])

  let category = { 1: '食材', 2: '鍋具', 3: '調味料' }

  const handleProductDetail = () => {
    // console.log(product)
    return (
      <div className="product-detail">
        <img src={img} alt="商品" />
        <p className="product-detail-category">{category[product.category]}</p>
        <h2 className="product-detail-name">{product.name}</h2>
        <h2 className="product-detail-price">
          <FontAwesomeIcon icon="dollar-sign" />
          {product.price}
        </h2>
        <button className="font-700M product-detail-add-to-cart-btn btn">
          <FontAwesomeIcon icon="cart-plus" className="cart-plus" />
          加入購物車
        </button>
        <div className="w507"></div>
        <p className="font-400L product-detail-specs">{product.specs}</p>
        <div className="info-shadow"></div>
        <h3 className="product-detail-info">商品介紹</h3>
        <p className="font-400L product-detail-information">{product.info}</p>
      </div>
    )
  }
  return (
    <div className="page-group">
      <div className="container">{handleProductDetail(product)}</div>
    </div>
  )
}

export default ProductDetails
