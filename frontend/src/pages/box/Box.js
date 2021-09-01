import React from 'react'
import '../../style/box.css'
import Input from './Input'
import Food from './Food'
import Modal from './Modal.js'
import Table from '../../component/Table'
import BoxUp from '../../images/box_up.png'

function Box() {
  const handleSubmit = (e) => {
    e.preventDefault()
  }
  return (
    <>
      {/* <Modal /> */}
      <section>
        {/* 第一段 */}
        <div className="container b-step">
          <h4 className="b-title">1. 計算個人每日總消耗熱量</h4>
          <div className="d-flex">
            {/* 左邊表單 */}
            <form className="col-5 b-calc">
              <Input />
              <button className="font-700M b-btn" onClick={handleSubmit}>
                開始計算
              </button>
            </form>
            {/* 右邊介紹 */}
            <div className="col-7 b-woman">
              <p className="font-700L b-text1">請填入資料並按下開始計算</p>
              <div className="b-text2">
                <h5 className="pb-3">
                  你的基礎代謝率: <span>1000</span>
                </h5>
                <h4>
                  你的每日總消耗熱量: <span>1000</span> 大卡
                </h4>
              </div>
            </div>
          </div>
          <hr />
        </div>
        {/* 第二段 */}
        <div className="b-customized b-step">
          <div className="container ">
            <h4>2. 客製屬於你的便當</h4>
            <div className="font-700L b-text3">
              請將食材拖拉至便當盒最多五樣
            </div>
            <div className="b-bento">
              <img src={BoxUp} alt="BoxUp" class="cover-fit" />
            </div>
            <div className="b-menu">
              <i className="fas fa-chevron-left"></i>
              <Food />
              <i className="fas fa-chevron-right"></i>
            </div>
            <hr />
          </div>
          {/* <div className="container">
          </div> */}
        </div>

        {/* 第三段 */}
        <div className="container b-step">
          <h4 className="b-title">3. 計算便當卡路里</h4>
          <div className="d-flex justify-content-between align-items-center">
            {/* 左邊 */}
            <div className="col-6 b-man">
              <div className="b-text4">
                <h6>
                  便當總卡路里: <span>1000</span> 大卡
                </h6>
                <h5>
                  你的每日總消耗熱量: <span>1000</span> 大卡
                </h5>
              </div>
              <div className="d-flex b-btngroup">
                <button className="b-btn font-700M me-2" onClick={handleSubmit}>
                  <i className="far fa-bookmark"></i>收藏便當
                </button>
                <button className="b-btnblue font-700M" onClick={handleSubmit}>
                  <i className="fab fa-facebook"></i>分享便當
                </button>
              </div>
            </div>
            {/* 右邊 */}
            <div className="col-5">
              <Table />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Box
