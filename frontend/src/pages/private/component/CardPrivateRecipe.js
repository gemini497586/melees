import React from 'react'
import '../../../style/cardPrivateRecipe.css'
import food from '../../../images/default_food2.jpg'
import avatar from '../../../images/default_avatar1.jpg'

function CardPrivateRecipe() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="cardPrivateRecipe">
              <figure className="cardPrivateRecipe-img">
                <img src={food} className="w-100" alt="" />
              </figure>
              <span className="cardPrivateRecipe-bookmark">
                <i className="fas fa-bookmark fa-2x"></i>
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
                <i className="far fa-heart"></i>
              </div>
              <h6 className="font-700S cardPrivateRecipe-name">義式水煮魚</h6>
              <div className="cardPrivateRecipe-star">
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star"></i>
                <i className="fas fa-star-half-alt"></i>
                <span className="font-400S cardPrivateRecipe-star-num">
                  4.5
                </span>
              </div>
              <div className="cardPrivateRecipe-stat">
                <i className="fas fa-heart"></i>
                <span>10000</span>
                <div></div>
                <i className="fas fa-eye"></i>
                <span>5000</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardPrivateRecipe
