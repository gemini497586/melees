import React, { useState, useEffect } from 'react'
import '../../style/featureIndex.css'
import '../../style/featureComponent.css'
import FeatureCards from './component/FeatureCards'
import DropDown2 from '../../component/DropDown2'
import Paging from '../../component/Paging'
import CardShopping from '../../component/CardShopping'
import MinorBar from './component/MinorBar'
import { Link } from 'react-router-dom'
import { useParams } from 'react-router'

/* 排序搜尋 */

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
// const arr = [1, 2, 3, 4, 5, 6]

function FeatureIndex() {
  const [sortBy, setSortBy] = useState('0')

  // 網址後面抓到不同變數導入
  const { typeid } = useParams()
  // 查詢 typeid 發出什麼訊息
  // console.log('typeid2', typeid)

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
          <div className="">
            <FeatureCards typeid={typeid} />
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
