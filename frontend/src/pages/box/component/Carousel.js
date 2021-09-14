import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { API_URL } from '../../../utils/config'

function Carousel(props) {
  const { main, data, subData, handleCheck } = props

  // 套件的控制項
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 80
  return (
    <>
      {main ? (
        <div className="b-page2-slider">
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
            {data.map((v, i) => {
              return (
                <div className="b-page2-slider">
                  <div className="font-400M b-page2-slider-text">{v.name}</div>
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
              )
            })}
          </ItemsCarousel>
        </div>
      ) : (
        <div className="b-page2-slider">
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
            {subData.map((v, i) => {
              return (
                <div className="b-page2-slider">
                  <div className="font-400M b-page2-slider-text">{v.name}</div>
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
              )
            })}
          </ItemsCarousel>
        </div>
      )}
    </>
  )
}

export default Carousel
