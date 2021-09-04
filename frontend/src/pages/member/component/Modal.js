import React from 'react'
import '../../../style/memberModal.css'
import CardPrivateRecipeforMember from './CardPrivateRecipeforMember'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'

function Modal(props) {
  const { showModal, setShowModal } = props
  return (
    <>
      {showModal ? (
        <div class="modal-edit-recipeComment-wrapper">
          <CardPrivateRecipeforMember />
          <div className="modal-edit-recipeComment-comment">
            <h3>評論</h3>
            <figure>
              <img src="" alt="" />
              <figcaption>weitung</figcaption>
            </figure>
            <div>
              <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
              <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
              <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
              <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
              <FontAwesomeIcon icon="star" size="1x" className="icon-star" />
              <span className="font-400S">5</span>
            </div>
            <input type="textarea" />
            <button>修改</button>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal
