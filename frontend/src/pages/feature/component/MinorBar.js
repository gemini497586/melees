import { Link } from 'react-router-dom'
import '../../../style/minorBar.css'
import React, { useEffect, useState } from 'react'
import FeatureType from '../../../data/FeatureType.json'

function MinorBar() {
  // 選單
  const [typedata, setTypedata] = useState([])

  useEffect(() => {
    // 利用查表法，撈出json裡面的type
    setTypedata(FeatureType.featureType)
  }, [])

  return (
    <>
      <ul className="minor-bar">
        {typedata.map((v) => {
          return (
            <li key={v.id}>
              <Link to={`/feature/index/${v.typeid}`}>{v.text}</Link>
            </li>
          )
        })}
      </ul>
      <div className="sub-line"></div>
    </>
  )
}

export default MinorBar
