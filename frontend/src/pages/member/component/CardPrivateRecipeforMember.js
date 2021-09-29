import React from 'react'
import '../../../style/cardPrivateRecipe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../utils/config'

function CardPrivateRecipeforMember(props) {
  const { recipeDataDetails, starScore } = props
  return (
    <>
      <div className="cardPrivateRecipe">
        <Link to={'/private/detail/' + recipeDataDetails.recipe_id}>
          <figure className="cardPrivateRecipe-img">
            <img
              src={`${API_URL}/private/${recipeDataDetails.recipe_img}`}
              className="w-100"
              alt="食譜照片"
            />
          </figure>
          <span className="cardPrivateRecipe-bookmark">
            <i className="fas fa-bookmark fa-2x"></i>
          </span>
          <figure className="cardPrivateRecipe-avatar">
            <img
              src={`${API_URL}/member/${recipeDataDetails.recipe_author_avatar}`}
              className="h-100"
              alt="作者的頭像"
            />
          </figure>
          <div className="cardPrivateRecipe-box">
            <span className="font-700S cardPrivateRecipe-type">私藏食譜</span>
          </div>
          <div className="d-flex cardPrivateRecipe-like">
            <i className="far fa-heart"></i>
          </div>
          <h6 className="font-700S cardPrivateRecipe-name">
            {recipeDataDetails.recipe_name}
          </h6>
          <div className="cardPrivateRecipe-star">
            {starScore(recipeDataDetails.recipe_star_rate)}
            <span className="font-400S cardPrivateRecipe-star-num">
              {recipeDataDetails.recipe_star_rate}
            </span>
          </div>
          <div className="cardPrivateRecipe-stat">
            <FontAwesomeIcon
              icon="heart"
              className="cardPrivateRecipe-stat-heart"
            />
            <span>{recipeDataDetails.like_qty}</span>
            <div></div>
            <FontAwesomeIcon
              icon="eye"
              className="cardPrivateRecipe-stat-eye"
            />
            <span>{recipeDataDetails.view_qty}</span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default CardPrivateRecipeforMember
