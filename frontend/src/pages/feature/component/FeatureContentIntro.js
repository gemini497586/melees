import React from 'react'
import HeartViewNum from '../../../component/HeartViewNum'
import Ig from '../../../component/Ig'
import '../../../style/featureContentIntro.css'
import '../../../style/featureComponent.css'
import avatar from '../../../images/lonyo63.jpg'

function FeatureContentIntro() {
  return (
    <>
      <div className="fintro-boxsize">
        <div>
          {/* IG連結 */}
          <a href="#/" className="text-decoration-none">
            <div className="fintro-ig">
              <figure className="fintro-avatar-bg">
                <img className="fintro-avatar" src={avatar} alt="" />
              </figure>
              <Ig />
            </div>
          </a>
          {/* 中間標題 */}
          <div className="d-flex flex-column">
            <h2 className="fs-color900 mb-3 mt-4">香煎菲力牛排</h2>
            {/* 份數 */}
            <div className="d-flex">
              <p className="fcolor-900 font-400SL me-3">份量</p>
              <p className="fcolor-900 font-400SL">1人份</p>
            </div>
          </div>
        </div>
        {/* 下面按鈕 */}
        <div className="fintro-btngroup">
          {/* 愛心瀏覽數 */}
          <HeartViewNum />
          {/* 收藏btn */}
          <button className="fintro-btnlike font-700M">
            <i className="far fa-bookmark fa-fw me-2"></i>按讚
          </button>
          <button className="fintro-btnsave font-700M">
            <i className="far fa-bookmark fa-fw me-2"></i>加入收藏
          </button>
        </div>
      </div>
    </>
  )
}

export default FeatureContentIntro
