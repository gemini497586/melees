import React, { useState } from 'react'
import '../../style/global.css'
import '../../style/member.css'
import MinorBar from './component/MinorBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import { API_URL } from '../../utils/config'
import axios from 'axios'
import validationInfo from './component/validationInfo'
import InputErrorMsg from './component/InputErrorMsg'
import Swal from 'sweetalert2'

const colors = {
  primary: '#fe9900',
}

function EditPassword() {
  const [errors, setErrors] = useState({})
  const [formValues, setFormValues] = useState({
    oldPassword: '',
    password: '',
    rePassword: '',
  })

  const handleFormValuesChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
    // console.log(formValues)
  }

  // 使用者修改欄位時，清空該欄位的錯誤訊息
  const handleFormChange = (e) => {
    // console.log('更新欄位：', e.target.name)

    // 清空該欄位的錯誤訊息
    const updateErrors = {
      ...errors,
      [e.target.name]: '',
    }
    setErrors(updateErrors)
  }

  // 檢驗表單的值有沒有不合法
  const handleFormValuesInvalid = (e) => {
    setErrors(validationInfo(formValues))
    console.log('in valid', errors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 發送axios前，再次驗證表單的值有沒有不合法 --> 不通過 return false
    handleFormValuesInvalid(e)
    if (Object.keys(errors).length > 0) {
      console.log('Object.keys(errors).length:', Object.keys(errors).length)
      return false
    }

    // 通過 --> 驗證後發 axios
    try {
      let oldPassword = formValues.oldPassword
      let password = formValues.password
      let rePassword = formValues.rePassword
      let response = await axios.post(
        `${API_URL}/member/editpwd`,
        {
          oldPassword,
          password,
          rePassword,
        },
        {
          // 設定可以跨源送 cookie
          withCredentials: true,
        }
      )
      console.log(response)
      if (response.status === 200) {
        Swal.fire({
          icon: 'success',
          title: '資料更新成功！',
          confirmButtonColor: colors.primary,
          confirmButtonText: '確認',
        })
      }
    } catch (err) {
      console.error(err.response)
      if (err.response.status === 400) {
        setFormValues({
          oldPassword: '',
          password: '',
          rePassword: '',
        })
        setErrors({ oldPassword: err.response.data.message })
      }
    }
  }
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <form
          className="member-form member-form-forEditMemberInfo"
          onSubmit={handleSubmit}
          onChange={handleFormChange}
        >
          <div className="member-form-title">
            <div className="member-form-title-icon">
              <FontAwesomeIcon
                icon="file-alt"
                size="lg"
                className="icon-file"
              />
            </div>
            <h5>會員密碼修改</h5>
          </div>
          <div className="member-form-group-content">
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="oldPassword">
                舊密碼*
              </label>
              <div className="col-4">
                <input
                  className={
                    errors.oldPassword
                      ? 'form-input-invalid animate__animated animate__headShake'
                      : null
                  }
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  value={formValues.oldPassword}
                  onChange={handleFormValuesChange}
                  onBlur={handleFormValuesInvalid}
                  placeholder="請輸入6-12位舊密碼"
                  required
                  minlength="6"
                  maxlength="12"
                />
                <InputErrorMsg errorMsg={errors.oldPassword} />
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="password">
                新密碼*
              </label>
              <div className="col-4">
                <input
                  className={
                    errors.password
                      ? 'form-input-invalid animate__animated animate__headShake'
                      : null
                  }
                  type="password"
                  id="password"
                  name="password"
                  value={formValues.password}
                  onChange={handleFormValuesChange}
                  onBlur={handleFormValuesInvalid}
                  placeholder="請輸入6-12位新密碼"
                  required
                  minlength="6"
                  maxlength="12"
                />
                <InputErrorMsg errorMsg={errors.password} />
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="rePassword">
                確認新密碼*
              </label>
              <div className="col-4">
                <input
                  className={
                    errors.rePassword
                      ? 'form-input-invalid animate__animated animate__headShake'
                      : null
                  }
                  type="password"
                  id="rePassword"
                  name="rePassword"
                  value={formValues.rePassword}
                  onChange={handleFormValuesChange}
                  onBlur={handleFormValuesInvalid}
                  placeholder="請輸入6-12位確認新密碼"
                  required
                  minlength="6"
                  maxlength="12"
                />
                <InputErrorMsg errorMsg={errors.rePassword} />
              </div>
            </div>
          </div>
          <button className="member-form-submitBtn">送出</button>
        </form>
      </div>
    </>
  )
}

export default EditPassword
