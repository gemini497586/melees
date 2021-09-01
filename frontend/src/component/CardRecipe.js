import React from 'react'
import '../style/cardrecipe.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHeart, faBookmark } from '@fortawesome/free-solid-svg-icons'
import food from '../images/1.jpg'

function CardRecipe() {
  return (
    <>
      <div class="container">
        <div class="row">
          <div class="col-12 col-md-3">
            <div class="card-recipe">
              <figure class="card-recipe-img">
                <img src={food} class="w-100" alt="" />
              </figure>
              <span class="bookmark">
                {/* <FontAwesomeIcon icon={faBookmark} /> */}
                <i class="fas fa-bookmark fa-2x"></i>
              </span>
              <span class="bookmark-stat-box">
                <div class="bookmark-stat-icon">
                  {/* <FontAwesomeIcon
                    className="bookmark-icon"
                    icon={faBookmark}
                  /> */}
                  <i class="fas fa-bookmark fa-1x"></i>
                </div>
                <span class="book-mark-num font-400S">1000</span>
              </span>
              <span class="font-700S card-recipe-type">健康長肉肉</span>
              <h6 class="card-recipe-name">鮭魚鮮蝦溫沙拉</h6>
              <div class="f-flex card-recipe-ig">
                {/* <FontAwesomeIcon className="heart-icon" icon={faHeart} /> */}
                <i class="fab fa-instagram-square fa-lg"></i>

                <span class="font-700S">謝戎宥- LON YO</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="card-recipe">
              <figure class="card-recipe-img">
                <img src={food} class="w-100" alt="" />
              </figure>
              <span class="bookmark">
                {/* <FontAwesomeIcon icon={faBookmark} /> */}
                <i class="fas fa-bookmark fa-2x"></i>
              </span>
              <span class="bookmark-stat-box">
                <div class="bookmark-stat-icon">
                  <FontAwesomeIcon
                    className="bookmark-icon"
                    icon={faBookmark}
                  />
                  {/* <i class="fas fa-bookmark fa-1x"></i> */}
                </div>
                <span class="book-mark-num font-400S">1000</span>
              </span>
              <span class="font-700S card-recipe-type">健康長肉肉</span>
              <h6 class="card-recipe-name">鮭魚鮮蝦溫沙拉</h6>
              <div class="f-flex card-recipe-ig">
                {/* <FontAwesomeIcon className="heart-icon" icon={faHeart} /> */}
                <i class="fab fa-instagram-square fa-lg"></i>

                <span class="font-700S">謝戎宥- LON YO</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="card-recipe">
              <figure class="card-recipe-img">
                <img src={food} class="w-100" alt="" />
              </figure>
              <span class="bookmark">
                {/* <FontAwesomeIcon icon={faBookmark} /> */}
                <i class="fas fa-bookmark fa-2x"></i>
              </span>
              <span class="bookmark-stat-box">
                <div class="bookmark-stat-icon">
                  <FontAwesomeIcon
                    className="bookmark-icon"
                    icon={faBookmark}
                  />
                  {/* <i class="fas fa-bookmark fa-1x"></i> */}
                </div>
                <span class="book-mark-num font-400S">1000</span>
              </span>
              <span class="font-700S card-recipe-type">健康長肉肉</span>
              <h6 class="card-recipe-name">鮭魚鮮蝦溫沙拉</h6>
              <div class="f-flex card-recipe-ig">
                {/* <FontAwesomeIcon className="heart-icon" icon={faHeart} /> */}
                <i class="fab fa-instagram-square fa-lg"></i>

                <span class="font-700S">謝戎宥- LON YO</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="card-recipe">
              <figure class="card-recipe-img">
                <img src={food} class="w-100" alt="" />
              </figure>
              <span class="bookmark">
                {/* <FontAwesomeIcon icon={faBookmark} /> */}
                <i class="fas fa-bookmark fa-2x"></i>
              </span>
              <span class="bookmark-stat-box">
                <div class="bookmark-stat-icon">
                  <FontAwesomeIcon
                    className="bookmark-icon"
                    icon={faBookmark}
                  />
                  {/* <i class="fas fa-bookmark fa-1x"></i> */}
                </div>
                <span class="book-mark-num font-400S">1000</span>
              </span>
              <span class="font-700S card-recipe-type">健康長肉肉</span>
              <h6 class="card-recipe-name">鮭魚鮮蝦溫沙拉</h6>
              <div class="f-flex card-recipe-ig">
                {/* <FontAwesomeIcon className="heart-icon" icon={faHeart} /> */}
                <i class="fab fa-instagram-square fa-lg"></i>

                <span class="font-700S">謝戎宥- LON YO</span>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-3">
            <div class="card-recipe">
              <figure class="card-recipe-img">
                <img src={food} class="w-100" alt="" />
              </figure>
              <span class="bookmark">
                {/* <FontAwesomeIcon icon={faBookmark} /> */}
                <i class="fas fa-bookmark fa-2x"></i>
              </span>
              <span class="bookmark-stat-box">
                <div class="bookmark-stat-icon">
                  <FontAwesomeIcon
                    className="bookmark-icon"
                    icon={faBookmark}
                  />
                  {/* <i class="fas fa-bookmark fa-1x"></i> */}
                </div>
                <span class="book-mark-num font-400S">1000</span>
              </span>
              <span class="font-700S card-recipe-type">健康長肉肉</span>
              <h6 class="card-recipe-name">鮭魚鮮蝦溫沙拉</h6>
              <div class="f-flex card-recipe-ig">
                {/* <FontAwesomeIcon className="heart-icon" icon={faHeart} /> */}
                <i class="fab fa-instagram-square fa-lg"></i>

                <span class="font-700S">謝戎宥- LON YO</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CardRecipe
