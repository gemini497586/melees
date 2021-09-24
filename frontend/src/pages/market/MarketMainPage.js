import React, { useEffect, useState } from 'react'
import '../../style/marketMainPage.css'
import ProductCard from './ProductCard'

import SortingBar from './SortingBar'
import Paging from '../../component/Paging'
import MinorBar from './component/MinorBar'
import CardRecipe from '../../component/CardRecipe'
import { useParams } from 'react-router'
import useCart from '../../utils/useCart'

function MarketMainPage() {
  const { category } = useParams()
  const { productsAll } = useCart()
  const [pageArray, setPageArray] = useState([])
  let paging = Math.ceil(productsAll.length / 10)
  // console.log('main page', paging)

  useEffect(() => {
    let newPageArr = []
    for (let i = 1; i < paging + 1; i++) {
      console.log([...newPageArr, i])
      newPageArr.push(i)
    }
    setPageArray(newPageArr)
    console.log('pageArray', pageArray)
  }, [productsAll])

  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="container">
          <SortingBar />
          <div className="market-main-page">
            <ProductCard category={category} />
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
