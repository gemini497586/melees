import React from 'react'
import '../../../style/featureWeek.css'
import food from '../../../images/1.jpg'
import HeartViewNum from '../../../component/HeartViewNum'
import { Link } from 'react-router-dom'

function FeatureWeek() {
  return (
    <>
      {/* 一周list */}
      <div className="fw-list">
        {/* img */}
        <figure className="fw-img fcover-fit">
          <img className="fcover-fit" src={food} alt="" />
        </figure>
        {/* button */}
        <div className="fw-date">
          <div className="fw-cards">
            <Link
              to="/feature/stepweek/"
              role="button"
              className="fw-btn font-700M"
            >
              07/05
            </Link>
            <p className="text-center font-400SL fcolor-grey-900 pt-3">
              蒜香蛤蜊炒烏龍
            </p>
            <HeartViewNum />
          </div>
          <div className="fw-cards">
            <Link
              to="/feature/stepweek/"
              role="button"
              className="fw-btn font-700M"
            >
              07/05
            </Link>
            <p className="text-center font-400SL fcolor-grey-900 pt-3">
              蒜香蛤蜊炒烏龍
            </p>
            <HeartViewNum />
          </div>
          <div className="fw-cards">
            <Link
              to="/feature/stepweek/"
              role="button"
              className="fw-btn font-700M"
            >
              07/05
            </Link>
            <p className="text-center font-400SL fcolor-grey-900 pt-3">
              蒜香蛤蜊炒烏龍
            </p>
            <HeartViewNum />
          </div>
          <div className="fw-cards">
            <Link
              to="/feature/stepweek/"
              role="button"
              className="fw-btn font-700M"
            >
              07/05
            </Link>
            <p className="text-center font-400SL fcolor-grey-900 pt-3">
              蒜香蛤蜊炒烏龍
            </p>
            <HeartViewNum />
          </div>
          <div className="fw-cards">
            <Link
              to="/feature/stepweek/"
              role="button"
              className="fw-btn font-700M"
            >
              07/05
            </Link>
            <p className="text-center font-400SL fcolor-grey-900 pt-3">
              蒜香蛤蜊炒烏龍
            </p>
            <HeartViewNum />
          </div>
        </div>
      </div>
      <div className="fline-g300"></div>
    </>
  )
}

export default FeatureWeek
