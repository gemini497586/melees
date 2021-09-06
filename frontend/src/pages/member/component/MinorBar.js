import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import '../../../style/minorBar.css'
import React from 'react'

function MinorBar() {
  const array = [
    { url: '/member/editinfo', title: '個人資料' },
    { url: '/member/orderlist', title: '訂單查詢' },
    { url: '/member/savebox', title: '專屬自己便當' },
    { url: '/member', title: '我的食譜' },
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
