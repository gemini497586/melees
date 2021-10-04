// 私藏元件
import PrivateRecipeBanner from './component/PrivateRecipeBanner'
import PrivateRecipeCard from './component/PrivateRecipeCard'

// 共同元件
import DropDown from '../../component/DropDown'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
// tools
import React, { useState, useEffect } from 'react'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function PrivateRecipe() {
  const [itemInfo, setItemInfo] = useState([])
  const [sortBy, setSortBy] = useState(0)
  const [likeArr, setLikeArr] = useState([])
  const [saveArr, setSaveArr] = useState([])

  const [totalPage, setTotalPage] = useState(0)
  const [page, setPage] = useState(1)

  useEffect(() => {
    const getRecipe = async () => {
      try {
        let res = await Axios.get(`${API_URL}/private/index?page=${page}`, {
          withCredentials: true,
        })
        setItemInfo(res.data.recipeInfo)
        setLikeArr(res.data.likeArr)
        setSaveArr(res.data.saveArr)
        setTotalPage(res.data.pagination.lastPage)
        setPage(res.data.pagination.page)
      } catch (e) {
        console.log(e)
      }
    }
    getRecipe()
  }, [page])

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

  const getPage = () => {
    const pageList = []
    for (let i = 1; i <= totalPage; i++) {
      pageList.push(
        <button
          className="btn paging-btn"
          style={{
            backgroundColor:
              page === i ? 'var(--color-primary)' : 'var(--color-white)',
          }}
          onClick={(e) => {
            setPage(i)
          }}
          key={i}
        >
          {i}
        </button>
      )
    }
    return pageList
  }

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
    newData = handleSort(itemInfo, sortBy)
    // console.log(newData)
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
          <div className="row justify-content-start">
            <PrivateRecipeCard
              itemInfo={itemInfo}
              likeArr={likeArr}
              saveArr={saveArr}
            />
          </div>
          <div className="row justify-content-center">{getPage()}</div>
          <CardRecipe />
          <CardShopping />
        </div>
      </div>
    </>
  )
}
export default PrivateRecipe
