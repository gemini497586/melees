import React from 'react'
import '../style/alertModal.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Black from '../pages/box/Black'
import useAlert from '../utils/useAlert'

function AlertModal() {
  const { message, alertmodal, closeAlertModal } = useAlert()

  return (
    <>
      <Black modal={alertmodal} closeModal={closeAlertModal} />
      {alertmodal ? (
        <div className="alert-modal">
          <div className="alert-modal-icon">
            <FontAwesomeIcon icon="exclamation" className="exclamation" />
          </div>
          <div className="font-700L alert-modal-text">{message}</div>
          <button className="btn-cancel font-700M" onClick={closeAlertModal}>
            確定
          </button>
        </div>
      ) : null}
    </>
  )
}

export default AlertModal
