import { useState, useEffect } from 'react'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/memberRecipeComment.css'
import MinorBar from './component/MinorBar'
import MemberRecipeCommentRow from './component/MemberRecipeCommentRow'
import DropDown from '../../component/DropDown'
import axios from 'axios'
import { API_URL } from '../../utils/config'



function MemberRecipeComment() {
  const [recipeDataList, setRecipeDataList] = useState([])

  useEffect(() => {
    const getComment = async () => {
      try {
        let response = await axios.post(
          `${API_URL}/member/recipecomment/read`,
          {},
          {
            // 設定可以跨源送 cookie
            withCredentials: true,
          }
        )
        setRecipeDataList(response.data)
      } catch (err) {
        console.error(err.response)
      }
    }
    getComment()
  }, [])

  // useEffect(() => {
  //   console.log('useEEfect is working by showEditModal')
  // },[showEditModal])

  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="memberRecipeComment-container">
          <div className="memberRecipeComment-filter">{/* <DropDown /> */}</div>
          <div className="memberRecipeComment-table">
            <div className="memberRecipeComment-table-title row align-items-center">
              <p className="font-700L col-2">食譜名稱</p>
              <p className="font-700L col-2">評分</p>
              <p className="font-700L col-6">我的評論內容</p>
            </div>
            {recipeDataList.map((value, index) => {
              return (
                <MemberRecipeCommentRow key={value.id} recipeData={value} />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberRecipeComment
