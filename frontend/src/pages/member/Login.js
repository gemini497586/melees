import React from 'react'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/login.css'
import logo from '../../images/logo.png'
import Header from '../../component/Header'

function Login() {
  return (
    <>
      <Header />
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
            <form>
              <input type="text" placeholder="請輸入帳號" />
              <input type="text" placeholder="請輸入6-12位舊密碼" />
              <p className="font-400S login-form-errorMsg">
                預留錯誤訊息的位置
              </p>
              <button className="login-form-loginBtn">登入</button>
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
              <button className="quickLogin-facebookBtn">
                <i className="fab fa-facebook"></i>
                使用Facebook登入
              </button>
            </div>
            <p className="shoppingRule font-400S">
              當您使用MELEEs購物
              <br />
              代表您同意 <strong>服務條款</strong> 與{' '}
              <strong>隱私權政策</strong>
            </p>
            <div className="login-registerText font-400S">
              <span>MELEEs新用戶？</span>
              <a href="#/">註冊</a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Login
