import React, { useState } from 'react'
import '../../style/searchMarket.css'
import SearchCardMarket from './component/SearchCardMarket'
import DropDown2 from '../../component/DropDown2'

function SearchMarket() {
  const itemList = [
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
      name: '瀏覽數由少至多',
      value: '4',
    },
  ]
  return (
    <>
      <section>
        <div className="container">
          <div className="s-market-top">
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-6">
                <h4>
                  關於 <span>000</span> 的商品共有 <span>00</span> 筆
                </h4>
              </div>
              <DropDown2 itemList={itemList} />
            </div>
          </div>
          <div className="s-market-bottom">
            <SearchCardMarket />
            <SearchCardMarket />
            <SearchCardMarket />
            <SearchCardMarket />
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchMarket
