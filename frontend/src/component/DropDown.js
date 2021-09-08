import React, { useState } from 'react'
import '../style/dropdown.css'

function DropDown() {
  const [isDropDown, setIsDropDown] = useState(false)

  const [itemList, setItemList] = useState([
    {
      name: '時間由新至舊',
      value: '1',
    },
    {
      name: '時間由舊至新',
      value: '2',
    },
    {
      name: '按讚數由多至少',
      value: '3',
    },
    {
      name: '按讚數由少至多',
      value: '4',
    },
    {
      name: '瀏覽數由多至少',
      value: '5',
    },
    {
      name: '瀏覽數由少至多',
      value: '6',
    },
    {
      name: '評論數由多至少',
      value: '7',
    },
    {
      name: '評論數由少至多',
      value: '8',
    },
  ])

  const [selectIndex, setSelectIndex] = useState(null)
  return (
    <>
      <div className="container">
        <div className="row justify-content-end">
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
                {selectIndex !== null
                  ? itemList[selectIndex].name
                  : '請輸入排序方式'}
              </div>
              {isDropDown ? (
                <div className="melees-items-holder font-400SL">
                  {itemList.map((item, index) => (
                    <div
                      key={item.value}
                      className="melees-dropdown-item"
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
      </div>
    </>
  )
}

export default DropDown
