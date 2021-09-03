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
      <div className="mb-3 row">
        <label htmlFor="weight" className="col-md-3 col-form-label">
          性別
        </label>
        <div className="col-md-9">
          <select
            className="form-select"
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
      <div className="mb-3 row">
        <label htmlFor="age" className="col-sm-3 col-form-label">
          年齡
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            name="age"
            value={age}
            className="form-control"
            placeholder="請輸入年齡"
            min="0"
            onChange={(e) => {
              setAge(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="heigh" className="col-sm-3 col-form-label">
          身高
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            name="heigh"
            value={height}
            className="form-control"
            placeholder="請輸入身高(公分)"
            min="0"
            onChange={(e) => {
              setHeight(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="weight" className="col-sm-3 col-form-label">
          體重
        </label>
        <div className="col-sm-9">
          <input
            type="number"
            name="weight"
            value={weight}
            className="form-control"
            placeholder="請輸入體重(公斤)"
            min="0"
            onChange={(e) => {
              setWeight(e.target.value)
            }}
          />
        </div>
      </div>
      <div className="mb-3 row">
        <label htmlFor="Active" className="col-sm-3 col-form-label">
          活動量
        </label>
        <div className="col-sm-9">
          <select
            className="form-select"
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
    </>
  )
}

export default Input
