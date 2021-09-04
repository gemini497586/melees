import React from 'react'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/memberRecipeComment.css'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import '../../component/FontawsomeIcons'
import MemberRecipeCommentRow from './component/MemberRecipeCommentRow'
import DropDown from '../../component/DropDown'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import MinorBar from './component/MinorBar.js'

function MemberRecipeComment() {
  return (
    <>
      <MinorBar />
      <div className="memberRecipeComment-container">
        <div className="memberRecipeComment-filter">
          <DropDown />
        </div>
        <div className="memberRecipeComment-table">
          <div className="memberRecipeComment-table-title row align-items-center">
            <p className="font-700L col-2">食譜名稱</p>
            <p className="font-700L col-2">評分</p>
            <p className="font-700L col-6">我的評論內容</p>
          </div>
          <MemberRecipeCommentRow />
          <MemberRecipeCommentRow />
          <MemberRecipeCommentRow />
          <MemberRecipeCommentRow />
          <MemberRecipeCommentRow />
          <MemberRecipeCommentRow />
          <MemberRecipeCommentRow />
          <MemberRecipeCommentRow />
        </div>
      </div>
    </>
  )
}

export default MemberRecipeComment
