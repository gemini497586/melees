import React from 'react'
import '../../../style/memberModal.css'
import CardPrivateRecipeforMember from './CardPrivateRecipeforMember'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import avatar from '../../../images/Avatar.png'
import Black from '../../box/Black'

function EditModal(props) {
  const { showEditModal, openEditModal } = props
  return (
    <>
      <Black modal={showEditModal} closeModal={openEditModal} />
      {showEditModal ? (
        <div class="modal-edit-recipeComment-wrapper">
          <button className="b-modal-close " onClick={openEditModal}>
            <FontAwesomeIcon icon="times" className="" />
          </button>
          <CardPrivateRecipeforMember />
          <div className="modal-edit-recipeComment-comment">
            <div className="modal-edit-recipeComment-title">
              <div className="modal-edit-recipeComment-title-shadow"></div>
              <h3>評論</h3>
            </div>
            <figure>
              <img src={avatar} alt="avatar" />
              <figcaption>weitung</figcaption>
            </figure>
            <div className="modal-edit-recipeComment-starScore">
              <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
              <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
              <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
              <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
              <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
              <span className="font-400S">5</span>
            </div>
            <input className="modal-edit-recipeComment-text" type="textarea" />
            <button className="modal-edit-recipeComment-editBtn">修改</button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default EditModal
