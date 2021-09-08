import React from 'react'
import '../../../style/memberModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import Black from '../../box/Black'
import dangerIcon from '../../../images/danger-icon-for-delete-modal.png'

function DeleteModal(props) {
  const { showDeleteModal, openDeleteModal } = props
  return (
    <>
      <Black modal={showDeleteModal} closeModal={openDeleteModal} />
      {showDeleteModal ? (
        <div className="modal-edit-recipeComment-wrapper-forDelete">
          <button className="b-modal-close " onClick={openDeleteModal}>
            <FontAwesomeIcon icon="times" className="" />
          </button>
          <div className="icon-danger">
            <img src={dangerIcon} alt="danger" />
          </div>
          <h1>確定要刪除嗎</h1>
          <p className="font-400M">確定要刪除這筆評論嗎</p>
          <button className="btn-cancel" onClick={openDeleteModal}>取消</button>
          <button className="btn-delete">確定刪除</button>
        </div>
      ) : null}
    </>
  )
}

export default DeleteModal
