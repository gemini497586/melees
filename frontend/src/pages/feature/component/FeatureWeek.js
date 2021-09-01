import React from 'react'
import '../../../style/featureWeek.css'
import food from '../../../images/1.jpg'

function FeatureWeek() {
  return (
    <>
      {/* 一周list */}
      <div className="fw-list d-flex align-items-center justify-content-between">
        {/* img */}
        <figure className="fw-img f-cover-fit">
          <img className="f-cover-fit" src={food} alt="" />
        </figure>
        {/* button */}
        <div className="row justify-content-around flex-nowrap fw-date">
          <div className="fw-cards d-flex flex-column justify-content-center col">
            <a
              href="#/"
              role="button"
              className="fw-btn font-700M text-decoration-none"
            >
              07/05
            </a>
            <p className="text-center font-400SL pt-3">蒜香蛤蜊炒烏龍</p>
            <div className="fw-content-down">
              <div className="fw-icon-num d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <span>
                    <i className="fas fa-heart fa-fw me-1 fw-icon-size"></i>
                  </span>
                  <span className="font-400S">30322</span>
                </div>
                <div className="fw-icon-line"></div>
                <div className="d-flex align-items-center">
                  <span>
                    <i className="fas fa-eye fa-fw me-1 fw-icon-size"></i>
                  </span>
                  <span className="font-400S">30322</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fw-cards d-flex flex-column justify-content-center col">
            <a
              href="#/"
              role="button"
              className="fw-btn font-700M text-decoration-none"
            >
              07/06
            </a>
            <p className="text-center font-400SL pt-3">蒜香蛤蜊炒烏龍</p>
            <div className="fw-content-down">
              <div className="fw-icon-num d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <span>
                    <i className="fas fa-heart fa-fw me-1 fw-icon-size"></i>
                  </span>
                  <span className="font-400S">30322</span>
                </div>
                <div className="fw-icon-line"></div>
                <div className="d-flex align-items-center">
                  <span>
                    <i className="fas fa-eye fa-fw me-1 fw-icon-size"></i>
                  </span>
                  <span className="font-400S">30322</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fw-cards d-flex flex-column justify-content-center col">
            <a
              href="#/"
              role="button"
              className="fw-btn font-700M text-decoration-none"
            >
              07/07
            </a>
            <p className="text-center font-400SL pt-3">蒜香蛤蜊炒烏龍</p>
            <div className="fw-content-down">
              <div className="fw-icon-num d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <span>
                    <i className="fas fa-heart fa-fw me-1 fw-icon-size"></i>
                  </span>
                  <span className="font-400S">30322</span>
                </div>
                <div className="fw-icon-line"></div>
                <div className="d-flex align-items-center">
                  <span>
                    <i className="fas fa-eye fa-fw me-1 fw-icon-size"></i>
                  </span>
                  <span className="font-400S">30322</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fw-cards d-flex flex-column justify-content-center col">
            <a
              href="#/"
              role="button"
              className="fw-btn font-700M text-decoration-none"
            >
              07/08
            </a>
            <p className="text-center font-400SL pt-3">蒜香蛤蜊炒烏龍</p>
            <div className="fw-content-down">
              <div className="fw-icon-num d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <span>
                    <i className="fas fa-heart fa-fw me-1 fw-icon-size"></i>
                  </span>
                  <span className="font-400S">30322</span>
                </div>
                <div className="fw-icon-line"></div>
                <div className="d-flex align-items-center">
                  <span>
                    <i className="fas fa-eye fa-fw me-1 fw-icon-size"></i>
                  </span>
                  <span className="font-400S">30322</span>
                </div>
              </div>
            </div>
          </div>
          <div className="fw-cards d-flex flex-column justify-content-center col">
            <a
              href="#/"
              role="button"
              className="fw-btn font-700M text-decoration-none"
            >
              07/09
            </a>
            <p className="text-center font-400SL pt-3">蒜香蛤蜊炒烏龍</p>
            <div className="fw-content-down">
              <div className="fw-icon-num d-flex justify-content-between">
                <div className="d-flex align-items-center">
                  <span>
                    <i className="fas fa-heart fa-fw me-1 fw-icon-size"></i>
                  </span>
                  <span className="font-400S">30322</span>
                </div>
                <div className="fw-icon-line"></div>
                <div className="d-flex align-items-center">
                  <span>
                    <i className="fas fa-eye fa-fw me-1 fw-icon-size"></i>
                  </span>
                  <span className="font-400S">30322</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="fw-line mt-3 mb-2"></div>
    </>
  )
}

export default FeatureWeek
