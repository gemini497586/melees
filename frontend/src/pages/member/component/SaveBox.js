import React, { useState, useEffect } from 'react'
import { API_URL } from '../../../utils/config'
import SaveBoxDelModal from './SaveBoxDelModal'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function SaveBox(props) {
  const { data, prepList, setDisplayData } = props

  const [showModal, setShowModal] = useState(false)
  const [boxId, setBoxId] = useState('')

  const openDeleteModal = (id) => {
    setShowModal((prev) => !prev)
    setBoxId(id)
    console.log(id)
  }

  // 把原本的陣列->轉成對應的圖片陣列
  const getImage = (e) => {
    e = e.split(',')
    if (prepList) {
      e = e.map((item) => {
        return prepList[item].inside_image
      })
    }
    return e
  }

  // 把原本的陣列->轉成對應的中文名->轉回字串
  const getName = (e) => {
    e = e.split(',')
    if (prepList) {
      e = e.map((item) => {
        return prepList[item].name
      })
    }
    e = e.join('/')
    return e
  }

  return (
    <>
      <SaveBoxDelModal
        showModal={showModal}
        setShowModal={setShowModal}
        openDeleteModal={openDeleteModal}
        id={boxId}
        setDisplayData={setDisplayData}
      />
      {data.map((value) => {
        return (
          <div
            className="col-12 col-md-4 member-box-card"
            key={value.id}
            data-aos="zoom-in"
          >
            <div className="b-page2-box">
              <img
                src="http://localhost:3000/images/box_up.png"
                alt="BoxUp"
                className="b-contain-fit b-page2-up"
              />
              <div className="member-box-indside">
                {getImage(value.box_ids).map((v, i) => {
                  return <img key={i} src={`${API_URL}/box/${v}`} alt={v} />
                })}
              </div>
              <img
                src="http://localhost:3000/images/box_down.png"
                alt="BoxDown"
                className="b-contain-fit b-page2-down"
              />
            </div>
            <div className="member-box-detail">
              <p className="member-box-prep font-400M">
                {getName(value.box_ids)}
              </p>
              <div className="member-box-content">
                <ul className="list-unstyled">
                  <li className="font-700L member-box-cal">
                    總卡路里: {value.cal} 大卡
                  </li>
                  <li className="font-400S">名稱: {value.name}</li>
                  <li className="font-400S">日期: {value.create_at}</li>
                </ul>
                <button
                  className="member-box-del"
                  onClick={() => {
                    openDeleteModal(value.id)
                  }}
                >
                  <FontAwesomeIcon icon="trash-alt" />
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
