import React from 'react'
import '../../style/featureIndex.css'
import '../../style/featureComponent.css'
import FeatureCards from './component/FeatureCards'
import DropDown2 from '../../component/DropDown2'
import Paging from '../../component/Paging'
import CardShopping from '../../component/CardShopping'
import MinorBar from './component/MinorBar'
import { Link } from 'react-router-dom'

function FeatureIndex() {
  return (
    <>
      <div className="page-group">
        {/* minorbar */}
        <MinorBar />
        <div className="findex-box">
          {/* dropdown */}
          <div className="fdropdown-mf">
            <DropDown2 />
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
