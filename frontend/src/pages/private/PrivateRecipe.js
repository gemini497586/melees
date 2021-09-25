import React, { useState, useEffect } from 'react'

import PrivateRecipeBanner from './component/PrivateRecipeBanner'
import DropDown from '../../component/DropDown'
import PrivateRecipeCard from './component/PrivateRecipeCard'
import Paging from '../../component/Paging'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function PrivateRecipe() {
  const [itemInfo, setItemInfo] = useState([])
  const [likeList, setLikeList] = useState([])
  const [viewList, setViewList] = useState([])
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
  ]
  useEffect(() => {
    Axios.get(`${API_URL}/private/index`, {
      withCredentials: true,
    }).then((res) => {
      setItemInfo(res.data.result)
      setLikeList(res.data.result2)
      setViewList(res.data.result3)
    })
    console.log(itemInfo)
    console.log(viewList)
    let testabc = itemInfo.concat(viewList)
    console.log('testabc', testabc)
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
    // if (sortBy === 2) {
    //   newData = [...newData].sort(
    //     (a, b) => viewList[0].count - viewList[2].count
    //   )
    // }
    // if (sortBy === 3) {
    //   newData = [...newData].sort((a, b) => a.id - b.id)
    // }

    return newData
  }

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
        <CardRecipe />
        <CardShopping />
        <Paging />
      </div>
    </>
  )
}
export default PrivateRecipe
