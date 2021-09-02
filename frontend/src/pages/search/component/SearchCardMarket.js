import React from 'react'
import Product01 from '../../../images/product_01.jpg'

function SearchCardShop(props) {
  const { marketList, counts, setCounts } = props

  return (
    <>
      {marketList.map((v, i) => {
        return (
          <div className="s-market-card">
            <div className="d-flex justify-content-around align-items-center">
              <figure className="s-market-image">
                <img className="cover-fit" src={Product01} alt="Product01" />
              </figure>
              <div className="s-market-text">
                <h6 className="s-market-title">{v.name}</h6>
                <ul className="list-unstyled">
                  <li>{v.intro}</li>
                  {/* <li>重量：100g±5%</li>
                  <li>原產地：美國</li>
                  <li>保存方式：請置於冷凍-18℃保存</li> */}
                </ul>
              </div>
              <div className="s-market-price font-400L">${v.price}</div>
              <div className="s-market-count font-700L">
                <a
                  href="#/"
                  onClick={() => {
                    const newCounts = counts - 1 < 1 ? 1 : counts - 1
                    setCounts(newCounts)
                  }}
                >
                  <i className="fas fa-minus"></i>
                </a>
                <span>{v.count}</span>
                <a
                  href="#/"
                  onClick={() => {
                    setCounts(counts + 1)
                  }}
                >
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
        )
      })}
    </>
  )
}

export default SearchCardShop
