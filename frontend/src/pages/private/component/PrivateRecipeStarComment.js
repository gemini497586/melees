import React, { useState, useContext } from 'react'
import Axios from 'axios'
import '../../../style/privateRecipeStarComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Redirect, useLocation } from 'react-router-dom'
import { HandleCart } from '../../../utils/HandleCart'

import { API_URL } from '../../../utils/config'
import default_avatar from '../../../images/default_member_avatar.png'
import Swal from 'sweetalert2'

const colors = {
  color: 'var(--color-primary-A)',
}

function PrivateRecipeStarComment(props) {
  const { id, setReRender, avatar } = props
  const [comment, setComment] = useState('')
  const [currentValue, setCurrentValue] = useState(0)
  const [hoverValue, setHoverValue] = useState(undefined)
  const [redirect, setRedirect] = useState(false)
  const location = useLocation()
  const stars = Array(5).fill(0)
  const { login } = useContext(HandleCart)

  const handleClick = (rate) => {
    setCurrentValue(rate)
  }

  const handleMouseOver = (rate) => {
    setHoverValue(rate)
  }

  const handleMouseLeave = () => {
    setHoverValue(undefined)
  }
  // 判斷是否有登入
  // 沒有 -> 跳去登入畫面
  // 有 -> 打開modal
  const handleLogin = () => {
    if (login) {
    } else {
      setRedirect(true)
    }
  }

  const addComment = async (e) => {
    e.preventDefault()
    let trim_comment = comment.trim()
    if (trim_comment === '' || currentValue === 0) {
      Swal.fire({
        text: '尚未輸入評論喔!',
        icon: 'warning',
        confirmButtonText: '確定',
        confirmButtonColor: '#fe9900',
      })
      setComment('')
      return
    }

    try {
      let res = await Axios.post(
        `${API_URL}/private/comment/upload/${id}`,
        {
          comment: comment,
          starValue: currentValue,
        },
        { withCredentials: true }
      )
      setReRender((prev) => !prev)
      setCurrentValue(0)
      setComment('')
      if (res.status === 202) {
        Swal.fire({
          text: '新增成功!',
          icon: 'success',
          timer: 1500,
          confirmButtonText: '確定',
          confirmButtonColor: '#fe9900',
        })
      }
    } catch (e) {
      console.log(e)
    }
  }
  return (
    <>
      {redirect ? (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location.pathname },
          }}
        />
      ) : null}
      <div className="col-6">
        <form action="" onSubmit={addComment}>
          <div className="PrivateRecipeStarComment">
            <div className="d-flex">
              <figure className="PrivateRecipeStarComment-figure">
                <img
                  src={login ? `${avatar}` : default_avatar}
                  className="PrivateRecipeStarComment-img"
                  alt=""
                />
              </figure>
              <div className="flex-column">
                <input
                  className="PrivateRecipeStarComment-comment"
                  type="text"
                  placeholder="留下您的評論"
                  value={comment}
                  maxLength={60}
                  onChange={(e) => {
                    setComment(e.target.value)
                  }}
                />
                <div className="d-flex justify-content-between">
                  <div className="PrivateRecipeStarComment-star">
                    {stars.map((value, index) => {
                      return (
                        <FontAwesomeIcon
                          icon={
                            (hoverValue || currentValue) > index
                              ? 'star'
                              : ['far', 'star']
                          }
                          size="2x"
                          key={index}
                          style={colors}
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

                  <button
                    className="PrivateRecipeStarComment-btn font-700M"
                    onClick={handleLogin}
                  >
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
