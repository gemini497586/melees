import React, { useState, useEffect } from 'react'
import '../../../style/featureWeek.css'
import food from '../../../images/1.jpg'
import HeartViewNum from '../../../component/HeartViewNum'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useParams } from 'react-router'

function FeatureWeek(props) {
  const { weekdataCards } = props
  const [date1, setDate1] = useState([])

  const [formatedData, setFormatedData] = useState([])
  useEffect(() => {
    // console.log('weekdataCards: ', weekdataCards)
    const handleFormate = () => {
      let weeklistarr = []
      for (let i = 0; i < 5; i++) {
        let newweeklist = weekdataCards.filter((e) => e.order_date === i + 1)
        weeklistarr[i] = newweeklist
      }
      setFormatedData(weeklistarr)
      // console.log('weeklistarr: ', weeklistarr)
    }
    handleFormate()
  }, [])

  return (
    <>
      {/* 一周list */}
      <div className="fw-list">
        {/* img */}
        <figure className="fw-img fcover-fit">
          <img className="fcover-fit" src={food} alt="" />
        </figure>
      </div>
      <div className="fline-g300"></div>
    </>
  )
}

export default FeatureWeek
