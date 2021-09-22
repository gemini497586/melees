import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import Black from '../Black'
import axios from 'axios'
import { API_URL } from '../../../utils/config'
import useAlert from '../../../utils/useAlert'
import AlertModal from '../../../component/AlertModal'

function Modal(props) {
  const [name, setName] = useState('')
  const { openAlertModal, message, alertmodal } = useAlert()

  const {
    showModal,
    setShowModal,
    openModal,
    bento,
    setBento,
    cal,
    setCal,
    setTableList,
  } = props

  // 抓到便當裡食材的id，陣列把它轉成字串
  const bentoId = bento.map((item) => {
    return item.id
  })
  const saveId = bentoId.toString()

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let res = await axios.post(
        `${API_URL}/member/savebox`,
        {
          saveId,
          name,
          cal,
        },
        { withCredentials: true }
      )
      setShowModal(false)
      setBento([])
      setCal(0)
      setTableList([])
      setName('')
      openAlertModal('便當已收藏，可至會員專區查詢')
      // console.log(res)
    } catch (e) {
      console.log('e', e.response)
      // alert(e.response.data.message)
    }
  }

  return (
    <>
      <Black modal={showModal} closeModal={openModal} />
      <AlertModal
        message={message}
        alertmodal={alertmodal}
        openAlertModal={openAlertModal}
      />
      {showModal ? (
        <div className="b-modal">
          <button className="b-modal-close" onClick={openModal}>
            <FontAwesomeIcon icon="times" />
          </button>
          <div className="b-modal-box">
            <div className="col-md-6 b-modal-left">
              <div className="b-modal-name">
                <div className="font-700L text-center">{name}</div>
              </div>
              <div className="b-page2-box">
                <img
                  src="http://localhost:3000/images/box_up.png"
                  alt="BoxUp"
                  class="b-contain-fit b-page2-up"
                />
                <div className="b-page2-indside">
                  {bento.map((v, i) => {
                    return (
                      <img
                        key={v.id}
                        src={`${API_URL}/box/${v.inside_image}`}
                        alt={v.name}
                      />
                    )
                  })}
                </div>
                <img
                  src="http://localhost:3000/images/box_down.png"
                  alt="BoxDown"
                  class="b-contain-fit b-page2-down"
                />
              </div>
            </div>
            <div className="col-md-4 b-modal-right">
              <form onSubmit={handleSubmit}>
                <input type="hidden" value={saveId} />
                <input type="hidden" value={cal} />
                <label htmlFor="boxName" className="font-700M">
                  為你的便當命名
                </label>
                <div className="b-modal-note font-400SS">*最長八個字</div>
                <div>
                  <input
                    type="text"
                    name="boxName"
                    id="boxName"
                    value={name}
                    className="col-8 mb-3"
                    placeholder={name}
                    maxLength="8"
                    onChange={(e) => {
                      setName(e.target.value)
                    }}
                  />
                </div>
                <button type="submit" className="b-btn font-700M">
                  確認收藏
                </button>
              </form>
            </div>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default Modal
