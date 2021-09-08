import React from 'react'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/member.css'
import avatar from '../../images/Avatar.png'
import MinorBar from './component/MinorBar'

function EditMemberInfo() {
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <form className="member-form member-form-forEditMemberInfo">
          <div className="member-form-title">
            <div className="member-form-title-icon">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-file-earmark-text"
                viewBox="0 0 16 16"
              >
                <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z" />
                <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z" />
              </svg>
            </div>
            <h5>會員資料修改</h5>
          </div>
          <div className="member-form-group-content">
            <button className="member-form-editPasswordBtn">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-pencil"
                viewBox="0 0 16 16"
              >
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168l10-10zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207 11.207 2.5zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293l6.5-6.5zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325z" />
              </svg>
              密碼修改
            </button>
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

      {/* <Footer /> */}
    </>
  )
}

export default EditMemberInfo
