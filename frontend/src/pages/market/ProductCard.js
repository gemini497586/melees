import React, { useState, useEffect } from 'react'
import '../../style/productCard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import '../../component/FontawsomeIcons'
import productImg from '../../images/005.jpg'
import productData from '../../data/Products.json'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'
import ProductDetails from './ProductDetails'
import { useParams } from 'react-router'

function ProductCard() {
  const { id } = useParams()
  // console.log(productData.products)
  const [product, setProduct] = useState([])
  useEffect(() => {
    setProduct(productData.products)
  }, [])

  return (
    <Router>
      <div className="row">
        {product.map((e) => {
          return (
            <div className="product-card col-6">
              <Link to={`/market/product/${e.id}`}>
                <div className="product-img">
                  <img src={productImg} alt="好想吃威靈頓牛排" />
                  <FontAwesomeIcon icon="bookmark" className="bookmark" />
                </div>
                <p className="font-700S product-category">{e.category}</p>
                <h6 className="product-name">{e.name}</h6>
                <p className="product-price">
                  <FontAwesomeIcon icon="dollar-sign" />
                  {e.price}
                </p>
              </Link>
              <button className="btn font-700M product-add-to-cart-btn">
                <FontAwesomeIcon icon="cart-plus" className="cart-plus" />
                加入購物車
              </button>
            </div>
          )
        })}
      </div>

      <Switch>
        <Route path="/market/product/:id" component={ProductDetails}>
          <ProductDetails />
        </Route>
      </Switch>
    </Router>
  )
}

export default ProductCard
