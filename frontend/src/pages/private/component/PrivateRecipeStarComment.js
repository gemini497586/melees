import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../../style/privateRecipeStarComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useParams } from 'react-router'
import { API_URL } from '../../../utils/config'
import avatar from '../../../images/default_avatar1.jpg'

function PrivateRecipeStarComment(props) {
  const { id } = useParams()
  const [comment, setComment] = useState('')

  const starRate = () => {
    console.log('hello')
  }
  const addComment = async () => {
    try {
      let res = Axios.post(
        `${API_URL}/private/comment/upload/${id}`,
        {
          comment: comment,
        },
        { withCredentials: true }
      )
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <div className="col-6">
        <div className="PrivateRecipeStarComment">
          <div className="d-flex">
            <figure className="PrivateRecipeStarComment-figure">
              <img
                src={avatar}
                className="PrivateRecipeStarComment-img"
                alt=""
              />
            </figure>
            <div className="flex-column">
              <input
                className="PrivateRecipeStarComment-comment"
                type="text"
                placeholder="留下您的評論"
                onChange={(e) => {
                  setComment(e.target.value)
                }}
              />
              <div className="d-flex justify-content-between">
                <div className="PrivateRecipeStarComment-star">
                  <FontAwesomeIcon
                    icon="star"
                    size="2x"
                    onClick={() => {
                      starRate()
                    }}
                  />
                  <FontAwesomeIcon icon="star" size="2x" />
                  <FontAwesomeIcon icon="star" size="2x" />
                  <FontAwesomeIcon icon="star" size="2x" />
                  <FontAwesomeIcon icon="star" size="2x" />
                </div>

                <button
                  className="PrivateRecipeStarComment-btn font-700M"
                  onClick={() => {
                    addComment()
                  }}
                >
                  評論
                </button>
              </div>
              {comment}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
export default PrivateRecipeStarComment
