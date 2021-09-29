import React from 'react'
import Black from '../../box/Black'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { API_URL } from '../../../utils/config'
import Axios from 'axios'

function SaveBoxDelModal(props) {
  const { showModal, setShowModal, openDeleteModal, id, setDisplayData } = props

  // 刪除收藏
  const handleDelete = async (id) => {
    // e.preventDefault()
    try {
      let res = await Axios.post(
        `${API_URL}/member/deletesavebox`,
        {
          id,
        },
        { withCredentials: true }
      )
      setShowModal((prev) => !prev)

      // 刪除後，重新抓原本的data
      let res2 = await Axios.get(`${API_URL}/member/readsavebox`, {
        withCredentials: true,
      })
      let data = res2.data.result
      setDisplayData(data)
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
          <button
            className="btn-cancel"
            onClick={() => {
              openDeleteModal(id)
            }}
          >
            取消
          </button>
          <button
            type="submit"
            className="btn-delete"
            onClick={() => {
              handleDelete(id)
            }}
          >
            確定刪除
          </button>
        </div>
      ) : null}
    </>
  )
}

export default SaveBoxDelModal
