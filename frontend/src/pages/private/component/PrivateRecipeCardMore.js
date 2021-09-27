import React, { useState, useEffect } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../style/privateRecipeCardMore.css'
import food from '../../../images/default_food1.jpg'

function PrivateRecipeCardMore() {
  const [recipeList, setRecipeList] = useState([])
  useEffect(() => {
    // setRecipeList()
  }, [])

  return (
    <div className="card-recipe">
      <div className="container">
        <div className="row">
          <div class="privateRecipeCardMore-others">
            <div class="d-flex justify-content-between">
              <h5>查看其他食譜</h5>
              <div class="privateRecipeCardMore-others-more">
                <FontAwesomeIcon icon="chevron-right" className="more-right" />
                <span class="font-700M">看更多</span>
              </div>
            </div>
            <div class="privateRecipeCardMore-others-hr w-100"></div>
          </div>
          {recipeList.map((value, index) => {
            return (
              <div className="col-12 col-md-3">
                <div className="privateRecipeCardMore">
                  <figure className="privateRecipeCardMore-img">
                    <img src={food} className="w-100" alt="" />
                  </figure>
                  <span className="privateRecipeCardMore-bookmark">
                    <FontAwesomeIcon icon="bookmark" />
                  </span>
                  <span className="privateRecipeCardMore-bookmark-stat-box">
                    <div className="privateRecipeCardMore-bookmark-stat-icon">
                      <FontAwesomeIcon icon="bookmark" />
                    </div>
                    <span className="privateRecipeCardMore-bookmark-num font-400S">
                      {value.save_qty}
                    </span>
                  </span>
                  <span className="font-700S privateRecipeCardMore-type">
                    健康長肉肉
                  </span>
                  <h6 className="privateRecipeCardMore-name">{value.name}</h6>
                  <div className="f-flex privateRecipeCardMore-ig">
                    <FontAwesomeIcon
                      icon={['fab', 'instagram-square']}
                      className="instagram"
                    />

                    {/* <i className="fab fa-instagram-square fa-lg"></i> */}
                    <span className="font-700S">{value.user}</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default PrivateRecipeCardMore
