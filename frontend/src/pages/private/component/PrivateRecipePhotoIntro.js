import React, { useEffect, useState } from 'react'
import '../../../style/privateRecipePhotoIntro.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import food from '../../../images/default_food3.jpg'
import avatar from '../../../images/default_avatar1.jpg'
import Axios from 'axios'

function PrivateRecipePhotoIntro(props) {
  const { id } = props
  const [recipe, setRecipe] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/private/${id}`).then((res) => {
      setRecipe(res.data)
    })
  }, [])

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
                <FontAwesomeIcon icon="star" size="lg" />
                <FontAwesomeIcon icon="star" size="lg" />
                <FontAwesomeIcon icon="star" size="lg" />
                <FontAwesomeIcon icon="star" size="lg" />
                <FontAwesomeIcon icon="star" size="lg" />
                <span
                  class="
                          font-700S
                          PrivateRecipePhotoIntro-star-num
                      "
                >
                  4.5
                </span>
              </div>
              {recipe.map((value, index) => {
                return (
                  <>
                    <h2 class="PrivateRecipePhotoIntro-recipe-name">
                      {value.name}
                    </h2>
                    <span class="font-400L PrivateRecipePhotoIntro-intro">
                      {value.intro}
                    </span>
                    <h2 class="PrivateRecipePhotoIntro-qty">份量</h2>
                    <span class="font-400L PrivateRecipePhotoIntro-qty-num">
                      {value.qty} 份
                    </span>
                  </>
                )
              })}

              <button class="PrivateRecipePhotoIntro-like-btn">
                <FontAwesomeIcon
                  icon={['far', 'heart']}
                  size="lg"
                  className="private-heart"
                />
                <span class="font-700M">按讚</span>
              </button>
              <button class="PrivateRecipePhotoIntro-bookmark-btn">
                <FontAwesomeIcon
                  icon={['far', 'bookmark']}
                  size="lg"
                  className="private-bookmark"
                />
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
