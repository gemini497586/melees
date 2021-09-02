import React, { useState } from 'react'
import '../../style/searchRecipe.css'
import MinorBar from './component/MinorBar'
import SearchCardRecipe from '../search/component/SearchCardFeature.js'
import SearchCardPrivate from '../search/component/SearchCardPrivate.js'
import CheckBox from '../search/component/CheckBox'

function MemberFeature() {
  const [checked, setChecked] = useState('')
  const checkList = ['全部', '精選食譜', '私藏食譜']

  return (
    <>
      <MinorBar />
      <section>
        <div className="container mt-2">
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
              <select className="form-select" value="">
                請選排序方式
                <option value="1">時間由新至舊</option>
                <option value="2">時間由舊至新</option>
                <option value="3">卡路里由多至少</option>
                <option value="4">卡路里由少至多</option>
              </select>
            </div>
          </div>

          <div className="member-box-bottom">
            <div className="row">
              <SearchCardRecipe />
              <SearchCardPrivate />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default MemberFeature
