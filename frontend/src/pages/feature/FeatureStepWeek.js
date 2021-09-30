import React, { useState, useEffect } from 'react'
import '../../style/featureStepWeek.css'
import '../../style/featureComponent.css'
import MinorBar from './component/MinorBar'
import FeatureContentImg from './component/FeatureContentImg'
import FeatureContentIntro from './component/FeatureContentIntro'
import Table from '../../component/Table'
import RecipeStep from '../../component/RecipeStep'
import CardRecipe from '../../component/CardRecipe'
import CardShopping from '../../component/CardShopping'
import FeatureWeek from './component/FeatureWeek'
import { useParams } from 'react-router'
import Axios from 'axios'
import { API_URL } from '../../utils/config'

function FeatureStepWeek(props) {
  // 網址後面抓到不同變數導入
  const { listId, weekId } = useParams()
  // 查詢 typeid 發出什麼訊息
  console.log('listId', listId)
  const [listdata, setListdata] = useState([])
  const [featureimg123, setFeatureimg123] = useState([])
  const [stepList, setStepList] = useState([])
  const [ingred, setIngred] = useState([])
  const [weekdata, setWeekdata] = useState([])
  const [weekprep, setWeekprep] = useState([])

  useEffect(() => {
    // 上面菜單
    Axios.get(`${API_URL}/feature/stepweek/${weekId}`).then((response) => {
      setWeekdata(response.data)
      console.log('weekdata', response.data)
    })

    // 一周食材準備
    Axios.get(`${API_URL}/feature/prepweek/${weekId}`).then((response) => {
      setWeekprep(response.data)
      // console.log('weekprep', response.data)
    })
  }, [])

  useEffect(() => {
    // 食譜資料
    Axios.get(`${API_URL}/feature/steplist/${listId}`).then((response) => {
      // response.data[0] 我只要陣列裡面的這一個物件 (3層以上就會掛掉)
      setListdata(response.data[0])
      setFeatureimg123(response.data[0].featureimg)
      // console.log('response.data', response.data)
    })

    // 食譜步驟
    Axios.get(`${API_URL}/feature/step/${listId}`).then((response) => {
      setStepList(response.data)
      // console.log(response.data.steps)
    })

    // 食譜準備
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
            {/* 日期選擇 */}
            <div className="fsw-btn-group">
              {/* 因為 featureWeek 的 props 命名為 const { weekdataCards } = props; map 也是使用 weekdataCards，所以這邊必須傳入 weekdataCards的值 才能使用 FeatureWeek*/}
              <FeatureWeek weekdataCards={weekdata} />
            </div>
            {/* 一週食材準備 */}
            <div className="fcard-mb65 row gx-3">
              <div className="font-700L fsw-preptitle col-12">一週準備食材</div>
              {weekprep.map((value, index) => {
                return (
                  <div className="fsw-prepfood col-3" key={index}>
                    <div className="font-400M fsw-tablel">{value.prep}</div>
                    <div className="font-400M fsw-tabler">{value.unit}</div>
                  </div>
                )
              })}
            </div>
            {/* FeatureStep */}
            <div>
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
                      likeqty={listdata.likeqty}
                      viewqty={listdata.viewqty}
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
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureStepWeek
