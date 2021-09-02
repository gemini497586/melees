import React from 'react'
import '../../style/memberBox.css'
import SaveBox from './component/SaveBox'
import DropDown2 from '../../component/DropDown2'

function MemberBox() {
  const itemList = [
    {
      name: '時間由新至舊',
      value: '1',
    },
    {
      name: '時間由舊至新',
      value: '2',
    },
    {
      name: '卡路里由多至少',
      value: '3',
    },
    {
      name: '卡路里由少至多',
      value: '4',
    },
  ]
  return (
    <>
      <section>
        <div className="container">
          <div className="member-box-top d-flex justify-content-end">
            <DropDown2 itemList={itemList} />
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
