import React from 'react'
import '../../../style/cardPrivateRecipe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { Link } from 'react-router-dom'
import { API_URL } from '../../../utils/config'
// import food from '../../../images/default_food2.jpg'
// import avatar from '../../../images/default_avatar1.jpg'

function CardPrivateRecipeforMember(props) {
  const { recipeDataDetails, starScore } = props

  // recipeData = {
  //   id: 54,
  //   member_id: 37,
  //   comment:
  //   'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus ducimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
  //   comment_time: '2021/09/18',

  //   recipe_id: 120,
  //   recipe_img: recipePic,
  //   recipe_name: '麻油蝦',
  //   recipe_star_rate: 3.4,
  // }

  // recipeDataDetails = {
  // id: 54,
  // member_id: 37,
  // member_avatar: avatar,
  // member_name: 'volunteer',
  // member_star_rate: 4,
  // member_like: true,
  // member_save: true,
  // comment:
  // 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis molestias temporibus obcaecati, delectus ducimus nesciunt maiores labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt asperiores id, est atque maiores officiis ratione ad tenetur perspiciatis aut, architecto possimus laboriosam magnam ullam fuga',
  // comment_time: '2021/09/18',

  // recipe_id: 120,
  // recipe_img: recipePic,
  // recipe_name: '麻油蝦',
  // recipe_star_rate: 3.4,
  // recipe_author_avatar: avatar,
  // recipe_like: 523,
  // recipe_view: 1648,
  // }
  return (
    <>
      <div className="cardPrivateRecipe">
        <Link to={'/private/detail/' + recipeDataDetails.recipe_id}>
          <figure className="cardPrivateRecipe-img">
            <img src={recipeDataDetails.recipe_img} className="w-100" alt="" />
          </figure>
          <span className="cardPrivateRecipe-bookmark">
            <i className="fas fa-bookmark fa-2x"></i>
          </span>
          <figure className="cardPrivateRecipe-avatar">
            <img
              src={recipeDataDetails.recipe_author_avatar}
              className="h-100"
              alt=""
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
            <span>{recipeDataDetails.recipe_like}</span>
            <div></div>
            <FontAwesomeIcon
              icon="eye"
              className="cardPrivateRecipe-stat-eye"
            />
            <span>{recipeDataDetails.recipe_view}</span>
          </div>
        </Link>
      </div>
    </>
  )
}

export default CardPrivateRecipeforMember
