import React, { useEffect } from 'react'
import '../../../style/paging.css'
import useCart from '../../../utils/useCart'

function Paging(props) {
  const { pageArray, setPageArray } = useCart()
  // const [currentPage, setCurrentPage] = useState(1)
  // const [perPage, setPerPage] = useState(10)
  const { product, setCurrentPage } = props

  let paging = Math.ceil(product.length / 10)

  useEffect(() => {
    let newPageArr = []
    for (let i = 1; i < paging + 1; i++) {
      newPageArr.push(i)
    }
    setPageArray(newPageArr)
  }, [product])

  // const lastNumber = currentPage * perPage
  // const firstNumber = lastNumber - perPage
  // const currentNumber = product.slice(firstNumber, lastNumber)
  // console.log(currentNumber)

  const handlePage = (e) => {
    setCurrentPage(e.target.innerHTML)
    e.target.classList.add('active')
  }

  return (
    <div className="paging">
      {typeof pageArray === 'string' ? (
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
