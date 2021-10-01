import React, { useState, useEffect } from 'react'
import '../../style/featureIndex.css'
import '../../style/featureComponent.css'
import FeatureCards from './component/FeatureCards'
import SortBar from './SortBar'
import Paging from '../market/component/Paging'
import CardShopping from '../../component/CardShopping'
import MinorBar from './component/MinorBar'
import { useParams } from 'react-router'

function FeatureIndex() {
  const [sort, setSort] = useState('')
  const [currentPage, setCurrentPage] = useState(1)
  // 給頁面切換typeid資料用
  const [typedata, setTypedata] = useState([])

  // 網址後面抓到不同變數導入
  const { typeid } = useParams()
  // 查詢 typeid 發出什麼訊息
  console.log('typeid2', typeid)

  return (
    <>
      <div className="page-group">
        {/* minorbar */}
        <MinorBar />
        <div className="findex-box">
          {/* dropdown */}
          <div className="fdropdown-mf">
            <SortBar sort={sort} setSort={setSort} />
          </div>
          {/* cards */}
          <div className="">
            <FeatureCards
              typeid={typeid}
              sort={sort}
              typedata={typedata}
              currentPage={currentPage}
              setTypedata={setTypedata}
            />
          </div>
        </div>
        {/* 分頁 */}
        <div className="fpaginf-mf">
          <Paging product={typedata} setCurrentPage={setCurrentPage} />
        </div>
        {/* 推薦商品 */}
        <CardShopping />
      </div>
    </>
  )
}

export default FeatureIndex
