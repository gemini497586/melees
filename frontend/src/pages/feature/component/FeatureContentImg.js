import React from 'react'
import '../../../style/featureContentImg.css'
import food from '../../../images/1.jpg'

function FeatureContentImg() {
  return (
    <>
      {/* 食譜照片 */}
      <div className="fimg-title-img d-flex flex-column align-items-start">
        {/* 大圖 */}
        <figure className="fimg-big-img">
          <img className="f-cover-fit" src={food} alt="" />
        </figure>
        {/* 很多縮圖 */}
        <div
          className="
                fimg-small-img
                d-flex
                justify-content-between
                align-items-center
              "
        >
          <a href="#/">
            <img className="fimg-img-size" src={food} alt="" />
          </a>
          <a href="#/">
            <img className="fimg-img-size" src={food} alt="" />
          </a>
          <a href="#/">
            <img className="fimg-img-size" src={food} alt="" />
          </a>

          <button className="fimg-btn-fontawesome">
            <i className="fas fa-chevron-right fimg-btn-iconcolor"></i>
          </button>
        </div>
      </div>
    </>
  )
}

export default FeatureContentImg
