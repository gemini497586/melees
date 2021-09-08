import React, { useState } from 'react'

function Form(props) {
  const { setBmr, setTdee } = props

  // 表單初始值
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [active, setActive] = useState('')

  const handleSubmit = (e) => {
    // 改變預設行為
    e.preventDefault()

    // 計算基礎代謝率 每日消耗卡路里
    let newBmr = 0
    let newTdee = 0
    if (gender === '1') {
      newBmr = weight * 10 + height * 6.25 - age * 5 + 5
      newTdee = newBmr * active
    }
    if (gender === '2') {
      newBmr = weight * 10 + height * 6.25 - age * 5 - 161
      newTdee = newBmr * active
    }
    if (newBmr) {
      setBmr(parseInt(newBmr))
      setTdee(parseInt(newTdee))
    }
    // console.log(newBmr, newTdee)
  }
  return (
    <>
      <form className="d-flex flex-column">
        <div className="mb-3 row align-items-center">
          <label htmlFor="weight" className="col-4 font-700M">
            性別
          </label>
          <div className="col-8">
            <select
              value={gender}
              onChange={(e) => {
                setGender(e.target.value)
              }}
            >
              {gender === '' ? <option value="">請選擇</option> : ''}
              <option value="1">男生</option>
              <option value="2">女生</option>
            </select>
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label htmlFor="age" className="col-4 font-700M">
            年齡
          </label>
          <div className="col-8">
            <input
              type="number"
              name="age"
              value={age}
              placeholder="請輸入年齡"
              min="0"
              onChange={(e) => {
                setAge(e.target.value)
              }}
            />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label htmlFor="heigh" className="col-4 font-700M">
            身高
          </label>
          <div className="col-8">
            <input
              type="number"
              name="heigh"
              value={height}
              placeholder="請輸入身高(公分)"
              min="0"
              onChange={(e) => {
                setHeight(e.target.value)
              }}
            />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label htmlFor="weight" className="col-4 font-700M">
            體重
          </label>
          <div className="col-8">
            <input
              type="number"
              name="weight"
              value={weight}
              placeholder="請輸入體重(公斤)"
              min="0"
              onChange={(e) => {
                setWeight(e.target.value)
              }}
            />
          </div>
        </div>
        <div className="mb-3 row align-items-center">
          <label htmlFor="Active" className="col-4 font-700M">
            活動量
          </label>
          <div className="col-8">
            <select
              value={active}
              onChange={(e) => {
                setActive(e.target.value)
              }}
            >
              {active === '' ? <option value="">請選擇</option> : ''}
              請選擇
              <option value="1.2">沒什麼運動</option>
              <option value="1.375">每週運動1-3天</option>
              <option value="1.55">每週運動4-5天</option>
              <option value="1.725">每週運動6-7天</option>
              <option value="1.9">無時無刻都在運動</option>
            </select>
          </div>
        </div>
        <div className="row">
          <button className="font-700M b-btn" onClick={handleSubmit}>
            開始計算
          </button>
        </div>
      </form>
    </>
  )
}

export default Form
