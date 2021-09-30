import React, { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import '../../style/searchMarket.css'
import SearchCardMarket from './component/SearchCardMarket'
import DropDown2 from '../../component/DropDown2'
import axios from 'axios'
import { API_URL } from '../../utils/config'

function SearchMarket(props) {
  // console.log(props)
  const { word } = useParams()
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [sortBy, setSortBy] = useState(0)
  const [amount, setAmount] = useState(1)
  const [count, setCount] = useState(0)
  const itemList = [
    {
      name: '時間由新至舊',
    },
    {
      name: '時間由舊至新',
    },
    {
      name: '價位由高至低',
    },
    {
      name: '價位由低至高',
    },
  ]

  // 排序功能
  const handleSortBy = (data, sortBy) => {
    let newData = [...data]
    if (sortBy === 0) {
      newData = [...newData].sort((a, b) => b.id - a.id)
    }
    if (sortBy === 1) {
      newData = [...newData].sort((a, b) => a.id - b.id)
    }
    if (sortBy === 2) {
      newData = [...newData].sort((a, b) => b.price - a.price)
    }
    if (sortBy === 3) {
      newData = [...newData].sort((a, b) => a.price - b.price)
    }
    return newData
  }
  // 重新渲染
  useEffect(() => {
    // 重網址抓關鍵字，去後端打api
    const getData = async () => {
      try {
        let res = await axios.get(`${API_URL}/search/market/?word=${word}`, {
          word,
        })
        let data = res.data.result
        let count = res.data.count.total
        setData(data)
        setDisplayData(data)
        setCount(count)
        // console.log(res)
      } catch (e) {
        console.log(e)
      }
    }
    getData()

    // 重新排列
    let newData = []
    newData = handleSortBy(data, sortBy)
    setDisplayData(newData)
  }, [sortBy, word])

  return (
    <>
      <section className="page-group">
        <div className="container">
          <div className="s-market-top">
            <div className="col-12 col-md-6">
              <h4>
                關於 {word} 的商品共有 {count} 筆
              </h4>
            </div>
            <DropDown2
              itemList={itemList}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
          <div className="s-market-bottom">
            <SearchCardMarket
              marketList={displayData}
              amount={amount}
              setAmount={setAmount}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchMarket
