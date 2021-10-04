import React, { useEffect } from 'react'
import '../../../style/paging.css'
import useCart from '../../../utils/useCart'

function Paging(props) {
  const { pageArray, setPageArray } = useCart()
  const { product, setCurrentPage, perPage } = props

  let paging = Math.ceil(product.length / perPage)

  useEffect(() => {
    let newPageArr = []
    for (let i = 1; i < paging + 1; i++) {
      newPageArr.push(i)
    }
    setPageArray(newPageArr)
  }, [product])

  const handlePage = (e) => {
    setCurrentPage(e.target.innerHTML)
    e.target.classList.add('active')
  }

  return (
    <div className="paging">
      {pageArray === null ? (
        <></>
      ) : (
        pageArray.map((v) => {
          return (
            <button
              className="btn paging-btn"
              onClick={(e) => {
                handlePage(e)
              }}
            >
              {v}
            </button>
          )
        })
      )}
    </div>
  )
}

export default Paging
