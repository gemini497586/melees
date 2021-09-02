import React from 'react'
import '../style/heartViewNum.css'
import '../style/featureComponent.css'

function HeartViewNum() {
  return (
    <>
      <div className="hvn-size fcolor-grey-800">
        <div className="hvn-flex">
          <div className="hvn-icon-flex">
            <span>
              <i className="fas fa-heart fa-fw ficon-size me-2"></i>
            </span>
            <span className="font-400S">30322</span>
          </div>
          <div className="fline-g500"></div>
          <div className="hvn-icon-flex">
            <span>
              <i className="fas fa-eye fa-fw ficon-size me-2"></i>
            </span>
            <span className="font-400S">30322</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default HeartViewNum
