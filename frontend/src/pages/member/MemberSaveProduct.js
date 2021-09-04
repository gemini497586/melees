import React from 'react'
import '../../style/member.css'
import MinorBar from './component/MinorBar'
import Paging from '../../component/Paging'
import MemberSaveProdcutCard from './component/MemberSaveProductCard'
import DropDown from '../../component/Dropdown'

const pages = [1]

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
        <Paging value={pages} />
      </div>
    </>
  )
}

export default MemberSaveProdcut
