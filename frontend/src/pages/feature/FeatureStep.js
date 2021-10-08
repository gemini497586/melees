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
  // 給頁面切換typeid資料用
  const [listdata, setListdata] = useState([])
  const [featureimg123, setFeatureimg123] = useState([])
  const [stepList, setStepList] = useState([])
  const [ingred, setIngred] = useState([])
  const [save, setSave] = useState(false)
  const [like, setLike] = useState(false)
  const [view, setView] = useState(false)
  const [reRender, setRerender] = useState(false)

  useEffect(() => {
    const getView = async () => {
      try {
        // 瀏覽數
        let result2 = await Axios.post(
          `${API_URL}/feature/feature-view/${listId}`,
          null,
          {
            withCredentials: true,
          }
        )
        // console.log('result2', result2)
        setView(result2.data[0].viewqty)
      } catch (err) {
        console.log(err)
      }
    }
    getView()
  }, [])

  useEffect(() => {
    Axios.post(`${API_URL}/feature/step/${listId}`).then((response) => {
      setStepList(response.data)
    })

    // 食材準備
    Axios.post(`${API_URL}/feature/prep/${listId}`).then((response) => {
      setIngred(response.data)
    })
  }, [listId])

  // 取得食譜資料
  useEffect(() => {
    // 食譜資料
    Axios.post(`${API_URL}/feature/steplist/${listId}`, null, {
      // 讓 Axios 攜帶cookie
      withCredentials: true,
    }).then((response) => {
      // console.log('response.data', response.data)
      if (response.data.getSave && response.data.getSave.length > 0) {
        // 如果回傳不是undefined，代表資料庫有資料，那就是該會員有收藏過，所以把按鈕設成true
        setSave(true)
      }
      // console.log('response.data', response.data)
      if (response.data.getLike && response.data.getLike.length > 0) {
        setLike(true)
      }
      // response.data[0] 我只要陣列裡面的這一個物件 (3層以上就會掛掉)
      setListdata(response.data.data[0])
      setFeatureimg123(response.data.data[0].featureimg)
    })
    setRerender(false)
  }, [reRender])

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
                linkName={listdata.linkName}
                listName={listdata.listName}
                qty={listdata.qty}
                likeqty={listdata.likeqty}
                viewqty={view}
                save={save}
                setSave={setSave}
                like={like}
                setLike={setLike}
                setRerender={setRerender}
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
