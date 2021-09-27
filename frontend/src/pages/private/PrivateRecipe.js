// 私藏元件
import PrivateRecipeBanner from './component/PrivateRecipeBanner'
import PrivateRecipeCard from './component/PrivateRecipeCard'
// 共同元件
import DropDown from '../../component/DropDown'
import Paging from '../../component/Paging'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
// tools
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function PrivateRecipe() {
  const [itemInfo, setItemInfo] = useState([])
  const [likeList, setLikeList] = useState([])
  const [viewList, setViewList] = useState([])
  const [commentList, setCommentList] = useState([])
  const [sortBy, setSortBy] = useState(0)

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
  useEffect(() => {
    Axios.get(`${API_URL}/private/index`, {
      withCredentials: true,
    }).then((res) => {
      setItemInfo(res.data.recipeInfo)
      setLikeList(res.data.likeResult)
      setViewList(res.data.viewResult)
      setCommentList(res.data.commentResult)
    })
  }, [])

  // 排序功能
  const handleSort = (itemInfo, sortBy) => {
    let newData = [...itemInfo]
    if (sortBy === 0) {
      newData = [...newData].sort((a, b) => b.id - a.id)
    }
    if (sortBy === 1) {
      newData = [...newData].sort((a, b) => a.id - b.id)
    }
    if (sortBy === 2) {
      newData = [...newData].sort(
        (a, b) => viewList[b.id - 1].count - viewList[a.id - 1].count
      )
    }
    if (sortBy === 3) {
      newData = [...newData].sort(
        (a, b) => viewList[a.id - 1].count - viewList[b.id - 1].count
      )
    }
    if (sortBy === 4) {
      newData = [...newData].sort(
        (a, b) => likeList[b.id - 1].count - likeList[a.id - 1].count
      )
    }
    if (sortBy === 5) {
      newData = [...newData].sort(
        (a, b) => likeList[a.id - 1].count - likeList[b.id - 1].count
      )
    }
    if (sortBy === 6) {
      newData = [...newData].sort(
        (a, b) => commentList[b.id - 1].count - commentList[a.id - 1].count
      )
    }
    if (sortBy === 7) {
      newData = [...newData].sort(
        (a, b) => commentList[a.id - 1].count - commentList[b.id - 1].count
      )
    }

    return newData
  }
  const page = [1, 2, 3]
  useEffect(() => {
    let newData = []
    newData = handleSort(itemInfo, sortBy)
    setItemInfo(newData)
  }, [sortBy])
  return (
    <>
      <div className="page-group">
        <PrivateRecipeBanner />
        <div className="container">
          <div className="row justify-content-end">
            <DropDown
              sortList={sortList}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
        </div>

        <PrivateRecipeCard
          itemInfo={itemInfo}
          likeList={likeList}
          viewList={viewList}
        />
        <div className="container">
          <div className="row justify-content-center">
            {page.map((value, index) => {
              return <Paging value={value} />
            })}
          </div>
        </div>
        <CardRecipe />
        <CardShopping />
      </div>
    </>
  )
}
export default PrivateRecipe
