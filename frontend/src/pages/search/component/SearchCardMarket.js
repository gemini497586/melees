import React from 'react'
import Product01 from '../../../images/product_01.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'

function SearchCardShop(props) {
  const { marketList, counts, setCounts } = props

  return (
    <>
      {marketList.map((v, i) => {
        return (
          <div className="s-market-card">
            <div className="d-flex justify-content-around align-items-center">
              <figure className="s-market-image">
                <img className="b-cover-fit" src={Product01} alt="Product01" />
              </figure>
              <div className="s-market-text">
                <h6 className="s-market-title">{v.name}</h6>
                <ul className="list-unstyled font-400L">
                  {/* <li className="font-400L"></li> */}
                  <li>重量：100g±5%</li>
                  <li>原產地：美國</li>
                  <li>保存方式：請置於冷凍-18℃保存</li>
                </ul>
              </div>
              <div className="s-market-price font-400L">${v.price}</div>
              <div className="s-market-count font-700L">
                <button
                  className="s-market-btn"
                  onClick={() => {
                    const newCounts = counts - 1 < 1 ? 1 : counts - 1
                    setCounts(newCounts)
                  }}
                >
                  <FontAwesomeIcon icon="minus" className="" />
                </button>
                <span className="s-market-num">{counts}</span>
                <button
                  className="s-market-btn"
                  onClick={() => {
                    setCounts(counts + 1)
                  }}
                >
                  <FontAwesomeIcon icon="plus" className="" />
                </button>
              </div>
              <div>
                <button className="s-market-add font-700M">
                  <FontAwesomeIcon icon="shopping-cart" className="me-2" />
                  加入購物車
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
