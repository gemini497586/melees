import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import '../../style/box.css'
import Input from './Input'
import Food from './Food'
import Modal from './Modal.js'
import Table from '../../component/Table'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
import BoxUp from '../../images/box_up.png'
import BoxDown from '../../images/box_down.png'
import Woman from '../../images/box_woman.png'
import Man from '../../images/box_man.png'
import dialog from '../../images/dialog_1.png'
import Chicken from '../../images/box_chicken.png'
import Egg from '../../images/box_egg.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'

const foodList = [
  {
    name: '雞蛋',
    image: Egg,
    cal: 1234,
  },
  {
    name: '雞胸肉',
    image: Chicken,
    cal: 1234,
  },
  {
    name: '鮭魚',
    image: Chicken,
    cal: 1234,
  },
  {
    name: '白蝦',
    image: Chicken,
    cal: 1234,
  },
  {
    name: '牛排',
    image: Chicken,
    cal: 1234,
  },
]
const unitList = [
  { name: '雞蛋', unit: '100大卡' },
  { name: '雞蛋', unit: '100大卡' },
  { name: '雞蛋', unit: '100大卡' },
  { name: '雞蛋', unit: '100大卡' },
  { name: '雞蛋', unit: '100大卡' },
]
function Box() {
  const [modal, setModal] = useState(false)
  const openModal = () => {
    setModal(true)
  }
  const closeModal = () => {
    setModal(false)
  }
  return (
    <>
      <div className="page-group">
        <section>
          {/* 第一段 */}
          <div className="container b-step">
            <h4 className="b-title">1. 計算個人每日總消耗熱量</h4>
            <p className="font-700L b-note">請填入資料並按下開始計算</p>
            <div className="b-page1">
              {/* 左邊表單 */}
              <div className="col-12 col-md-5 b-page1-calc">
                <form className="d-flex flex-column">
                  <Input />
                  {/* <button className="font-700M b-btn" onClick={handleSubmit}>
                  開始計算
                </button> */}
                </form>
              </div>
              {/* 右邊介紹 */}
              <div className="col-12 col-md-7 b-page1-right">
                <div className="b-page1-text">
                  <div className="b-page1-image">
                    <p className="font-700L b-page1-note">
                      請填入資料並按下開始計算
                    </p>
                    <img
                      className="b-contain-fit b-page1-woman"
                      src={Woman}
                      alt="woman"
                    />
                  </div>
                  <h5 className="pb-2">
                    你的基礎代謝率: <span>1000</span>
                  </h5>
                  <h4 className="b-page1-cal">
                    你的每日總消耗熱量: <span>1000</span> 大卡
                  </h4>
                </div>
              </div>
            </div>
            <hr />
          </div>
          {/* 第二段 */}
          <div className="b-customized b-step">
            <div className="container position-relative">
              <h4 className="b-title">2. 客製屬於你的便當</h4>
              <p className="font-700L b-note">請將食材拖拉至便當盒，最多五樣</p>
              <div className="b-page2-image">
                <p className="font-700L b-page2-note">
                  請將食材拖拉至便當盒
                  <br />
                  最多五樣
                </p>
                <img className="b-contain-fit" src={dialog} alt="dialog" />
              </div>
              <div className="col-12">
                <div className="b-page2-box">
                  <div className="b-page2-box-up">
                    <img src={BoxUp} alt="BoxUp" class="b-cover-fit" />
                  </div>
                  <img src={BoxDown} alt="BoxDown" class="b-cover-fit" />
                </div>
              </div>
              <div className="b-page2-menu">
                <FontAwesomeIcon icon="chevron-left" className="chevron" />
                <Food foodList={foodList} />
                <FontAwesomeIcon icon="chevron-right" className="chevron" />
              </div>
              <hr />
            </div>
          </div>

          {/* 第三段 */}
          <div className="container b-step">
            <h4 className="b-title">3. 計算便當卡路里</h4>
            <div className="b-page3">
              {/* 左邊 */}
              <div className="col-12 col-md-6 b-page3-left">
                <div className="b-page3-text">
                  <h6 className="pb-2">
                    便當總卡路里: <span>1000</span> 大卡
                  </h6>
                  <h5>
                    你的每日總消耗熱量: <span>1000</span> 大卡
                  </h5>
                </div>
                <div className="b-page3-image b-page3-man">
                  <img className="b-contain-fit" src={Man} alt="Man" />
                </div>
                <div className="b-page3-btn">
                  {/* <Link to="/box/modal"> */}
                  <button className="b-btn font-700M me-2" onClick={openModal}>
                    <FontAwesomeIcon icon="bookmark" className="me-2" />
                    收藏便當
                  </button>
                  {/* </Link> */}
                  <Link to="#">
                    <button className="b-btnblue font-700M">
                      <i className="fab fa-facebook me-2"></i>分享便當
                    </button>
                  </Link>
                </div>
              </div>
              {/* 右邊 */}
              <div className="col-12 col-md-5 b-page3-right">
                <Table unitList={unitList} />
              </div>
            </div>
            <Modal modal={modal} closeModal={closeModal} />
          </div>
          {/* 最下面推薦食譜 商品 */}
          <CardRecipe />
          {/* <br /> */}
          <CardShopping />
        </section>
      </div>
    </>
  )
}

export default Box
