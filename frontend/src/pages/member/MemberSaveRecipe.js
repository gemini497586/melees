import React, { useState, useEffect } from 'react'
import '../../style/searchRecipe.css'
import MinorBar from './component/MinorBar'
import SearchCardFeature from '../search/component/SearchCardFeature'
import SearchCardPrivate from '../search/component/SearchCardPrivate'
import SearchCardRecipe from '../search/component/SearchCardRecipe'
import RadioBox from '../search/component/RadioBox'
import DropDown2 from '../../component/DropDown2'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function MemberFeature() {
  const [recipe, setRecipe] = useState([])
  const [displayPrivate, setDisplayPrivate] = useState([])

  const [feature, setFeature] = useState([])
  const [displayFeature, setDisplayFeature] = useState([])

  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])

  const [sortBy, setSortBy] = useState(0)
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
        setRecipe(res.data.private)
        setDisplayPrivate(res.data.private)
        setFeature(res.data.feature)
        setDisplayFeature(res.data.feature)

        let newData = res.data.private.concat(res.data.feature)
        setData(newData)
        setDisplayData(newData)
        // console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
    getData()
  }, [])

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
                {checked === '全部' ? (
                  <div>
                    <SearchCardRecipe
                      displayData={displayData}
                      setDisplayData={setDisplayData}
                      sortBy={sortBy}
                    />
                  </div>
                ) : null}
                {checked === '精選食譜' ? (
                  <SearchCardFeature
                    featureList={displayFeature}
                    setDisplayFeature={setDisplayFeature}
                    sortBy={sortBy}
                  />
                ) : null}
                {checked === '私藏食譜' ? (
                  <SearchCardPrivate
                    privateList={displayPrivate}
                    setDisplayPrivate={setDisplayPrivate}
                    sortBy={sortBy}
                  />
                ) : null}
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MemberFeature
