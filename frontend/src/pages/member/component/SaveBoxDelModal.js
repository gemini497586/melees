import React from 'react'
import Black from '../../box/Black'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { API_URL } from '../../../utils/config'
import Axios from 'axios'

function SaveBoxDelModal(props) {
  const { showModal, openDeleteModal, id } = props

  const handleDelete = async (e) => {
    // e.preventDefault()
    // console.log('把我刪除 ',id)
    try {
      let res = await Axios.post(
        `${API_URL}/box/delete`,
        {
          id,
        },
        { withCredentials: true }
      )
      // console.log(res)
    } catch (e) {
      console.log(e)
    }
  }

  return (
    <>
      <Black modal={showModal} closeModal={openDeleteModal} />
      {showModal ? (
        <div className="modal-edit-recipeComment-wrapper-forDelete">
          <button className="b-modal-close " onClick={openDeleteModal}>
            <FontAwesomeIcon icon="times" />
          </button>

          <div className="icon-danger member-box-icon">
            <FontAwesomeIcon icon="exclamation" className="exclamation" />
          </div>
          <h1>確定要刪除嗎</h1>
          <p className="font-400M">確定要刪除這個便當嗎</p>
          <form onSubmit={handleDelete}>
            <button
              className="btn-cancel"
              onClick={() => {
                openDeleteModal(id)
              }}
            >
              取消
            </button>
            <button type="submit" className="btn-delete">
              確定刪除
            </button>
          </form>
        </div>
      ) : null}
    </>
  )
}

export default SaveBoxDelModal
