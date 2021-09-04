import React from 'react'
import { withRouter, Link } from 'react-router-dom'

import '../../../style/minorBar.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

function MinorBar() {
  const array = [

    { url: '/member/edit', title: '個人資料' },
    { url: '/member/orderlist', title: '訂單查詢' },
    { url: '/member/savebox', title: '專屬自己便當' },
    { url: '/member/myrecipe', title: '我的食譜' },
    { url: '/member/saverecipe', title: '食譜收藏' },
    { url: '/member/saveproduct', title: '商品收藏' },
    { url: '/member/recipecomment', title: '食譜評論' },
    { url: '/member/coupon', title: '專屬優惠' },
  ]
  return (
    <>
      <ul className="minor-bar">
        {/* map寫法 */}
        {array.map((v) => {
          return (
            <li>
              <Link to={v.url}>{v.title}</Link>
            </li>
          )
        })}
      </ul>
      <div className="sub-line"></div>
    </>
  )
}

export default MinorBar
