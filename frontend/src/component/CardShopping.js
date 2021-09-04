import React from 'react'
import '../style/cardShopping.css'
import food from '../images/default_food3.jpg'

function CardShopping() {
  return (
    <div className="card-shopping">
      <div className="container">
        <div className="row">
          <div class="cardShopping-others">
            <div class="d-flex justify-content-between">
              <h5>推薦商品</h5>
              <div class="cardShopping-others-more">
                <i class="fas fa-chevron-right"></i>
                <span class="font-700M">看更多</span>
              </div>
            </div>
            <div class="cardShopping-others-hr w-100"></div>
          </div>
          <div className="col-12 col-md-3">
            <div className="cardShopping">
              <figure className="cardShopping-img">
                <img src={food} className="w-100" alt="" />
              </figure>
              <span className="cardShopping-bookmark">
                <i className="fas fa-bookmark fa-2x"></i>
              </span>
              <span className="cardShopping-bookmark-stat-box">
                <div className="cardShopping-bookmark-stat-icon">
                  <i className="fas fa-bookmark fa-1x"></i>
                </div>
                <span className="cardShopping-book-mark-num font-400S">
                  1000
                </span>
              </span>
              <span className="font-700S cardShopping-type">食材</span>
              <h6 className="cardShopping-name">紐西蘭小羔羊薄切片</h6>
              <span className="font-700S cardShopping-price">$190</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardShopping
