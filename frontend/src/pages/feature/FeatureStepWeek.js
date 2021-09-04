import React from 'react'
import '../../style/featureStepWeek.css'
import '../../style/featureComponent.css'
import FeatureContentImg from './component/FeatureContentImg'
import FeatureContentIntro from './component/FeatureContentIntro'
import Table from '../../component/Table'
import RecipeStep from '../../component/RecipeStep'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'

function FeatureStepWeek() {
  return (
    <>
      <div className="container mt-5 ">
        {/* 日期選擇 */}
        <div className="fsw-btn-group mb-5">
          <button className="fsw-btn font-700M">07/05</button>
          <button className="fsw-btn font-700M">07/06</button>
          <button className="fsw-btn font-700M">07/07</button>
          <button className="fsw-btn font-700M">07/08</button>
          <button className="fsw-btn font-700M">07/09</button>
        </div>
        {/* 一週食材準備 */}
        <div className="fcardshop-mb">
          <div className="font-700L fsw-preptitle">一週準備食材</div>
          <div className="fsw-prepfoodgroup">
            <div className="fsw-prepfood">
              <div className="font-400M">透抽</div>
              <div className="font-400M">1隻</div>
            </div>
            <div className="fsw-prepfood">
              <div className="font-400M">透抽</div>
              <div className="font-400M">1隻</div>
            </div>
            <div className="fsw-prepfood">
              <div className="font-400M">透抽</div>
              <div className="font-400M">1隻</div>
            </div>
            <div className="fsw-prepfood">
              <div className="font-400M">透抽</div>
              <div className="font-400M">1隻</div>
            </div>
            <div className="fsw-prepfood">
              <div className="font-400M">透抽</div>
              <div className="font-400M">1隻</div>
            </div>
          </div>
        </div>
        {/* 上面介紹 */}
        <div className="d-flex fcardshop-mb">
          <FeatureContentImg />
          <FeatureContentIntro />
        </div>
        {/* 食材準備 */}
        <div className="fstep-mb fcardshop-mb">
          <div>
            <h5 className="fcolor-grey-900">食材</h5>
            <div className="fline-g500 mb-3"></div>
          </div>
          <div className="d-flex">
            <Table />
            <Table />
          </div>
        </div>
        <div className="fstep-mb fcardshop-mb">
          <div>
            <h5 className="fcolor-grey-900">步驟</h5>
            <div className="fline-g500 mb-3"></div>
          </div>
          <RecipeStep />
        </div>
        <div className="fstep-mb50">
          <CardRecipe />
        </div>
        <div className="fcardshop-mb">
          <CardShopping />
        </div>
      </div>
    </>
  )
}

export default FeatureStepWeek
