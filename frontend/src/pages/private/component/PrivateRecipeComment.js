import React from 'react'
import '../../../style/privateRecipeComment.css'
import avatar from '../../../images/default_avatar1.jpg'

function PrivateRecipeComment() {
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-12 col-md-3">
            <div className="PrivateRecipeComment-container">
              <div className="d-flex">
                <figure className="PrivateRecipeComment-avatar">
                  <img src={avatar} className="h-100" alt="" />
                </figure>
                <span className="font-700L PrivateRecipeComment-name">
                  陳亮亮
                </span>
              </div>
              <div className="d-flex PrivateRecipeComment-star">
                <i className="fas fa-star fa-lg"></i>
                <i className="fas fa-star fa-lg"></i>
                <i className="fas fa-star fa-lg"></i>
                <i className="fas fa-star fa-lg"></i>
                <i className="fas fa-star fa-lg"></i>
                <span className="font-700S PrivateRecipeComment-date">
                  2021/07/28
                </span>
              </div>
              <div className="PrivateRecipeComment">
                <span className="font-400SL">
                  第一次接觸：打電話訂位或抵達餐廳門口時，得到什麼樣的對待可以提早幾分鐘到餐廳，觀察現場氣氛。客人很多嗎？客人看起來開心嗎？每桌的客人是否都得到相似的餐點及服務？
                </span>
              </div>
              <div className="d-flex PrivateRecipeComment-more justify-content-end">
                <span className="font-400SS">看更多→</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivateRecipeComment
