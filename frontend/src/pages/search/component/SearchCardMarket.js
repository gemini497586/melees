import React from 'react'
import Product01 from '../../../images/product_01.jpg'

function SearchCardShop() {
  return (
    <>
      <div className="s-market-card">
        <div className="d-flex justify-content-around align-items-center">
          <figure className="s-market-image">
            <img className="cover-fit" src={Product01} alt="Product01" />
          </figure>
          <div className="s-market-text">
            <h6 className="s-market-title">美國Choice嫩肩里肌肉片</h6>
            <ul className="list-unstyled">
              <li>重量：100g±5%</li>
              <li>原產地：美國</li>
              <li>保存方式：請置於冷凍-18℃保存</li>
            </ul>
          </div>
          <div className="s-market-price font-400L">$310</div>
          <div className="s-market-count font-700L">
            <a href="/">
              <i className="fas fa-minus"></i>
            </a>
            <span>10</span>
            <a href="/">
              <i className="fas fa-plus"></i>
            </a>
          </div>
          <div className="s-market-add">
            <button className="s-market-btn font-700M">
              <i className="fas fa-shopping-cart"></i>加入購物車
            </button>
          </div>
        </div>
        <hr />
      </div>
    </>
  )
}

export default SearchCardShop
