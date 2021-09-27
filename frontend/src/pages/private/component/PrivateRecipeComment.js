import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../../style/privateRecipeComment.css'
import avatar from '../../../images/default_avatar1.jpg'
import Axios from 'axios'
import { API_URL } from '../../../utils/config'

function PrivateRecipeComment(props) {
  const { id } = props
  const [comment, setComment] = useState([])
  const [memberInfo, setMemberInfo] = useState([])

  useEffect(() => {
    Axios.get(`${API_URL}/private/comment/${id}`).then((res) => {
      setComment(res.data.result)
      setMemberInfo(res.data.memResult)
    })
  }, [])

  const avatar1 = (value, index) => {
    const avatar = []
    for (let i = 0; i < memberInfo.length; i++) {
      if (value.member_id === memberInfo[i].id) {
        avatar.push(
          <>
            <figure className="PrivateRecipeComment-avatar">
              <img
                src={`${API_URL}/member/${memberInfo[i].picture}`}
                className="b-cover-fit"
                alt=""
              />
            </figure>
            <span className="font-700L PrivateRecipeComment-name">
              {memberInfo[i].nickname}
            </span>
          </>
        )
      }
    }
    return avatar
  }
  // 星星評分數
  const starNum = (index) => {
    const row = []
    let solid = Math.floor(comment[index].star_rate)
    let empty = 5 - Math.ceil(comment[index].star_rate)
    let half = 5 - solid - empty
    for (let i = 0; i < solid; i++) {
      row.push(<FontAwesomeIcon icon="star" />)
    }
    for (let j = 0; j < half; j++) {
      row.push(<FontAwesomeIcon icon="star-half-alt" />)
    }
    for (let k = 0; k < empty; k++) {
      row.push(<FontAwesomeIcon icon={['far', 'star']} />)
    }
    return row
  }
  return (
    <>
      <div className="container">
        <div className="row">
          {comment.map((value, index) => {
            return (
              <div className="col-12 col-md-3">
                <div className="PrivateRecipeComment-container">
                  <div className="d-flex">{avatar1(value, index)}</div>
                  <div className="d-flex PrivateRecipeComment-star">
                    {starNum(index)}

                    <span className="font-700S PrivateRecipeComment-date">
                      {value.comment_time}
                    </span>
                  </div>
                  <span className="font-400SL PrivateRecipeComment">
                    {value.comment}
                  </span>
                  <div className="d-flex PrivateRecipeComment-more justify-content-end">
                    <span className="font-400SS">看更多→</span>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </>
  )
}

export default PrivateRecipeComment
