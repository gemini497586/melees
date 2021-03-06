import React, { useState } from 'react'
import '../../style/sortingBar.css'
import useCart from '../../utils/useCart'

function SortingBar() {
  const [isDropDown, setIsDropDown] = useState(false)
  const { selectIndex, setSelectIndex } = useCart()

  const [itemList, setItemList] = useState([
    '時間由舊至新',
    '時間由新至舊',
    '價格由低至高',
    '價格由高至低',
  ])

  const handleSorting = (item) => {
    setSelectIndex(item)
    setIsDropDown(false)
  }

  return (
    <div className="row justify-content-end">
      <div className="col-12 col-md-3">
        <div className="market-dropdown">
          <div
            className="market-dropdown-selection"
            onClick={() => {
              setIsDropDown(!isDropDown)
            }}
          >
            {selectIndex}
          </div>
          {isDropDown ? (
            <div className="market-items-holder font-400SL">
              {itemList.map((item, index) => (
                <div
                  key={index}
                  className="market-dropdown-item"
                  onClick={() => {
                    handleSorting(item)
                  }}
                >
                  {item}
                </div>
              ))}
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  )
}

export default SortingBar
