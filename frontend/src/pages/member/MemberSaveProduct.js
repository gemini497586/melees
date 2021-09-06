import React from 'react'
import '../../style/member.css'
import MemberSaveProdcutCard from './component/MemberSaveProductCard'
import DropDown from '../../component/DropDown'
import MinorBar from './component/MinorBar'

function MemberSaveProdcut() {
  return (
    <>
      <MinorBar />
      <div className="memberSaveProduct-container">
        <div className="memberSaveProduct-filter">
          <DropDown />
        </div>
        <div className="row">
          <MemberSaveProdcutCard />
          <MemberSaveProdcutCard />
          <MemberSaveProdcutCard />
          <MemberSaveProdcutCard />
          <MemberSaveProdcutCard />
          <MemberSaveProdcutCard />
        </div>
      </div>
    </>
  )
}

export default MemberSaveProdcut
