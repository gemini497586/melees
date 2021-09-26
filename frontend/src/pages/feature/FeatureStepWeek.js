import React, { useState } from 'react'
import '../../style/featureStepWeek.css'
import '../../style/featureComponent.css'
import FeatureStep from './FeatureStep'
import MinorBar from './component/MinorBar'
import { Link } from 'react-router-dom'
import FeatureWeek from './component/FeatureWeek'
import { useParams } from 'react-router'

function FeatureStepWeek(props) {
  // 網址後面抓到不同變數導入
  const { listId } = useParams()
  // 查詢 typeid 發出什麼訊息
  console.log('listId', listId)

  return (
    <>
      <div className="page-group">
        {/* minorbar */}
        <MinorBar />
        <div className="ftop-mt40">
          <div className="container">
            {/* 日期選擇 */}
            <div className="fsw-btn-group">
              <FeatureWeek />
            </div>
            {/* 一週食材準備 */}
            <div className="fcard-mb65">
              <div className="font-700L fsw-preptitle">一週準備食材</div>
              <div className="fsw-prepfoodgroup">
                <div className="fsw-prepfood">
                  <div className="font-400M">透抽</div>
                  <div className="font-400M">1隻</div>
                </div>
                <div className="fsw-prepfood">
                  <div className="font-400M">透抽</div>
                  <div className="font-400M">1隻</div>
                </div>
                <div className="fsw-prepfood">
                  <div className="font-400M">透抽</div>
                  <div className="font-400M">1隻</div>
                </div>
                <div className="fsw-prepfood">
                  <div className="font-400M">透抽</div>
                  <div className="font-400M">1隻</div>
                </div>
                <div className="fsw-prepfood">
                  <div className="font-400M">透抽</div>
                  <div className="font-400M">1隻</div>
                </div>
              </div>
            </div>
            {/* FeatureStep */}
            <div>
              <FeatureStep listId={listId} />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default FeatureStepWeek
