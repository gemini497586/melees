import React, { useState, useEffect } from 'react'
import '../../style/productCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import productImg from '../../images/005.jpg'
import { Link } from 'react-router-dom'
import { API_URL } from '../../utils/config'
import axios from 'axios'

function ProductCard() {
  const [product, setProduct] = useState([])
  const [cart, setCart] = useState([])

  useEffect(() => {
    // console.log(API_URL)
    axios.get(`${API_URL}/market`).then((response) => {
      setProduct(response.data)
    })
  }, [])

  // 查表法 --> O(1)
  let category = { 1: '食材', 2: '鍋具', 3: '調味料' }

  // 新增至購物車(onClick)
  const handleCart = (e) => {
    setCart([...cart, e.target.id])
    console.log(cart)
  }

  const handleProductCard = product.map((e) => {
    return (
      <div className="product-card col-6" key={e.id}>
        <Link to={{ pathname: `/market/product/${e.id}` }}>
          <div className="product-img">
            <img src={productImg} alt="好想吃威靈頓牛排" />
            <FontAwesomeIcon icon="bookmark" className="bookmark" />
          </div>
          <p className="font-700S product-category">{category[e.category]}</p>
          <h6 className="product-name">{e.name}</h6>
          <p className="product-price">
            <FontAwesomeIcon icon="dollar-sign" />
            {e.price}
          </p>
        </Link>
        <button
          className="btn font-700M product-add-to-cart-btn"
          id={e.id}
          onClick={(e) => {
            handleCart(e)
          }}
        >
          <FontAwesomeIcon icon="cart-plus" className="cart-plus" />
          加入購物車
        </button>
        {cart}
      </div>
    )
  })

  return <div className="row">{handleProductCard}</div>
}

export default ProductCard
