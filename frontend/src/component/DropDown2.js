import React, { useState } from 'react'
import '../style/dropdown.css'

function DropDown2(props) {
  const [isDropDown, setIsDropDown] = useState(false)
  const { itemList, sortBy, setSortBy } = props

  return (
    <>
      <div className="col-12 col-md-3">
        <div className="melees-dropdown">
          <div
            className={
              'melees-dropdown-selection ' + (isDropDown ? 'visible' : '')
            }
            onClick={(e) => {
              setIsDropDown(!isDropDown)
            }}
          >
            {sortBy !== null ? itemList[sortBy].name : '請輸入排序方式'}
          </div>
          {isDropDown ? (
            <div className="melees-items-holder font-400SL">
              {itemList.map((item, index) => (
                <div
                  key={index}
                  className="melees-dropdown-item"
                  onClick={(e) => {
                    setSortBy(index)
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
    </>
  )
}

export default DropDown2
