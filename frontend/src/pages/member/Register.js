import React, { useState } from 'react'
import '../../style/global.css'
import '../../style/member.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import avatar from '../../images/Avatar.png'
import { API_URL } from '../../utils/config'
import axios from 'axios'

function Register() {
  const [picture, setPicture] = useState('')
  const [account, setAccount] = useState('test123er')
  const [password, setPassword] = useState('123456')
  const [rePassword, setRePassword] = useState('123456')
  const [name, setName] = useState('test')
  const [gender, setGender] = useState('男')
  const [nickname, setNickname] = useState('test')
  const [birthday, setBirthday] = useState('1991-09-08')
  const [cellphone, setCellphone] = useState('0988456654')
  const [email, setEmail] = useState('meleestest@gmail.com')
  const [address, setAddress] = useState('桃園市中壢區中央路300號')
  const handleSubmit = async (e) => {
    e.preventDefault()
    let result = await axios.post(
      `${API_URL}/auth/register`,
      {
        picture,
        account,
        password,
        rePassword,
        name,
        gender,
        nickname,
        birthday,
        cellphone,
        email,
        address,
      },
      {
        // 設定可以跨源送 cookie
        withCredentials: true,
      }
    )
    console.log(result)
  }
  return (
    <>
      <form
        className="member-form member-form-forRegister"
        onSubmit={handleSubmit}
      >
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
            <input
              type="file"
              id="picture"
              name="picture"
              value={picture}
              onChange={(e) => {
                setPicture(e.target.value)
              }}
            />
          </div>
          <div className="member-form-group row">
            <label className="font-700SL col-2" htmlFor="account">
              帳號*
            </label>
            <div className="col-4">
              <input
                type="text"
                id="account"
                name="account"
                value={account}
                onChange={(e) => {
                  setAccount(e.target.value)
                }}
                placeholder="請輸入帳號"
                required
                maxlength="100"
              />
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
                type="password"
                id="password"
                name="password"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value)
                }}
                placeholder="請輸入6-12位密碼"
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
              確認密碼*
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
                placeholder="請輸入6-12位密碼"
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
    </>
  )
}

export default Register
