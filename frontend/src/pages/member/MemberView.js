import React, { useState, useEffect } from 'react'
import { API_URL } from '../../utils/config'
import MinorBar from './component/MinorBar'
import ViewCardPrivate from './component/ViewCardPrivate'
import ViewCardFeature from './component/ViewCardFeature'

import Axios from 'axios'
function MemberView() {
  const checkList = ['精選食譜', '私藏食譜']

  const [privateList, setPrivateList] = useState([])
  const [featureList, setFeatureList] = useState([])
  const [checked, setChecked] = useState('精選食譜')

  useEffect(() => {
    Axios.get(`${API_URL}/private/history`, {
      withCredentials: true,
    }).then((res) => {
      setPrivateList(res.data.private)
      setFeatureList(res.data.feature)
    })
  }, [])
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="container">
          <div className="s-recipe-top">
            <div className="col-12 s-recipe-check">
              {checkList.map((v, i) => {
                return (
                  <div className="s-radiobox">
                    <input
                      type="radio"
                      value={v}
                      id={v}
                      checked={checked === v}
                      onChange={(e) => {
                        setChecked(e.target.value)
                      }}
                    />
                    <label className="font-400S" htmlFor={v}>
                      {v}
                    </label>
                  </div>
                )
              })}
            </div>
          </div>
          {checked === '私藏食譜' ? (
            <ViewCardPrivate privateList={privateList} />
          ) : (
            <ViewCardFeature featureList={featureList} />
          )}
        </div>
      </div>
    </>
  )
}
export default MemberView
