import React, { useState } from 'react'
import '../../style/box.css'

function Input(props) {
  const [gender, setGender] = useState('')
  const [age, setAge] = useState('')
  const [height, setHeight] = useState('')
  const [weight, setWeight] = useState('')
  const [active, setActive] = useState('')
  return (
    <>
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
            請選擇
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
        <button className="font-700M b-btn">開始計算</button>
      </div>
    </>
  )
}

export default Input
