import React from 'react'
import '../../../style/privateRecipeHeading.css'

function PrivateRecipeHeading(props) {
  const { title } = props
  return (
    <>
      <div className="PrivateRecipeHeading">
        <div class="PrivateRecipeHeading-box">
          <h3>{title}</h3>
          <div class="PrivateRecipeHeading-color"></div>
        </div>
      </div>
    </>
  )
}

export default PrivateRecipeHeading
