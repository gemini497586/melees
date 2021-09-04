import React from 'react'
import '../style/cardRecipe.css'
import food from '../images/default_food1.jpg'

function CardRecipe() {
  return (
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
                <span className="cardRecipe-bookmark-num font-400S">1000</span>
              </span>
              <span className="font-700S cardRecipe-type">健康長肉肉</span>
              <h6 className="cardRecipe-name">鮭魚鮮蝦溫沙拉</h6>
              <div className="f-flex cardRecipe-ig">
                <i className="fab fa-instagram-square fa-lg"></i>
                <span className="font-700S">謝戎宥- LON YO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardRecipe
