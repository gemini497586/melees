import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import '../../style/box.css'
import Page1 from './component/Page1'
import Page3 from './component/Page3'
import Modal from './Modal'
import Slider from './Slider'
import Table from '../../component/Table'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
import BoxUp from '../../images/box_up.png'
import BoxDown from '../../images/box_down.png'
import Man from '../../images/box_man.png'
import dialog from '../../images/dialog_1.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import BoxData from '../../data/Box.json'

function Box() {
  const [list, setList] = useState([])
  const [bmr, setBmr] = useState(0)
  const [tdee, setTdee] = useState(0)
  const [total, setTotal] = useState(0)

  // 從資料庫抓資料
  // useEffect(() => {
  //   Axios.get(`http://localhost:3001/box`).then((res) => {
  //     console.log(res.data)
  //     setList(res.data)
  //   })
  // }, [])

  // 控制table裡的資料
  const [unitList, setUnitList] = useState([
    { name: '雞蛋', unit: '100大卡' },
    { name: '雞蛋', unit: '100大卡' },
  ])

  // 圖片按下去，計算總卡路里
  const handle = (v) => {
    let calories = 0
    calories += v.cal
    let newTotal = total + calories
    setTotal(newTotal)
    // console.log(newTotal)
  }

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
      <section className="page-group">
        {/* 第一段 */}
        <Page1 bmr={bmr} setBmr={setBmr} tdee={tdee} setTdee={setTdee} />
        {/* 第二段 */}
        <div className="b-customized b-step">
          <div className="container position-relative">
            <h4 className="b-title">2. 客製屬於你的便當</h4>
            <p className="font-700L b-note">請將食材拖拉至便當盒，最多五樣</p>
            <div className="b-page2-dialog">
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
            <Slider
              list={BoxData}
              total={total}
              setTotal={setTotal}
              handle={handle}
            />
            <hr />
          </div>
        </div>
        {/* 第三段 */}
        <Page3 total={total} tdee={tdee} unitList={unitList} />
        {/* 最下面推薦食譜 商品 */}
        <CardRecipe />
        {/* <br /> */}
        <CardShopping />
      </section>
    </>
  )
}

export default Box
