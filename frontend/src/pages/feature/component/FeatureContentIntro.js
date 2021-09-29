import React from 'react'
import HeartViewNum from '../../../component/HeartViewNum'
import Ig from '../../../component/Ig'
import '../../../style/featureContentIntro.css'
import '../../../style/featureComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'

function FeatureContentIntro(props) {
  const { linkImg, listName, qty, linkName } = props

  return (
    <>
      <div className="fintro-boxsize">
        <div>
          {/* IG連結 */}
          <a href="#/" className="text-decoration-none">
            <div className="fintro-ig">
              <figure className="fintro-avatar-bg">
                <img
                  className="fintro-avatar"
                  src={`http://localhost:3001/feature/igavatar/${linkImg}`}
                  alt=""
                />
              </figure>
              <Ig linkName={linkName} />
            </div>
          </a>
          {/* 中間標題 */}
          <div className="d-flex flex-column">
            <h2 className="fs-color900 mb-3 mt-4">{listName}</h2>
            {/* 份數 */}
            <div className="d-flex">
              <p className="fcolor-900 font-400SL me-3">份量</p>
              <p className="fcolor-900 font-400SL">{qty}人份</p>
            </div>
          </div>
        </div>
        {/* 下面按鈕 */}
        <div className="fintro-btngroup">
          {/* 愛心瀏覽數 */}
          <HeartViewNum />
          {/* 收藏btn */}
          <button className="fintro-btnlike font-700M">
            <FontAwesomeIcon
              className="me-2"
              icon={['far', 'bookmark']}
              fixedWidth
            />
            按讚
          </button>
          <button className="fintro-btnsave font-700M">
            <FontAwesomeIcon
              className="me-2"
              icon={['far', 'bookmark']}
              fixedWidth
            />
            加入收藏
          </button>
        </div>
      </div>
    </>
  )
}

export default FeatureContentIntro
