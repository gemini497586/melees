import React from 'react'
import '../../style/featureStep.css'
import '../../style/featureComponent.css'
import FeatureContentImg from './component/FeatureContentImg'
import FeatureContentIntro from './component/FeatureContentIntro'
import Table from '../../component/Table'
import RecipeStep from '../../component/RecipeStep'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'

function FeatureStep() {
  return (
    <>
      <div className="container mt-5 ">
        {/* 上面介紹 */}
        <div className="d-flex justify-content-between">
          <FeatureContentImg />
          <FeatureContentIntro />
        </div>
        {/* 食材準備 */}
        <div className="fstep-mb">
          <div>
            <h5 className="fcolor-grey-900">食材</h5>
            <div className="fline-g500 mb-3"></div>
          </div>
          <div className="d-flex">
            <Table />
            <Table />
          </div>
        </div>
        <div className="fstep-mb">
          <div>
            <h5 className="fcolor-grey-900">步驟</h5>
            <div className="fline-g500 mb-3"></div>
          </div>
          <RecipeStep />
        </div>
        <div className="fstep-mb50">
          <CardRecipe />
        </div>
        <div className="fstep-mb50">
          <CardShopping />
        </div>
      </div>
    </>
  )
}

export default FeatureStep
