import React, { useState, useEffect } from 'react'
import '../../../style/featureWeek.css'
import food from '../../../images/1.jpg'
import HeartViewNum from '../../../component/HeartViewNum'
import { Link } from 'react-router-dom'
import moment from 'moment'
import { useParams } from 'react-router'

function FeatureWeek(props) {
  const { weekdataCards } = props
  // console.log('weekimg: ', weekimg)
  const [date1, setDate1] = useState([])

  // 將 first_date 用 for 變成 5天
  useEffect(() => {
    // console.log('weekdataCards: ', weekdataCards)
    let date = weekdataCards.map((v, i) => {
      let date = v.firstdate
      let newArr = []
      // console.log('date', date)
      for (let i = 0; i < 5; i++) {
        let result = new Date(date)
        result = result.setDate(result.getDate() + i)
        result = moment(result).format('MM/DD')
        newArr[i] = result
      }
      // console.log('newArr', newArr)
      setDate1(newArr)
    })
  }, [weekdataCards])
  // console.log(date1)
  // console.log('date11', date)

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

  const mapWeekRecipe = () => {
    // console.log('mapWeekRecipe: ', formatedData)
    return formatedData.map((v, i) => {
      let recipeNames = []
      for (let i = 0; i < v.length; i++) {
        let name = v[i].listName
        let id = v[i].listId
        recipeNames.push(
          <>
            <Link to={`/feature/stepweek/` + id}>{name}</Link>
          </>
        )
      }
      // console.log('recipeNames: ', recipeNames)

      return (
        <div className="fw-cards">
          <Link to="/" className="fw-btn font-700M">
            {date1[i]}
          </Link>
          <p className="text-center font-400SL fcolor-grey-900">
            {recipeNames}
          </p>
          <HeartViewNum />
        </div>
      )
    })
  }

  return (
    <>
      {/* 一周list */}
      <div className="fw-list">
        {/* img */}
        <figure className="fw-img fcover-fit">
          <img className="fcover-fit" src={food} alt="" />
        </figure>
        {/* button */}
        <div className="fw-date">{mapWeekRecipe()}</div>
      </div>
      <div className="fline-g300"></div>
    </>
  )
}

export default FeatureWeek
