import React from 'react'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/login.css'
import '../../style/header.css'
import logo from '../../images/logo.png'
import Header from '../../component/Header'

function Login() {
  return (
    <>
      <Header />
      <div class="login">
        <div class="login-container">
          <div class="login-logo">
            <figure>
              <img src={logo} alt="MELEEs logo" />
            </figure>
            <h4>連你阿嬤都會的料理食譜生鮮食材網站</h4>
          </div>
          <div class="login-form">
            <h4>會員登入</h4>
            <form>
              <input type="text" placeholder="請輸入帳號" />
              <input type="text" placeholder="請輸入6-12位舊密碼" />
              <p class="font-400S login-form-errorMsg">預留錯誤訊息的位置</p>
              <button class="login-form-loginBtn">登入</button>
              <div class="login-setting">
                <a href="#/">忘記密碼?</a>
                <div>
                  <input type="checkbox" />
                  <label for="">記住我</label>
                </div>
              </div>
            </form>
            <div class="quickLogin">
              <button class="quickLogin-googleBtn">
                <div></div>
                使用Google登入
              </button>
              <button class="quickLogin-facebookBtn">
                <i class="fab fa-facebook"></i>
                使用Facebook登入
              </button>
            </div>
            <p class="shoppingRule font-400S">
              當您使用MELEEs購物
              <br />
              代表您同意 <strong>服務條款</strong> 與{' '}
              <strong>隱私權政策</strong>
            </p>
            <div class="login-registerText font-400S">
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
