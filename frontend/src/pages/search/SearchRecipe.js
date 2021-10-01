import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../style/searchRecipe.css'
import SearchCardRecipe from './component/SearchCardRecipe'
import RadioBox from './component/RadioBox'
import DropDown2 from '../../component/DropDown2'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function SearchRecipe() {
  const { word } = useParams()
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [privatecount, setPrivateCount] = useState(0)
  const [featurecount, setFeatureCount] = useState(0)
  const [totalCount, setTotalCount] = useState(0)
  const [checked, setChecked] = useState('全部')
  const checkList = ['全部', '精選食譜', '私藏食譜']
  const [sortBy, setSortBy] = useState(0)

  const itemList = [
    {
      name: '時間由新至舊',
    },
    {
      name: '時間由舊至新',
    },
    {
      name: '按讚數由多至少',
    },
    {
      name: '按讚數由少至多',
    },
    {
      name: '瀏覽數由多至少',
    },
    {
      name: '瀏覽數由少至多',
    },
  ]

  // 初始化
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await Axios.get(`${API_URL}/search/recipe?word=${word}`)
        let privateData = res.data.result.private
        let featureData = res.data.result.feature
        let totalData = privateData.concat(featureData)
        setData(totalData)
        setDisplayData(totalData)
        setPrivateCount(res.data.count.privateCount)
        setFeatureCount(res.data.count.featureCount)
        setTotalCount(res.data.count.totalCount)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [word])

  // 排序功能
  const handleSortBy = (displayData, sortBy) => {
    let newData = [...displayData]
    if (sortBy === 0) {
      newData = [...newData].sort((a, b) => b.id - a.id)
    }
    if (sortBy === 1) {
      newData = [...newData].sort((a, b) => a.id - b.id)
    }
    if (sortBy === 2) {
      newData = [...newData].sort((a, b) => b.like_qty - a.like_qty)
    }
    if (sortBy === 3) {
      newData = [...newData].sort((a, b) => a.like_qty - b.like_qty)
    }
    if (sortBy === 4) {
      newData = [...newData].sort((a, b) => b.view_qty - a.view_qty)
    }
    if (sortBy === 5) {
      newData = [...newData].sort((a, b) => a.view_qty - b.view_qty)
    }
    return newData
  }
  // 篩選
  const handleChecked = (data, checked) => {
    let newDisplayData = [...data]
    // let newCount = ''
    if (checked === '私藏食譜') {
      newDisplayData = [...data].filter((p) => {
        return p.type === 1
      })
      // newCount += privatecount
    }
    if (checked === '精選食譜') {
      newDisplayData = [...data].filter((p) => {
        return p.type === 2
      })
      // newCount += featurecount
    }
    return newDisplayData
  }
  // 總筆數
  const handleCount = (privatecount, featurecount) => {
    let newCount = ''
    if (checked === '私藏食譜') {
      newCount += privatecount
    }
    if (checked === '精選食譜') {
      newCount += featurecount
    }
    if (checked === '全部') {
      newCount += featurecount + privatecount
    }
    return newCount
  }

  useEffect(() => {
    let newDisplayData = []
    let newCount = ''
    newDisplayData = handleSortBy(data, sortBy)
    newDisplayData = handleChecked(newDisplayData, checked)
    newCount = handleCount(privatecount, featurecount)
    setDisplayData(newDisplayData)
    setTotalCount(newCount)
  }, [sortBy, checked])

  return (
    <>
      <section className="page-group">
        <div className="container">
          <div className="s-recipe-top">
            <div className="s-recipe-keyword">
              <div className="col-12 col-md-6">
                <h4>
                  關於 {word} 的食譜共有 {totalCount} 筆
                </h4>
              </div>
              <DropDown2
                itemList={itemList}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
            <div className="col-12 s-recipe-check">
              {checkList.map((v, i) => {
                return (
                  <RadioBox
                    key={i}
                    value={v}
                    checked={checked}
                    setChecked={setChecked}
                  />
                )
              })}
            </div>
          </div>
          <SearchCardRecipe
            recipeData={displayData}
            setDisplayData={setDisplayData}
            sortBy={sortBy}
          />
        </div>
      </section>
    </>
  )
}

export default SearchRecipe
