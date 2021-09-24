import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../style/searchRecipe.css'
import SearchCardFeature from './component/SearchCardFeature.js'
import SearchCardPrivate from './component/SearchCardPrivate.js'
import RadioBox from './component/RadioBox'
import DropDown2 from '../../component/DropDown2'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function SearchRecipe() {
  const { word } = useParams()
  const [recipe, setRecipe] = useState([])
  const [displayPrivate, setDisplayPrivate] = useState([])
  const [feature, setFeature] = useState([])
  const [displayFeature, setDisplayFeature] = useState([])
  const [totalRecipe, setTotalRecipe] = useState([])
  const [sortBy, setSortBy] = useState(0)
  const [count, setCount] = useState(0)
  const [checked, setChecked] = useState('全部')
  const checkList = ['全部', '精選食譜', '私藏食譜']
  const itemList = [
    {
      name: '時間由新至舊',
      value: '1',
    },
    {
      name: '時間由舊至新',
      value: '2',
    },
    {
      name: '按讚數由多至少',
      value: '3',
    },
    {
      name: '按讚數由少至多',
      value: '4',
    },
    {
      name: '瀏覽數由多至少',
      value: '5',
    },
    {
      name: '瀏覽數由少至多',
      value: '6',
    },
  ]

  // 初始化
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await Axios.get(`${API_URL}/search/recipe?word=${word}`)
        let recipe = res.data.private
        let feature = res.data.feature
        setRecipe(recipe)
        setDisplayPrivate(recipe)
        setFeature(feature)
        setDisplayFeature(feature)
        setCount(res.data.count.totalCount)
        let total = [...feature, ...recipe]
        setTotalRecipe(total)
        console.log('裏面 ', totalRecipe)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [word])

  const handleRadio = (totalRecipe, checked) => {
    let newData = [...totalRecipe]
    if (checked === '精選食譜') {
      newData = [...totalRecipe].filter((v) => {
        return v.type === '精選食譜'
      })
    }
    if (checked === '私藏食譜') {
      newData = [...totalRecipe].filter((v) => {
        return v.type === '私藏食譜'
      })
    }
    return newData
  }

  // 排序功能
  const handleSortBy = (feature, sortBy) => {
    let newData = [...feature]
    if (sortBy === 0) {
      newData = [...newData].sort((a, b) => b.listId - a.listId)
    }
    if (sortBy === 1) {
      newData = [...newData].sort((a, b) => a.listId - b.listId)
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

  // 重新渲染
  useEffect(() => {
    let newData = []
    newData = handleSortBy(feature, sortBy)
    newData = handleRadio(newData, checked)
    setDisplayFeature(newData)
  }, [sortBy, checked])

  return (
    <>
      <section className="page-group">
        <div className="container">
          <div className="s-recipe-top">
            <div className="s-recipe-keyword">
              <div className="col-12 col-md-6">
                <h4>
                  關於 {word} 的食譜共有 {count} 筆
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
                    name={v}
                    value={v}
                    checked={checked}
                    setChecked={setChecked}
                  />
                )
              })}
            </div>
          </div>
          <div className="s-recipe-bottom">
            <SearchCardPrivate privateList={displayPrivate} />
            <SearchCardFeature featureList={displayFeature} />
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchRecipe
