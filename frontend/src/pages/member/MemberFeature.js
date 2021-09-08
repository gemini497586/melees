import React, { useState } from 'react'
import '../../style/searchRecipe.css'
import MinorBar from './component/MinorBar'
import SearchCardFeature from '../search/component/SearchCardFeature.js'
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
      classify: '私藏食譜',
      image: '',
      date: '2021/09/03',
      name: '無水番茄牛肋無水番茄牛肋無水番茄牛肋',
      auth: '小深藍',
      like: 123,
      view: 222,
    },
    {
      classify: '私藏食譜',
      image: '',
      date: '2021/09/93',
      name: '無水番茄牛肋',
      auth: '小深藍小深藍',
      like: 20000,
      view: 2000000,
    },
  ]
  return (
    <>
      <div className="page-group">
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
                <SearchCardFeature featureList={featureList} />
                <SearchCardPrivate privateList={privateList} />
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MemberFeature
