import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../style/cardPrivateRecipe.css'
import food from '../../../images/default_food2.jpg'
import avatar from '../../../images/default_avatar1.jpg'
import Axios from 'axios'

function PrivateRecipeCard(props) {
  const [itemInfo, setItemInfo] = useState([])
  const [starRate, setstarRate] = useState([])

  useEffect(() => {
    Axios.get('http://localhost:3001/api/private').then((res) => {
      setItemInfo(res.data.result)
      setstarRate(res.data.result2)
    })
  }, [])
  return (
    <>
      <div className="container">
        <div className="row">
          {itemInfo.map((value, index) => {
            return (
              <div className="col-12 col-md-3">
                <div className="cardPrivateRecipe">
                  <Link to={'/private/detail/' + value.id}>
                    <figure className="cardPrivateRecipe-img">
                      <img src={food} className="w-100" alt="" />
                    </figure>
                    <span className="cardPrivateRecipe-bookmark">
                      <FontAwesomeIcon icon="bookmark" />
                    </span>
                    <figure className="cardPrivateRecipe-avatar">
                      <img src={avatar} className="h-100" alt="" />
                    </figure>
                    <div className="cardPrivateRecipe-box">
                      <span className="font-700S cardPrivateRecipe-type">
                        私藏食譜
                      </span>
                    </div>
                    <div className="d-flex cardPrivateRecipe-like">
                      <FontAwesomeIcon icon="heart" />
                    </div>
                    <h6 className="font-700S cardPrivateRecipe-name">
                      {value.name}
                    </h6>
                    <div className="cardPrivateRecipe-star">
                      <FontAwesomeIcon icon="star" />
                      <FontAwesomeIcon icon="star" />
                      <FontAwesomeIcon icon="star" />
                      <FontAwesomeIcon icon="star" />
                      <FontAwesomeIcon icon="star-half-alt" />

                      <span className="font-400S cardPrivateRecipe-star-num">
                        {value.star_rate}
                      </span>
                    </div>
                    <div className="cardPrivateRecipe-stat">
                      <FontAwesomeIcon
                        icon="heart"
                        className="cardPrivateRecipe-stat-heart"
                      />
                      <span>{value.like_qty}</span>
                      <div></div>
                      <FontAwesomeIcon
                        icon="eye"
                        className="cardPrivateRecipe-stat-eye"
                      />
                      <span>{value.view_qty}</span>
                    </div>
                  </Link>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PrivateRecipeCard
