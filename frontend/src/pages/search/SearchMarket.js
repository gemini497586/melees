import React, { useState, useEffect } from 'react'
import '../../style/searchMarket.css'
import SearchCardMarket from './component/SearchCardMarket'
import DropDown2 from '../../component/DropDown2'
import ProductData from '../../data/Products'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function SearchMarket() {
  const ProductDatas = ProductData.products
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [sortBy, setSortBy] = useState(0)
  const [counts, setCounts] = useState(1)
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
      name: '價位由高至低',
      value: '3',
    },
    {
      name: '價位由低至高',
      value: '4',
    },
  ]
  // 初始化
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await Axios.get(`${API_URL}/market/2`)
        let data = res.data
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
      newData = [...newData].sort((a, b) => b.price - a.price)
    }
    if (sortBy === 3) {
      newData = [...newData].sort((a, b) => a.price - b.price)
    }
    return newData
  }
  // 重新渲染
  useEffect(() => {
    let newData = []
    newData = handleSortBy(data, sortBy)
    setDisplayData(newData)
  }, [sortBy])

  return (
    <>
      <section className="page-group">
        <div className="container">
          <div className="s-market-top">
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-6">
                <h4>
                  關於 <span>000</span> 的商品共有 <span>00</span> 筆
                </h4>
              </div>
              <DropDown2
                itemList={itemList}
                sortBy={sortBy}
                setSortBy={setSortBy}
              />
            </div>
          </div>
          <div className="s-market-bottom">
            <SearchCardMarket
              marketList={displayData}
              counts={counts}
              setCounts={setCounts}
            />
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchMarket
