import React, { useState, useEffect } from 'react'
import '../style/recipeStep.css'

function RecipeStep(props) {
  const { RecipeStepTest } = props
  const [stepList, setStepList] = useState([])
  useEffect(() => {
    setStepList(RecipeStepTest)
    console.log(stepList)
  }, [])
  return (
    <>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            {stepList.map((value, index) => {
              return (
                <>
                  <div className="d-flex recipeStep">
                    <span className="font-700M recipeStep-num">
                      {index + 1}.
                    </span>
                    <span className="font-400L recipeStep-content">
                      {value.step}
                    </span>
                  </div>
                  <hr className="recipeStep-divider w-100" />
                </>
              )
            })}
          </div>
        </div>
      </div>
    </>
  )
}

export default RecipeStep
