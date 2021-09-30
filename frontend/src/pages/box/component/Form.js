import React, { useState } from 'react'
import Input from './Input'
import Select from './Select'

function Form2(props) {
  const { setBmr, setTdee } = props

  const genderList = [
    { value: 1, name: '男' },
    { value: 2, name: '女' },
  ]
  const activeList = [
    {
      value: 1.2,
      name: '沒什麼運動',
    },
    {
      value: 1.375,
      name: '每週運動1-3天',
    },
    {
      value: 1.55,
      name: '每週運動4-5天',
    },
    {
      value: 1.725,
      name: '每週運動6-7天',
    },
    {
      value: 1.9,
      name: '無時無刻都在運動',
    },
  ]
  // 用物件的方式(一個空白物件，把物件屬性寫出來)
  const [fields, setFields] = useState({
    gender: '',
    age: '',
    height: '',
    weight: '',
    active: '',
  })
  const [fieldErrors, setFieldsErrors] = useState({
    gender: '',
    age: '',
    height: '',
    weight: '',
    active: '',
  })
  // onChange事件
  const handleFieldChange = (e) => {
    // console.log(e.target.name, e.target.value)
    const updatedFields = { ...fields, [e.target.name]: e.target.value }
    setFields(updatedFields)
  }
  // 驗證
  const handleFormInvalid = (e) => {
    e.preventDefault()

    let ErrorMessage = ''
    switch (e.target.name) {
      case 'gender':
        ErrorMessage = '請選擇性別'
        break
      case 'active':
        ErrorMessage = '請選擇活動量'
        break
      default:
        ErrorMessage = '請輸入正確資料'
        break
    }

    const updatedFieldErrors = {
      ...fieldErrors,
      [e.target.name]: ErrorMessage,
    }
    setFieldsErrors(updatedFieldErrors)
  }
  // 表單變動時
  const handleFormChange = (e) => {
    // console.log('目前正在更新這個欄位 ', e.target.name)
    const updatedFieldError = { ...fieldErrors, [e.target.name]: '' }
    setFieldsErrors(updatedFieldError)
  }
  // 計算基礎代謝率 每日消耗卡路里
  const handleSubmit = (e) => {
    e.preventDefault()

    let newBmr = 0
    let newTdee = 0
    if (fields.gender === '1') {
      newBmr = fields.weight * 10 + fields.height * 6.25 - fields.age * 5 + 5
      newTdee = newBmr * fields.active
    }
    if (fields.gender === '2') {
      newBmr = fields.weight * 10 + fields.height * 6.25 - fields.age * 5 - 161
      newTdee = newBmr * fields.active
    }
    if (newBmr) {
      setBmr(parseInt(newBmr))
      setTdee(parseInt(newTdee))
    }
    // console.log(newBmr, newTdee)
  }
  return (
    <>
      <form
        className="d-flex flex-column"
        onChange={handleFormChange}
        onInvalid={handleFormInvalid}
        onSubmit={handleSubmit}
      >
        <Select
          fields={fields.gender}
          fieldErrors={fieldErrors.gender}
          handleFieldChange={handleFieldChange}
          name={'性別'}
          value={'gender'}
          options={genderList}
        />
        <Input
          fields={fields.age}
          fieldErrors={fieldErrors.age}
          handleFieldChange={handleFieldChange}
          name={'年齡'}
          value={'age'}
          max={'100'}
        />
        <Input
          fields={fields.height}
          fieldErrors={fieldErrors.height}
          handleFieldChange={handleFieldChange}
          name={'身高'}
          value={'height'}
          max={'200'}
        />
        <Input
          fields={fields.weight}
          fieldErrors={fieldErrors.weight}
          handleFieldChange={handleFieldChange}
          name={'體重'}
          value={'weight'}
          max={'150'}
        />
        <Select
          fields={fields.active}
          fieldErrors={fieldErrors.active}
          handleFieldChange={handleFieldChange}
          name={'活動量'}
          value={'active'}
          options={activeList}
        />
        <button className="font-700M b-btn" type="submit">
          開始計算
        </button>
      </form>
    </>
  )
}

export default Form2
