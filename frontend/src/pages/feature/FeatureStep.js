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
  const [save, setSave] = useState()
  const [like, setLike] = useState()
  const [reRender, setRerender] = useState(false)

  // 取得食譜所有資料
  useEffect(() => {
    const stepList = async () => {
      try {
        let response = await Axios.post(
          `${API_URL}/feature/steplist/${listId}`,
          null,
          {
            withCredentials: true,
          }
        )

        setListdata(response.data.recipe)
        setFeatureimg123(response.data.recipe.featureimg)
        setStepList(response.data.recipe.step)
        setIngred(response.data.recipe.ingred)
      } catch (error) {
        console.log(error)
      }
    }
    stepList()
    // console.log('listdata', listdata)
  }, [listId])

  // 設定按讚數
  const [setLikeqty, setSetLikeqty] = useState()
  useEffect(() => {
    const newLike = async () => {
      try {
        let response = await Axios.post(
          `${API_URL}/feature/setstatus/${listId}`,
          null,
          {
            withCredentials: true,
          }
        )
        setSetLikeqty(response.data.status.likeqty)
        setLike(response.data.status.like)
        setSave(response.data.status.save)
      } catch (error) {
        console.error(error)
      }
    }
    newLike()
    // setRerender(false)
    console.log('listdata', listdata)
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
                likeqty={setLikeqty ? setLikeqty : listdata.likeqty}
                viewqty={listdata.viewqty}
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
