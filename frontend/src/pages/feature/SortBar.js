import React, { useState } from 'react'
import '../../style/sortBar.css'

function SortBar(props) {
  const { sort, setSort } = props
  const [isDropDown, setIsDropDown] = useState(false)
  const [itemList, setItemList] = useState([
    '時間由新至舊',
    '時間由舊至新',
    '按讚數由多至少',
    '按讚數由少至多',
    '瀏覽數由多至少',
    '瀏覽數由少至多',
  ])
  return (
    <>
      <div className="col-12 col-md-3">
        <div className="melees-dropdown">
          <div
            className="melees-dropdown-selection"
            onClick={(e) => {
              setIsDropDown(!isDropDown)
            }}
          >
            {sort ? sort : '請輸入排序方式'}
          </div>
          {isDropDown ? (
            <div className="melees-items-holder font-400SL">
              {itemList.map((item, index) => (
                <div
                  key={index}
                  className="melees-dropdown-item"
                  onClick={() => {
                    setSort(item)
                    setIsDropDown(false)
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
    </>
  )
}

export default SortBar
