import React, { useContext, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { API_URL, FACEBOOK_APP_ID, GOOGLE_APP_ID } from '../../utils/config'
import axios from 'axios'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/login.css'
import logo from '../../images/logo.png'
import { HandleCart } from '../../utils/HandleCart'
import FacebookLogin from 'react-facebook-login'
import {
  GoogleLogin,
  // GoogleLogout
} from 'react-google-login'
import 'animate.css'
import queryMsg from './component/queryMsg'
import Swal from 'sweetalert2'

function Login() {
  const { setLogin } = useContext(HandleCart) //登入用
  // const [socialLogin, setSocialLogin] = useState(false) //查看是否為第三方登入

  const [errorMsg, setErrorMsg] = useState()
  const [formValues, setFormValues] = useState({
    // account: '',
    // password: '',
    account: 'meleesadminx1',
    password: '123456',
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
    setErrorMsg('')
  }

  // 檢驗表單的值有沒有不合法
  const handleFormValuesInvalid = (e) => {
    // 擋住錯誤訊息的預設方式(跳出的訊息泡泡)
    e.preventDefault()

    if (!formValues.account || !formValues.password) {
      let errCode = {
        category: 'auth',
        code: 'B0102',
      }
      setErrorMsg(queryMsg(errCode.category, errCode.code))
    }
  }

  // 登入後導回前一頁或首頁
  const history = useHistory()
  const location = useLocation()
  const loginRedirect = () => {
    let { from } = location.state || { from: { pathname: '/' } }
    // console.log('login.js L57, from: ', from)
    history.push(from)
  }

  const isLoggedIn = () => {
    setLogin(true)
    loginRedirect()
  }

  const responseFacebook = async (response) => {
    console.log(response)
    try {
      let result = await axios.post(
        `${API_URL}/auth/login/facebook`,
        {
          access_token: response.accessToken,
        },
        {
          withCredentials: true,
        }
      )
      console.log(result)
      isLoggedIn()
      // setSocialLogin(true)
    } catch (err) {
      console.error(err)
    }
  }

  const googleSuccess = (response) => {
    console.log('googleSuccess', response)
    try {
      let result = axios.post(
        `${API_URL}/auth/login/google`,
        {
          access_token: response.accessToken,
        },
        {
          withCredentials: true,
        }
      )
      console.log(result)
      isLoggedIn()
      // setSocialLogin(true)
    } catch (err) {
      console.error(err)
    }
  }

  const googleFailure = (response) => {
    console.log('googleFailure', response)
  }

  // const onSignoutSuccess = () => {
  //   console.log('You have been logged out successfully')
  // }

  const forgotPwdModal = (e) => {
    // 防止送出表單
    e.preventDefault()
    Swal.fire({
      icon: 'question',
      title: '忘記密碼？',
      html: '請輸入 <strong>您的帳號</strong>，系統將發送驗證 Email 給您！',
      input: 'text',
      inputAttributes: {
        autocapitalize: 'off',
      },
      showCancelButton: true,
      confirmButtonText: '送出',
      confirmButtonColor: 'var(--color-primary)',
      cancelButtonText: '取消',
      cancelButtonColor: 'var(--color-grey-500)',
      showLoaderOnConfirm: true,
      preConfirm: (account) => {
        return axios
          .post(
            `${API_URL}/auth/forgotpwd`,
            { account },
            {
              withCredentials: true,
            }
          )
          .then((response) => {
            console.log('preConfirm axios res:', response)
            return response
          })
          .catch((error) => {
            Swal.fire({
              icon: 'error',
              title: '請求失敗！',
              text: queryMsg(
                error.response.data.category,
                error.response.data.code
              ),
              confirmButtonColor: 'var(--color-primary)',
              confirmButtonText: '確認',
            })
            // Swal.showValidationMessage(`請求失敗: ${error}`)
          })
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: `請求成功`,
          text: '系統驗證 Email 已發送！請至收件區確認信封。',
          confirmButtonText: '確認',
          confirmButtonColor: 'var(--color-primary)',
        })
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setErrorMsg('')
    try {
      let reqData = {
        account: formValues.account,
        password: formValues.password,
      }
      let response = await axios.post(`${API_URL}/auth/login`, reqData, {
        // 設定可以跨源送 cookie
        withCredentials: true,
      })
      console.log('login.js L89, response: ', response)
      isLoggedIn()
    } catch (err) {
      console.error('login.js L92, err.response: ', err.response)
      if (err.response.data !== undefined) {
        setErrorMsg(
          queryMsg(err.response.data.category, err.response.data.code)
        )
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
            <h4>會員登入</h4>
            <form
              onSubmit={handleSubmit}
              onChange={handleFormChange}
              // onInvalid={handleFormValuesInvalid}
            >
              <input
                type="text"
                id="account"
                name="account"
                value={formValues.account}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
                placeholder="請輸入帳號"
              />
              <input
                type="password"
                id="password"
                name="password"
                value={formValues.password}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
                placeholder="請輸入密碼"
              />
              <p
                className={
                  errorMsg
                    ? 'font-400S member-form-errorMsg errorMsg-show animate__animated  animate__shakeX'
                    : 'font-400S member-form-errorMsg'
                }
              >
                {errorMsg ? errorMsg : '預留錯誤訊息的位置'}
              </p>
              <button className="login-form-loginBtn" type="submit">
                登入
              </button>
              <div className="login-setting">
                <button className="forgot-password" onClick={forgotPwdModal}>
                  忘記密碼?
                </button>
                <div>
                  <input type="checkbox" />
                  <label for="">記住我</label>
                </div>
              </div>
            </form>
            <div className="quickLogin">
              {/* <GoogleLogout
                clientId={GOOGLE_APP_ID}
                buttonText="Sign Out"
                onLogoutSuccess={onSignoutSuccess}
              /> */}
              <GoogleLogin
                className="quickLogin-googleBtn"
                clientId={GOOGLE_APP_ID}
                buttonText="使用Google登入"
                onSuccess={googleSuccess}
                onFailure={googleFailure}
                cookiePolicy={'single_host_origin'}
              />
              <FacebookLogin
                appId={FACEBOOK_APP_ID}
                autoLoad={false}
                callback={responseFacebook}
                fields="name,email,picture"
                cssClass="quickLogin-facebookBtn"
                icon="fa-facebook"
                textButton="使用Facebook登入"
              />
            </div>
            <p className="shoppingRule font-400S">
              當您使用MELEEs購物
              <br />
              代表您同意 <strong>服務條款</strong> 與{' '}
              <strong>隱私權政策</strong>
            </p>
            <div className="login-registerText font-400S">
              <span>MELEEs新用戶？ </span>
              <Link to="/register">註冊</Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
