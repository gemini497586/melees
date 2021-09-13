import React, { useState } from 'react'
import '../../style/featureIndex.css'
import '../../style/featureComponent.css'
import FeatureCards from './component/FeatureCards'
import DropDown2 from '../../component/DropDown2'
import Paging from '../../component/Paging'
import CardShopping from '../../component/CardShopping'
import MinorBar from './component/MinorBar'
import { Link } from 'react-router-dom'

function FeatureIndex() {
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
      name: '卡路里由多至少',
      value: '3',
    },
    {
      name: '卡路里由少至多',
      value: '4',
    },
  ]
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
            <Link to="/feature/step/">
              <FeatureCards />
            </Link>
            <Link to="/feature/step/">
              <FeatureCards />
            </Link>
            <Link to="/feature/step/">
              <FeatureCards />
            </Link>
            <Link to="/feature/step/">
              <FeatureCards />
            </Link>
            <Link to="/feature/step/">
              <FeatureCards />
            </Link>
            <Link to="/feature/step/">
              <FeatureCards />
            </Link>
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
