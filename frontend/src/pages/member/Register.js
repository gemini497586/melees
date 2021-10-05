import { useEffect, useState } from 'react'
import '../../style/global.css'
import '../../style/member.css'
import 'animate.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import avatar from '../../images/default_member_avatar.png'
import { API_URL } from '../../utils/config'
import axios from 'axios'
import validationInfo from './component/validationInfo'
import InputErrorMsg from './component/InputErrorMsg'
import queryMsg from './component/queryMsg'
import Swal from 'sweetalert2'

function Register() {
  const [errors, setErrors] = useState({})
  const [pictureErrors, setPictureErrors] = useState()
  const [formValues, setFormValues] = useState({
    gender: 'U',
    birthday: '2000-01-01',
    // account: 'meleesadmin',
    // password: '123456',
    // rePassword: '123456',
    // name: 'meleesadmintester1715',
    // gender: '男',
    // nickname: 'testnickname',
    // birthday: '1992-08-01',
    // cellphone: '0988456654',
    // email: 'meleestest@gmail.com',
    // address: '桃園市中壢區中央路300號',
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

    setPictureErrors(null)

    if (!selectedPic) {
      // 會員反悔取消上傳，將預覽照片清空
      setFormValues({
        ...formValues,
        previewPicture: null,
      })
      return false
    }

    // 有上傳照片且格式符合才寫入表單資料
    if (selectedPic && ALLOWED_TPYES.includes(selectedPic.type)) {
      const reader = new FileReader()
      reader.onloadend = () => {
        // 圖片預覽
        // 必須用 reader.result 來存入物件內，這樣才能即時顯示
        // 使用 e.target.files[0] 來存入物件內，無法即時顯示

        // 傳送到後端
        // reader.result 所傳送的資料型態是 base 64 ，後端「無法用」 multer 套件解讀
        // e.target.files[0] 所傳送的資料型態是 binary ，後端用 multer 套件解讀
        setFormValues({
          ...formValues,
          previewPicture: reader.result,
          picture: e.target.files[0],
        })
      }
      reader.readAsDataURL(selectedPic)
    } else {
      // console.log('Register L74, selectedPic: ', selectedPic)
      setPictureErrors(queryMsg('auth', 'K0101'))
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
    setErrors(validationInfo(formValues))
    // console.log(errors)
  }

  const handleFormInvalid = (e) => {
    // 擋住錯誤訊息的預設方式(跳出的訊息泡泡)
    e.preventDefault()

    // 若必填欄位未填寫，設定該 value = ''; 觸發 errorMsg
    let setEmtpyValue = {
      ...formValues,
      account: formValues.account ? formValues.account : '',
      password: formValues.password ? formValues.password : '',
      rePassword: formValues.rePassword ? formValues.rePassword : '',
      name: formValues.name ? formValues.name : '',
      email: formValues.email ? formValues.email : '',
    }
    setFormValues(setEmtpyValue)
    setErrors(validationInfo(formValues))
    // console.log('handleFormInvalid', errors)
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // 1. 發送axios前，再次驗證表單的值有沒有不合法
    //    不通過 --> return false
    handleFormValuesInvalid(e)
    if (Object.keys(errors).length > 0) {
      // console.log('Object.keys(errors).length:', Object.keys(errors).length)
      return false
    }

    try {
      //  2. 通過 --> 發 axios
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

      // 3. Y --> 後端回覆成功
      //    a.清空 所有欄位, b.開啟 成功的 Swal
      setFormValues({
        picture: '',
        previewPicture: '',
        account: '',
        password: '',
        rePassword: '',
        name: '',
        gender: 'U',
        nickname: '',
        birthday: '2000-01-01',
        cellphone: '',
        email: '',
        address: '',
      })
      Swal.fire({
        icon: 'success',
        title: queryMsg(response.data.category, response.data.code),
        html: `體驗會員專屬功能，點擊連結 <a href="/login" class="register-loginLink"><strong>立即登入</strong></a>！`,
        confirmButtonColor: 'var(--color-primary)',
        confirmButtonText: '確認',
      })
    } catch (err) {
      // 3. N --> 後端回覆失敗
      //    a.清空 密碼欄位, b. 設定表單錯誤訊息
      // console.error(err.response.data)
      setFormValues({
        ...formValues,
        password: '',
        rePassword: '',
      })

      let resData = err.response.data
      // instanceof 判斷資料型別是物件還是陣列時，應該優先判斷array，最後判斷object
      // 因為 Array 也是屬於物件 array01 instanceof Object  // true
      // ==============================================
      // express-validator 回覆多個欄位發生錯誤時，resData 是 Array
      // 其他驗證 或 express-validator 回覆１個欄位發生錯誤時，resData 是 Object
      if (resData instanceof Array) {
        let resError = {}
        for (let i = 0; i < resData.length; i++) {
          const error = resData[i]
          if (error.type === 'picture') {
            setPictureErrors(queryMsg(error.category, error.code))
            continue
          }
          resError[error.type] = queryMsg(error.category, error.code)
        }
        console.log(resError)
        setErrors(resError)
      } else if (resData instanceof Object) {
        if (resData.type === 'picture') {
          setPictureErrors(queryMsg(resData.category, resData.code))
          return
        }
        setErrors({
          [resData.type]: queryMsg(resData.category, resData.code),
        })
      }
    }
  }

  return (
    <>
      <form
        className="member-form member-form-forRegister"
        onSubmit={handleSubmit}
        onChange={handleFormChange}
        onInvalid={handleFormInvalid}
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
                src={
                  formValues.previewPicture ? formValues.previewPicture : avatar
                }
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
                {pictureErrors}
              </p>
            )}
          </div>
          <div className="member-form-group row">
            <label className="font-700SL col-2" htmlFor="account">
              帳號*
            </label>
            <div className="col-4">
              <input
                className={
                  errors.account
                    ? 'form-input-invalid animate__animated animate__headShake'
                    : null
                }
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
              <InputErrorMsg errorMsg={errors.account} />
            </div>
          </div>
          <div className="member-form-group row">
            <label className="font-700SL col-2" htmlFor="password">
              密碼*
            </label>
            <div className="col-4">
              <input
                className={
                  errors.password
                    ? 'form-input-invalid animate__animated animate__headShake'
                    : null
                }
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
              <InputErrorMsg errorMsg={errors.password} />
            </div>
          </div>
          <div className="member-form-group row">
            <label className="font-700SL col-2" htmlFor="rePassword">
              確認密碼*
            </label>
            <div className="col-4">
              <input
                className={
                  errors.rePassword
                    ? 'form-input-invalid animate__animated animate__headShake'
                    : null
                }
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
              <InputErrorMsg errorMsg={errors.rePassword} />
            </div>
          </div>
          <div className="member-form-group row">
            <label className="font-700SL col-2" htmlFor="name">
              姓名*
            </label>
            <div className="col-4">
              <input
                className={
                  errors.name
                    ? 'form-input-invalid animate__animated animate__headShake'
                    : null
                }
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
              <InputErrorMsg errorMsg={errors.name} />
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
              <InputErrorMsg errorMsg={errors.gender} />
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
              <InputErrorMsg errorMsg={errors.nickname} />
            </div>
          </div>
          <div className="member-form-group row">
            <label className="font-700SL col-2" htmlFor="email">
              電子信箱*
            </label>
            <div className="col-4">
              <input
                className={
                  errors.email
                    ? 'form-input-invalid animate__animated animate__headShake'
                    : null
                }
                type="text"
                id="email"
                name="email"
                value={formValues.email}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
                required
                maxlength="100"
              />
              <InputErrorMsg errorMsg={errors.email} />
            </div>
          </div>
          <div className="member-form-group row">
            <label className="font-700SL col-2" htmlFor="birthday">
              出生日期
            </label>
            <div className="col-4">
              <input
                className={
                  errors.birthday
                    ? 'form-input-invalid animate__animated animate__headShake'
                    : null
                }
                type="date"
                id="birthday"
                name="birthday"
                value={formValues.birthday}
                onChange={handleFormValuesChange}
              />
              <InputErrorMsg errorMsg={errors.birthday} />
            </div>
          </div>
          <div className="member-form-group row">
            <label className="font-700SL col-2" htmlFor="cellphone">
              手機號碼
            </label>
            <div className="col-4">
              <input
                className={
                  errors.cellphone
                    ? 'form-input-invalid animate__animated animate__headShake'
                    : null
                }
                type="text"
                id="cellphone"
                name="cellphone"
                value={formValues.cellphone}
                onChange={handleFormValuesChange}
                onBlur={handleFormValuesInvalid}
                maxlength="100"
              />
              <InputErrorMsg errorMsg={errors.cellphone} />
            </div>
          </div>
          <div className="member-form-group row">
            <label className="font-700SL col-2" htmlFor="address">
              地址
            </label>
            <div className="col-4">
              <input
                className={
                  errors.address
                    ? 'form-input-invalid animate__animated animate__headShake'
                    : null
                }
                type="text"
                id="address"
                name="address"
                value={formValues.address}
                onChange={handleFormValuesChange}
                placeholder=""
                maxlength="100"
              />
              <InputErrorMsg errorMsg={errors.address} />
            </div>
          </div>
          <button type="submit" className="member-form-submitBtn">
            送出
          </button>
        </div>
      </form>
    </>
  )
}
export default Register
