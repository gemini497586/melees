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
import queryMsg from './component/queryMsg'

function EditPassword() {
  const [errors, setErrors] = useState({})
  const [formValues, setFormValues] = useState({})

  const handleFormValuesChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
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
    // console.log('handleFormValuesInvalid: ', errors)
  }

  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息的預設方式(跳出的訊息泡泡)
    e.preventDefault()

    // 若必填欄位未填寫，設定該 value = ''; 觸發 errorMsg
    let setEmtpyValue = {
      ...formValues,
      oldPassword: formValues.oldPassword ? formValues.oldPassword : '',
      password: formValues.password ? formValues.password : '',
      rePassword: formValues.rePassword ? formValues.rePassword : '',
    }
    setFormValues(setEmtpyValue)
    setErrors(validationInfo(formValues))
    // console.log('handleFormInvalid', errors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 1. 發送axios前，再次驗證表單的值有沒有不合法
    //    不通過 --> return false
    handleFormValuesInvalid(e)
    if (Object.keys(errors).length > 0) {
      // console.log('Object.keys(errors).length:', Object.keys(errors).length)
      return false
    }

    try {
      //  2. 通過 --> 發 axios
      let reqData = {
        oldPassword: formValues.oldPassword,
        password: formValues.password,
        rePassword: formValues.rePassword,
      }
      let response = await axios.post(`${API_URL}/member/editpwd`, reqData, {
        // 設定可以跨源送 cookie
        withCredentials: true,
      })
      // console.log('editPassword.js L70, response', response)

      // 3. Y --> 後端回覆成功
      //    a.清空 所有密碼欄位, b.開啟 成功的 Swal
      setFormValues({
        oldPassword: '',
        password: '',
        rePassword: '',
      })
      Swal.fire({
        icon: 'success',
        title: queryMsg(response.data.category, response.data.code),
        confirmButtonColor: 'var(--color-primary)',
        confirmButtonText: '確認',
      })
    } catch (err) {
      // 3. N --> 後端回覆失敗
      //    a.清空 所有密碼欄位, b. 設定表單錯誤訊息
      // console.error('editPassword.js L88, err.response', err.response)
      setFormValues({
        oldPassword: '',
        password: '',
        rePassword: '',
      })

      let resData = err.response.data
      // 其他驗證 或 express-validator 回覆１個欄位發生錯誤時，resData 是 Object
      // express-validator 回覆多個欄位發生錯誤時，resData 是 Array
      if (resData instanceof Object) {
        setErrors({
          [resData.type]: queryMsg(resData.category, resData.code),
        })
      } else if (resData instanceof Array) {
        let resError = {}
        for (let i = 0; i < resData.length; i++) {
          const error = resData[i]
          resError[error.type] = queryMsg(error.category, error.code)
        }
        // console.log('editPassword.js L109, resError', resError)
        setErrors(resError)
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
          onInvalid={handleFormInvalid}
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
          <button type="submit" className="member-form-submitBtn">
            送出
          </button>
        </form>
      </div>
    </>
  )
}

export default EditPassword
