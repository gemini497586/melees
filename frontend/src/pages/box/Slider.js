import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'

function Slider(props) {
  const { list, handle } = props
  const [current, setCurrent] = useState(1)
  const length = list.length
  // console.log('現在', current)

  let sliderWidth = 250
  let slideMove = 0 - current * sliderWidth
  const prevSlide = () => {
    document.getElementById('show').style.left = slideMove + 'px'
    setCurrent(current === 0 ? length - 1 : current - 1)
  }
  const nextSlide = () => {
    document.getElementById('show').style.left = slideMove + 'px'
    setCurrent(current === length - 1 ? 0 : current + 1)
  }

  // 點圖片後抓到
  // const handle = (v) => {
  //   // console.log(v.id, v.name, v.cal)
  //   let newTotal = 0
  //   newTotal += v.cal
  //   setTotal(total + newTotal)
  // }

  return (
    <>
      <div className="b-page2">
        <FontAwesomeIcon
          icon="chevron-left"
          className="chevron"
          onClick={prevSlide}
        />
        <div className="b-page2-menu">
          <div className="b-page2-slider">
            <ul className="list-unstyled b-page2-slider-images" id="show">
              {list.map((v, i) => {
                return (
                  <li key={v.id}>
                    <div className="font-400M b-page2-slider-text">
                      {v.name}
                    </div>
                    <div
                      className="b-page2-slider-food"
                      onClick={() => {
                        handle(v)
                      }}
                    >
                      <img
                        src={`http://localhost:3000/images/${v.image}`}
                        alt={v.name}
                        className="b-contain-fit"
                      />
                    </div>
                  </li>
                )
              })}
            </ul>
          </div>
        </div>
        <FontAwesomeIcon
          icon="chevron-right"
          className="chevron"
          onClick={nextSlide}
        />
      </div>
    </>
  )
}

export default withRouter(Slider)
