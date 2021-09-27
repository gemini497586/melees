import React, { useState, useContext } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import Modal from './Modal'
import Table from '../../../component/Table'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { HandleCart } from '../../../utils/HandleCart'

function Page3(props) {
  const { cal, setCal, tdee, tableList, bento, setBento, setUnitList } = props
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

  // 檢驗會員是否登入
  const { login, setLogin } = useContext(HandleCart)
  const [redirectLogin, setRedirectLogin] = useState(false)
  const location = useLocation()
  const handleOpenModal = () => {
    if (login) {
      openModal()
    } else {
      location.state = { from: location.pathname }
      console.log('location of Page3.js: ', location)
      setRedirectLogin(true)
    }
  }
  return (
    <>
      {redirectLogin ? (
        <Redirect
          to={{
            pathname: '/login',
            state: { from: location.pathname },
          }}
        />
      ) : null}
      <Modal
        modal={modal}
        setModal={setModal}
        closeModal={closeModal}
        bento={bento}
        setBento={setBento}
        cal={cal}
        setCal={setCal}
        setUnitList={setUnitList}
      />
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
              <button className="b-btn font-700M" onClick={handleOpenModal}>
                <FontAwesomeIcon icon={['far', 'bookmark']} className="me-2" />
                收藏便當
              </button>
              {/* <button className="b-btn font-700M" onClick={openModal}>
                <FontAwesomeIcon icon={['far', 'bookmark']} className="me-2" />
                收藏便當
              </button> */}

              {/* {login ? (
                <button className="b-btn font-700M" onClick={openModal}>
                  <FontAwesomeIcon
                    icon={['far', 'bookmark']}
                    className="me-2"
                  />
                  收藏便當
                </button>
              ) : (
                <Redirect
                  to={{
                    pathname: '/login',
                    state: { from: location.pathname },
                  }}
                />
              )} */}
            </div>
            <div className="b-page3-note font-400S">
              如需使用收藏便當功能，請先登入會員
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
