import { Link, useLocation, useHistory } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import meleesLogo from '../images/meleesLogo.svg'
import React, { useContext, useEffect, useState } from 'react'
import '../style/header.css'
import './FontawsomeIcons'
import HeaderCart from './HeaderCart'
import useCart from '../utils/useCart'
import axios from 'axios'
import { API_URL } from '../utils/config'
import { HandleCart } from '../utils/HandleCart'
import Swal from 'sweetalert2'

function Header(props) {
  const { login, setLogin } = useContext(HandleCart)
  // 顯示header購物車
  const [hidden, setHidden] = useState(false)
  const [word, setWord] = useState('')

  const [isDropDown, setIsDropDown] = useState(false)
  const [recipe, setRecipe] = useState('找食譜')
  const [goods, setGoods] = useState('找商品')

  const [searchData, setSearchData] = useState([])
  const [searchList, setSearchList] = useState(false)
  const { carts, countProduct, setCountProduct } = useCart()
  const [counting, setCounting] = useState(1)

  const location = useLocation()
  const history = useHistory()
  // useLocation

  // const color123 = { color: 'var(--color-primary-A)' }
  // const [wordHover, setWordHover] = useState()

  useEffect(() => {
    // demount + deUpdate
    // 跟著location
    let now = location.pathname
    let header = document.getElementById('header')
    let toBox = document.getElementById('toBox')
    let toFeature = document.getElementById('toFeature')
    let toPrivate = document.getElementById('toPrivate')
    let toMarket = document.getElementById('toMarket')
    let toMember = document.getElementById('toMember')
    // switch、array -> number
    const removeActive = () => {
      for (let i = 0; i < header.childElementCount; i++) {
        header.children[i].classList.remove('header-active', 'font-700M')
      }
    }

    if (now.includes('member')) {
      removeActive()
      toMember.classList.add('header-active', 'font-700M')
    } else if (now.includes('market')) {
      removeActive()
      toMarket.classList.add('header-active', 'font-700M')
    } else if (now.includes('private')) {
      removeActive()
      toPrivate.classList.add('header-active', 'font-700M')
    } else if (now.includes('feature')) {
      removeActive()
      toFeature.classList.add('header-active', 'font-700M')
    } else if (now.includes('box')) {
      removeActive()
      toBox.classList.add('header-active', 'font-700M')
    } else {
      removeActive()
    }
  }, [location])

  // 抓到大頭貼
  const [avatar, setAvatar] = useState('')
  useEffect(() => {
    axios
      .post(`${API_URL}/market/avatar`, null, { withCredentials: true })
      .then((result) => {
        let loginAvatar = result.data[0].picture.includes('http')
          ? result.data[0].picture
          : `${API_URL}/member/${result.data[0].picture}`
        setAvatar(loginAvatar)
      })
  }, [login])

  const handleLogout = async () => {
    try {
      let response = await axios.post(`${API_URL}/auth/logout`, null, {
        withCredentials: true,
      })
      // console.log(response)
      if (response.status === 202) {
        // setLogin(false)
        // setAvatar('')
        Swal.fire({
          icon: 'success',
          title: '登出成功!',
          text: '繼續瀏覽 MELEEs! ( 1.5秒後...自動關閉視窗)',
          confirmButtonText: '確認',
          confirmButtonColor: '#fe9900',
          timer: 1500,
        }).then(() => {
          setLogin(false)
          setAvatar('')
        })
      }
    } catch (err) {
      console.error(err.response)
    }
  }

  useEffect(() => {
    if (carts.length > 0) {
      setCountProduct(true)
      setCounting(carts.length)
    } else {
      setCountProduct(false)
    }
  }, [carts])

  useEffect(() => {
    axios.get(`${API_URL}/private/search`).then((res) => {
      setSearchData(res.data.filterArr)
    })
  }, [])

  const handleSubmit = () => {
    setSearchList(false)
    if (word !== '') {
      if (recipe === '找商品') {
        history.push(`/search/market/${word}`)
      }
      if (recipe === '找食譜') {
        history.replace(`/search/recipe/${word}`)
      }
    } else {
      Swal.fire({
        icon: 'warning',
        title: '請輸入搜尋文字',
        confirmButtonText: '確認',
        confirmButtonColor: '#fe9900',
      })
    }
  }

  const handleSearch = () => {
    const list = []
    let filterData = searchData.filter((value) => {
      return value.indexOf(word) > -1
    })
    filterData.map((value, index) => {
      list.push(
        <>
          <div
            className="header-search-recommend-menu-word"
            key={index}
            onClick={(e) => {
              setWord(value)
              setSearchList(false)
            }}
          >
            {value}
          </div>
          <span>
            <hr className="my-1" />
          </span>
        </>
      )
    })
    return list
  }

  return (
    <div className="header-bar">
      <div className="logo">
        <Link to="/">
          <img src={meleesLogo} alt="logo" />
        </Link>
      </div>
      <ul className="header-bar-main-ul" id="header">
        <li className="font-400M" id="toBox">
          <Link to="/box">客製化便當</Link>
        </li>
        <li className="font-400M" id="toFeature">
          <Link to="/feature/index/1">精選食譜</Link>
        </li>
        <li className="font-400M" id="toPrivate">
          <Link to="/private">私藏食譜</Link>
        </li>
        <li className="font-400M" id="toMarket">
          <Link to="/market/home">購物商城</Link>
        </li>
        <li className="font-400M" id="toMember">
          <Link to="/member">會員專區</Link>
        </li>
      </ul>
      <div className="box"></div>
      <ul className="header-bar-main-ul">
        <li>
          <div className="header-search-input-group">
            <div
              className="font-400SL btn header-search-dropdown-btn"
              onClick={(e) => {
                setIsDropDown(!isDropDown)
              }}
            >
              <div className="dropdown-toggle">{recipe}</div>
              {isDropDown ? (
                <div
                  className="header-dropdown-item"
                  onClick={(e) => {
                    setIsDropDown(!isDropDown)
                    setRecipe(goods)
                    setGoods(recipe)
                  }}
                >
                  {goods}
                </div>
              ) : null}
            </div>
            <input
              type="text"
              className="font-400SL header-search-input"
              placeholder="請輸入搜尋關鍵字"
              value={word}
              onChange={(e) => {
                setWord(e.target.value)
                e.target.value === ''
                  ? setSearchList(false)
                  : setSearchList(true)
              }}
              onKeyPress={(e) => {
                if (e.key === 'Enter') {
                  handleSubmit()
                }
              }}
            />
            <button className="header-search-btn btn" onClick={handleSubmit}>
              <FontAwesomeIcon icon="search" />
            </button>
          </div>
          {searchList ? (
            <div className="d-flex flex-row-reverse">
              <div className="header-search-recommend-menu">
                {handleSearch()}
              </div>
            </div>
          ) : (
            ''
          )}
        </li>
        <li className="cart-btn">
          <div
            className="gray-circle"
            id="cartBtn"
            onClick={() => {
              setHidden(!hidden)
            }}
          >
            {countProduct ? (
              <div className="cartNum font-700SS">{counting}</div>
            ) : (
              <></>
            )}
            <FontAwesomeIcon
              icon="shopping-cart"
              size="lg"
              className="shopping-cart"
            />
          </div>
        </li>
        {login ? (
          <li className="user-btn ">
            <div className="user-avatar" data-bs-toggle="dropdown">
              <img alt="大頭貼" className="cover-fit" src={avatar} />
              <FontAwesomeIcon icon="user-circle" className="user" />
            </div>
            <ul className="dropdown-menu user-dropdown">
              <li className="font-400SL">
                <Link to="/member/editinfo" className="dropdown-item">
                  大頭貼
                </Link>
              </li>
              <hr />
              <li className="font-400SL">
                <Link to="/member/editinfo" className="dropdown-item">
                  個人資料
                </Link>
              </li>
              <li className="font-400SL">
                <Link to="/member/savebox" className="dropdown-item">
                  我的客製便當
                </Link>
              </li>
              <li className="font-400SL">
                <Link to="/member" className="dropdown-item">
                  我的私藏食譜
                </Link>
              </li>
              <li className="font-400SL">
                <Link to="/member/saverecipe" className="dropdown-item">
                  食譜收藏
                </Link>
              </li>
              <li className="font-400SL">
                <Link to="/member/saveproduct" className="dropdown-item">
                  商品收藏
                </Link>
              </li>
              <li className="font-400SL">
                <Link to="/member/orderlist" className="dropdown-item">
                  訂單查詢
                </Link>
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
        <div className="header-cart position-absolute">
          <HeaderCart />
        </div>
      )}
    </div>
  )
}

export default Header
