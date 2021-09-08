import React from 'react'
import '../../style/global.css'
import MinorBar from './component/MinorBar'

function MyRecipe() {
  return (
    <>
      <div className="page-group">
        <MinorBar />
        <div className="container">
          <div className="row">
            <div className="col">
              <h1>
                QQ RUBY <br />
                我太廢了還沒做出來BY冠霖
              </h1>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MyRecipe
