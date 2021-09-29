import React, { useState, useEffect } from 'react'
import '../../style/featureComponent.css'
import FeatureContentImg from './component/FeatureContentImg'
import FeatureContentIntro from './component/FeatureContentIntro'
import Table from '../../component/Table'
import RecipeStep from '../../component/RecipeStep'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
import MinorBar from './component/MinorBar'
import { useParams } from 'react-router'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function FeatureStep() {
  // 網址後面抓到不同變數導入
  const { listId } = useParams()
  // 查詢 typeid 發出什麼訊息
  // console.log('listId', listId)

  // 給頁面切換typeid資料用
  const [listdata, setListdata] = useState([])
  const [featureimg123, setFeatureimg123] = useState([])
  const [stepList, setStepList] = useState([])
  const [ingred, setIngred] = useState([])
  // console.log('stepList', stepList)

  // 取得食譜ID
  useEffect(() => {
    // 查props發出什麼訊息，是否有正確發出API
    // console.log(
    //   '${API_URL}/feature/step/${listId}',
    //   `${API_URL}/feature/step/${listId}`
    // )
    Axios.get(`${API_URL}/feature/steplist/${listId}`).then((response) => {
      // response.data[0] 我只要陣列裡面的這一個物件 (3層以上就會掛掉)
      setListdata(response.data[0])
      setFeatureimg123(response.data[0].featureimg)
      // console.log('featureimg123', featureimg123)
    })

    Axios.get(`${API_URL}/feature/step/${listId}`).then((response) => {
      setStepList(response.data)
      // console.log(response.data.steps)
    })

    Axios.get(`${API_URL}/feature/prep/${listId}`).then((response) => {
      setIngred(response.data)
      // console.log(response.data.steps)
    })
  }, [listId])

  // 將食材資料分半
  const total = ingred.length
  const half = Math.ceil(total / 2)
  const tableleft = ingred.slice(0, half)
  const tableright = ingred.slice(half)

  return (
    <>
      <div className="page-group">
        {/* minorbar */}
        <MinorBar />
        <div className="ftop-mt40">
          <div className="container">
            {/* 上面介紹 */}
            <div className="d-flex fcard-mb65">
              <FeatureContentImg featureimg={featureimg123} />
              <FeatureContentIntro
                linkImg={listdata.linkImg}
                listName={listdata.listName}
                qty={listdata.qty}
                linkName={listdata.linkName}
              />
            </div>
            {/* 食材準備 */}
            <div className="fcard-mb65">
              <div>
                <h5 className="fcolor-grey-900">食材</h5>
                <div className="fline-g500 mb-3"></div>
              </div>
              <div className="row">
                <div className="col-12 col-md-6 g-0">
                  <Table tableList={tableleft} />
                </div>
                <div className="col-12 col-md-6 g-0">
                  <Table tableList={tableright} />
                </div>
              </div>
            </div>
            <div className="fcard-mb65">
              <div>
                <h5 className="fcolor-grey-900">步驟</h5>
                <div className="fline-g500 mb-3"></div>
              </div>
              <RecipeStep listId={listId} stepList={stepList} />
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
