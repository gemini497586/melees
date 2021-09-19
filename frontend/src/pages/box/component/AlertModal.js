import React from 'react'
import '../../../style/alertModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Black from '../Black'

function AlertModal(props) {
  const { message, alertmodal, openAlertModal } = props
  return (
    <>
      <Black modal={alertmodal} closeModal={openAlertModal} />
      {alertmodal ? (
        <div className="alert-modal">
          <div className="alert-modal-icon">
            <FontAwesomeIcon icon="exclamation" className="exclamation" />
          </div>
          <div className="font-700L alert-modal-text">{message}</div>
          <button className="btn-cancel font-700M" onClick={openAlertModal}>
            確定
          </button>
        </div>
      ) : null}
    </>
  )
}

export default AlertModal
