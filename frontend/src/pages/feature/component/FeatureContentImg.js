import React, { useState } from 'react'
import '../../../style/featureContentImg.css'
import food from '../../../images/1.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons/'

function FeatureContentImg(props) {
  const { linkImg, listName, qty, linkName, featureimg } = props
  console.log('imgfeatureimg', featureimg)
  // const [featureimg123, setFeatureimg123] = useState(featureimg)
  // console.log('imgfeatureimg123', featureimg123)
  return (
    <>
      {/* 食譜照片 */}
      <div className="fimg-title-img">
        {/* 大圖 */}
        <figure className="fimg-big-img">
          <img className="f-cover-fit" src={food} alt="" />
        </figure>
        {/* 很多縮圖 */}
        <div className="fimg-small-img">
          {props.featureimg.map((v, i) => {
            return (
              <a href="#/">
                <img
                  className="fimg-img-size"
                  src={`http://localhost:3001/feature/featurefood/${[v]}`}
                  alt=""
                />
              </a>
            )
          })}
          <button className="fimg-btn-fontawesome">
            <FontAwesomeIcon
              className="fcolor-grey-800"
              icon={['fas', 'chevron-right']}
              fixedWidth
            />
          </button>
        </div>
      </div>
    </>
  )
}

export default FeatureContentImg
