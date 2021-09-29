import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import '../../../style/privateRecipeStarComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { useParams } from 'react-router'
import { API_URL } from '../../../utils/config'
import avatar from '../../../images/default_avatar1.jpg'

const colors = {
  yellow: '#ffcf0d',
  grey: '#c2c2c2',
}

function PrivateRecipeStarComment() {
  const { id } = useParams()
  const stars = Array(5).fill(0)
  const [comment, setComment] = useState('')
  const [currentValue, setCurrentValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)

  const handleClick = (index) => {
    setCurrentValue(index)
  }

  const handleMouseOver = (index) => {
    setHoverValue(index)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }

  const addComment = async (e) => {
    e.preventDefault()
    try {
      let res = await Axios.post(
        `${API_URL}/private/comment/upload/${id}`,
        {
          comment: comment,
          starValue: currentValue,
        },
        { withCredentials: true }
      )
      console.log(res)
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      <div className="col-6">
        <form action="" onSubmit={addComment}>
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
                    {stars.map((value, index) => {
                      return (
                        <FontAwesomeIcon
                          icon="star"
                          size="2x"
                          key={index}
                          color={
                            (hoverValue || currentValue) > index
                              ? colors.yellow
                              : colors.grey
                          }
                          onClick={() => {
                            handleClick(index + 1)
                          }}
                          onMouseOver={() => {
                            handleMouseOver(index + 1)
                          }}
                          onMouseLeave={handleMouseLeave}
                        />
                      )
                    })}
                  </div>

                  <button className="PrivateRecipeStarComment-btn font-700M">
                    評論
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default PrivateRecipeStarComment
