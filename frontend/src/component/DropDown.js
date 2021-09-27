import React, { useState } from 'react'
import '../style/dropdown.css'

function DropDown(props) {
  const [isDropDown, setIsDropDown] = useState(false)
  // const [selectIndex, setSelectIndex] = useState(null)
  const { sortList, sortBy, setSortBy } = props

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
            {sortBy !== null ? sortList[sortBy].name : '請輸入排序方式'}
          </div>
          {isDropDown ? (
            <div className="melees-items-holder font-400SL">
              {sortList.map((item, index) => (
                <div
                  key={item.value}
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

export default DropDown
