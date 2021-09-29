import { useState } from 'react'
import '../../../style/global.css'
import '../../../style/member.css'
import '../../../style/memberRecipeComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'
import { API_URL } from '../../../utils/config'
import axios from 'axios'

function MemberRecipeCommentRow(props) {
  const { recipeData, setReRender } = props
  const [recipeDataDetails, setRecipeDataDetails] = useState({})
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const openEditModal = () => {
    setShowEditModal((prev) => !prev)
  }
  const openDeleteModal = () => {
    setShowDeleteModal((prev) => !prev)
  }

  const starScore = (star_rate) => {
    const starRow = []
    let solidStar = Math.floor(star_rate)
    let emptyStar = 5 - Math.ceil(star_rate)
    let halfStar = 5 - solidStar - emptyStar
    for (let i = 0; i < solidStar; i++) {
      starRow.push(<FontAwesomeIcon icon="star" className="icon-star" />)
    }
    if (halfStar > 0) {
      starRow.push(
        <FontAwesomeIcon icon="star-half-alt" className="icon-star" />
      )
    }
    for (let j = 0; j < emptyStar; j++) {
      starRow.push(
        <FontAwesomeIcon icon={['far', 'star']} className="icon-star" />
      )
    }
    return starRow
  }

  const recipeDetailsAPI = async () => {
    console.log(
      `recipe_id: ${recipeData.recipe_id} have called recipeDetailsAPI`
    )
    try {
      let recipe_id = recipeData.recipe_id
      let response = await axios.post(
        `${API_URL}/member/recipecomment/modal/read`,
        { recipe_id },
        {
          // 設定可以跨源送 cookie
          withCredentials: true,
        }
      )
      // console.log(response.data)
      setRecipeDataDetails({
        ...recipeData,
        member_avatar: response.data.member_avatar,
        member_name: response.data.member_name,
        member_like: response.data.member_like,
        member_save: response.data.member_save,
        recipe_author_avatar: response.data.recipe_author_avatar,
        like_qty: response.data.like_qty,
        view_qty: response.data.view_qty,
      })
    } catch (err) {
      console.error(err)
    }
  }

  return (
    <>
      <EditModal
        showEditModal={showEditModal}
        setShowModal={setShowEditModal}
        openEditModal={openEditModal}
        setReRender={setReRender}
        recipeDataDetails={recipeDataDetails}
        starScore={starScore}
      />
      <DeleteModal
        showDeleteModal={showDeleteModal}
        setDeleteModal={setShowDeleteModal}
        openDeleteModal={openDeleteModal}
        setReRender={setReRender}
        id={recipeData.id}
      />
      <div className="row align-items-center">
        <figure className="col-6 col-md-2 memberRecipeComment-figure">
          <img
            src={`${API_URL}/private/${recipeData.recipe_img}`}
            alt={recipeData.recipe_name}
          />
          <figcaption className="font-400SL">
            {recipeData.recipe_name}
          </figcaption>
        </figure>
        <div className="col-6 col-md-2 memberRecipeComment-score">
          {starScore(recipeData.recipe_star_rate)}
          <span className="font-400S">{recipeData.recipe_star_rate}</span>
          <p className="font-400S">{recipeData.comment_time}</p>
        </div>
        <p className="col-8 col-md-6 font-400L memberRecipeComment-text">
          {recipeData.comment}
        </p>
        <div className="col-4 col-md-2 memberRecipeComment-iconGroup">
          <button
            onClick={() => {
              recipeDetailsAPI()
              openEditModal()
            }}
          >
            <FontAwesomeIcon icon="pen" size="1x" className="icon-item" />
          </button>
          <button onClick={openDeleteModal}>
            <FontAwesomeIcon icon="trash-alt" size="1x" className="icon-item" />
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberRecipeCommentRow
