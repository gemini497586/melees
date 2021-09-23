import React, { useState, useEffect } from 'react'

import '../../../style/featureWeek.css'
import food from '../../../images/1.jpg'
import HeartViewNum from '../../../component/HeartViewNum'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'
import { API_URL } from '../../../utils/config'
import Axios from 'axios'

function FeatureWeek(props) {
  const { weekdataCards } = props
  console.log('weekdataCards', weekdataCards)

  // 將 first_date 用 for 變成 5天
  // let date = weekdataCards.map((v, i) => {
  //   console.log(v.firstdate)
  //   let result =
  //   for(let i=0; i<5; i++) {
  //     result = date + 1;
  //   }
  // })

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
          {weekdataCards.map((e, i) => {
            return (
              <div className="fw-cards">
                <Link
                  to="/feature/stepweek/"
                  role="button"
                  className="fw-btn font-700M"
                >
                  07/05
                </Link>
                <p className="text-center font-400SL fcolor-grey-900 pt-3">
                  {e.listName}
                </p>
                <HeartViewNum />
              </div>
            )
          })}
        </div>
      </div>
      <div className="fline-g300"></div>
    </>
  )
}

export default FeatureWeek
