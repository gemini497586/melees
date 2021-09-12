import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from './Modal'
import Table from '../../../component/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'

function Page3(props) {
  const { cal, tdee, unitList, bento } = props
  // 彈出視窗
  const [modal, setModal] = useState(false)
  const openModal = () => {
    if (bento.length > 0) {
      setModal(true)
    } else {
      alert('請先至上方點選食材')
    }
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <Modal modal={modal} closeModal={closeModal} bento={bento} cal={cal} />

      <div className="container b-step">
        <h4 className="b-title">3. 計算便當卡路里</h4>
        <div className="b-page3">
          {/* 左邊 */}
          <div className="col-12 col-md-6 b-page3-left">
            <div className="b-page3-text font-700M pb-2">
              <p>便當總卡路里: {cal > 0 ? cal + ' 大卡' : ''}</p>
              <p>你的每日總消耗熱量: {tdee > 0 ? tdee + ' 大卡' : ''} </p>
            </div>
            <div className="b-page3-man">
              <img
                className="b-contain-fit"
                src="http://localhost:3000/images/man.png"
                alt="Man"
              />
            </div>
            <div className="b-page3-btn">
              <button className="b-btn font-700M me-2" onClick={openModal}>
                <FontAwesomeIcon icon={['far', 'bookmark']} className="me-2" />
                收藏便當
              </button>
              <Link to="#">
                <button className="b-btnblue font-700M">
                  <FontAwesomeIcon
                    icon={['fab', 'facebook']}
                    className="me-2"
                  />
                  分享便當
                </button>
              </Link>
            </div>
          </div>
          {/* 右邊 */}
          <div className="col-12 col-md-5 b-page3-right">
            <Table unitList={unitList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page3
