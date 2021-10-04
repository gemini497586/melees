import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import '../../../style/privateRecipeComment.css'
import { API_URL } from '../../../utils/config'

function PrivateRecipeComment(props) {
  const { comment } = props

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
                  <div className="d-flex">
                    {/* {avatar1(value, index)} */}
                    <figure className="PrivateRecipeComment-avatar">
                      <img
                        src={`${API_URL}/member/${value.picture}`}
                        className="b-cover-fit"
                        alt=""
                      />
                    </figure>
                    <span className="font-700L PrivateRecipeComment-name">
                      {value.nickname}
                    </span>
                  </div>
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
