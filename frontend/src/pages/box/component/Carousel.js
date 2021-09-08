import React, { useState } from 'react'
import ItemsCarousel from 'react-items-carousel'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'

function Carousel(props) {
  const { data, handleCheck, bento } = props

  // 套件的控制項
  const [activeItemIndex, setActiveItemIndex] = useState(0)
  const chevronWidth = 20
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
          {data.map((v, i) => {
            return (
              <div className="b-page2-slider">
                <div className="font-400M b-page2-slider-text">{v.name}</div>
                {/* //用checkbox */}
                {/* <label htmlFor={v.id}>
                  <img
                    src={`http://localhost:3000/images/${v.image}`}
                    alt={v.name}
                    className="b-contain-fit"
                  />
                </label>
                <input
                  key={v.id}
                  id={v.id}
                  type="checkbox"
                  value={v.name}
                  // value={`${v.name}, ${v.cal}`}
                  checked={bento.includes(v.name)}
                  onChange={handleCheck}
                /> */}

                <div
                  className="b-page2-slider-image"
                  onClick={() => {
                    handleCheck(v)
                  }}
                >
                  <img
                    src={`http://localhost:3000/images/${v.image}`}
                    alt={v.name}
                    className="b-contain-fit"
                  />
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
