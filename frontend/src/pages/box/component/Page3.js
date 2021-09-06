import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Modal from '../Modal'
import Table from '../../../component/Table'
import Man from '../../../images/box_man.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'

function Page3(props) {
  const { total, tdee, unitList } = props
  // 彈出視窗
  const [modal, setModal] = useState(false)
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }

  return (
    <>
      <div className="container b-step">
        <h4 className="b-title">3. 計算便當卡路里</h4>
        <div className="b-page3">
          {/* 左邊 */}
          <div className="col-12 col-md-6 b-page3-left">
            <div className="b-page3-text pb-2">
              <h6 className="pb-2">
                便當總卡路里: {total > 0 ? total + ' 大卡' : ''}
              </h6>
              <h5>你的每日總消耗熱量: {tdee > 0 ? tdee + ' 大卡' : ''} </h5>
            </div>
            <div className="b-page3-image b-page3-man">
              <img className="b-contain-fit" src={Man} alt="Man" />
            </div>
            <div className="b-page3-btn">
              <button className="b-btn font-700M me-2" onClick={openModal}>
                <FontAwesomeIcon icon="bookmark" className="me-2" />
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
      <Modal modal={modal} closeModal={closeModal} />
    </>
  )
}

export default Page3
