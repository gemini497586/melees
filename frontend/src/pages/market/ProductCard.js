import React, { useState, useEffect, useContext } from 'react'
import '../../style/productCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import { Link } from 'react-router-dom'
import { API_URL } from '../../utils/config'
import axios from 'axios'
import useCart from '../../utils/useCart'

function ProductCard(props) {
  const [product, setProduct] = useState([])
  const { carts, addCart, setProductsAll, selectIndex } = useCart()

  useEffect(() => {
    // 商品分類跟排序
    axios
      .get(`${API_URL}/market/home/${props.category}/${selectIndex}`)
      .then((response) => {
        setProduct(response.data)
      })
  }, [props.category])

  useEffect(() => {
    // 商品分類跟排序
    axios
      .get(`${API_URL}/market/home/${props.category}/${selectIndex}`)
      .then((response) => {
        setProduct(response.data)
      })
  }, [selectIndex])

  useEffect(() => {
    // 取得所有商品資料用
    axios.get(`${API_URL}/market/home/undefined`).then((response) => {
      setProductsAll(response.data)
    })
  }, [])

  // 查表法 --> O(1)
  let category = { 1: '食材', 2: '鍋具', 3: '調味料' }

  const handleProductCard = product.map((e) => {
    return (
      <div className="product-card col-6" key={e.id}>
        <Link to={`/market/product/${e.id}`}>
          <div className="product-img">
            <img src={`${API_URL}/market/${e.image}`} alt={`商品${e.id}圖片`} />
            {/* <FontAwesomeIcon icon="bookmark" className="bookmark" /> */}
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
          onClick={() => {
            addCart({
              id: e.id,
              name: e.name,
              amount: 1,
              price: e.price,
              category: category[e.category],
              specs: e.specs,
              img: e.image,
            })
          }}
        >
          <FontAwesomeIcon icon="cart-plus" className="cart-plus" />
          加入購物車
        </button>
      </div>
    )
  })

  return <div className="row">{handleProductCard}</div>
}

export default ProductCard
