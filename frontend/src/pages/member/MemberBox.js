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
  const saveBoxList = [
    {
      food: '雞肉、花椰菜、番茄、白飯、玉米筍',
      cal: 1200,
      name: 'Ruby',
      date: '2021/09/03',
    },
    {
      food: '雞肉、花椰菜、番茄、白飯、玉米筍雞肉、花椰菜、番茄、白飯、玉米筍',
      cal: 1200,
      name: 'Ruby',
      date: '2021/09/03',
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
              <SaveBox saveBoxList={saveBoxList} />
              <SaveBox saveBoxList={saveBoxList} />
              <SaveBox saveBoxList={saveBoxList} />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MemberBox
