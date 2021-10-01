import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../style/cardPrivateRecipe.css'
import { API_URL } from '../../../utils/config'

function PrivateRecipeCard(props) {
  const { itemInfo, likeList, viewList, saveState, likeState, memberInfo } =
    props

  // 星星評分數
  const starNum = (index) => {
    const row = []
    let solid = Math.floor(itemInfo[index].star_rate)
    let empty = 5 - Math.ceil(itemInfo[index].star_rate)
    let half = 5 - solid - empty
    for (let i = 0; i < solid; i++) {
      row.push(<FontAwesomeIcon icon="star" />)
    }
    for (let j = 0; j < half; j++) {
      row.push(<FontAwesomeIcon icon="star-half-alt" />)
    }
    for (let k = 0; k < empty; k++) {
      row.push(<FontAwesomeIcon icon={['far', 'star']} />)
    }
    return row
  }

  const saveToggled = (value, index) => {
    const save = []
    for (let i = 0; i < saveState.length; i++) {
      if (value.id === saveState[i].private_id) {
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
      }
    }
    return save
  }
  const likeToggled = (value, index) => {
    const like = []

    for (let i = 0; i < likeState.length; i++) {
      if (value.id === likeState[i].private_id) {
        like.push(
          <div className="d-flex cardPrivateRecipe-like-active">
            <FontAwesomeIcon icon="heart" size="lg" />
          </div>
        )
        break
      } else {
        like.push(
          <div className="d-flex cardPrivateRecipe-like">
            <FontAwesomeIcon icon="heart" size="lg" />
          </div>
        )
      }
    }
    return like
  }
  return (
    <>
      <div className="container">
        <pre>食譜資訊 {JSON.stringify(saveState, null, 2)}</pre>

        <div className="row">
          {itemInfo.map((value, index) => {
            return (
              <div className="col-12 col-md-3">
                <div className="cardPrivateRecipe">
                  <Link to={'/private/detail/' + value.id}>
                    <figure className="cardPrivateRecipe-img">
                      <img
                        src={`${API_URL}/private/${value.picture}`}
                        className="b-cover-fit"
                        alt=""
                      />
                    </figure>
                    {saveToggled(value, index)}

                    <figure className="cardPrivateRecipe-avatar">
                      <img
                        src={`${API_URL}/member/${value.member_picture}`}
                        className="b-cover-fit"
                        alt=""
                      />
                    </figure>
                    <div className="cardPrivateRecipe-box">
                      <span className="font-700S cardPrivateRecipe-type">
                        私藏食譜
                      </span>
                    </div>
                    {likeToggled(value, index)}

                    <h6 className="font-700S cardPrivateRecipe-name">
                      {value.name}
                    </h6>
                    <div className="cardPrivateRecipe-star">
                      {starNum(index)}
                      <span className="font-400S cardPrivateRecipe-star-num">
                        {value.star_rate}
                      </span>
                    </div>
                    <div className="cardPrivateRecipe-stat">
                      <FontAwesomeIcon
                        icon="heart"
                        className="cardPrivateRecipe-stat-heart"
                      />
                      {value.likeCount}
                      <FontAwesomeIcon
                        icon="eye"
                        className="cardPrivateRecipe-stat-eye"
                      />
                      {value.viewCount}
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
