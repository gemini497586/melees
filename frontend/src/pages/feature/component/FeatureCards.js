import React from 'react'
import '../../../style/featureCards.css'
import avatar from '../../../images/lonyo63.jpg'
import iglogo from '../../../images/instagramLogo.jpg'
import food from '../../../images/1.jpg'

function FeatureCards() {
  return (
    <>
      <div className="fc-cards mb-5">
        {/* 食譜照片 */}
        <figure className="fc-food-img">
          <img className="f-cover-fit" src={food} alt="" />
        </figure>
        {/* 內容 */}
        <div className="fc-cards-bg">
          {/* IG照片 */}
          <figure className="fc-avatar">
            <img className="f-cover-fit" src={avatar} alt="" />
          </figure>
          {/* 文案 */}
          <div className="fc-content">
            {/* 收藏和按讚 */}
            <div className="d-flex fc-icon-size mb-1">
              <i className="far fa-bookmark me-2 fa-fw"></i>
              <i className="far fa-heart fa-fw"></i>
            </div>
            {/* 分類 */}
            <p className="fc-class font-400S">健康長肉肉</p>
            {/* 食譜名稱和連結 */}
            <h5 className="fc-title">鮮蔬嫩豬溫沙拉</h5>
            <a
              className="d-flex text-decoration-none align-items-center"
              href="#/"
            >
              <img className="fc-logo me-2" src={iglogo} alt="" />
              <p className="fc-link-font font-400SL m-0">謝戎宥- LON YO</p>
            </a>
          </div>
          {/* 瀏覽數和按讚數 */}
          <div className="fc-content-down">
            <div className="fc-icon-line mb-1"></div>
            <div className="fc-icon-num d-flex justify-content-around">
              <div className="d-flex align-items-center">
                <span>
                  <i className="fas fa-heart fa-fw me-2 fc-icon-size"></i>
                </span>
                <span>30322</span>
              </div>
              <div className="fc-icon-line"></div>
              <div className="d-flex align-items-center">
                <span>
                  <i className="fas fa-eye fa-fw me-2 fc-icon-size"></i>
                </span>
                <span>30322</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureCards
