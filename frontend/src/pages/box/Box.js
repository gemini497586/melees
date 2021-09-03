import React from 'react'
import '../../style/box.css'
import Input from './Input'
import Food from './Food'
import Modal from './Modal.js'
import Table from '../../component/Table'
import BoxUp from '../../images/box_up.png'
import Woman from '../../images/box_woman.png'
import Man from '../../images/box_man.png'
import dialog from '../../images/dialog_1.png'
import Chicken from '../../images/box_chicken.png'
import Egg from '../../images/box_egg.png'
import Salmon from '../../images/box_salmon.png'
import Shrimp from '../../images/box_shrimp.png'
import Steak from '../../images/box_steak.png'
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
    image: Salmon,
    cal: 1234,
  },
  {
    name: '白蝦',
    image: Shrimp,
    cal: 1234,
  },
  {
    name: '牛排',
    image: Steak,
    cal: 1234,
  },
]

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
          <div className="d-flex ">
            {/* 左邊表單 */}
            <div className="col-md-5 b-page1-calc">
              <form>
                <Input />
                <button className="font-700M b-btn" onClick={handleSubmit}>
                  開始計算
                </button>
              </form>
            </div>
            {/* 右邊介紹 */}
            <div className="col-md-7 b-page1-right">
              <div className="b-page1-image">
                <p className="font-700L b-page1-note">
                  請填入資料並按下開始計算
                </p>
                <img className="b-contain-fit" src={Woman} alt="woman" />
              </div>
              <div className="b-page1-text">
                <h5 className="pb-2">
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
          <div className="container position-relative">
            <h4>2. 客製屬於你的便當</h4>
            <div className="b-page2-image">
              <p className="font-700L b-page2-note">
                請將食材拖拉至便當盒
                <br />
                最多五樣
              </p>
              <img className="b-contain-fit" src={dialog} alt="dialog" />
            </div>
            <div className="b-page2-bento">
              <img src={BoxUp} alt="BoxUp" class="b-cover-fit" />
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
          <div className="d-flex justify-content-between ">
            {/* 左邊 */}
            <div className="col-12 col-md-6 b-page3-left">
              <div className="b-page3-image">
                <div className="b-page3-text">
                  <h6 className="pb-2">
                    便當總卡路里: <span>1000</span> 大卡
                  </h6>
                  <h5>
                    你的每日總消耗熱量: <span>1000</span> 大卡
                  </h5>
                </div>
                <img className="b-contain-fit" src={Man} alt="Man" />
              </div>
              <div className="b-page3-btn">
                <button className="b-btn font-700M me-2" onClick={handleSubmit}>
                  <FontAwesomeIcon icon="bookmark" className="bookmark me-2" />
                  收藏便當
                </button>
                <button className="b-btnblue font-700M" onClick={handleSubmit}>
                  <i className="fab fa-facebook me-2"></i>分享便當
                </button>
              </div>
            </div>

            {/* 右邊 */}
            <div className="col-12 col-md-5">
              <Table />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Box
