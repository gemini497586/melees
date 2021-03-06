import React from 'react'
import { Link } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../../component/FontawsomeIcons'
import { API_URL, P_CATEGORY } from '../../../utils/config'
import useCart from '../../../utils/useCart'

function MemberSaveProdcutCard(props) {
  const { saveList, productList, currentPage, perPage } = props
  const { addCart } = useCart()
  const lastNumber = currentPage * perPage
  const firstNumber = lastNumber - perPage
  const currentNumber = saveList.slice(firstNumber, lastNumber)
  return (
    <>
      {currentNumber.map((v, i) => {
        return (
          <div className="product-card col-6" key={i}>
            <Link to={`/market/product/${v.product_id}`}>
              <div className="product-img">
                <img
                  src={`${API_URL}/market/${
                    productList && productList[v.product_id].image
                  }`}
                  alt={productList && productList[v.product_id].name}
                  className="b-cover-fit"
                />
                <FontAwesomeIcon
                  icon="bookmark"
                  className="bookmark"
                  size="2x"
                />
              </div>
              <p className="font-700S product-category">
                {productList && P_CATEGORY[productList[v.product_id].category]}
              </p>
              <h6 className="product-name">
                {productList && productList[v.product_id].name}
              </h6>
              <p className="product-price">
                <FontAwesomeIcon icon="dollar-sign" />
                {productList && productList[v.product_id].price}
              </p>
            </Link>
            <button
              className="btn font-700M product-add-to-cart-btn"
              onClick={() => {
                addCart({
                  id: productList[v.product_id].id,
                  name: productList[v.product_id].name,
                  amount: 1,
                  price: productList[v.product_id].price,
                  category: P_CATEGORY[v.category],
                  specs: productList[v.product_id].specs,
                  img: productList[v.product_id].image,
                })
              }}
            >
              <FontAwesomeIcon icon="cart-plus" className="cart-plus" />
              ???????????????
            </button>
          </div>
        )
      })}
    </>
  )
}

export default MemberSaveProdcutCard
