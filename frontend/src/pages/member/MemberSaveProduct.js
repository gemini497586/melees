import React, { useState, useEffect } from 'react'
import '../../style/member.css'
import MinorBar from './component/MinorBar'
import Paging from '../../component/Paging'
import MemberSaveProdcutCard from './component/MemberSaveProductCard'
import DropDown2 from '../../component/DropDown2'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

const pages = [1]

function MemberSaveProdcut() {
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [sortBy, setSortBy] = useState(0)
  const [product, setProduct] = useState([])
  const [productList, setProductList] = useState(null)

  const sortList = [
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
        let res = await Axios.get(`${API_URL}/member/readsaveproduct`, {
          withCredentials: true,
        })
        let data = res.data.result
        let product = res.data.result2
        setData(data)
        setDisplayData(data)
        setProduct(product)

        // 先設定好查表法的內容
        let newProductList = {}
        product.map((item) => {
          newProductList[item.id] = item
        })
        setProductList(newProductList)
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
      newData = [...newData].sort((a, b) => b.id - a.id)
    }
    if (sortBy === 1) {
      newData = [...newData].sort((a, b) => a.id - b.id)
    }
    if (sortBy === 2) {
      newData = [...newData].sort(
        (a, b) =>
          productList[b.product_id].price - productList[a.product_id].price
      )
    }
    if (sortBy === 3) {
      newData = [...newData].sort(
        (a, b) =>
          productList[a.product_id].price - productList[b.product_id].price
      )
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
              itemList={sortList}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
          <div className="row">
            <MemberSaveProdcutCard
              saveList={displayData}
              productList={productList}
            />
          </div>
          <Paging value={pages} />
        </div>
      </div>
    </>
  )
}

export default MemberSaveProdcut
