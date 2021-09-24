import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../../style/minorBar.css'
import ProductData from '../../../data/Products.json'
import axios from 'axios'

function MinorBar(props) {
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
              <Link to={`/market/home/${v.category}`}>{v.text}</Link>
            </li>
          )
        })}
      </ul>
      <div className="sub-line"></div>
    </>
  )
}

export default MinorBar
