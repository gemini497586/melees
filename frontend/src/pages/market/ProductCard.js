import React, { useEffect, useState } from 'react'
import '../../style/productCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import { Link } from 'react-router-dom'
import { API_URL, P_CATEGORY } from '../../utils/config'
import axios from 'axios'
import useCart from '../../utils/useCart'

function ProductCard(props) {
  const {
    category,
    product,
    setProduct,
    currentPage,
    setCurrentPage,
    perPage,
  } = props

  const { addCart, setProductsAll, selectIndex } = useCart()
  const [saving, setSaving] = useState([])

  useEffect(() => {
    // 商品分類跟排序
    axios
      .post(`${API_URL}/market/home/${category}/${selectIndex}`)
      .then((response) => {
        setProduct(response.data)
        // console.log('拿到資料', response.data)
        setCurrentPage(1)
      })
  }, [selectIndex, category])

  useEffect(() => {
    // 拿收藏
    axios
      .post(`${API_URL}/market/get/save`, null, {
        withCredentials: true,
      })
      .then((response) => {
        const arr = []
        for (let i = 0; i < response.data.length; i++) {
          arr.push(response.data[i].product_id)
        }
        setSaving(arr)
      })
  }, [])

  useEffect(() => {
    // 取得所有商品資料用
    axios.get(`${API_URL}/market/home`).then((response) => {
      setProductsAll(response.data)
    })
  }, [])

  // const [currentPage, setCurrentPage] = useState(1)

  const lastNumber = currentPage * perPage
  const firstNumber = lastNumber - perPage
  const currentNumber = product.slice(firstNumber, lastNumber)

  const handleProductCard = currentNumber.map((e) => {
    return (
      <div className="product-card col-6" key={e.id}>
        <Link to={`/market/product/${e.id}`}>
          <div className="product-img">
            <img
              src={`${API_URL}/market/${e.image}`}
              alt={`商品${e.id}圖片`}
              className="cover-fit"
            />
            {saving.includes(e.id) ? (
              <FontAwesomeIcon icon="bookmark" className="bookmark" size="2x" />
            ) : (
              <FontAwesomeIcon
                icon="bookmark"
                className="unBookmark"
                size="2x"
              />
            )}
          </div>
          <p className="font-700S product-category">{P_CATEGORY[e.category]}</p>
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
              category: P_CATEGORY[e.category],
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
