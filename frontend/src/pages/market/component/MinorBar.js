import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../../style/minorBar.css'

function MinorBar() {
  const [product, setProduct] = useState([
    {
      category: '',
      text: '全部',
    },
    {
      category: 1,
      text: '食材',
    },
    {
      category: 2,
      text: '鍋具',
    },
    {
      category: 3,
      text: '調味料',
    },
  ])

  return (
    <>
      <ul className="minor-bar">
        {product.map((v, input) => {
          return (
            <li key={input}>
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
