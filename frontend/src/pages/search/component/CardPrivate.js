import React from 'react'
import Recipe02 from '../../../images/recipe_02.jpg'

function CardPrivate() {
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
            <div className="s-recipe-count-top">
              <a>
                <i class="fas fa-heart"></i>
                <span>10000</span>
              </a>
              <span className="s-recipe-line"></span>
              <a>
                <i className="fas fa-eye"></i>
                <span>10000</span>
              </a>
            </div>
            <div className="s-recipe-count-user">
              <div className="s-recipe-count-circle">
                <img className="cover-fit" src={Recipe02} alt=""></img>
              </div>
              <p className="font-400SS">小深藍</p>
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

export default CardPrivate
