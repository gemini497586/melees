import React, { useState } from 'react'
import '../../style/sortingBar.css'

function SortingBar() {
  const [isDropDown, setIsDropDown] = useState(false)

  const [itemList, setItemList] = useState([
    {
      name: '價格由低至高',
      value: '1',
    },
    {
      name: '價格由高至低',
      value: '2',
    },
    {
      name: '時間由新至舊',
      value: '3',
    },
    {
      name: '時間由舊至新',
      value: '4',
    },
  ])

  const [selectIndex, setSelectIndex] = useState(null)
  return (
    <>
      <div className="row justify-content-end">
        <div className="col-12 col-md-3">
          <div className="market-dropdown">
            <div
              className="market-dropdown-selection"
              onClick={(e) => {
                setIsDropDown(!isDropDown)
              }}
            >
              {selectIndex !== null
                ? itemList[selectIndex].name
                : '請輸入排序方式'}
            </div>
            {isDropDown ? (
              <div className="market-items-holder font-400SL">
                {itemList.map((item, index) => (
                  <div
                    key={item.value}
                    className="market-dropdown-item"
                    onClick={(e) => {
                      setSelectIndex(index)
                      setIsDropDown(false)
                    }}
                  >
                    {item.name}
                  </div>
                ))}
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
    </>
  )
}

export default SortingBar
