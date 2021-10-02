import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../style/cardrecipe.css'
import instagram from '../images/instagramLogo.jpg'
import { API_URL, FEATURE_TYPE } from '../utils/config'
import Axios from 'axios'

function CardRecipe() {
  const [recipeList, setRecipeList] = useState([])
  const [saveState, setSaveState] = useState([])

  // 從資料庫抓資料
  useEffect(() => {
    const getData = async () => {
      try {
        let result = await Axios.get(`${API_URL}/box/recipe`, {
          withCredentials: true,
        })
        setRecipeList(result.data.feature)
        setSaveState(result.data.member_save)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  // 判斷出現的食譜，是否有被登入的會員收藏
  const saveToggled = (value) => {
    const save = []
    for (let i = 0; i < saveState.length; i++) {
      if (value === saveState[i].feature_id) {
        save.push(
          <span className="cardPrivateRecipe-bookmark-active">
            <FontAwesomeIcon icon="bookmark" size="2x" />
          </span>
        )
        break
      } else {
        save.push(
          <span className="cardPrivateRecipe-bookmark">
            <FontAwesomeIcon icon="bookmark" size="2x" />
          </span>
        )
        break
      }
    }
    return save
  }

  return (
    <div className="container">
      <div className="row">
        <div className="cardRecipe-others">
          <div className="d-flex justify-content-between">
            <h5>查看其他食譜</h5>
            <div className="cardRecipe-others-more">
              <FontAwesomeIcon
                icon="chevron-right"
                size="lg"
                className="more-arrow"
              />
              <Link to="feature/index/1">
                <span className="font-700M">看更多</span>
              </Link>
            </div>
          </div>
          <div className="cardRecipe-others-hr w-100"></div>
        </div>
        {recipeList.map((value) => {
          return (
            <div className="col-12 col-md-3" key={value.id}>
              <div className="cardRecipe">
                <Link to={`/feature/step/${value.id}`}>
                  <figure className="cardRecipe-img">
                    <img
                      src={`${API_URL}/feature/featurefood/${value.featureimg}`}
                      className="b-cover-fit"
                      alt={value.name}
                    />
                  </figure>
                  {saveToggled(value.id)}
                  <span className="cardRecipe-bookmark-stat-box">
                    <div className="cardRecipe-bookmark-stat-icon">
                      <FontAwesomeIcon icon="bookmark" size="lg" />
                    </div>
                    <span className="cardRecipe-bookmark-num font-400S">
                      {value.save_qty}
                    </span>
                  </span>
                  <span className="font-700S cardRecipe-type">
                    {FEATURE_TYPE[value.type_id]}
                  </span>
                  <h6 className="cardRecipe-name">{value.name}</h6>
                  <div className="f-flex cardRecipe-ig">
                    <img src={instagram} alt="IG" />
                    <span className="font-700S">{value.linkName}</span>
                  </div>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default CardRecipe
