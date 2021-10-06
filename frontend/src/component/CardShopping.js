import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/cardShopping.css'
import { API_URL, P_CATEGORY } from '../utils/config'
import Axios from 'axios'

function CardShopping() {
  const [marketList, setMarketList] = useState([])
  const [saveState, setSaveState] = useState([])

  useEffect(() => {
    const getData = async () => {
      try {
        let result = await Axios.get(`${API_URL}/box/product`, {
          withCredentials: true,
        })
        setMarketList(result.data.product)
        setSaveState(result.data.member_save)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  // 檢查該商品是否有被會員收藏
  const saveToggled = (value) => {
    const save = []
    save.push(
      <span className="cardPrivateRecipe-bookmark" key={value}>
        <FontAwesomeIcon icon="bookmark" size="2x" />
      </span>
    )
    if (saveState.includes(value)) {
      save.pop()
      save.push(
        <div className="d-flex cardPrivateRecipe-bookmark-active" key={value}>
          <FontAwesomeIcon icon="bookmark" size="2x" />
        </div>
      )
    }
    return save
  }

  return (
    <div className="container">
      <div className="row">
        <div className="cardShopping-others">
          <div className="d-flex justify-content-between">
            <h5>推薦商品</h5>
            <div className="cardShopping-others-more">
              <FontAwesomeIcon
                icon="chevron-right"
                size="lg"
                className="more-arrow"
              />
              <Link to="/market/home">
                <span className="font-700M">看更多</span>
              </Link>
            </div>
          </div>
          <div className="cardShopping-others-hr w-100"></div>
        </div>
        {marketList.map((value) => {
          return (
            <div className="col-12 col-md-3" key={value.id}>
              <div className="cardShopping">
                <Link to={`/market/product/${value.id}`}>
                  <figure className="cardShopping-img">
                    <img
                      src={`${API_URL}/market/${value.image}`}
                      className="b-cover-fit"
                      alt={value.name}
                    />
                  </figure>
                  {saveToggled(value.id)}
                  <span className="cardShopping-bookmark-stat-box">
                    <div className="cardShopping-bookmark-stat-icon">
                      <FontAwesomeIcon icon="bookmark" size="lg" />
                    </div>
                    <span className="cardShopping-book-mark-num font-400S">
                      {value.save_qty}
                    </span>
                  </span>
                  <span className="font-700S cardShopping-type">
                    {P_CATEGORY[value.category]}
                  </span>
                  <h6 className="cardShopping-name">{value.name}</h6>
                  <span className="font-700S cardShopping-price">
                    ${value.price}
                  </span>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardShopping
