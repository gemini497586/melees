import React from 'react'
import '../../style/global.css'
import '../../style/member.css'
import Header from '../../component/Header'
import MinorBar from './component/MinorBar'
import Footer from '../../component/Footer'

function EditPassword() {
  return (
    <>
      <MinorBar />
      <form className="member-form member-form-forEditMemberInfo">
        <div className="member-form-title">
          <div className="member-form-title-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-lock-fill"
              viewBox="0 0 16 16"
            >
              <path d="M8 1a2 2 0 0 1 2 2v4H6V3a2 2 0 0 1 2-2zm3 6V3a3 3 0 0 0-6 0v4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2z" />
            </svg>
          </div>
          <h5>會員密碼修改</h5>
        </div>
        <div className="member-form-group-content">
          <div className="member-form-group row">
            <label className="font-700SL col-2" htmlFor="">
              舊密碼*
            </label>
            <div className="col-4">
              <input type="text" placeholder="請輸入6-12位舊密碼" />
              <p className="font-400S member-form-errorMsg">
                預留錯誤訊息的位置
              </p>
            </div>
          </div>
          <div className="member-form-group row">
            <label className="font-700SL col-2" htmlFor="">
              新密碼*
            </label>
            <div className="col-4">
              <input type="text" placeholder="請輸入6-12位新密碼" />
              <p className="font-400S member-form-errorMsg">
                預留錯誤訊息的位置
              </p>
            </div>
          </div>
          <div className="member-form-group row">
            <label className="font-700SL col-2" htmlFor="">
              確認新密碼*
            </label>
            <div className="col-4">
              <input type="text" placeholder="請輸入6-12位新密碼" />
              <p className="font-400S member-form-errorMsg">
                預留錯誤訊息的位置
              </p>
            </div>
          </div>
        </div>
        <button className="member-form-submitBtn">送出</button>
      </form>
      <Footer />
    </>
  )
}

export default EditPassword
