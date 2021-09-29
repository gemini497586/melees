import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { API_URL } from '../../../utils/config'
import HeartViewNum from '../../../component/HeartViewNum'
import Ig from '../../../component/Ig'

function SearchCardRecipe(props) {
  const { displayData, setDisplayData, sortBy } = props

  console.log(displayData)

  // 排序功能
  const handleSortBy = (displayData, sortBy) => {
    let newData = [...displayData]
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
    newData = handleSortBy(displayData, sortBy)
    setDisplayData(newData)
  }, [sortBy])

  let typeid = {
    1: '健康長肉肉',
    2: '健康不吃肉',
    3: '家常好手藝',
    4: '上班不煩惱',
  }

  let typerecipe = {
    1: '私藏食譜',
    2: '精選食譜',
  }
  return (
    <>
      <div className="s-recipe-bottom">
        {displayData.map((v, i) => {
          return (
            <div className="s-recipe-card" key={i}>
              <div className="s-recipe-intro">
                <div className="s-recipe-image">
                  <img
                    className="b-cover-fit"
                    src={`${API_URL}/${v.picpath}/${v.picture}`}
                    alt={v.name}
                  />
                </div>
                <div className="s-recipe-info font-400SL">
                  <div className="s-recipe-classify">
                    <FontAwesomeIcon
                      icon="bookmark"
                      className="me-2 font-400L"
                    />
                    {typerecipe[v.type]}
                  </div>
                  <div className="s-recipe-text">
                    <ul className="list-unstyled">
                      <li className="s-recipe-subtitle font-400SL">
                        {v.type_id ? typeid[v.type_id] : v.create_date}
                      </li>
                      <li className="s-recipe-title font-700L ">{v.name}</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="s-recipe-count font-400M">
                <HeartViewNum likeqty={v.like_qty} viewqty={v.view_qty} />
                {v.linkName ? (
                  <Ig linkName={v.linkName} />
                ) : (
                  <div className="s-recipe-count-user">
                    <div className="s-recipe-count-circle">
                      <img
                        className="b-cover-fit"
                        src={`${API_URL}/member/${v.member_pic}`}
                        alt={v.member_nickname}
                      ></img>
                    </div>
                    <p className="font-400SL">{v.member_nickname}</p>
                  </div>
                )}
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

export default SearchCardRecipe
