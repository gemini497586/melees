import React, { useState } from 'react'
import '../../style/searchRecipe.css'
import SearchCardFeature from './component/SearchCardFeature.js'
import SearchCardPrivate from './component/SearchCardPrivate.js'
import CheckBox from './component/CheckBox'
import DropDown2 from '../../component/DropDown2'

function SearchRecipe() {
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
  const featureList = [
    {
      classify: '精選食譜',
      image: '',
      type: '健康長肉肉',
      name: '三杯雞',
      auth: '便當調色盤 | Della & Joey',
      like: 123,
      view: 222,
    },
  ]
  const privateList = [
    {
      classify: '精選食譜',
      image: '',
      date: '2021/09/03',
      name: '無水番茄牛肋無水番茄牛肋無水番茄牛肋',
      auth: '小深藍',
      like: 123,
      view: 222,
    },
  ]
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
              <DropDown2 itemList={itemList} />
            </div>
          </div>
          <div className="s-recipe-bottom">
            <SearchCardFeature featureList={featureList} />
            <SearchCardPrivate privateList={privateList} />
            <SearchCardFeature />
          </div>
        </div>
      </section>
    </>
  )
}

export default SearchRecipe
