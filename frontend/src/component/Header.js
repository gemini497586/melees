import React from 'react'
import '../style/header.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FontawsomeIcons'
import pic from './meleesLogo.svg'

function Header() {
  return (
    <>
      <div className="header-bar">
        <div className="logo">
          <img src={pic} alt="logo" />
        </div>
        <ul>
          <li class="active">
            <a href="/">客製化便當</a>
          </li>
          <li>
            <a href="/">精選食譜</a>
          </li>
          <li>
            <a href="/">私藏食譜</a>
          </li>
          <li>
            <a href="/">購物商城</a>
          </li>
          <li>
            <a href="/">會員專區</a>
          </li>
          <div class="box"></div>
          <li>
            <div class="input-group">
              <button
                class="btn btn-outline-secondary dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                找食譜
              </button>
              <ul class="dropdown-menu input-dropdown">
                <li>
                  <a class="dropdown-item" href="#/">
                    找商品
                  </a>
                </li>
                <li>
                  <a class="dropdown-item" href="#/">
                    找商品
                  </a>
                </li>
              </ul>
              <input
                type="text"
                class="form-control input-sm search-input"
                placeholder="請輸入搜尋關鍵字"
              />
              <button class="btn btn-outline-secondary">
                <FontAwesomeIcon icon="search" className="" />
              </button>
            </div>
          </li>
          <li className="cart-btn">
            <div class="gray-circle">
              <FontAwesomeIcon
                icon="shopping-cart"
                size="lg"
                className="shopping-cart"
              />
            </div>
          </li>
          <li className="user-btn dropright">
            <FontAwesomeIcon
              icon="user-circle"
              className="user"
              data-bs-toggle="dropdown"
            />
            <ul class="dropdown-menu user-dropdown">
              <li>
                <a class="dropdown-item" href="#/">
                  大頭貼
                </a>
              </li>
              <hr />
              <li>
                <a class="dropdown-item" href="#/">
                  個人資料
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#/">
                  我的客製便當
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#/">
                  我的私藏食譜
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#/">
                  食譜收藏
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#/">
                  商品收藏
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#/">
                  訂單查詢
                </a>
              </li>
              <li>
                <a class="dropdown-item" href="#/">
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
