import React, { useState } from 'react'
import '../../../style/global.css'
import '../../../style/member.css'
import '../../../style/memberRecipeComment.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import recipePic from '../../../images/member-recipe-comment-ellipse-342.png'
import EditModal from './EditModal'
import DeleteModal from './DeleteModal'

function MemberRecipeCommentRow() {
  const [showEditModal, setShowEditModal] = useState(false)
  const [showDeleteModal, setShowDeleteModal] = useState(false)
  const openEditModal = () => {
    setShowEditModal((prev) => !prev)
  }
  const openDeleteModal = () => {
    setShowDeleteModal((prev) => !prev)
  }
  return (
    <>
      <EditModal
        showEditModal={showEditModal}
        setShowModal={setShowEditModal}
        openEditModal={openEditModal}
      />
      <DeleteModal
        showDeleteModal={showDeleteModal}
        setDeleteModal={setShowDeleteModal}
        openDeleteModal={openDeleteModal}
      />
      <div className="row align-items-center">
        <figure className="col-6 col-md-2 memberRecipeComment-figure">
          <img src={recipePic} alt="麻油蝦" />
          <figcaption className="font-400SL">麻油蝦</figcaption>
        </figure>
        <div className="col-6 col-md-2 memberRecipeComment-score">
          <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
          <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
          <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
          <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
          <FontAwesomeIcon
            icon="star-half-alt"
            size="1x"
            className="icon-star"
          />
          <span className="font-400S">4.5</span>
          <p className="font-400S"> 2021/08/02</p>
        </div>
        <p className="col-8 col-md-6 font-400L memberRecipeComment-text">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis
          molestias temporibus obcaecati, delectus ducimus nesciunt maiores
          labore laudantium ut eaque natus animi! Reprehenderit ipsam, deserunt
          asperiores id, est atque maiores officiis ratione ad tenetur
          perspiciatis aut, architecto possimus laboriosam magnam ullam fuga
        </p>
        <div className="col-4 col-md-2 memberRecipeComment-iconGroup">
          <button onClick={openEditModal}>
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
