import React, { useState } from 'react'
import PrivateRecipeHeading from './component/PrivateRecipeHeading'
function PrivateRecipeEdit(props) {
  const title = ['編輯']
  return (
    <>
      <div className="page-group">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <PrivateRecipeHeading title={title[0]} />
              <input type="file" />
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default PrivateRecipeEdit
