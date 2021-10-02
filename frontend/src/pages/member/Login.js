import React, { useContext, useState } from 'react'
import { Link, useHistory, useLocation } from 'react-router-dom'
import { API_URL, FACEBOOK_APP_ID } from '../../utils/config'
import axios from 'axios'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/login.css'
import logo from '../../images/logo.png'
import { HandleCart } from '../../utils/HandleCart'
import FacebookLogin from 'react-facebook-login'
import 'animate.css'
import queryMsg from './component/queryMsg'

function Login() {
  const { setLogin } = useContext(HandleCart) //登入用

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

  // const componentClicked = () => {
  //   console.log('clicked')
  // }

  const responseFacebook = (response) => {
    console.log(response)
    // this.setState({
    //   isLoggedIn: true,
    //   userID: response.userID,
    //   name: response.name,
    //   email: response.email,
    //   picture: response.picture.data.url,
    // })
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
      setLogin(true)
      loginRedirect()
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
                placeholder="請輸入6-12位密碼"
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
                <a href="#/">忘記密碼?</a>
                <div>
                  <input type="checkbox" />
                  <label for="">記住我</label>
                </div>
              </div>
            </form>
            <div className="quickLogin">
              <button className="quickLogin-googleBtn">
                <div></div>
                使用Google登入
              </button>
              <FacebookLogin
                appId={FACEBOOK_APP_ID}
                autoLoad={true} //
                fields="name,email,picture" //
                // onClick={componentClicked}
                callback={responseFacebook}
                cssClass="quickLogin-facebookBtn"
                icon="fa-facebook"
                textButton="使用Facebook登入"
              />
              {/* <FacebookLogin
                  appId={FACEBOOK_APP_ID}
                  autoLoad={true}
                  fields="name,email,picture"
                  callback={responseFacebook}
                  cssClass="quickLogin-facebookBtn"
                  icon="fa-facebook"
                  textButton="使用Facebook登入"
                /> */}
              {/* <button className="quickLogin-facebookBtn">
                  <i className="fab fa-facebook"></i>
                  使用Facebook登入
                </button> */}
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
