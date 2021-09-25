import React, { useState, useEffect } from 'react'
import '../../style/memberBox.css'
import SaveBox from './component/SaveBox'
import MinorBar from './component/MinorBar'
import DropDown2 from '../../component/DropDown2'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function MemberBox() {
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [prep, setPrep] = useState([])
  const [prepList, setprepList] = useState(null)
  const [sortBy, setSortBy] = useState(0)
  const itemList = [
    {
      name: '時間由新至舊',
    },
    {
      name: '時間由舊至新',
    },
    {
      name: '卡路里由多至少',
    },
    {
      name: '卡路里由少至多',
    },
  ]

  // 初始化資料
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await Axios.get(`${API_URL}/member/readsavebox`, {
          withCredentials: true,
        })
        let data = res.data.result
        let prep = res.data.result2
        setData(data)
        setDisplayData(data)
        setPrep(prep)

        // 把食材做成查表法
        let newprepList = {}
        prep.map((item) => {
          newprepList[item.id] = item
        })
        setprepList(newprepList)
        // console.log(newprepList)
      } catch (e) {
        console.log(e)
        alert(e.response.data.message)
      }
    }
    getData()
  }, [])

  // 排序功能
  const handleSort = (data, sortBy) => {
    let newData = [...data]
    if (sortBy === 0) {
      newData = [...newData].sort((a, b) => b.id - a.id)
    }
    if (sortBy === 1) {
      newData = [...newData].sort((a, b) => a.id - b.id)
    }
    if (sortBy === 2) {
      newData = [...newData].sort((a, b) => b.cal - a.cal)
    }
    if (sortBy === 3) {
      newData = [...newData].sort((a, b) => a.cal - b.cal)
    }
    return newData
  }

  useEffect(() => {
    let newData = []
    newData = handleSort(data, sortBy)
    setDisplayData(newData)
  }, [sortBy, data])
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <section>
          <div className="container">
            <div className="d-flex justify-content-end">
              <DropDown2
                itemList={itemList}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
            <div className="row">
              <SaveBox
                data={displayData}
                prepList={prepList}
                setDisplayData={setDisplayData}
              />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MemberBox
