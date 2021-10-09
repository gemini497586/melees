import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import Black from '../Black'
import axios from 'axios'
import { API_URL } from '../../../utils/config'
import Swal from 'sweetalert2'

function Modal(props) {
  const [name, setName] = useState('')
  const [error, setError] = useState('')
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

  // 抓到便當裡食材的id
  const bentoId = bento.map((item) => {
    return item.id
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    let trimName = name.trim()
    if (trimName === '') {
      setError('請為您的便當命名')
      setName('')
      return
    }
    try {
      await axios.post(
        `${API_URL}/box/savebox`,
        {
          name,
          cal,
          bentoId,
        },
        { withCredentials: true }
      )
      setShowModal(false)
      setBento([])
      setCal(0)
      setTableList([])
      setName('')
      setError('')
      Swal.fire({
        icon: 'success',
        title: '便當已收藏',
        text: '可至會員專區查詢',
        confirmButtonText: '確認',
        confirmButtonColor: 'var(--color-primary)',
      })
    } catch (e) {
      console.log('e', e.response)
    }
  }
  const handleChange = (e) => {
    setError('')
  }

  return (
    <>
      <Black modal={showModal} closeModal={openModal} />
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
                  className="b-contain-fit b-page2-up"
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
                  className="b-contain-fit b-page2-down"
                />
              </div>
            </div>
            <div className="col-md-4 b-modal-right">
              <form onSubmit={handleSubmit} onChange={handleChange}>
                <input type="hidden" value={bentoId} />
                <input type="hidden" value={cal} />
                <label htmlFor="boxName" className="font-700M">
                  為你的便當命名
                </label>
                {error ? (
                  <div className="b-page1-errorMsg font-400S">{error}</div>
                ) : (
                  <div className="b-modal-note font-400S">*最長八個字</div>
                )}
                <div>
                  <input
                    type="text"
                    name="boxName"
                    id="boxName"
                    value={name}
                    className="col-8 mb-3"
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
      ) : (
        <></>
      )}
    </>
  )
}

export default Modal
