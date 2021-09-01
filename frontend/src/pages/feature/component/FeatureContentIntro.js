import React from 'react'
import '../../../style/featureContentIntro.css'
import avatar from '../../../images/lonyo63.jpg'

function FeatureContentIntro() {
  return (
    <>
      <div
        className="
        fintro-boxsize
        d-flex
        flex-column
        align-content-between
        justify-content-between
      "
      >
        <div>
          {/* IG連結 */}
          <a href="#/" className="text-decoration-none">
            <div
              className="
              d-flex
              justify-content-between
              d-flex
              align-items-center
              fintro-ig
            "
            >
              <figure
                className="
                d-flex
                justify-content-center
                align-items-center
                fintro-avatar-bg
              "
              >
                <img
                  className="f-cover-fit fintro-avatar"
                  src={avatar}
                  alt=""
                />
              </figure>
              <div
                className="
                d-flex
                justify-content-center
                align-items-center
                f-cover-fit
                fintro-link
              "
              >
                <div
                  className="
                  d-flex
                  justify-content-between
                  align-items-center
                  fintro-linkcontent
                "
                >
                  <i className="fab fa-instagram fintro-icon"></i>
                  <div className="d-flex align-items-center fintro-linkfont">
                    <p>便當調色盤 | Della & Joey</p>
                  </div>
                </div>
              </div>
            </div>
          </a>
          {/* 中間標題 */}
          <div className="d-flex flex-column">
            <h2 className="mb-3 mt-4">香煎菲力牛排</h2>
            {/* 份數 */}
            <div className="d-flex">
              <p className="me-3">份量</p>
              <p>1人份</p>
            </div>
          </div>
        </div>
        {/* 下面按鈕 */}
        <div className="d-flex flex-column">
          {/* 愛心瀏覽數 */}
          <div className="fintro-content-down mb-2">
            <div className="fintro-icon-num d-flex justify-content-between">
              <div className="d-flex align-items-center">
                <span>
                  <i className="fas fa-heart fa-fw me-3 fc-icon-size"></i>
                </span>
                <span>30322</span>
              </div>
              <div className="fintro-icon-line"></div>
              <div className="d-flex align-items-center">
                <span>
                  <i className="fas fa-eye fa-fw me-3 fintro-icon-size"></i>
                </span>
                <span>30322</span>
              </div>
            </div>
          </div>
          {/* 收藏btn */}
          <div className="fintro-bmbtn">
            <button className="d-flex justify-content-center align-items-center">
              <i className="far fa-bookmark me-2 fa-fw"></i>
              <p>加入收藏</p>
            </button>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureContentIntro
