import React, { useEffect, useState } from 'react'
import '../../../style/featureContentImg.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons/'
import ItemsCarousel from 'react-items-carousel'

function FeatureContentImg(props) {
  const { featureimg } = props

  // 切換大圖使用
  const [largeimg, setLargeimg] = useState('')

  useEffect(() => {
    setLargeimg(`http://localhost:3001/feature/featurefood/${featureimg[0]}`)
  }, [featureimg])

  // 縮圖使用
  const smallimg = (e) => {
    setLargeimg(e.target.src)
  }

  // 套件的控制項
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 40

  return (
    <>
      {/* 食譜照片 */}
      <div className="fimg-title-img">
        {/* 大圖 */}
        <figure className="fimg-big-img">
          <img className="fimg-big-cover-fit" src={largeimg} alt="" />
        </figure>
        <div className="d-flex align-items-center">
          {/* 很多縮圖 */}
          <div className="fimg-small-img">
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={5}
              gutter={10}
              leftChevron={
                <FontAwesomeIcon
                  icon="chevron-left"
                  className="b-page2-chevron"
                />
              }
              rightChevron={
                <FontAwesomeIcon
                  icon="chevron-right"
                  className="b-page2-chevron"
                />
              }
              outsideChevron
              chevronWidth={chevronWidth}
            >
              {featureimg.map((v, i) => {
                return (
                  // 當onClick時呼叫函式，傳值進去函式裡
                  <figure className="fimg-img-size">
                    <img
                      onClick={(e) => {
                        smallimg(e)
                      }}
                      className="fcover-fit"
                      src={`http://localhost:3001/feature/featurefood/${[v]}`}
                      alt=""
                    />
                  </figure>
                )
              })}
            </ItemsCarousel>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureContentImg
