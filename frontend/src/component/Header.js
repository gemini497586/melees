import {
  BrowserRouter as Router,
  Link,
  useHistory,
  Redirect,
} from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import meleesLogo from '../images/meleesLogo.svg'
import React, { useEffect, useState, useContext } from 'react'
import '../style/header.css'
import './FontawsomeIcons'
import HeaderCart from './HeaderCart'
import { HandleCart } from '../utils/HandleCart'
import axios from 'axios'
import { API_URL } from '../utils/config'

function Header(props) {
  const history = useHistory()
  useEffect(() => {
    return history.listen((location) => {
      let now = location.pathname
      let header = document.getElementById('header')
      let toBox = document.getElementById('toBox')
      let toFeature = document.getElementById('toFeature')
      let toPrivate = document.getElementById('toPrivate')
      let toMarket = document.getElementById('toMarket')
      let toMember = document.getElementById('toMember')
      if (now.includes('member')) {
        toMember.classList.add('header-active', 'font-700SL')
      } else if (now.includes('market')) {
        toMarket.classList.add('header-active', 'font-700SL')
      } else if (now.includes('private')) {
        toPrivate.classList.add('header-active', 'font-700SL')
      } else if (now.includes('feature')) {
        toFeature.classList.add('header-active', 'font-700SL')
      } else if (now.includes('box')) {
        toBox.classList.add('header-active', 'font-700SL')
      } else {
        for (let i = 0; i < header.childElementCount; i++) {
          header.children[i].classList.remove('header-active', 'font-700SL')
        }
      }
    })
  }, [history])

  // 讓header-active隨著點擊的頁面切換
  useEffect(() => {
    let header = document.getElementById('header')
    header.addEventListener('click', (e) => {
      if (e.target.children.length === 0) {
        for (let i = 0; i < header.childElementCount; i++) {
          header.children[i].classList.remove('header-active', 'font-700SL')
        }
        e.target.parentElement.classList.add('header-active', 'font-700SL')
      }
    })
  }, [])

  // 顯示header購物車
  const [hidden, setHidden] = useState(false)
  // 檢查是否登入
  const { login, setLogin } = useContext(HandleCart)

  const handleLogout = async () => {
    try {
      let response = await axios.post(`${API_URL}/auth/logout`, {
        // 設定可以跨源送 cookie
        withCredentials: true,
      })
      // console.log(response)
      if (response.status === 202) {
        alert('會員已登出')
        setLogin(false)
      }
    } catch (err) {
      console.error(err.response)
    }
  }

  return (
    <div className="header-bar">
      <div className="logo">
        <Link to="/">
          <img src={meleesLogo} alt="logo" />
        </Link>
      </div>
      <ul className="header-bar-main-ul" id="header">
        <li className="font-700SL header-active" id="toBox">
          <Link to="/box">客製化便當</Link>
        </li>

        <li className="font-400M" id="toFeature">
          <Link to="/feature">精選食譜</Link>
        </li>
        <li className="font-400M" id="toPrivate">
          <Link to="/private">私藏食譜</Link>
        </li>
        <li className="font-400M" id="toMarket">
          <Link to="/market">購物商城</Link>
        </li>
        <li className="font-400M" id="toMember">
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
          <div
            className="gray-circle"
            id="cartBtn"
            onClick={() => {
              setHidden(!hidden)
            }}
          >
            <FontAwesomeIcon
              icon="shopping-cart"
              size="lg"
              className="shopping-cart"
            />
          </div>
        </li>
        {login ? (
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
                <Link to="/" onClick={handleLogout} className="dropdown-item">
                  登出
                </Link>
              </li>
            </ul>
          </li>
        ) : (
          <>
            <Link to="/register">
              <li className="font-400M header-register">註冊</li>
            </Link>
            <Link to="/login">
              <li className="font-400M header-login">登入</li>
            </Link>
          </>
        )}
      </ul>
      {hidden && (
        <div className="header-cart position-absolute" id="abc">
          <HeaderCart />
        </div>
      )}
    </div>
  )
}

export default Header
