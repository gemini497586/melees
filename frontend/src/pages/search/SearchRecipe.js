import React, { useState } from 'react'
import '../../style/searchRecipe.css'
import SearchCardFeature from './component/SearchCardFeature.js'
import SearchCardPrivate from './component/SearchCardPrivate.js'
import CheckBox from './component/CheckBox'

function SearchRecipe() {
  const [checked, setChecked] = useState('')

  const checkList = ['全部', '精選食譜', '私藏食譜']

  // const orderByList = [
  //   '時間由新至舊',
  //   '時間由舊至新',
  //   '按讚數由多至少',
  //   '按讚數由少至多',
  //   '瀏覽數由多至少',
  //   '瀏覽數由少至多',
  // ]
  return (
    <>
      <section>
        <div className="container">
          <div className="s-recipe-top">
            <div className="col-6">
              <h4>
                關於 <span>000</span> 的食譜共有 <span>00</span> 筆
              </h4>
            </div>
            <div className="d-flex justify-content-between align-items-center">
              <div className="col-4 d-flex">
                {checkList.map((v, i) => {
                  return (
                    <CheckBox
                      key={i}
                      name={'all'}
                      value={v}
                      checked={checked}
                      setChecked={setChecked}
                    />
                  )
                })}
              </div>

              <div className="col-3">
                <select className="form-select font-400SL" value="">
                  <option value="1">時間由新至舊</option>
                  <option value="2">時間由舊至新</option>
                  <option value="3">按讚數由多至少</option>
                  <option value="4">按讚數由少至多</option>
                  <option value="5">瀏覽數由多至少</option>
                  <option value="6">瀏覽數由少至多</option>
                </select>
              </div>
            </div>
          </div>
          <div className="s-recipe-bottom">
            <SearchCardFeature />
            <SearchCardPrivate />
            <SearchCardFeature />
            <SearchCardFeature />
            <SearchCardFeature />
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchRecipe
