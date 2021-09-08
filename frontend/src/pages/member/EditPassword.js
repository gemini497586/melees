import React from 'react'
import '../../style/global.css'
import '../../style/member.css'
import MinorBar from './component/MinorBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'

function EditPassword() {
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <form className="member-form member-form-forEditMemberInfo">
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
      </div>
    </>
  )
}

export default EditPassword
