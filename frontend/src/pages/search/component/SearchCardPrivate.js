import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import HeartViewNum from '../../../component/HeartViewNum'
import { API_URL } from '../../../utils/config'

function SearchCardPrivate(props) {
  const { privateList, setDisplayPrivate, sortBy } = props

  // 排序功能
  const handleSortBy = (privateList, sortBy) => {
    let newData = [...privateList]
    if (sortBy === 0) {
      newData = [...newData].sort((a, b) => b.id - a.id)
    }
    if (sortBy === 1) {
      newData = [...newData].sort((a, b) => a.id - b.id)
    }
    if (sortBy === 2) {
      newData = [...newData].sort((a, b) => b.like_qty - a.like_qty)
    }
    if (sortBy === 3) {
      newData = [...newData].sort((a, b) => a.like_qty - b.like_qty)
    }
    if (sortBy === 4) {
      newData = [...newData].sort((a, b) => b.view_qty - a.view_qty)
    }
    if (sortBy === 5) {
      newData = [...newData].sort((a, b) => a.view_qty - b.view_qty)
    }
    return newData
  }

  useEffect(() => {
    let newData = []
    newData = handleSortBy(privateList, sortBy)
    setDisplayPrivate(newData)
  }, [sortBy])

  return (
    <>
      <div className="s-recipe-bottom">
        {privateList.map((v, i) => {
          return (
            <div className="s-recipe-card" key={i}>
              <div className="s-recipe-intro">
                <div className="s-recipe-image">
                  <img
                    className="b-cover-fit"
                    src={`${API_URL}/private/${v.picture}`}
                    alt={v.name}
                  />
                </div>
                <div className="s-recipe-info font-400SL">
                  <div className="s-recipe-classify">
                    <FontAwesomeIcon
                      icon="bookmark"
                      className="me-2 font-400L"
                    />
                    私藏食譜
                  </div>
                  <div className="s-recipe-text">
                    <ul className="list-unstyled">
                      <li className="s-recipe-subtitle font-400SL">
                        {v.create_date}
                      </li>
                      <li className="s-recipe-title font-700L ">{v.name}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="s-recipe-count font-400M">
                <HeartViewNum likeqty={v.like_qty} viewqty={v.view_qty} />
                <div className="s-recipe-count-user">
                  <div className="s-recipe-count-circle">
                    <img
                      className="b-cover-fit"
                      src={`${API_URL}/member/${v.member_pic}`}
                      alt={v.member_name}
                    ></img>
                  </div>
                  <p className="font-400SL">{v.member_name}</p>
                </div>
              </div>
              <div className="s-recipe-read">
                <Link to={`/private/detail/${v.id}`}>
                  <button className="font-700M">
                    <FontAwesomeIcon icon="eye" className="me-2" />
                    查看食譜
                  </button>
                </Link>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default SearchCardPrivate
