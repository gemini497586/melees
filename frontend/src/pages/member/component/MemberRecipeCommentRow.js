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
import Swal from 'sweetalert2'

const colors = {
  primary: '#fe9900',
  secondary: '#413d3c',
  primaryA: '#ffcf0d',
  primaryE: '#ff590d',
  redC: '#f5524f',
  orangelee: '#ffdda9',
  blueB: '#0c4fe8',
  blueC: '#199cff',
  brownD: '#574c4b',
  FBblue: '#1877f2',
  grey300: '#f0f0f0',
  grey500: '#c2c2c2',
  grey800: '#606060',
  grey900: '#3c3c3c',
  white: '#ffffff',
}

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

  const openDeleteModalSwal = () => {
    Swal.fire({
      icon: 'warning',
      iconColor: colors.redC,
      title: '確定要刪除嗎?',
      text: '此評論將被刪除，無法回復!',
      showCancelButton: true,
      confirmButtonText: '刪除',
      confirmButtonColor: colors.redC,
      cancelButtonText: '取消',
      cancelButtonColor: colors.grey500,
    }).then((result) => {
      if (result.isConfirmed) {
        const deleteAPI = async () => {
          let id = recipeData.id
          try {
            let response = await axios.post(
              `${API_URL}/member/recipecomment/modal/delete`,
              { id },
              {
                // 設定可以跨源送 cookie
                withCredentials: true,
              }
            )
            if (response) {
              console.log('Delete id: ' + id + ' successful')
              Swal.fire({
                icon: 'success',
                title: '刪除成功！',
                confirmButtonColor: colors.primary,
                confirmButtonText: '確認',
              })
            }
            setReRender(true)
          } catch (err) {
            console.error(err)
            Swal.fire({
              icon: 'error',
              title: '發生不明錯誤！',
              text: '請聯繫 MEELEs 客服，我們將儘速處理!',
              confirmButtonColor: colors.primary,
              confirmButtonText: '確認',
            })
          }
        }
        deleteAPI()
      }
    })
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
          <button onClick={openDeleteModalSwal}>
            <FontAwesomeIcon icon="trash-alt" size="1x" className="icon-item" />
            Swal
          </button>
        </div>
      </div>
    </>
  )
}

export default MemberRecipeCommentRow
