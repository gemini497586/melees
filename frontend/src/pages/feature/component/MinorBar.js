import { Link } from 'react-router-dom'
import '../../../style/minorBar.css'
import React from 'react'

function MinorBar() {
  const array = [
    { url: '/feature/', title: '健康長肉肉' },
    { url: '/feature/', title: '健康不吃肉' },
    { url: '/feature/', title: '家常好手藝' },
    { url: '/feature/week', title: '上班不煩惱' },
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
