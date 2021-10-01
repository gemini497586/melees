import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { API_URL } from '../../../utils/config'

function Carousel(props) {
  const { show, data, subData, handleCheck } = props
  // 判斷要顯示主食還是配菜
  const showData = show ? data : subData
  // 套件的控制項
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 80
  return (
    <>
      <div className="b-page2-slider">
        <ItemsCarousel
          requestToChangeActive={setActiveItemIndex}
          activeItemIndex={activeItemIndex}
          numberOfCards={5}
          gutter={10}
          leftChevron={
            <FontAwesomeIcon icon="chevron-left" className="b-page2-chevron" />
          }
          rightChevron={
            <FontAwesomeIcon icon="chevron-right" className="b-page2-chevron" />
          }
          outsideChevron
          chevronWidth={chevronWidth}
        >
          {showData.map((v) => {
            return (
              <div className="b-page2-slider" key={v.id}>
                <div className="b-page2-mask">
                  <div className="font-400M b-page2-slider-text">{v.name}</div>
                  <div className="b-page2-slider-cal">{v.cal}大卡</div>
                  <div
                    className="b-page2-slider-image"
                    onClick={() => {
                      handleCheck(v)
                    }}
                  >
                    <img
                      src={`${API_URL}/box/${v.image}`}
                      alt={v.name}
                      className="b-contain-fit"
                    />
                  </div>
                </div>
              </div>
            )
          })}
        </ItemsCarousel>
      </div>
    </>
  )
}

export default Carousel
