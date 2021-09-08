import React, { useEffect, useState } from 'react'
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom'
import '../../style/global.css'
import '../../style/member.css'
import avatar from '../../images/Avatar.png'
import MinorBar from './component/MinorBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import { API_URL } from '../../utils/config'
import axios from 'axios'

function EditMemberInfo() {
  const [errorMsg, setErrorMsg] = useState(null)
  useEffect(() => {
    const testLoginCheck = async () => {
      try {
        let result = await axios.get(`${API_URL}/member/editinfo`, {
          // 設定可以跨源送 cookie
          withCredentials: true,
        })
        console.log(result)
        setErrorMsg(null)
      } catch (e) {
        console.log(e)
        setErrorMsg(e.message)
      }
    }
    testLoginCheck()
  }, [])

  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div>後端訊息：{errorMsg}</div>
        <form className="member-form member-form-forEditMemberInfo">
          <div className="member-form-title">
            <div className="member-form-title-icon">
              <FontAwesomeIcon
                icon="file-alt"
                size="lg"
                className="icon-file"
              />
            </div>
            <h5>會員資料修改</h5>
          </div>
          <div className="member-form-group-content">
            <Link to="/member/editpwd" className="member-form-editPasswordBtn">
              <FontAwesomeIcon icon="pen" size="lg" className="icon-pen" />
              密碼修改
            </Link>
            <div className="member-form-group-picture">
              <figure>
                <img src={avatar} alt="Avatar" />
              </figure>
              <input type="file" />
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="">
                姓名*
              </label>
              <div className="col-4">
                <input type="text" placeholder="" />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
              <div className="col-4 member-form-group-gender">
                <input type="radio" />
                <label className="font-700SL" htmlFor="">
                  先生
                </label>
                <input type="radio" />
                <label className="font-700SL" htmlFor="">
                  小姐
                </label>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="">
                暱稱
              </label>
              <div className="col-4">
                <input type="text" placeholder="" />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="">
                手機號碼*
              </label>
              <div className="col-4">
                <input type="text" placeholder="" />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="">
                電子信箱*
              </label>
              <div className="col-4">
                <input type="text" placeholder="" />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="">
                地址
              </label>
              <div className="col-4">
                <input type="text" placeholder="" />
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

export default EditMemberInfo
