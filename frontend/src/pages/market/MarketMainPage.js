import React from 'react'
import '../../style/marketMainPage.css'
import ProductCard from './ProductCard'

import SortingBar from './SortingBar'
import Paging from '../../component/Paging'
import MinorBar from './component/MinorBar'
import CardRecipe from '../../component/CardRecipe'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom'

// import productData from '../../data/Products.json'
const pageArray = [1, 2, 3]

function MarketMainPage(props) {
  // console.log(props)
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="container">
          <SortingBar />
          <div className="market-main-page">
            <ProductCard />
          </div>
          {pageArray.map((v, i) => {
            return <Paging value={v} />
          })}
          <CardRecipe />
        </div>
      </div>
    </>
  )
}

export default MarketMainPage
