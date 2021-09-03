import React from 'react'
import Recipe01 from '../../../images/recipe_01.jpg'
import Ig from '../../../component/Ig'
import HeartViewNum from '../../../component/HeartViewNum'

function SearchCardFeature(props) {
  const { featureList } = props
  return (
    <>
      <div className="s-recipe-card">
        <div className="d-flex justify-content-around align-items-center">
          <figure className="s-recipe-image">
            <img className="cover-fit" src={Recipe01} alt="Recipe01" />
          </figure>
          <div className="s-recipe-classify font-400SL">
            <i className="fas fa-bookmark me-2 font-400L"></i>精選食譜
          </div>
          <div className="s-recipe-text">
            <ul className="list-unstyled">
              <li className="s-recipe-subtitle font-400S">健康長肉肉</li>
              <li className="s-recipe-title font-700L ">
                三杯雞三杯雞三杯雞三杯雞
              </li>
            </ul>
          </div>
          <div className="s-recipe-count font-400M">
            <HeartViewNum />
            <Ig />
          </div>
          <div className="s-recipe-add">
            <button className="s-recipe-btn font-700M">
              <i className="fas fa-eye me-2"></i>查看食譜
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default SearchCardFeature
