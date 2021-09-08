import React from 'react'
import '../../style/global.css'
import '../../style/member.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import avatar from '../../images/Avatar.png'

function Register() {
  return (
    <>
      <form className="member-form member-form-forRegister">
        <div className="member-form-title">
          <div className="member-form-title-icon">
            <FontAwesomeIcon icon="file-alt" size="lg" className="icon-file" />
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
        </div>
      </form>
    </>
  )
}

export default Register
