import { useState } from 'react'
import '../../style/global.css'
import '../../style/member.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import avatar from '../../images/Avatar.png'
import { API_URL } from '../../utils/config'
import axios from 'axios'
import validationInfo from './component/validationInfo'

function Register() {
  const [errors, setErrors] = useState({})
  const [pictureErrors, setPictureErrors] = useState(false)
  const [formValues, setFormValues] = useState({
    // picture: '',
    // account: '',
    // password: '',
    // rePassword: '',
    // name: '',
    // gender: '',
    // nickname: '',
    // birthday: '',
    // cellphone: '',
    // email: '',
    // address: '',
    picture: avatar,
    account: 'test123er',
    password: '123456',
    rePassword: '123456',
    name: 'testname',
    gender: '',
    nickname: 'testnnickname',
    birthday: '1992-08-01',
    cellphone: '0988456654',
    email: 'meleestest@gmail.com',
    address: '桃園市中壢區中央路300號',
  })
  const handleFormValuesChange = (e) => {
    setFormValues({
      ...formValues,
      [e.target.name]: e.target.value,
    })
    // console.log(formValues)
  }

  // 使用者上傳照片時，進行驗證與寫入表單資料
  const handlePictureChange = (e) => {
    const selectedPic = e.target.files[0]
    const ALLOWED_TPYES = ['image/png', 'image/jpeg', 'image/jpg']

    setPictureErrors(false)
    // 有上傳照片且格式符合才寫入表單資料
    if (selectedPic && ALLOWED_TPYES.includes(selectedPic.type)) {
      const reader = new FileReader()
      reader.onloadend = () => {
        // 必須用 reader.result 來存入物件內，這樣才能即時顯示
        // 使用 e.target.files[0] 來存入物件內，無法即時顯示
        setFormValues({
          ...formValues,
          picture: reader.result,
        })
      }
      reader.readAsDataURL(selectedPic)
    } else {
      setPictureErrors(true)
    }
  }

  // 使用者修改欄位時，清空該欄位的錯誤訊息
  const handleFormChange = (e) => {
    // console.log('更新欄位：', e.target.name)

    // 清空該欄位的錯誤訊息
    const updateErrors = {
      ...errors,
      [e.target.name]: '',
    }
    setErrors(updateErrors)
  }

  // 檢驗表單的值有沒有不合法
  const handleFormValuesInvalid = (e) => {
    // 擋住錯誤訊息的預設方式(跳出的訊息泡泡)
    e.preventDefault()
    setErrors(validationInfo(formValues))
    console.log(errors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      let formData = new FormData()
      formData.append('picture', formValues.picture)
      formData.append('account', formValues.account)
      formData.append('password', formValues.password)
      formData.append('rePassword', formValues.rePassword)
      formData.append('name', formValues.name)
      formData.append('gender', formValues.gender)
      formData.append('nickname', formValues.nickname)
      formData.append('birthday', formValues.birthday)
      formData.append('cellphone', formValues.cellphone)
      formData.append('email', formValues.email)
      formData.append('address', formValues.address)
      let response = await axios.post(`${API_URL}/auth/register`, formData, {
        // 設定可以跨源送 cookie
        withCredentials: true,
      })
      console.log(response)
    } catch (err) {
      console.error(err.response)
      if (err.response.data.message === '此帳號已有人使用') {
        alert('此帳號已有人使用')
      }
    }
  }

  return (
    <>
      <form
        className="member-form member-form-forRegister"
        onSubmit={handleSubmit}
        onChange={handleFormChange}
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
              <img
                src={formValues.picture ? formValues.picture : avatar}
                alt="使用者頭像"
              />
            </figure>
            <input
              type="file"
              id="picture"
              name="picture"
              onChange={handlePictureChange}
            />
            {pictureErrors && (
              <p className="font-400S member-form-errorMsg errorMsg-show">
                檔案格式不符合
              </p>
            )}
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
                value={formValues.account}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
                placeholder="請輸入帳號"
                required
                maxlength="100"
              />
              <p
                className={
                  errors.account
                    ? 'font-400S member-form-errorMsg errorMsg-show'
                    : 'font-400S member-form-errorMsg'
                }
              >
                {errors.account ? errors.account : '預留錯誤訊息的位置'}
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
                value={formValues.password}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
                placeholder="請輸入6-12位密碼"
                required
                minlength="6"
                maxlength="12"
              />
              <p
                className={
                  errors.password
                    ? 'font-400S member-form-errorMsg errorMsg-show'
                    : 'font-400S member-form-errorMsg'
                }
              >
                {errors.password ? errors.password : '預留錯誤訊息的位置'}
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
                value={formValues.rePassword}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
                placeholder="請輸入6-12位密碼"
                required
                minlength="6"
                maxlength="12"
              />
              <p
                className={
                  errors.rePassword
                    ? 'font-400S member-form-errorMsg errorMsg-show'
                    : 'font-400S member-form-errorMsg'
                }
              >
                {errors.rePassword ? errors.rePassword : '預留錯誤訊息的位置'}
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
                value={formValues.name}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
                placeholder=""
                required
                maxlength="100"
              />
              <p
                className={
                  errors.name
                    ? 'font-400S member-form-errorMsg errorMsg-show'
                    : 'font-400S member-form-errorMsg'
                }
              >
                {errors.name ? errors.name : '預留錯誤訊息的位置'}
              </p>
            </div>
            <div className="col-4 member-form-group-gender">
              <input
                type="radio"
                id="male"
                name="gender"
                value="男"
                checked={formValues.gender === '男'}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
              />
              <label className="font-700SL" htmlFor="male">
                先生
              </label>
              <input
                type="radio"
                id="female"
                name="gender"
                value="女"
                checked={formValues.gender === '女'}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
              />
              <label className="font-700SL" htmlFor="female">
                小姐
              </label>
              <p
                className={
                  errors.gender
                    ? 'font-400S member-form-errorMsg errorMsg-show'
                    : 'font-400S member-form-errorMsg'
                }
              >
                {errors.gender ? errors.gender : '預留錯誤訊息的位置'}
              </p>
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
                value={formValues.nickname}
                onChange={handleFormValuesChange}
                placeholder=""
                maxlength="100"
              />
              <p
                className={
                  errors.nickname
                    ? 'font-400S member-form-errorMsg errorMsg-show'
                    : 'font-400S member-form-errorMsg'
                }
              >
                {errors.nickname ? errors.nickname : '預留錯誤訊息的位置'}
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
                value={formValues.birthday}
                onChange={handleFormValuesChange}
                placeholder=""
                required
              />
              <p
                className={
                  errors.birthday
                    ? 'font-400S member-form-errorMsg errorMsg-show'
                    : 'font-400S member-form-errorMsg'
                }
              >
                {errors.birthday ? errors.birthday : '預留錯誤訊息的位置'}
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
                value={formValues.cellphone}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
                placeholder=""
                required
                maxlength="100"
              />
              <p
                className={
                  errors.cellphone
                    ? 'font-400S member-form-errorMsg errorMsg-show'
                    : 'font-400S member-form-errorMsg'
                }
              >
                {errors.cellphone ? errors.cellphone : '預留錯誤訊息的位置'}
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
                value={formValues.email}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
                placeholder=""
                required
                maxlength="100"
              />
              <p
                className={
                  errors.email
                    ? 'font-400S member-form-errorMsg errorMsg-show'
                    : 'font-400S member-form-errorMsg'
                }
              >
                {errors.email ? errors.email : '預留錯誤訊息的位置'}
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
                value={formValues.address}
                onChange={handleFormValuesChange}
                placeholder=""
                maxlength="100"
              />
              <p
                className={
                  errors.address
                    ? 'font-400S member-form-errorMsg errorMsg-show'
                    : 'font-400S member-form-errorMsg'
                }
              >
                {errors.address ? errors.address : '預留錯誤訊息的位置'}
              </p>
            </div>
          </div>
          <button className="member-form-submitBtn">送出</button>
        </div>
      </form>
    </>
  )
}
export default Register
