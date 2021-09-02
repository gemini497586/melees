import React, { useState } from 'react'
import '../../style/searchRecipe.css'
import MinorBar from './component/MinorBar'
import SearchCardRecipe from '../search/component/SearchCardFeature.js'
import SearchCardPrivate from '../search/component/SearchCardPrivate.js'
import CheckBox from '../search/component/CheckBox'
import DropDown2 from '../../component/DropDown2'

function MemberFeature() {
  const [checked, setChecked] = useState('')
  const checkList = ['全部', '精選食譜', '私藏食譜']
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
  ]
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
            <DropDown2 itemList={itemList} />
          </div>

          <div className="member-box-bottom">
            <div className="row">
              <SearchCardRecipe />
              <SearchCardPrivate />
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
