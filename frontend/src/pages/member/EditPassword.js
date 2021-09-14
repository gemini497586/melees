import React, { useState } from 'react'
import '../../style/global.css'
import '../../style/member.css'
import MinorBar from './component/MinorBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import { API_URL } from '../../utils/config'
import axios from 'axios'

function EditPassword() {
  const [oldPassword, setOldPassword] = useState('')
  const [password, setPassword] = useState('')
  const [rePassword, setRePassword] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let result = await axios.post(
        `${API_URL}/member/editpwd`,
        {
          oldPassword,
          password,
          rePassword,
        },
        {
          // 設定可以跨源送 cookie
          withCredentials: true,
        }
      )
      console.log(result)
    } catch (e) {
      console.error(e.result)
    }
  }
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <form
          className="member-form member-form-forEditMemberInfo"
          onSubmit={handleSubmit}
        >
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
              <label className="font-700SL col-2" htmlFor="oldPassword">
                舊密碼*
              </label>
              <div className="col-4">
                <input
                  type="password"
                  id="oldPassword"
                  name="oldPassword"
                  value={oldPassword}
                  onChange={(e) => {
                    setOldPassword(e.target.value)
                  }}
                  placeholder="請輸入6-12位舊密碼"
                  required
                  minlength="6"
                  maxlength="12"
                />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="password">
                新密碼*
              </label>
              <div className="col-4">
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value)
                  }}
                  placeholder="請輸入6-12位新密碼"
                  required
                  minlength="6"
                  maxlength="12"
                />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="rePassword">
                確認新密碼*
              </label>
              <div className="col-4">
                <input
                  type="password"
                  id="rePassword"
                  name="rePassword"
                  value={rePassword}
                  onChange={(e) => {
                    setRePassword(e.target.value)
                  }}
                  placeholder="請輸入6-12位確認新密碼"
                  required
                  minlength="6"
                  maxlength="12"
                />
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
