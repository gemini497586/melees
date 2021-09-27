import { useEffect, useState, useContext } from 'react'
import { Link, Redirect, useLocation } from 'react-router-dom'
import '../../style/global.css'
import '../../style/member.css'
import avatar from '../../images/default_member_avatar.png'
import MinorBar from './component/MinorBar'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import { API_URL } from '../../utils/config'
import axios from 'axios'
import validationInfo from './component/validationInfo'

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
    handleFormValuesInvalid(e)
    // console.log('errors.length: ', errors.length)
    // if (errors.length > 0) {
    //   return false
    // } 
    try {
      let formData = new FormData()
      formData.append('picture', formValues.picture)
      formData.append('name', formValues.name)
      formData.append('gender', formValues.gender)
      formData.append('nickname', formValues.nickname)
      formData.append('birthday', formValues.birthday)
      formData.append('cellphone', formValues.cellphone)
      formData.append('email', formValues.email)
      formData.append('address', formValues.address)
      let result = await axios.post(`${API_URL}/member/editinfo`, formData, {
        // 設定可以跨源送 cookie
        withCredentials: true,
      })
      console.log(result)
    } catch (e) {
      console.error(e.result)
    }
  }

  useEffect(() => {
    const testLoginCheck = async () => {
      try {
        let response = await axios.get(`${API_URL}/member/editinfo`, {
          // 設定可以跨源送 cookie
          withCredentials: true,
        })
        let memberInfo = response.data
        // console.log(memberInfo)

        setFormValues({
          previewPicture: `${API_URL}/member/${memberInfo.picture}`,
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
        if (err.response.status === 400) {
          alert('會員資料輸入錯誤')
        }
      }
    }
    testLoginCheck()
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
                  onBlur={handleFormValuesInvalid}
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
                  onBlur={handleFormValuesInvalid}
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
                  onBlur={handleFormValuesInvalid}
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
          </div>
          <button className="member-form-submitBtn">送出</button>
        </form>
      </div>
    </>
  )
}

export default EditMemberInfo
