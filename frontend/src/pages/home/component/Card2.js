import React from 'react'
import food from '../../../images/1.jpg'

function Card2() {
  return (
    <>
      <div className="p2-bottom-card">
        <figure>
          <img className="home-cover-fit" src={food} alt="" />
        </figure>
        <div className="p2-bottom-text">
          <div className="p2-bottom-title font-400L">三杯蒟蒻杏鮑菇</div>
          <div className="p2-bottom-subtitle font-400S">
            <i className="fas fa-bookmark me-2 font-400L"></i>
            <span>12345</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Card2
