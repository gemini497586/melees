import React from 'react'
import '../../style/featureIndex.css'
import FeatureCards from './component/FeatureCards'

function FeatureIndex() {
  return (
    <>
      <div className="findex-list d-flex row align-items-start justify-content-between">
        <FeatureCards />
        <FeatureCards />
        <FeatureCards />
        <FeatureCards />
        <FeatureCards />
        <FeatureCards />
      </div>
    </>
  )
}

export default FeatureIndex
