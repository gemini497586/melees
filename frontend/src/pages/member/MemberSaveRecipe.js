import React, { useState } from 'react'
import '../../style/searchRecipe.css'
import CardRecipe from '../search/component/SearchCardFeature.js'
import CardPrivate from '../search/component/SearchCardPrivate.js'
import CheckBox from '../search/component/CheckBox'
import MinorBar from './component/MinorBar'
import Paging from '../../component/Paging'

function MemberSaveRecipe() {
  const [checked, setChecked] = useState('')

  const checkList = ['全部', '精選食譜', '私藏食譜']
  const pages = [1]

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
      <div className="page-group">
        <MinorBar />
        <section>
          <div className="container">
            <div className="s-recipe-top">
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
              <CardRecipe />
              <CardPrivate />
              <CardRecipe />
              <CardRecipe />
              <CardRecipe />
            </div>
            <div className="text-center">
              <Paging value={pages} />
            </div>
          </div>
        </section>
      </div>
    </>
  )
}

export default MemberSaveRecipe
