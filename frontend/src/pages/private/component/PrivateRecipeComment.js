import React, { useEffect, useState } from 'react'
import '../../../style/privateRecipeComment.css'
import avatar from '../../../images/default_avatar1.jpg'
import Axios from 'axios'

function PrivateRecipeComment(props) {
  const { id } = props
  const [comment, setComment] = useState([])

  useEffect(() => {
    Axios.get(`http://localhost:3001/api/recipe/comment/${id}`).then((res) => {
      setComment(res.data)
      console.log(comment)
    })
  }, [])

  return (
    <>
      <div className="container">
        <div className="row">
          {comment.map((value, index) => {
            return (
              <div className="col-12 col-md-3">
                <div className="PrivateRecipeComment-container">
                  <div className="d-flex">
                    <figure className="PrivateRecipeComment-avatar">
                      <img src={avatar} className="h-100" alt="" />
                    </figure>
                    <span className="font-700L PrivateRecipeComment-name">
                      陳亮亮
                    </span>
                  </div>
                  <div className="d-flex PrivateRecipeComment-star">
                    <i className="fas fa-star fa-lg"></i>
                    <i className="fas fa-star fa-lg"></i>
                    <i className="fas fa-star fa-lg"></i>
                    <i className="fas fa-star fa-lg"></i>
                    <i className="fas fa-star fa-lg"></i>
                    <span className="font-700S PrivateRecipeComment-date">
                      {value.comment_time}
                    </span>
                  </div>
                  <div className="PrivateRecipeComment">
                    <span className="font-400SL">{value.comment}</span>
                  </div>
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
