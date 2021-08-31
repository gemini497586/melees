import React from 'react'
import '../../style/global.css'
import '../../style/member.css'
import avatar from '../../images/Avatar.png'

function Register() {
  return (
    <>
      <form class="member-form">
        <div class="member-form-title">
          <div class="member-form-title-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-file-earmark-text"
              viewBox="0 0 16 16"
            >
              <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
              <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
            </svg>
          </div>
          <h5>註冊</h5>
        </div>
        <div class="member-form-group-content">
          <div class="member-form-group-picture">
            <figure>
              <img src={avatar} alt="Avatar" />
            </figure>
            <input type="file" />
          </div>
          <div class="member-form-group row">
            <label class="font-700SL col-2" for="">
              帳號*
            </label>
            <div class="col-4">
              <input type="text" placeholder="請輸入帳號" />
              <p class="font-400S member-form-errorMsg">預留錯誤訊息的位置</p>
            </div>
          </div>
          <div class="member-form-group row">
            <label class="font-700SL col-2" for="">
              密碼*
            </label>
            <div class="col-4">
              <input type="text" placeholder="請輸入6-12位密碼" />
              <p class="font-400S member-form-errorMsg">預留錯誤訊息的位置</p>
            </div>
          </div>
          <div class="member-form-group row">
            <label class="font-700SL col-2" for="">
              確認密碼*
            </label>
            <div class="col-4">
              <input type="text" placeholder="請輸入6-12位密碼" />
              <p class="font-400S member-form-errorMsg">預留錯誤訊息的位置</p>
            </div>
          </div>
          <div class="member-form-group row">
            <label class="font-700SL col-2" for="">
              姓名*
            </label>
            <div class="col-4">
              <input type="text" placeholder="" />
              <p class="font-400S member-form-errorMsg">預留錯誤訊息的位置</p>
            </div>
            <div class="col-4 member-form-group-gender">
              <input type="radio" />
              <label class="font-700SL" for="">
                先生
              </label>
              <input type="radio" />
              <label class="font-700SL" for="">
                小姐
              </label>
            </div>
          </div>
          <div class="member-form-group row">
            <label class="font-700SL col-2" for="">
              暱稱
            </label>
            <div class="col-4">
              <input type="text" placeholder="" />
              <p class="font-400S member-form-errorMsg">預留錯誤訊息的位置</p>
            </div>
          </div>
          <div class="member-form-group row">
            <label class="font-700SL col-2" for="">
              手機號碼*
            </label>
            <div class="col-4">
              <input type="text" placeholder="" />
              <p class="font-400S member-form-errorMsg">預留錯誤訊息的位置</p>
            </div>
          </div>
          <div class="member-form-group row">
            <label class="font-700SL col-2" for="">
              電子信箱*
            </label>
            <div class="col-4">
              <input type="text" placeholder="" />
              <p class="font-400S member-form-errorMsg">預留錯誤訊息的位置</p>
            </div>
          </div>
          <div class="member-form-group row">
            <label class="font-700SL col-2" for="">
              地址
            </label>
            <div class="col-4">
              <input type="text" placeholder="" />
              <p class="font-400S member-form-errorMsg">預留錯誤訊息的位置</p>
            </div>
          </div>
          <div class="member-form-group row">
            <label class="font-700SL col-2" for="">
              取貨門市
            </label>
            <div class="col-4">
              <input type="text" placeholder="" />
              <p class="font-400S member-form-errorMsg">預留錯誤訊息的位置</p>
            </div>
          </div>
        </div>
        <button class="member-form-submitBtn">送出</button>
      </form>
    </>
  )
}

export default Register
