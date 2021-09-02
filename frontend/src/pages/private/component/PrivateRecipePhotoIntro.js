import React from 'react'
import '../../../style/privateRecipePhotoIntro.css'
import food from '../../../images/default_food3.jpg'
import avatar from '../../../images/default_avatar1.jpg'

function PrivateRecipePhotoIntro() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-6">
            <div class="PrivateRecipePhotoIntro-left">
              <figure class="PrivateRecipePhotoIntro-photo">
                <img src={food} class="h-100" alt="" />
              </figure>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="PrivateRecipePhotoIntro-right">
              <div class="d-flex justify-content-between">
                <figure class="PrivateRecipePhotoIntro-avatar">
                  <img src={avatar} class="h-100" alt="" />
                </figure>
                <div
                  class="
                          flex-column
                          PrivateRecipePhotoIntro-user-info
                      "
                >
                  <div class="font-700M">sylvia</div>
                  <div class="font-400SS">9 篇食譜 127 粉絲</div>
                </div>
                <div class="PrivateRecipePhotoIntro-follow-btn">
                  <span class="font-700M">追蹤</span>
                </div>
              </div>
              <div class="PrivateRecipePhotoIntro-star">
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <span
                  class="
                          font-700S
                          PrivateRecipePhotoIntro-star-num
                      "
                >
                  4.5
                </span>
              </div>
              <h2 class="PrivateRecipePhotoIntro-recipe-name">
                椒鹽蟹管肉便當
              </h2>
              <span class="font-400L PrivateRecipePhotoIntro-intro">
                當然要來個特別一點的主菜─蟹管肉！說起蟹管肉大家可能既熟悉又陌生，蟹管肉是螃蟹腿的肉，和蟹肉棒是用魚漿做成的完全不同，在單價上也會略高一點！
              </span>
              <h2 class="PrivateRecipePhotoIntro-qty">份量</h2>
              <span class="font-400L PrivateRecipePhotoIntro-qty-num">
                2人份
              </span>
              <button class="PrivateRecipePhotoIntro-like-btn">
                <i class="far fa-heart"></i>
                <span class="font-700M">按讚</span>
              </button>
              <button class="PrivateRecipePhotoIntro-bookmark-btn">
                <i class="far fa-bookmark"></i>
                <span class="font-700M">加入收藏</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PrivateRecipePhotoIntro
