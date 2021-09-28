import { useEffect, useState } from 'react'
import '../../../style/memberModal.css'
import CardPrivateRecipeforMember from './CardPrivateRecipeforMember'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import avatar from '../../../images/Avatar.png'
import Black from '../../box/Black'
import axios from 'axios'
// import food from '../../../images/default_food2.jpg'
import author_avatar from '../../../images/default_avatar1.jpg'
import { API_URL } from '../../../utils/config'

function EditModal(props) {
  const { showEditModal, openEditModal, recipeDataDetails, starScore } = props
  const [newComment, setNewComment] = useState()
  // const [newStarScore, setNewStarScore] = useState()
  const starRow = Array(5).fill(0)
  const [current, setCurrent] = useState(0)
  const [hover, setHover] = useState(undefined)
  const starClick = (index) => {
    setCurrent(index)
  }
  const starMouseOver = (index) => {
    setHover(index)
  }
  const starMouseLeave = () => {
    setHover(undefined)
  }
  const handleCancelEdit = () => {
    // 清除：編輯中評論，並關閉 Modal
    setNewComment('')
    openEditModal()
  }
  const handleSubmit = (e) => {
    e.preventDefault()
    try {
      // let data = {
      //   id: recipeDataDetails.id,
      //   newComment: newComment,
      //   starScore: newStarScore,
      // }
      // let response = await axios.post(`${API_URL}/member/XXXXXXX`, data, {
      //   // 設定可以跨源送 cookie
      //   withCredentials: true,
      // })
      // if (response) {
      console.log('Edit id: ' + recipeDataDetails.id + ' successful')
      openEditModal()
      // }
    } catch (err) {
      // 刪除失敗
    }
  }

  useEffect(() => {
    setCurrent(recipeDataDetails.member_star_rate)
  }, [recipeDataDetails])

  return (
    <>
      <Black modal={showEditModal} closeModal={openEditModal} />
      {showEditModal ? (
        <div class="modal-edit-recipeComment-wrapper">
          <button className="b-modal-close " onClick={handleCancelEdit}>
            <FontAwesomeIcon icon="times" className="" />
          </button>
          <CardPrivateRecipeforMember
            recipeDataDetails={recipeDataDetails}
            starScore={starScore}
          />
          <div className="modal-edit-recipeComment-comment">
            <div className="modal-edit-recipeComment-title">
              <div className="modal-edit-recipeComment-title-shadow"></div>
              <h3>評論</h3>
            </div>
            <figure>
              <img
                src={`${API_URL}/member/${recipeDataDetails.member_avatar}`}
                alt="avatar"
              />
              <figcaption>{recipeDataDetails.member_name}</figcaption>
            </figure>
            <div className="modal-edit-recipeComment-starScore">
              {starRow.map((value, index) => {
                return (
                  <FontAwesomeIcon
                    key={index}
                    className="icon-star"
                    icon={(hover || current) > index ? 'star' : ['far', 'star']}
                    onClick={() => {
                      starClick(index + 1)
                    }}
                    onMouseOver={() => {
                      starMouseOver(index + 1)
                    }}
                    onMouseLeave={starMouseLeave}
                  />
                )
              })}
              <span className="font-400S">
                {current ? current : recipeDataDetails.member_star_rate}
              </span>
            </div>
            <form onSubmit={handleSubmit}>
              <textarea
                className="modal-edit-recipeComment-text"
                value={newComment ? newComment : recipeDataDetails.comment}
                onChange={(e) => {
                  setNewComment(e.target.value)
                }}
              />
              <button
                className="modal-edit-recipeComment-editBtn"
                type="submit"
              >
                修改
              </button>
            </form>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default EditModal
