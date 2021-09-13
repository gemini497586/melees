import React, { useState, useEffect } from 'react'
import '../../style/member.css'
import MinorBar from './component/MinorBar'
import Paging from '../../component/Paging'
import MemberSaveProdcutCard from './component/MemberSaveProductCard'
import DropDown2 from '../../component/DropDown2'
import ProductData from '../../data/Products'

const pages = [1]

function MemberSaveProdcut() {
  const ProductDatas = ProductData.products
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [sortBy, setSortBy] = useState(0)
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
    setData(ProductDatas)
    setDisplayData(ProductDatas)
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
      <div className="page-group">
        <MinorBar />
        <div className="container">
          <div className="d-flex justify-content-end">
            <DropDown2
              itemList={itemList}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
          <div className="row">
            <MemberSaveProdcutCard productlist={displayData} />
          </div>
          <Paging value={pages} />
        </div>
      </div>
    </>
  )
}

export default MemberSaveProdcut
