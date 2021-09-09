import React, { useState } from 'react'
import PrivateRecipeHeading from './component/PrivateRecipeHeading'
function PrivateRecipeUpload(props) {
  const title = ['新增']
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

export default PrivateRecipeUpload
