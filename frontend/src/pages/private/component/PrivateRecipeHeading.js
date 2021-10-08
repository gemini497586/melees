import React from 'react'
import '../../../style/privateRecipeHeading.css'

function PrivateRecipeHeading(props) {
  const { title } = props
  return (
    <>
      <div className="PrivateRecipeHeading">
        <div className="PrivateRecipeHeading-box">
          <h3>{title}</h3>
          <div className="PrivateRecipeHeading-color"></div>
        </div>
      </div>
    </>
  )
}

export default PrivateRecipeHeading
