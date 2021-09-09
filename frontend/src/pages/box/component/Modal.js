import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import Black from '../Black'
import axios from 'axios'
import { API_URL } from '../../../utils/config'

function Modal(props) {
  const [name, setName] = useState('')
  const { modal, closeModal, bento, cal } = props

  // 抓到便當裡食材的id，陣列把它轉成字串
  const bentoId = bento.map((v, i) => {
    return v.id
  })
  const saveId = bentoId.toString()

  const handleSubmit = async (e) => {
    try {
      let res = await axios.post(`${API_URL}/api/box/save`, {
        saveId,
        name,
        cal,
      })
      // console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  return (
    <>
      <Black modal={modal} closeModal={closeModal} />
      <div
        className="b-modal "
        style={{
          transform: modal
            ? 'translate(-50%,-50%)'
            : 'translate(-2000px,-2000px)',
          opacity: modal ? '1' : '0',
        }}
      >
        <button className="b-modal-close " onClick={closeModal}>
          <FontAwesomeIcon icon="times" className="" />
        </button>
        <div className="b-modal-box">
          <div className="col-md-8 b-modal-left">
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
                    <>
                      <img
                        key={v.id}
                        className={`b-page2-box-${i}`}
                        src={`http://localhost:3000/images/${v.inside_image}`}
                        alt={v.name}
                      />
                    </>
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
              <input type="hidden" value={bentoId} />
              <input type="hidden" value={cal} />
              <label htmlFor="boxName" className="font-700M mb-3">
                為你的便當命名
              </label>
              <input
                type="text"
                name="boxName"
                id="boxName"
                value={name}
                className="col-8 mb-3"
                placeholder={name}
                maxlength="6"
                onChange={(e) => {
                  setName(e.target.value)
                }}
              />
              <button type="submit" className="b-btn font-700M">
                確認收藏
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default Modal
