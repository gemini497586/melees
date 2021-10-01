import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import '../../style/member.css'
import MinorBar from './component/MinorBar'
import Paging from '../../pages/market/component/Paging'
import MemberSaveProdcutCard from './component/MemberSaveProductCard'
import DropDown2 from '../../component/DropDown2'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function MemberSaveProdcut() {
  const [data, setData] = useState([])
  const [displayData, setDisplayData] = useState([])
  const [sortBy, setSortBy] = useState(0)
  const [product, setProduct] = useState([])
  const [productList, setProductList] = useState(null)
  const sortList = [
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
  const [currentPage, setCurrentPage] = useState(1)
  const perPage = 10

  // 初始化
  useEffect(() => {
    const getData = async () => {
      try {
        let res = await Axios.get(`${API_URL}/member/readsaveproduct`, {
          withCredentials: true,
        })
        // 先檢查是否有收藏
        if (res.data.message) {
          console.log(`${res.data.message}`)
          return
        } else {
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
        }
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

  // console.log(displayData)
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
            {data.length === 0 ? (
              <div className="member-notice font-700L">
                <Link to="/market/home">
                  目前尚未收藏任何商品，馬上去逛逛購物商城吧！
                </Link>
              </div>
            ) : (
              <MemberSaveProdcutCard
                saveList={displayData}
                productList={productList}
                currentPage={currentPage}
                perPage={perPage}
              />
            )}
          </div>
          <div className="d-flex justify-content-center">
            <Paging
              product={displayData}
              setCurrentPage={setCurrentPage}
              perPage={perPage}
            />
          </div>
        </div>
      </div>
    </>
  )
}

export default MemberSaveProdcut
