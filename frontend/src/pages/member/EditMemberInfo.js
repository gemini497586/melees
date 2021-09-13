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
  const [picture, setPicture] = useState()
  const [name, setName] = useState('')
  const [gender, setGender] = useState('')
  const [nickname, setNickname] = useState('')
  const [birthday, setBirthday] = useState()
  const [cellphone, setCellphone] = useState('')
  const [email, setEmail] = useState('')
  const [address, setAddress] = useState('')
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let formData = new FormData()
      formData.append('picture', picture)
      formData.append('name', name)
      formData.append('gender', gender)
      formData.append('nickname', nickname)
      formData.append('birthday', birthday)
      formData.append('cellphone', cellphone)
      formData.append('email', email)
      formData.append('address', address)
      let result = await axios.post(`${API_URL}/auth/register`, formData, {
        // 設定可以跨源送 cookie
        withCredentials: true,
      })
      console.log(result)
    } catch (e) {
      console.error(e.result)
    }
  }
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
              <input
                type="file"
                id="picture"
                name="picture"
                onChange={(e) => {
                  setPicture(e.target.files[0])
                }}
              />
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="name">
                姓名*
              </label>
              <div className="col-4">
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value)
                  }}
                  placeholder=""
                  required
                  maxlength="100"
                />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
              <div className="col-4 member-form-group-gender">
                <input
                  type="radio"
                  name="男"
                  value="男"
                  checked={gender === '男'}
                  onChange={(e) => {
                    setGender(e.target.value)
                  }}
                />
                <label className="font-700SL" htmlFor="男">
                  先生
                </label>
                <input
                  type="radio"
                  name="女"
                  value="女"
                  checked={gender === '女'}
                  onChange={(e) => {
                    setGender(e.target.value)
                  }}
                />
                <label className="font-700SL" htmlFor="女">
                  小姐
                </label>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="nickname">
                暱稱
              </label>
              <div className="col-4">
                <input
                  type="text"
                  id="nickname"
                  name="nickname"
                  value={nickname}
                  onChange={(e) => {
                    setNickname(e.target.value)
                  }}
                  placeholder=""
                  maxlength="100"
                />
                <p className="font-400S member-form-errorMsg">
                  預留錯誤訊息的位置
                </p>
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="birthday">
                出生日期*
              </label>
              <div className="col-4">
                <input
                  type="date"
                  id="birthday"
                  name="birthday"
                  value={birthday}
                  onChange={(e) => {
                    setBirthday(e.target.value)
                  }}
                  placeholder=""
                  required
                />
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
                <input
                  type="text"
                  id="cellphone"
                  name="cellphone"
                  value={cellphone}
                  onChange={(e) => {
                    setCellphone(e.target.value)
                  }}
                  placeholder=""
                  required
                  maxlength="100"
                />
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
                <input
                  type="text"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value)
                  }}
                  placeholder=""
                  required
                  maxlength="100"
                />
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
                <input
                  type="text"
                  id="address"
                  name="address"
                  value={address}
                  onChange={(e) => {
                    setAddress(e.target.value)
                  }}
                  placeholder=""
                  maxlength="100"
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

export default EditMemberInfo
