import { useState } from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { API_URL } from '../../utils/config'
import axios from 'axios'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/login.css'
import logo from '../../images/logo.png'
import 'animate.css'
import queryMsg from './component/queryMsg'
import Swal from 'sweetalert2'
import InputErrorMsg from './component/InputErrorMsg'
import validationInfo from './component/validationInfo'

function ResetPassword() {
  const history = useHistory()
  const { token } = useParams()
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
        password: formValues.password,
        rePassword: formValues.rePassword,
        token: token,
      }
      let response = await axios.post(`${API_URL}/auth/resetpwd`, reqData, {
        // 設定可以跨源送 cookie
        withCredentials: true,
      })
      // console.log('editPassword.js L70, response', response)

      // 3. Y --> 後端回覆成功
      //    a.清空 所有密碼欄位, b.開啟 成功的 Swal
      setFormValues({
        password: '',
        rePassword: '',
      })
      Swal.fire({
        icon: 'success',
        title: queryMsg(response.data.category, response.data.code),
        text: '恭喜您，現在立即登入享受會員專屬功能！',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonColor: 'var(--color-primary)',
        confirmButtonText: '立即登入',
        denyButtonColor: 'var(--color-secondary)',
        denyButtonText: '回到首頁',
        cancelButtonColor: 'var(--color-grey-500)',
        cancelButtonText: '取消',
      }).then((result) => {
        if (result.isConfirmed) {
          history.push('/login')
        } else if (result.isDenied) {
          history.push('/')
        }
      })
    } catch (err) {
      // 3. N --> 後端回覆失敗
      //    a.清空 所有密碼欄位, b. 設定表單錯誤訊息
      // console.error('editPassword.js L88, err.response', err.response)
      setFormValues({
        password: '',
        rePassword: '',
      })

      let resData = err.response.data
      // instanceof 判斷資料型別是物件還是陣列時，應該優先判斷array，最後判斷object
      // 因為 Array 也是屬於物件 array01 instanceof Object  // true
      // -----------------------------------------------------------------
      // express-validator 回覆多個欄位發生錯誤時，resData 是 Array
      // 其他驗證 或 express-validator 回覆１個欄位發生錯誤時，resData 是 Object
      if (resData instanceof Array) {
        let resError = {}
        for (let i = 0; i < resData.length; i++) {
          const error = resData[i]
          resError[error.type] = queryMsg(error.category, error.code)
        }
        // console.log('editPassword.js L109, resError', resError)
        setErrors(resError)
      } else if (resData instanceof Object) {
        setErrors({
          [resData.type]: queryMsg(resData.category, resData.code),
        })
      }
    }
  }

  return (
    <>
      <div className="login">
        <div className="login-container">
          <div className="login-logo">
            <figure>
              <img src={logo} alt="MELEEs logo" />
            </figure>
            <h4>連你阿嬤都會的料理食譜生鮮食材網站</h4>
          </div>
          <div className="login-form">
            <h4>重設密碼</h4>
            <form
              className="reset-password"
              onSubmit={handleSubmit}
              onChange={handleFormChange}
              onInvalid={handleFormInvalid}
            >
              <input
                type="password"
                id="password"
                name="password"
                value={formValues.password}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
                placeholder="請輸入新密碼"
              />
              <input
                type="password"
                id="rePassword"
                name="rePassword"
                value={formValues.rePassword}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
                placeholder="請輸入確認密碼"
              />
              <InputErrorMsg
                errorMsg={errors.password ? errors.password : errors.rePassword}
              />
              <p className="font-400SS mb-3 text-center">
                (請混合使用 6-12 個字元的英文字母、數字和符號)
              </p>
              <button className="login-form-loginBtn" type="submit">
                送出
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  )
}

export default ResetPassword
