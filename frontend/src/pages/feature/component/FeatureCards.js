import React from 'react'
import HeartViewNum from '../../../component/HeartViewNum'
import '../../../style/featureCards.css'
import '../../../style/featureComponent.css'
import avatar from '../../../images/lonyo63.jpg'
import iglogo from '../../../images/instagramLogo.jpg'
import food from '../../../images/1.jpg'

function FeatureCards() {
  return (
    <>
      <div className="fc-cards mb-5">
        {/* 食譜照片 */}
        <figure className="fc-food-img">
          <img className="fcover-fit" src={food} alt="" />
        </figure>
        {/* 內容 */}
        <div className="fc-cards-bg">
          {/* IG照片 */}
          <figure className="fc-avatar">
            <img className="fcover-fit" src={avatar} alt="" />
          </figure>
          {/* 文案 */}
          <div className="fc-content">
            {/* 分類 */}
            <p className="fcolor-grey-800 font-400S">健康長肉肉</p>
            {/* 食譜名稱和連結 */}
            <h5 className="fcolor-secondary">鮮蔬嫩豬溫沙拉</h5>
            <div
              className="d-flex text-decoration-none align-items-center"
              href="#/"
            >
              <img className="fc-logo me-2" src={iglogo} alt="" />
              <p className="fcolor-grey-800 font-400SL m-0">謝戎宥- LON YO</p>
            </div>
          </div>
          {/* 瀏覽數和按讚數 */}
          <div className="fc-content-down">
            <div className="fline-g500 mb-1"></div>
            <HeartViewNum />
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureCards
