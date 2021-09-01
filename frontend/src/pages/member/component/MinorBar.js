import React from 'react'
import '../../../style/minorBar.css'

function MinorBar() {
  const array = [
    '個人資料',
    '訂單查詢',
    '專屬自己便當',
    '我的食譜',
    '食譜收藏',
    '商品收藏',
    '食譜評論',
    '專屬優惠',
  ]
  return (
    <>
      <ul className="minor-bar">
        {/* map寫法 */}
        {array.map((v) => {
          return (
            <li>
              <a href="/">{v}</a>
            </li>
          )
        })}
      </ul>
      <div className="sub-line"></div>
    </>
  )
}

export default MinorBar
