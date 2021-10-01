import React, { useState, useEffect } from 'react'
import HeartViewNum from '../../../component/HeartViewNum'
import '../../../style/featureCards.css'
import '../../../style/featureComponent.css'
import iglogo from '../../../images/instagramLogo.jpg'
import Axios from 'axios'
import { API_URL, FEATURE_TYPE } from '../../../utils/config'
import { Link } from 'react-router-dom'

function FeatureCards(props) {
  // 給頁面切換typeid資料用
  const [typedata, setTypedata] = useState([])

  // 取得分類
  useEffect(() => {
    // 查props發出什麼訊息，是否有正確發出API
    // console.log('typeid', props)
    Axios.get(`${API_URL}/feature/index/${props.typeid}`).then((response) => {
      setTypedata(response.data)

      console.log('response.data', response.data)
    })
  }, [props.typeid])

  const listFeatureCards = typedata.map((e) => {
    return (
      <>
        <Link to={`/feature/step/` + e.listId}>
          <div className="fc-cards mb-5">
            {/* 食譜照片 */}
            <figure className="fc-food-img">
              <img
                className="fcover-fit"
                src={`http://localhost:3001/feature/featurefood/${e.featureimg[0]}`}
                alt=""
              />
            </figure>
            {/* 內容 */}
            <div className="fc-cards-bg">
              {/* IG照片 */}
              <figure className="fc-avatar">
                <img
                  className="fcover-fit"
                  src={`http://localhost:3001/feature/igavatar/${e.linkImg}`}
                  alt=""
                />
              </figure>
              {/* 文案 */}
              <div className="fc-content">
                {/* 分類 type_id */}
                <p className="fcolor-grey-800 font-400S">
                  {FEATURE_TYPE[e.type_id]}
                </p>
                {/* 食譜名稱和連結 name */}
                <h5 className="fcolor-secondary">{e.listName}</h5>
                <div className="d-flex text-decoration-none align-items-center">
                  <img className="fc-logo me-2" src={iglogo} alt="" />
                  <p className="fcolor-grey-800 font-400SL m-0">{e.linkName}</p>
                </div>
              </div>
              {/* 瀏覽數和按讚數 */}
              <div className="fc-content-down">
                <div className="fline-g500 mb-1"></div>
                <HeartViewNum likeqty={e.likeqty} viewqty={e.viewqty} />
              </div>
            </div>
          </div>
        </Link>
      </>
    )
  })
  return <div className="fc-list">{listFeatureCards}</div>
}

export default FeatureCards
