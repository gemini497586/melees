import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import meleesLogo from '../images/meleesLogo.svg'
import React, { useEffect } from 'react'
import '../style/header.css'
import './FontawsomeIcons'

function Header() {
  // 讓header-active隨著點擊的頁面切換
  useEffect(() => {
    let header = document.getElementById('header')
    header.addEventListener('click', (e) => {
      if (e.target.children.length === 0) {
        for (let i = 0; i < header.children.length; i++) {
          header.children[i].classList.remove('header-active', 'font-700SL')
        }
        e.target.parentElement.classList.add('header-active', 'font-700SL')
      }
    })
  }, [])

  return (
    <>
      <div className="header-bar">
        <div className="logo">
          <Link to="/">
            <img src={meleesLogo} alt="logo" />
          </Link>
        </div>

        <ul className="header-bar-main-ul" id="header">
          <li className="font-700SL header-active" id="headerToBox">
            <Link to="/box">客製化便當</Link>
          </li>

          <li className="font-400M" id="headerToFeature">
            <Link to="/feature">精選食譜</Link>
          </li>
          <li className="font-400M" id="headerToPrivate">
            <Link to="/private">私藏食譜</Link>
          </li>
          <li className="font-400M" id="headerToMarket">
            <Link to="/market">購物商城</Link>
          </li>
          <li className="font-400M" id="headerToMember">
            <Link to="/member">會員專區</Link>
          </li>
        </ul>
        <div className="box"></div>
        <ul className="header-bar-main-ul">
          <li>
            <div className="header-search-input-group">
              <button
                className="font-400SL btn dropdown-toggle header-search-dropdown-btn"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                找食譜
              </button>
              <ul className="dropdown-menu input-dropdown">
                <li className="font-400SL">
                  <a class="dropdown-item" href="#/">
                    找商品
                  </a>
                </li>
                <li className="font-400SL">
                  <a class="dropdown-item" href="#/">
                    找商品
                  </a>
                </li>
              </ul>
              <input
                type="text"
                className="font-400SL header-search-input"
                placeholder="請輸入搜尋關鍵字"
              />
              <div className="header-search-btn">
                <FontAwesomeIcon icon="search" />
              </div>
            </div>
          </li>
          <li className="cart-btn">
            <div className="gray-circle">
              <FontAwesomeIcon
                icon="shopping-cart"
                size="lg"
                className="shopping-cart"
              />
            </div>
          </li>
          <li className="user-btn ">
            <FontAwesomeIcon
              icon="user-circle"
              className="user"
              data-bs-toggle="dropdown"
            />
            <ul className="dropdown-menu user-dropdown">
              <li className="font-400SL">
                <a className="dropdown-item" href="#/">
                  大頭貼
                </a>
              </li>
              <hr />
              <li className="font-400SL">
                <a className="dropdown-item" href="#/">
                  個人資料
                </a>
              </li>
              <li className="font-400SL">
                <a className="dropdown-item" href="#/">
                  我的客製便當
                </a>
              </li>
              <li className="font-400SL">
                <a className="dropdown-item" href="#/">
                  我的私藏食譜
                </a>
              </li>
              <li className="font-400SL">
                <a className="dropdown-item" href="#/">
                  食譜收藏
                </a>
              </li>
              <li className="font-400SL">
                <a className="dropdown-item" href="#/">
                  商品收藏
                </a>
              </li>
              <li className="font-400SL">
                <a className="dropdown-item" href="#/">
                  訂單查詢
                </a>
              </li>
              <li className="font-400SL">
                <a className="dropdown-item" href="#/">
                  登出
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </>
  )
}

export default Header
