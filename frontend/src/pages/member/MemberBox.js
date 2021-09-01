import React from 'react'
import '../../style/memberBox.css'
import SaveBox from './compenent/SaveBox'

function MemberBox() {
  return (
    <>
      <section>
        <div className="container">
          <div className="member-box-top d-flex justify-content-end">
            <div className="col-3">
              <select className="form-select" value="">
                請選排序方式
                <option value="1">時間由新至舊</option>
                <option value="2">時間由舊至新</option>
                <option value="3">卡路里由多至少</option>
                <option value="4">卡路里由少至多</option>
              </select>
            </div>
          </div>
          <div className="member-box-bottom">
            <div className="row">

              <SaveBox />
              <SaveBox />
              <SaveBox />
              <SaveBox />
              <SaveBox />
              <SaveBox />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MemberBox
