import React from 'react'
import '../style/minorBar.css'

function MinorBar() {
  const array = ['全部', '食材', '鍋具', '調味料']
  return (
    <>
      <ul className="minor-bar">
        {/* 原本的寫法 */}
        {/* <li>
          <a href="/">全部</a>
        </li>
        <li>
          <a href="/">食材</a>
        </li>
        <li>
          <a href="/">鍋具</a>
        </li>
        <li>
          <a href="/">調味料</a>
        </li> */}

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
