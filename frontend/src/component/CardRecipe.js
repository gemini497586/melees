import React, { useState, useEffect } from 'react'
import { withRouter, Link } from 'react-router-dom'
import '../style/cardrecipe.css'
import food from '../images/default_food1.jpg'

const recipeList = [
  {
    id: 1,
    picture: '1.jpg',
    name: '泰式涼拌海鮮寬粉',
  },
  {
    id: 2,
    picture: '2.jpg',
    name: '檸檬蝦',
  },
  {
    id: 3,
    picture: '3.jpg',
    name: '蜂蜜檸檬豬排',
  },
  {
    id: 4,
    picture: '4.jpg',
    name: '蜂蜜檸檬豬排',
  },
]

function CardRecipe(props) {
  // console.log(props)
  const id = props.match.params.id

  return (
    <div className="page-group">
      <div className="card-recipe">
        <div className="container">
          <div className="row">
            <div class="cardRecipe-others">
              <div class="d-flex justify-content-between">
                <h5>查看其他食譜</h5>
                <div class="cardRecipe-others-more">
                  <i class="fas fa-chevron-right"></i>
                  <span class="font-700M">看更多</span>
                </div>
              </div>
              <div class="cardRecipe-others-hr w-100"></div>
            </div>

            <div class="cardRecipe-others-hr w-100"></div>
            <Link to={'/feature/'}>
              <div className="col-12 col-md-3">
                <div className="cardRecipe">
                  <figure className="cardRecipe-img">
                    <img src={food} className="w-100" alt="" />
                  </figure>
                  <span className="cardRecipe-bookmark">
                    <i className="fas fa-bookmark fa-2x"></i>
                  </span>
                  <span className="cardRecipe-bookmark-stat-box">
                    <div className="cardRecipe-bookmark-stat-icon">
                      <i className="fas fa-bookmark fa-1x"></i>
                    </div>
                    <span className="cardRecipe-bookmark-num font-400S">
                      1000
                    </span>
                  </span>
                  <span className="font-700S cardRecipe-type">健康長肉肉</span>
                  <h6 className="cardRecipe-name"></h6>
                  <div className="f-flex cardRecipe-ig">
                    <i className="fab fa-instagram-square fa-lg"></i>
                    <span className="font-700S">謝戎宥- LON YO</span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  )
}

export default withRouter(CardRecipe)
