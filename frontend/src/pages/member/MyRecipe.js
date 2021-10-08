import React, { useState, useEffect } from 'react'
// 共用
import MyRecipePanel from './component/MyRecipePanel'
import MyRecipeTable from './component/MyRecipeTable'

import MinorBar from './component/MinorBar'
import DropDown from '../../component/DropDown'

import Axios from 'axios'
import { API_URL } from '../../utils/config'

function MyRecipe() {
  const [recipeList, setRecipeList] = useState([])
  const [likeTotal, setLikeTotal] = useState()
  const [viewTotal, setViewTotal] = useState()
  const [commentTotal, setCommentTotal] = useState()
  const [followTotal, setFollowTotal] = useState()
  const [sortBy, setSortBy] = useState(0)
  const [reRender, setReRender] = useState(false)
  const emptyStyle = {
    margin: '160px 0 165px 0',
    color: 'var(--color-secondary)',
  }

  useEffect(() => {
    Axios.get(`${API_URL}/private/myrecipe`, {
      withCredentials: true,
    }).then((res) => {
      setRecipeList(res.data.recipeInfo)
      setLikeTotal(res.data.totalLike)
      setViewTotal(res.data.totalView)
      setCommentTotal(res.data.totalComment)
      setFollowTotal(res.data.TotalFollow)
    })
  }, [reRender])

  const sortList = [
    {
      name: '時間由新至舊',
    },
    {
      name: '時間由舊至新',
    },
    {
      name: '瀏覽數由多至少',
    },
    {
      name: '瀏覽數由少至多',
    },
    {
      name: '按讚數由多至少',
    },
    {
      name: '按讚數由少至多',
    },
    {
      name: '評論數由多至少',
    },
    {
      name: '評論數由少至多',
    },
  ]

  // 排序功能
  const handleSort = (recipeList, sortBy) => {
    let newData = [...recipeList]
    if (sortBy === 0) {
      newData = [...newData].sort((a, b) => b.id - a.id)
    }
    if (sortBy === 1) {
      newData = [...newData].sort((a, b) => a.id - b.id)
    }
    if (sortBy === 2) {
      newData = [...newData].sort((a, b) => b.viewCount - a.viewCount)
    }
    if (sortBy === 3) {
      newData = [...newData].sort((a, b) => a.viewCount - b.viewCount)
    }
    if (sortBy === 4) {
      newData = [...newData].sort((a, b) => b.likeCount - a.likeCount)
    }
    if (sortBy === 5) {
      newData = [...newData].sort((a, b) => a.likeCount - b.likeCount)
    }
    if (sortBy === 6) {
      newData = [...newData].sort((a, b) => b.commentCount - a.commentCount)
    }
    if (sortBy === 7) {
      newData = [...newData].sort((a, b) => a.commentCount - b.commentCount)
    }

    return newData
  }

  useEffect(() => {
    let newData = []
    newData = handleSort(recipeList, sortBy)
    console.log(newData)
    setRecipeList(newData)
  }, [sortBy])
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="container">
          <div className="row justify-content-center">
            <MyRecipePanel
              recipeList={recipeList}
              likeTotal={likeTotal}
              viewTotal={viewTotal}
              commentTotal={commentTotal}
              followTotal={followTotal}
            />
          </div>
          {recipeList.length === 0 ? (
            <div style={emptyStyle}>
              <h1 className="row justify-content-center">
                目前還沒有食譜喔! 快去新增吧!
              </h1>
            </div>
          ) : (
            <>
              <div className="row justify-content-end">
                <DropDown
                  sortList={sortList}
                  sortBy={sortBy}
                  setSortBy={setSortBy}
                />
              </div>
              <div className="col-12">
                <MyRecipeTable
                  recipeList={recipeList}
                  setReRender={setReRender}
                />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  )
}

export default MyRecipe
