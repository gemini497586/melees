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
  // console.log('listdata', listdata)
  // console.log('listdatafeatureimg', listdata.featureimg)
  // 取得食譜ID
  useEffect(() => {
    // 查props發出什麼訊息，是否有正確發出API
    // console.log(
    //   '${API_URL}/feature/step/${listId}',
    //   `${API_URL}/feature/step/${listId}`
    // )
    Axios.get(`${API_URL}/feature/step/${listId}`).then((response) => {
      // response.data[0] 我只要陣列裡面的這一個物件 (3層以上就會掛掉)
      setListdata(response.data[0])
      setFeatureimg123(response.data[0].featureimg)
      console.log('featureimg123', featureimg123)
    })
  }, [listId])

  return (
    <>
      <div className="page-group">
        {/* minorbar */}
        <MinorBar />
        <div className="ftop-mt40">
          <div className="container">
            {/* 上面介紹 */}
            <div className="d-flex fcard-mb65">
              <FeatureContentImg
                featureimg={featureimg123}
                linkImg={listdata.linkImg}
              />
              <FeatureContentIntro
                linkImg={listdata.linkImg}
                listName={listdata.listName}
                qty={listdata.qty}
                linkName={listdata.linkName}
                featureimg={listdata.featureimg}
              />
            </div>
            {/* 食材準備 */}
            <div className="fcard-mb65">
              <div>
                <h5 className="fcolor-grey-900">食材</h5>
                <div className="fline-g500 mb-3"></div>
              </div>
              <div className="d-flex">
                {/* <Table />
                <Table /> */}
              </div>
            </div>
            <div className="fcard-mb65">
              <div>
                <h5 className="fcolor-grey-900">步驟</h5>
                <div className="fline-g500 mb-3"></div>
              </div>
              {/* <RecipeStep /> */}
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
