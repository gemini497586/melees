import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { API_URL } from '../../../utils/config'
import useCart from '../../../utils/useCart'

function SearchCardShop(props) {
  const { marketList } = props
  const { addCart } = useCart()
  let category = { 1: '食材', 2: '鍋具', 3: '調味料' }

  // 把介紹拆開來
  const getSpecs = (value) => {
    value = value.split('\n')
    let specs = []
    for (let i = 0; i <= 2; i++) {
      specs.push(<li className="font-400S">{value[i]}</li>)
    }
    return specs
  }

  return (
    <>
      {marketList.map((v, i) => {
        return (
          <div className="s-market-card" key={v.id}>
            <div className="s-market-info">
              <div className="s-market-image">
                <img
                  className="b-cover-fit"
                  src={`${API_URL}/market/${v.image}`}
                  alt={v.name}
                />
              </div>
              <div className="s-market-intro">
                <div className="s-market-text">
                  <h6 className="s-market-name">{v.name}</h6>
                  <ul className="list-unstyled font-400L">
                    {getSpecs(v.specs)}
                  </ul>
                </div>
                <div className="s-market-price font-400L">${v.price}</div>
              </div>
            </div>
            <div className="s-market-add">
              <button
                className="font-700M"
                onClick={() => {
                  addCart({
                    id: v.id,
                    name: v.name,
                    amount: 1,
                    price: v.price,
                    category: category[v.category],
                    specs: v.specs,
                    img: v.image,
                  })
                }}
              >
                <FontAwesomeIcon icon="cart-plus" className="me-2" />
                加入購物車
              </button>
            </div>
            <div className="s-market-add">
              <Link to={`/market/product/${v.id}`}>
                <button className="font-700M">
                  <FontAwesomeIcon icon="eye" className="me-2" />
                  看更多
                </button>
              </Link>
            </div>
          </div>
        )
      })}
    </>
  )
}

export default SearchCardShop
