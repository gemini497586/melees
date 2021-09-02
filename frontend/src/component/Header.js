import React from 'react'
import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FontawsomeIcons'
import meleesLogo from '../images/meleesLogo.svg'

function Header() {
  return (
    <>
      <div className="header-bar">
        <div className="logo">
          <img src={meleesLogo} alt="logo" />
        </div>
        <ul className="header-bar-main-ul">
          <li className="header-active  font-700SL">
            <a href="/">客製化便當</a>
          </li>
          <li className="font-400M">
            <a href="/">精選食譜</a>
          </li>
          <li className="font-400M">
            <a href="/">私藏食譜</a>
          </li>
          <li className="font-400M">
            <a href="/">購物商城</a>
          </li>
          <li className="font-400M">
            <a href="/">會員專區</a>
          </li>
          <div className="box"></div>
          <li>
            <div className="input-group">
              <button
                className="font-400SL btn btn-outline-secondary dropdown-toggle"
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
                className="font-400SL form-control input-sm search-input"
                placeholder="請輸入搜尋關鍵字"
              />
              <button className="btn btn-outline-secondary">
                <FontAwesomeIcon icon="search" />
              </button>
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
      <div className="h104"></div>
    </>
  )
}

export default Header
