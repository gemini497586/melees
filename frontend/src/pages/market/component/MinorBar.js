import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../../style/minorBar.css'
import ProductData from '../../../data/Products.json'
function MinorBar(props) {
  // console.log(ProductData.productCategory)
  const [product, setProduct] = useState([])
  useEffect(() => {
    setProduct(ProductData.productCategory)
  }, [])
  return (
    <>
      <ul className="minor-bar">
        {product.map((v) => {
          return (
            <li>
              <Link to={`/market/product/category/:${v.category}`}>
                {v.text}
              </Link>
            </li>
          )
        })}
        {/* <li>
          <Link to="/all">全部</Link>
        </li>
        <li>
          <Link to="/market/product-category/:category">食材</Link>
        </li>
        <li>
          <Link to="/market/product-category/:category">鍋具</Link>
        </li>
        <li>
          <Link to="/market/product-category/:category">調味料</Link>
        </li> */}
      </ul>
      <div className="sub-line"></div>
    </>
  )
}

export default MinorBar
