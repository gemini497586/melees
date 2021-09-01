import React, { useState } from 'react'
import '../../style/searchMarket.css'
import CardMarket from './component/CardMarket'

function SearchMarket() {
  const [orderby, setOderby] = useState('')
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
              <div className="col-3">
                <select
                  className="form-select"
                  value={orderby}
                  onChange={(e) => {
                    setOderby(e.target.value)
                  }}
                >
                  請選排序方式
                  <option value="1">時間由新至舊</option>
                  <option value="2">時間由舊至新</option>
                  <option value="3">瀏覽數由多至少</option>
                  <option value="4">瀏覽數由少至多</option>
                </select>
              </div>
            </div>
          </div>
          <div className="s-market-bottom">
            <CardMarket />
            <CardMarket />
            <CardMarket />
            <CardMarket />
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchMarket
