import React, { useState, useEffect } from 'react'
import '../../style/searchRecipe.css'
import MinorBar from './component/MinorBar'
import SearchCardFeature from '../search/component/SearchCardFeature.js'
import SearchCardPrivate from '../search/component/SearchCardPrivate.js'
import RadioBox from '../search/component/RadioBox'
import DropDown2 from '../../component/DropDown2'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function MemberFeature() {
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [sortBy, setSortBy] = useState(0)
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
    const getData = async() => {
      try {
        let res = await Axios.get(`${API_URL}/api/private`)
        let data = res.data.result
        setData(data)
        setDisplayData(data)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  // 排序功能
  const handleSortBy = (data, sortBy) => {
    let newData = [...data]
    if (sortBy === 0) {
      newData = [...newData].sort((a, b) => a.id - b.id)
    }
    if (sortBy === 1) {
      newData = [...newData].sort((a, b) => b.id - a.id)
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
  // 分類功能
  const handleRadio = (data, checked) => {
    let newData = [...data]
    if (checked === '精選食譜') {
      newData = [...data].filter((item) => {
        return item.classify === '精選食譜'
      })
    }
    if (checked === '私藏食譜') {
      newData = [...data].filter((item) => {
        return item.classify === '私藏食譜'
      })
    }
    return newData
  }
  
  // 重新渲染
  useEffect(() => {
    let newData = []
    newData = handleSortBy(data, sortBy)
    // newData = handleRadio(newData, checked)
    setDisplayData(newData)
  }, [sortBy])

  return (
    <>
      <div className="page-group">
        <MinorBar />
        <section>
          <div className="container">
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-4 d-flex">
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
              <DropDown2
                itemList={itemList}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>

            <div className="member-box-bottom">
              <div className="row">
                <SearchCardFeature featureList={displayData} />
                <SearchCardPrivate privateList={displayData} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MemberFeature
