import React from 'react'
import '../../style/global.css'
import '../../style/member.css'
import avatar from '../../images/Avatar.png'
import Header from '../../component/Header'

function Register() {
  return (
    <>
      <div className="page-group">
        <form className="member-form member-form-forRegister">
          <div className="member-form-title">
            <div className="member-form-title-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-text"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
            </div>
            <h5>註冊</h5>
          </div>
          <div className="member-form-group-content">
            <div className="member-form-group-picture">
              <figure>
                <img src={avatar} alt="Avatar" />
              </figure>
              <input type="file" />
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="account">
                帳號*
              </label>
              <div className="col-4">
                <input type="text" placeholder="請輸入帳號" name="account" />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="password">
                密碼*
              </label>
              <div className="col-4">
                <input
                  type="text"
                  placeholder="請輸入6-12位密碼"
                  name="password"
                />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="rePassword">
                確認密碼*
              </label>
              <div className="col-4">
                <input
                  type="text"
                  placeholder="請輸入6-12位密碼"
                  name="rePassword"
                />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="memberName">
                姓名*
              </label>
              <div className="col-4">
                <input type="text" placeholder="" name="memberName" />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
              <div className="col-4 member-form-group-gender">
                <input type="radio" name="male" />
                <label className="font-700SL" htmlFor="male">
                  先生
                </label>
                <input type="radio" name="female" />
                <label className="font-700SL" htmlFor="female">
                  小姐
                </label>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="nickname">
                暱稱
              </label>
              <div className="col-4">
                <input type="text" placeholder="" name="nickname" />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="cellphone">
                手機號碼*
              </label>
              <div className="col-4">
                <input type="text" placeholder="" name="cellphone" />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="email">
                電子信箱*
              </label>
              <div className="col-4">
                <input type="text" placeholder="" name="email" />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="address">
                地址
              </label>
              <div className="col-4">
                <input type="text" placeholder="" name="address" />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="">
                取貨門市
              </label>
              <div className="col-4">
                <input type="text" placeholder="" />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
          </div>
          <button className="member-form-submitBtn">送出</button>
        </form>
      </div>
    </>
  )
}

export default Register
