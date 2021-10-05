import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../style/searchRecipe.css'
import MinorBar from './component/MinorBar'
import SearchCardRecipe from '../search/component/SearchCardRecipe'
import RadioBox from '../search/component/RadioBox'
import DropDown2 from '../../component/DropDown2'
import Axios from 'axios'
import { API_URL } from '../../utils/config'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function MemberFeature() {
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [sortBy, setSortBy] = useState(0)
  const [message, setMessage] = useState('')
  const [checked, setChecked] = useState('全部')
  const checkList = ['全部', '精選食譜', '私藏食譜']
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
        let res = await Axios.get(`${API_URL}/member/readsaverecipe`, {
          withCredentials: true,
        })
        // 判斷是否有收藏
        if (res.data.message) {
          setMessage('目前尚未收藏任何食譜，馬上去看看食譜吧！')
        } else {
          let privateData = res.data.private
          let featureData = res.data.feature
          let totalData = privateData.concat(featureData)
          setData(totalData)
          setDisplayData(totalData)
        }
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

  // 排序功能
  const handleSortBy = (displayData, sortBy) => {
    let newData = [...displayData]
    if (sortBy === 0) {
      newData = [...newData].sort((a, b) => b.saveId - a.saveId)
    }
    if (sortBy === 1) {
      newData = [...newData].sort((a, b) => a.saveId - b.saveId)
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
    if (checked === '私藏食譜') {
      newDisplayData = [...data].filter((p) => {
        return p.type === 1
      })
    }
    if (checked === '精選食譜') {
      newDisplayData = [...data].filter((p) => {
        return p.type === 2
      })
    }
    return newDisplayData
  }

  useEffect(() => {
    let newDisplayData = []
    newDisplayData = handleSortBy(data, sortBy)
    newDisplayData = handleChecked(newDisplayData, checked)
    setDisplayData(newDisplayData)
  }, [sortBy, checked])

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
                {message === '' ? (
                  <SearchCardRecipe recipeData={displayData} />
                ) : (
                  <div className="member-notice font-700L">
                    {message}
                    <br />
                    <Link to="/feature/index/1">
                      <FontAwesomeIcon icon="arrow-right" className="me-2" />
                      精選食譜
                    </Link>
                    <br />
                    <Link to="/private">
                      <FontAwesomeIcon icon="arrow-right" className="me-2" />
                      私藏食譜
                    </Link>
                  </div>
                )}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MemberFeature
