import React from 'react'
import '../../style/featureIndexWeek.css'
import FeatureWeek from './component/FeatureWeek'
import DropDown from '../../component/DropDown'
import Paging from '../../component/Paging'

function FeatureIndexWeek() {
  return (
    <>
      <div className="container">
        <div className="fdropdowm-mf">
          <DropDown />
        </div>
        <div className="d-flex">
          <p className="findexw-title font-400L">一週食譜</p>
          <p className="findexw-date font-400L">日期</p>
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
    </>
  )
}

export default FeatureIndexWeek
