import { useState, useEffect } from 'react'
import '../../style/global.css'
import '../../style/member.css'
import '../../style/memberRecipeComment.css'
import MinorBar from './component/MinorBar'
import MemberRecipeCommentRow from './component/MemberRecipeCommentRow'
import DropDown from '../../component/DropDown'
import axios from 'axios'
import { API_URL } from '../../utils/config'
import moment from 'moment'

function MemberRecipeComment() {
  const [recipeDataList, setRecipeDataList] = useState([])
  const [reRender, setReRender] = useState(false)
  const [sortBy, setSortBy] = useState(0)
  const sortList = [
    {
      name: '評論時間由新至舊',
      value: '0',
    },
    {
      name: '評論時間由舊至新',
      value: '1',
    },
    {
      name: '評分由高至低',
      value: '2',
    },
    {
      name: '評分由低至高',
      value: '3',
    },
  ]

  const handleSort = (data, sortBy) => {
    let newData = [...data]
    if (sortBy === 0) {
      newData = [...newData].sort(
        (a, b) => moment(b.comment_time) - moment(a.comment_time)
      )
    }
    if (sortBy === 1) {
      newData = [...newData].sort(
        (a, b) => moment(a.comment_time) - moment(b.comment_time)
      )
    }
    if (sortBy === 2) {
      newData = [...newData].sort(
        (a, b) => b.recipe_star_rate - a.recipe_star_rate
      )
    }
    if (sortBy === 3) {
      newData = [...newData].sort(
        (a, b) => a.recipe_star_rate - b.recipe_star_rate
      )
    }
    return newData
  }

  const readCommentAPI = async () => {
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

  // 初始化，先去後端取資料
  // 編輯或刪除成功，重新去後端取資料
  useEffect(() => {
    readCommentAPI()
    setReRender(false)
  }, [reRender])

  // 隨著 排序選項 render 畫面
  useEffect(() => {
    let newData = []
    newData = handleSort(recipeDataList, sortBy)
    setRecipeDataList(newData)
  }, [sortBy])

  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="memberRecipeComment-container">
          <div className="memberRecipeComment-filter">
            <DropDown
              sortList={sortList}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
            
          </div>
          <div className="memberRecipeComment-table">
            <div className="memberRecipeComment-table-title row align-items-center">
              <p className="font-700L col-2">食譜名稱</p>
              <p className="font-700L col-2">評分</p>
              <p className="font-700L col-6">我的評論內容</p>
            </div>
            {recipeDataList.map((value, index) => {
              return (
                <MemberRecipeCommentRow
                  key={value.id}
                  recipeData={value}
                  setReRender={setReRender}
                />
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberRecipeComment
