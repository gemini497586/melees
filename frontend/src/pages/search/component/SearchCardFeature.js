import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import HeartViewNum from '../../../component/HeartViewNum'
import Ig from '../../../component/Ig'
import { API_URL } from '../../../utils/config'

function SearchCardFeature(props) {
  const { featureList, setDisplayFeature, sortBy } = props

  // 排序功能
  const handleSortBy = (featureList, sortBy) => {
    let newData = [...featureList]
    if (sortBy === 0) {
      newData = [...newData].sort((a, b) => b.listId - a.listId)
    }
    if (sortBy === 1) {
      newData = [...newData].sort((a, b) => a.listId - b.listId)
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
    newData = handleSortBy(featureList, sortBy)
    setDisplayFeature(newData)
  }, [sortBy])

  let typeid = {
    1: '健康長肉肉',
    2: '健康不吃肉',
    3: '家常好手藝',
    4: '上班不煩惱',
  }
  return (
    <>
      <div className="s-recipe-bottom">
        {featureList.map((v, i) => {
          return (
            <div className="s-recipe-card" key={i}>
              <div className="s-recipe-intro">
                <div className="s-recipe-image">
                  <img
                    className="b-cover-fit"
                    src={`${API_URL}/feature/featurefood/${v.featureimg[0]}`}
                    alt={v.name}
                  />
                </div>
                <div className="s-recipe-info font-400SL">
                  <div className="s-recipe-classify">
                    <FontAwesomeIcon
                      icon="bookmark"
                      className="me-2 font-400L"
                    />
                    精選食譜
                  </div>
                  <div className="s-recipe-text">
                    <ul className="list-unstyled">
                      <li className="s-recipe-subtitle font-400SL">
                        {typeid[v.type_id]}
                      </li>
                      <li className="s-recipe-title font-700L ">
                        {v.listName}
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="s-recipe-count font-400M">
                {/* <HeartViewNum /> */}
                <div className="hvn-size fcolor-grey-800">
                  <div className="hvn-flex">
                    <div className="hvn-icon-flex">
                      <span>
                        <FontAwesomeIcon
                          className="ficon-size me-2"
                          icon={['fas', 'heart']}
                          fixedWidth
                        />
                      </span>
                      <span className="font-400S">{v.like_qty}</span>
                    </div>
                    <div className="fline-g500"></div>
                    <div className="hvn-icon-flex">
                      <span>
                        <FontAwesomeIcon
                          className="ficon-size me-2"
                          icon={['fas', 'eye']}
                          fixedWidth
                        />
                      </span>
                      <span className="font-400S">{v.view_qty}</span>
                    </div>
                  </div>
                </div>
                <a href={v.link} target="_blank">
                  <Ig linkName={v.linkName} />
                </a>
              </div>
              <div className="s-recipe-read">
                <Link to={`/feature/step/${v.listId}`}>
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

export default SearchCardFeature
