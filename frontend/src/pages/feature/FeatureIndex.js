import React, { useState, useEffect } from 'react'
import '../../style/featureIndex.css'
import '../../style/featureComponent.css'
import FeatureCards from './component/FeatureCards'
import DropDown2 from '../../component/DropDown2'
import Paging from '../../component/Paging'
import CardShopping from '../../component/CardShopping'
import MinorBar from './component/MinorBar'
import { Link } from 'react-router-dom'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function FeatureIndex() {
  // 使用 useState ，透過陣列讓 List 顯示出項目
  const [listdata, setListdata] = useState([])

  useEffect(() => {
    Axios.get('${API_URL}/api/feature').then((res) => {
      setListdata(res.data)
    })
  }, [])
  /* 排序搜尋 */

  const [sortBy, setSortBy] = useState('0')
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

  // 用map渲染6個FeatureCards
  const arr = [1, 2, 3, 4, 5, 6]
  return (
    <>
      <div className="page-group">
        {/* minorbar */}
        <MinorBar />
        <div className="findex-box">
          {/* dropdown */}
          <div className="fdropdown-mf">
            <DropDown2
              itemList={itemList}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
          {/* cards */}
          <div className="findex-list">
            {arr.map((v, i) => {
              return (
                <Link to="/feature/step/">
                  <FeatureCards listData={setListdata} />
                </Link>
              )
            })}
          </div>
        </div>
        {/* 分頁 */}
        <div className="fpaginf-mf">
          <Paging />
        </div>
        {/* 推薦商品 */}
        <CardShopping />
      </div>
    </>
  )
}

export default FeatureIndex
