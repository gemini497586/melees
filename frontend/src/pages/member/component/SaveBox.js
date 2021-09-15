import React, { useState, useEffect } from 'react'
import { API_URL } from '../../../utils/config'
import SaveBoxDelModal from './SaveBoxDelModal'

function SaveBox(props) {
  const { data, prep } = props

  const [showModal, setShowModal] = useState(false)
  const [boxId, setBoxId] = useState('')

  const openDeleteModal = (id) => {
    setShowModal((prev) => !prev)
    setBoxId(id)
  }

  // 把食材做成查表法
  let prepList = {}
  prep.map((item) => {
    prepList[item.id] = item.name
  })

  // 把圖片名稱的字串轉陣列
  const getImage = (e) => {
    e = e.split(',')
    return e
  }
  // 把原本的陣列->轉成對應的中文名->轉回字串
  const getName = (e) => {
    e = e.split(',')
    e = e.map((item) => {
      return prepList[item]
    })
    e = e.join('/')
    return e
  }

  return (
    <>
      <SaveBoxDelModal
        showModal={showModal}
        openDeleteModal={openDeleteModal}
        id={boxId}
      />
      {data.map((value, index) => {
        return (
          <div className="col-12 col-md-4 member-box-card" key={value.id}>
            <div className="b-page2-box">
              <img
                src="http://localhost:3000/images/box_up.png"
                alt="BoxUp"
                class="b-contain-fit b-page2-up"
              />
              <div className="member-box-indside">
                {getImage(value.box_images).map((v, i) => {
                  return (
                    <img
                      key={i}
                      // className={`b-page2-box-${i}`}
                      src={`${API_URL}/box/${v}`}
                      alt={v}
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
            <div className="member-box-detail">
              <p className="member-box-food font-400L">
                {getName(value.box_ids)}
              </p>
              <ul className="list-unstyled">
                <li className="font-700L member-box-title">
                  總卡路里: {value.cal} 大卡
                </li>
                <li className="font-400S member-box-content">
                  名稱: {value.name}
                </li>
                <li className="font-400S member-box-content">
                  日期: {value.create_at}
                </li>
              </ul>
              <div className="d-flex justify-content-center">
                <button
                  className="b-btn"
                  onClick={() => {
                    openDeleteModal(value.id)
                  }}
                >
                  刪除收藏
                </button>
              </div>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SaveBox
