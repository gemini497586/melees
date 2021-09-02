import React from 'react'
import Recipe02 from '../../../images/recipe_02.jpg'
import HeartViewNum from '../../../component/HeartViewNum'
import Avatar from '../../../images/Avatar.png'

function SearchCardPrivate(props) {
  return (
    <>
      <div className="s-recipe-card">
        <div className="d-flex justify-content-around align-items-center">
          <figure className="s-recipe-image">
            <img className="cover-fit" src={Recipe02} alt="Recipe02" />
          </figure>
          <div className="s-recipe-classify font-400SL">
            <i className="fas fa-bookmark me-2 font-400L"></i>私藏食譜
          </div>
          <div className="s-recipe-text">
            <ul className="list-unstyled">
              <li className="s-recipe-date font-400S">2021/08/11</li>
              <li className="s-recipe-title font-700L ">無水番茄牛肋</li>
            </ul>
          </div>
          <div className="s-recipe-count font-400M">
            <HeartViewNum />
            <div className="s-recipe-count-user">
              <div className="s-recipe-count-circle">
                <img className="cover-fit" src={Avatar} alt=""></img>
              </div>
              <p className="font-400SL">小深藍</p>
            </div>
          </div>
          <div className="s-recipe-add">
            <button className="s-recipe-btn font-700M">
              <i class="fas fa-eye me-2"></i>查看食譜
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default SearchCardPrivate
