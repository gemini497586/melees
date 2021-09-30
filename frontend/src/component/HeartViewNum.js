import React from 'react'
import '../style/heartViewNum.css'
import '../style/featureComponent.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './FontawsomeIcons'

function HeartViewNum(props) {
  const { viewqty, likeqty } = props
  return (
    <>
      <div className="hvn-size fcolor-grey-800">
        <div className="hvn-flex">
          <div className="hvn-icon-flex">
            <span>
              <FontAwesomeIcon
                className="ficon-size me-2"
                icon={['fas', 'heart']}
                fixedWidth
              />
            </span>
            <span className="font-400S">{likeqty}</span>
          </div>
          <div className="fline-g500"></div>
          <div className="hvn-icon-flex">
            <span>
              <FontAwesomeIcon
                className="ficon-size me-2"
                icon={['fas', 'eye']}
                fixedWidth
              />
            </span>
            <span className="font-400S">{viewqty}</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeartViewNum
