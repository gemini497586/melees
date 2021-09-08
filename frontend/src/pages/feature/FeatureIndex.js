import React from 'react'
import '../../style/featureIndex.css'
import '../../style/featureComponent.css'
import FeatureCards from './component/FeatureCards'
import DropDown2 from '../../component/DropDown2'
import Paging from '../../component/Paging'
import CardShopping from '../../component/CardShopping'

function FeatureIndex() {
  return (
    <>
      <div className="findex-box">
        {/* dropdown */}
        <div className="findex-dropdowm">
          <DropDown2 />
        </div>
        {/* cards */}
        <div className="findex-list">
          <a href="#/">
            <FeatureCards />
          </a>
          <a href="#/">
            <FeatureCards />
          </a>
          <a href="#/">
            <FeatureCards />
          </a>
          <a href="#/">
            <FeatureCards />
          </a>
          <a href="#/">
            <FeatureCards />
          </a>
          <a href="#/">
            <FeatureCards />
          </a>
        </div>
      </div>
      {/* 分頁 */}
      <div className="fpaginf-mf">
        <Paging />
      </div>
      {/* 推薦商品 */}
      <div className="fcardshop-mb">
        <CardShopping />
      </div>
    </>
  )
}

export default FeatureIndex
