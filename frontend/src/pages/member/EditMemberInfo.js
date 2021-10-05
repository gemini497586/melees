import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import '../../style/global.css'
import '../../style/member.css'
import avatar from '../../images/default_member_avatar.png'
import MinorBar from './component/MinorBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import { API_URL } from '../../utils/config'
import axios from 'axios'
import validationInfo from './component/validationInfo'
import InputErrorMsg from './component/InputErrorMsg'
import Swal from 'sweetalert2'
import queryMsg from './component/queryMsg'

function EditMemberInfo() {
  const [errors, setErrors] = useState({})
  const [pictureErrors, setPictureErrors] = useState(false)
  const [formValues, setFormValues] = useState({
    picture: '',
    previewPicture: '',
    name: '',
    gender: '',
    nickname: '',
    birthday: '',
    cellphone: '',
    email: '',
    address: '',
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

    // 上傳時，先清空「舊的錯誤訊息」
    setPictureErrors(false)

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

    // 1. 發送axios前，再次驗證表單的值有沒有不合法
    //    不通過 --> return false
    setErrors({}) // 清空errors --> 為了刷新動畫
    handleFormValuesInvalid(e)
    if (Object.keys(errors).length > 0) {
      console.log('Object.keys(errors).length:', Object.keys(errors).length)
      return false
    }

    try {
      //  2. 通過 --> 發 axios
      let formData = new FormData()
      formData.append('picture', formValues.picture)
      formData.append('name', formValues.name)
      formData.append('gender', formValues.gender)
      formData.append('nickname', formValues.nickname)
      formData.append('birthday', formValues.birthday)
      formData.append('cellphone', formValues.cellphone)
      formData.append('email', formValues.email)
      formData.append('address', formValues.address)
      let response = await axios.post(`${API_URL}/member/editinfo`, formData, {
        // 設定可以跨源送 cookie
        withCredentials: true,
      })
      console.log(response)

      // 3. Y --> 後端回覆成功
      //    a. useEffect get 刷新會員資料, b.開啟 成功的 Swal
      Swal.fire({
        icon: 'success',
        title: queryMsg(response.data.category, response.data.code),
        confirmButtonColor: 'var(--color-primary)',
        confirmButtonText: '確認',
      })
    } catch (err) {
      // console.error(err.response.data)
      let resData = err.response.data

      // 其他驗證 或 express-validator 回覆１個欄位發生錯誤時，resData 是 Object
      // express-validator 回覆多個欄位發生錯誤時，resData 是 Array
      if (resData instanceof Object) {
        if (resData.type === 'picture') {
          setPictureErrors(queryMsg(resData.category, resData.code))
          return
        }
        setErrors({
          [resData.type]: queryMsg(resData.category, resData.code),
        })
      } else if (resData instanceof Array) {
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
      }
    }
  }

  useEffect(() => {
    const memberInfoAPI = async () => {
      try {
        let response = await axios.get(`${API_URL}/member/editinfo`, {
          // 設定可以跨源送 cookie
          withCredentials: true,
        })
        let memberInfo = response.data
        // console.log(memberInfo)
        let previewPic = memberInfo.picture.includes('http')
          ? memberInfo.picture
          : `${API_URL}/member/${memberInfo.picture}`
        setFormValues({
          previewPicture: previewPic,
          name: memberInfo.name,
          gender: memberInfo.gender,
          nickname: memberInfo.nickname,
          birthday: memberInfo.birthday,
          cellphone: memberInfo.cellphone,
          email: memberInfo.email,
          address: memberInfo.address,
        })
      } catch (err) {
        console.error(err.response)
      }
    }
    memberInfoAPI()
  }, [])
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <form
          className="member-form member-form-forEditMemberInfo"
          onSubmit={handleSubmit}
          onChange={handleFormChange}
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
                <img
                  src={
                    formValues.previewPicture
                      ? formValues.previewPicture
                      : avatar
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
                  檔案格式不符合
                </p>
              )}
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
                  maxLength="100"
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
                  className={
                    errors.nickname
                      ? 'form-input-invalid animate__animated animate__headShake'
                      : null
                  }
                  type="text"
                  id="nickname"
                  name="nickname"
                  value={formValues.nickname}
                  onChange={handleFormValuesChange}
                  onBlur={handleFormValuesInvalid}
                  placeholder=""
                  maxLength="100"
                />
                <InputErrorMsg errorMsg={errors.nickname} />
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="birthday">
                出生日期*
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
                  onBlur={handleFormValuesInvalid}
                  placeholder=""
                  required
                />
                <InputErrorMsg errorMsg={errors.birthday} />
              </div>
            </div>
            <div className="member-form-group row">
              <label className="font-700SL col-2" htmlFor="cellphone">
                手機號碼*
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
                  placeholder=""
                  required
                  maxLength="100"
                />
                <InputErrorMsg errorMsg={errors.cellphone} />
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
                  placeholder=""
                  required
                  maxLength="100"
                />
                <InputErrorMsg errorMsg={errors.email} />
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
                  onBlur={handleFormValuesInvalid}
                  placeholder=""
                  maxLength="100"
                />
                <InputErrorMsg errorMsg={errors.address} />
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
