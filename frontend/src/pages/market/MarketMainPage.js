import React, { useEffect, useState } from 'react'
import '../../style/marketMainPage.css'
import ProductCard from './ProductCard'

import SortingBar from './SortingBar'
import Paging from './component/Paging'
import MinorBar from './component/MinorBar'
import CardRecipe from '../../component/CardRecipe'
import { useParams } from 'react-router'
import useCart from '../../utils/useCart'

function MarketMainPage() {
  const { category } = useParams()
  const [product, setProduct] = useState([])
  const [currentPage, setCurrentPage] = useState(1)

  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="container">
          <SortingBar />
          <div className="market-main-page">
            <ProductCard
              category={category}
              product={product}
              setProduct={setProduct}
              currentPage={currentPage}
              setCurrentPage={setCurrentPage}
            />
          </div>
          <Paging product={product} setCurrentPage={setCurrentPage} />
          <CardRecipe />
        </div>
      </div>
    </>
  )
}

export default MarketMainPage
