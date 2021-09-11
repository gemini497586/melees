import React, { useState } from 'react'
import '../../style/featureComponent.css'
import FeatureContentImg from './component/FeatureContentImg'
import FeatureContentIntro from './component/FeatureContentIntro'
import Table from '../../component/Table'
import RecipeStep from '../../component/RecipeStep'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
import MinorBar from './component/MinorBar'

// json 測試用
// import RecipeStepTest from '../../data/RecipeStepTest'

function FeatureStep() {
  // 控制table裡的資料
  const [unitList, setUnitList] = useState([
    { name: '雞蛋', unit: '20顆' },
    { name: '雞蛋', unit: '20顆' },
  ])
  return (
    <>
      <div className="page-group">
        {/* minorbar */}
        <MinorBar />
        <div className="ftop-mt40">
          <div className="container">
            {/* 上面介紹 */}
            <div className="d-flex fcard-mb65">
              <FeatureContentImg />
              <FeatureContentIntro />
            </div>
            {/* 食材準備 */}
            <div className="fcard-mb65">
              <div>
                <h5 className="fcolor-grey-900">食材</h5>
                <div className="fline-g500 mb-3"></div>
              </div>
              <div className="d-flex">
                <Table unitList={unitList} />
                <Table unitList={unitList} />
              </div>
            </div>
            <div className="fcard-mb65">
              <div>
                <h5 className="fcolor-grey-900">步驟</h5>
                <div className="fline-g500 mb-3"></div>
              </div>
              {/* <RecipeStep RecipeStepTest={RecipeStepTest} /> */}
            </div>
            <CardRecipe />
            <CardShopping />
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureStep
