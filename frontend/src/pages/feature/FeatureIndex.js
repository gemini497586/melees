import React from 'react'
import '../../style/featureIndex.css'
import FeatureCards from './component/FeatureCards'
import DropDown from '../../component/DropDown'
import Paging from '../../component/Paging'
import CardShopping from '../../component/CardShopping'

function FeatureIndex() {
  return (
    <>
      <div className="findex-list row align-items-start justify-content-between">
        <div className="fdropdowm-mf">
          <DropDown />
        </div>
        <FeatureCards />
        <FeatureCards />
        <FeatureCards />
        <FeatureCards />
        <FeatureCards />
        <FeatureCards />
      </div>
      <div className="fpaginf-mf">
        <Paging />
      </div>
      <div className="fstep-mb50">
        <CardShopping />
      </div>
    </>
  )
}

export default FeatureIndex
