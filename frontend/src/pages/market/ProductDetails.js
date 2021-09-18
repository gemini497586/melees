import React, { useEffect, useState } from 'react'
import '../../style/productDetails.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import { useParams } from 'react-router'
import { API_URL } from '../../utils/config'
import axios from 'axios'
import useCart from '../../utils/useCart'

function ProductDetails(props) {
  const { id } = useParams()
  const [product, setProduct] = useState([])
  const [save, setSave] = useState(false)
  const { addCart } = useCart()

  useEffect(() => {
    axios.get(`${API_URL}/market/product/${id}`).then((response) => {
      response.data[0].specs = response.data[0].specs.split('\n').join(' | ')
      setProduct(response.data[0])
    })
  }, [id])

  let category = { 1: '食材', 2: '鍋具', 3: '調味料' }

  const handleSave = () => {
    return (
      <>
        {save ? (
          <button className="btn product-detail-save-active">
            加入收藏 <FontAwesomeIcon icon={['far', 'bookmark']} />
          </button>
        ) : (
          <button className="btn product-detail-unSave">
            取消收藏 <FontAwesomeIcon icon={['fas', 'bookmark']} />
          </button>
        )}
      </>
    )
  }

  const handleProductDetail = () => {
    return (
      <div className="product-detail">
        <img
          src={`${API_URL}/market/${product.image}`}
          alt={`商品${product.id}圖片`}
        />
        <div
          className="product-detail-save"
          onClick={() => {
            setSave(!save)
          }}
        >
          {handleSave()}
        </div>
        <p className="font-400S product-detail-specs">{product.specs}</p>
        <p className="product-detail-category">{category[product.category]}</p>
        <h2 className="product-detail-name">{product.name}</h2>
        <h2 className="product-detail-price">
          <FontAwesomeIcon icon="dollar-sign" />
          {product.price}
        </h2>
        <button
          className="font-700M product-detail-add-to-cart-btn btn"
          id={id}
          onClick={() => {
            addCart({
              id: product.id,
              name: product.name,
              amount: 1,
              price: product.price,
              category: category[product.category],
              specs: product.specs,
              img: product.image,
            })
          }}
        >
          <FontAwesomeIcon icon="cart-plus" className="cart-plus" />
          加入購物車
        </button>
        <div className="w507"></div>
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
