import React from 'react'
import Form from './Form'

function Page1(props) {
  const { bmr, setBmr, tdee, setTdee } = props

  return (
    <>
      <div className="container b-step">
        <h4 className="b-title">1. 計算個人每日總消耗熱量</h4>
        <p className="font-700L b-note">請填入資料並按下開始計算</p>
        <div className="b-page1">
          {/* 左邊表單 */}
          <div className="col-12 col-md-5 b-page1-calc">
            <Form bmr={bmr} setBmr={setBmr} tdee={tdee} setTdee={setTdee} />
          </div>
          {/* 右邊介紹 */}
          <div className="col-12 col-md-7 b-page1-right">
            <div>
              <p className="font-700L">你的基礎代謝率: {bmr > 0 ? bmr : ''}</p>
              <p className="font-700L">
                你的每日總消耗熱量: {tdee > 0 ? tdee + ' 大卡' : ''}
              </p>
              <div className="b-page1-image">
                <p className="font-700L b-page1-note">
                  請填入資料並按下開始計算
                </p>
                <img
                  className="b-contain-fit b-page1-woman"
                  src="http://localhost:3000/images/woman.png"
                  alt="woman"
                />
              </div>
            </div>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default Page1
