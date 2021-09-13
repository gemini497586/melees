import React, { useState } from 'react'
import '../../style/featureIndexWeek.css'
import '../../style/featureComponent.css'
import FeatureWeek from './component/FeatureWeek'
import DropDown2 from '../../component/DropDown2'
import Paging from '../../component/Paging'
import CardShopping from '../../component/CardShopping'
import MinorBar from './component/MinorBar'

function FeatureIndexWeek() {
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
        <div className="container">
          <div className="fdropdown-mf">
            <DropDown2
              itemList={itemList}
              sortBy={sortBy}
              setSortBy={setSortBy}
            />
          </div>
          <div className="findexw-titlegroup">
            <div className="findexw-title font-400L">一週食譜</div>
            <div className="findexw-date font-400L">日期</div>
          </div>
          <div className="fline-g300"></div>
          <FeatureWeek />
          <FeatureWeek />
          <FeatureWeek />
          <FeatureWeek />
        </div>
        <div className="fpaginf-mf">
          <Paging />
        </div>
        <CardShopping />
      </div>
    </>
  )
}

export default FeatureIndexWeek
