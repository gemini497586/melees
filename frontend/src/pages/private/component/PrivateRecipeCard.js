import { Link } from 'react-router-dom'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../style/cardPrivateRecipe.css'
import { API_URL } from '../../../utils/config'
function PrivateRecipeCard(props) {
  const { itemInfo, likeArr, saveArr } = props

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
  // 卡片收藏狀態
  const saveToggled = (value) => {
    const save = []
    save.push(
      <span className="cardPrivateRecipe-bookmark">
        <FontAwesomeIcon icon="bookmark" size="2x" />
      </span>
    )
    if (saveArr.includes(value.id)) {
      save.pop()
      save.push(
        <div className="d-flex cardPrivateRecipe-bookmark-active">
          <FontAwesomeIcon icon="bookmark" size="2x" />
        </div>
      )
    }
    return save
  }
  // 卡片按讚狀態
  const likeToggled = (value) => {
    const like = []
    like.push(
      <div className="d-flex cardPrivateRecipe-like">
        <FontAwesomeIcon icon="heart" size="lg" />
      </div>
    )
    if (likeArr.includes(value.id)) {
      like.pop()
      like.push(
        <div className="d-flex cardPrivateRecipe-like-active">
          <FontAwesomeIcon icon="heart" size="lg" />
        </div>
      )
    }
    return like
  }
  return (
    <>
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
                <div className="d-flex justify-content-center cardPrivateRecipe-stat">
                  <FontAwesomeIcon icon="heart" />
                  <span>{value.likeCount}</span>
                  <FontAwesomeIcon icon="eye" />
                  <span>{value.viewCount}</span>
                  <FontAwesomeIcon icon="comment-alt" />
                  <span>{value.commentCount}</span>
                </div>
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default PrivateRecipeCard
