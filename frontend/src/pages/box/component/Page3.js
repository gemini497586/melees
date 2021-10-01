import React, { useState, useContext } from 'react'
import Modal from './Modal'
import Table from '../../../component/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { Redirect, useLocation } from 'react-router-dom'
import { HandleCart } from '../../../utils/HandleCart'
import Swal from 'sweetalert2'

function Page3(props) {
  const { cal, setCal, tdee, tableList, setTableList, bento, setBento } = props
  const location = useLocation()
  const [redirect, setRedirect] = useState(false)
  const { login } = useContext(HandleCart)
  const [showModal, setShowModal] = useState(false)
  const openModal = () => {
    if (bento.length > 0) {
      setShowModal((prev) => !prev)
    } else {
      Swal.fire({
        title: '請先至上方挑選至少一樣食材',
        confirmButtonColor: 'var(--color-primary)',
      })
    }
  }

  // 判斷是否有登入
  // 沒有 -> 跳去登入畫面
  // 有 -> 打開modal
  const handleLogin = () => {
    if (login) {
      openModal()
    } else {
      setRedirect(true)
    }
  }

  return (
    <>
      {redirect ? (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location.pathname },
          }}
        />
      ) : null}
      <Modal
        showModal={showModal}
        setShowModal={setShowModal}
        openModal={openModal}
        bento={bento}
        setBento={setBento}
        cal={cal}
        setCal={setCal}
        setTableList={setTableList}
      />
      <div className="container b-step">
        <h4 data-aos="fade-right" className="b-title">
          3. 計算便當卡路里
        </h4>
        <div className="b-page3">
          {/* 左邊 */}
          <div className="col-12 col-md-6 b-page3-left">
            <div className="b-page3-text font-700L pb-2">
              <div className="mb-2">
                便當總卡路里: {cal > 0 ? cal + ' 大卡' : ''}
              </div>
              <div>你的每日總消耗熱量: {tdee > 0 ? tdee + ' 大卡' : ''} </div>
            </div>
            <div className="b-page3-man">
              <img
                className="b-contain-fit"
                src="http://localhost:3000/images/man.png"
                alt="Man"
              />
            </div>
            <div className="b-page3-note font-700M" data-aos="zoom-in">
              * 如需使用收藏便當功能，請先登入會員
            </div>
            <div className="b-page3-btn">
              <button className="b-btn font-700M" onClick={handleLogin}>
                <FontAwesomeIcon icon={['far', 'bookmark']} className="me-2" />
                收藏便當
              </button>
            </div>
          </div>
          {/* 右邊 */}
          <div className="col-12 col-md-5 b-page3-right">
            <Table tableList={tableList} />
          </div>
        </div>
      </div>
    </>
  )
}

export default Page3
